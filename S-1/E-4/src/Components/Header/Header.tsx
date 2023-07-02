import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../src/db/dummy_data.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Header.css'

// import required modules
import { Autoplay } from "swiper";

const Header = () => {
  const rendered = useRef(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantImage, setRestaurantImage] = useState("");
  const [restaurantRating, setRestaurantRating] = useState("");
  const [restaurantRatingVotes, setRestaurantRatingVotes] = useState("");
  const [restaurantRatingSubtext, setRestaurantRatingSubtext] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [cfo, setCfo] = useState("");
  const [cft, setCft] = useState("");

  useEffect(() => {
    if (!rendered.current) {
      console.log(data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]);

      setRestaurantName(
        data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]["name"]
      );

      setRestaurantImage(
        data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]["image"]["url"]
      );

      setRestaurantRating(
        data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]["rating"][
          "aggregate_rating"
        ]
      );

      setRestaurantRatingVotes(
        data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]["rating"]["votes"]
      );

      setRestaurantRatingSubtext(
        data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]["rating"][
          "subtext"
        ]
      );

      setRestaurantLocation(
        data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]["locality"][
          "address"
        ]
      );

      setCfo(
        data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]["cfo"]["text"]
      );

      setCft(
        data["sections"]["SECTION_SEARCH_RESULT"][0]["info"]["cft"]["text"]
      );
    }

    return () => {
      rendered.current = true;
    };
  }, []);

  return (
    <>
      <div className="bg-orange-500 flex justify-between">
        <div className="cursor-pointer pl-8 py-6 text-white font-medium text-2xl">
          Header
        </div>
        <div className="flex gap-8 pr-8 py-6 text-white font-medium text-lg">
          <span className="cursor-pointer">Home</span>
          <span className="text-2xl font-extralight">|</span>
          <span className="cursor-pointer">About</span>
          <span className="text-2xl font-extralight">|</span>
          <span className="cursor-pointer">Cart</span>
        </div>
      </div>
      <div className="bg-amber-100 w-[20rem] border-0 rounded-lg">
        <img
          src={restaurantImage}
          width={400}
          className="border-0 rounded-t-lg"
        />
        <h2 className="font-medium text-2xl px-4 pt-4 pb-2">
          {restaurantName}
        </h2>
        <p className="px-4 py-[6px]">
          {restaurantRating} ({restaurantRatingVotes} {restaurantRatingSubtext})
        </p>
        <p className="px-4 pt-[6px] pb-4">{restaurantLocation}</p>
        <div className="">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>{cfo}</SwiperSlide>
            <SwiperSlide>{cft}</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Header;
