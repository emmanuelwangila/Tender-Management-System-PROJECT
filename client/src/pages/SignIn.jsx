import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import { Icon } from "@iconify/react";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  let eyeicon = document.getElementById("eyeicon");
  let password = document.getElementById("password");

  // eyeicon.onclick = function () {
  //   if (password.type == "password") {
  //     password.type = "text";
  //   } else {
  //     password.type = "password";
  //   }
  // };
  const passwordVisibility = () => {
    if (password.type == "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/profile");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto bg-white  border border-gray-300 rounded-md  m-5 ">
      <h1 className="text-3xl text-center font-semibold font-mono my-7 text-blue-500">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg w-3/4 mx-auto"
          id="email"
          onChange={handleChange}
        />
        <div className="flex justify-evenly  gap-2 ">
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg w-3/4 mx-auto "
            id="password"
            onChange={handleChange}
          />
          {/* <Icon
            onClick={passwordVisibility}
            icon="basil:eye-closed-outline"
            color="gray"
            className="m-2 cursor-pointer "
            id="eyeicon"
          /> */}
        </div>

        <button
          disabled={loading}
          className="bg-blue-500 w-3/4 mx-auto text-white p-3 rounded-md hover:bg-blue-700 cursor-pointer hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {/* <div className="flex gap-2 mt-5">
        <Link to={"/forgotpassword"}>
          <span className="text-blue-700">Forgot password? </span>
        </Link>
      </div> */}
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
