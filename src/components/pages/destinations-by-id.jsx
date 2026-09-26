import React from "react";
import { useParams } from "react-router-dom";
import { DESTINATIONS } from "../../data/data";
import { Calendar, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

function DestinationById() {
  const { id } = useParams();
  const dest = DESTINATIONS.find((d) => d.id === id);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: dest.id }));
  };
  if (!dest) {
    return (
      <div className="container py-24 text-center">
        <p className="text-xl font-semibold">Destination not found</p>
      </div>
    );
  }

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
      <div className="w-full px-4">
        <img
          src={dest.image}
          alt={`${dest.name}, ${dest.country}`}
          className="relative z-20 aspect-video w-full h-[500px] object-cover rounded-2xl hover:scale-101 duration-170 hover:shadow-2xl"
        />
      </div>

      <div className="flex flex-col justify-center w-full mt-4 p-6 gap-3">
        <h1 id="title-section" className="text-xl font-extrabold">
          {dest.name}, {dest.country}
        </h1>

        <div id="rating-description-date" className="flex flex-col gap-4">
          <div id="rating" className="flex items-center gap-2">
            <Star className="text-yellow-500" />
            <p className="font-semibold">{dest.rating} rating</p>
          </div>

          <p id="description">{dest.description}</p>

          <div id="dates" className="flex justify-between">
            <span className="flex gap-2">
              <Calendar className="text-green-600" />
              <p className="font-bold">Depart Date: {dest.start}</p>
            </span>
            <span className="flex gap-2">
              <Calendar className="text-red-600" />
              <p className="font-bold">Arrival Date: {dest.end}</p>
            </span>
          </div>
        </div>

        <div id="price-btn" className="flex items-center justify-between mt-4">
          <p className="font-bold text-xl">Price : {dest.price} $</p>
          <Button
            className="px-14 py-6 text-md font-bold"
            onClick={() => dispatch(addToCart({ id: dest.id }))}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DestinationById;
