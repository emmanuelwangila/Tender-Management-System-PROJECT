import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";

import SwiperCore from "swiper";
import "swiper/css/bundle";

import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="flex bg-slate-100 flex-col gap-4 p-15 px-3 w-full mx-auto rounded-md ">
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started ...Tender
        </Link>
        <h1 className="uppercase text-blue-700 text-2xl flex justify-center">
          ADMIN DASHBOARD
        </h1>
      </div>

      {/* table */}
      <table className="max-w-6xl mx-auto p-3 w-full my-10 bg-gray-100">
        <thead>
          <tr>
            <th className="my-3 text-2xl font-semibold text-gray-900">
              Recent Tenders with Offers [{offerListings.length}]
            </th>
            <th className="my-3 text-2xl font-semibold text-gray-900">
              Recent Tenders for Construction [{rentListings.length}]
            </th>
            <th className="my-3 text-2xl font-semibold text-gray-900">
              Recent Tenders for Supply [{saleListings.length}]
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="my-3">
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?offer=true"}
                >
                  Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </td>
            <td>
              <div className="my-3">
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=rent"}
                >
                  Show more tenders for construction
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </td>
            <td>
              <div className="my-3">
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=sale"}
                >
                  Show more tenders for supply
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
