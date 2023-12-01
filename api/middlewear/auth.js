// middleware/auth.js

import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";

export const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      return next(errorHandler(401, "Unauthorized - Missing Token"));
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return next(errorHandler(401, "Unauthorized - Invalid Token"));
    }

    // Attach the user to the request object for later use
    req.user = user;
    next();
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};
