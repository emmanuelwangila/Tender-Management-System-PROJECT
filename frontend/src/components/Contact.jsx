import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [tender, setTender] = useState(null);
  const [message, setMessage] = useState("");
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchTender = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setTender(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTender();
  }, [listing.userRef]);
  return (
    <>
      {tender && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{tender.username}</span> for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="3"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <Link
            to={`mailto:${tender.email}?subject=Regarding ${listing.name} Tender &body=${message}`}
            className="bg-blue-500 text-white text-center p-3  rounded-lg hover:opacity-95"
          >
            Send Mail
          </Link>
        </div>
      )}
    </>
  );
}
