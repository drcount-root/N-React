import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../src/db/dummy_data.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Header.css";
// import required modules
import { Autoplay } from "swiper";
interface resturantInterface {
  restaurantName: string;
  restaurantImage: string;
  restaurantRating: string;
  restaurantRatingVotes: string;
  restaurantRatingSubtext: string;
  restaurantLocation: string;
  cfo: string;
  cft: string;
}

const Header = () => {
  const rendered = useRef(false);

  const [restaurantObj, setRestaurantObj] = useState<resturantInterface>({
    restaurantName: "",
    restaurantImage: "",
    restaurantRating: "",
    restaurantRatingVotes: "",
    restaurantRatingSubtext: "",
    restaurantLocation: "",
    cfo: "",
    cft: "",
  });

  useEffect(() => {
    if (!rendered.current) {
      console.log(data["sections"]["SECTION_SEARCH_RESULT"]);

      data["sections"]["SECTION_SEARCH_RESULT"].forEach((restaurant, index) => {
        console.log(restaurant, index);
        setRestaurantObj({
          restaurantName: restaurant["info"]["name"],
          restaurantImage: restaurant["info"]["image"]["url"],
          restaurantRating: restaurant["info"]["rating"]["aggregate_rating"],
          restaurantRatingVotes: restaurant["info"]["rating"]["votes"],
          restaurantRatingSubtext: restaurant["info"]["rating"]["subtext"],
          restaurantLocation: restaurant["info"]["locality"]["address"],
          cfo: restaurant["info"]["cfo"]["text"],
          cft: restaurant["info"]["cft"]["text"],
        });
      });
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
          src={restaurantObj.restaurantImage}
          width={400}
          className="border-0 rounded-t-lg"
        />
        <h2 className="font-medium text-2xl px-4 pt-4 pb-2">
          {restaurantObj.restaurantName}
        </h2>
        <p className="px-4 py-[6px]">
          {restaurantObj.restaurantRating} (
          {restaurantObj.restaurantRatingVotes}{" "}
          {restaurantObj.restaurantRatingSubtext[0] +
            restaurantObj.restaurantRatingSubtext.slice(1).toLocaleLowerCase()}
          )
        </p>
        <p className="px-4 pt-[6px] pb-4">{restaurantObj.restaurantLocation}</p>
        <div>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>{restaurantObj.cfo}</SwiperSlide>
            <SwiperSlide>{restaurantObj.cft}</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Header;
