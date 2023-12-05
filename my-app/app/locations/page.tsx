"use client";
import React from "react";
import LocationCard from "@/components/Locations/LocationCard";

const Locations = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen h-auto py-16 font-poppin animation_body">
      <div className="max-w-[300px] space-y-3 my-5">
        <p className="font-black text-5xl text-center">Start Here</p>
        <p className="text-2xl text-center">Choose your location</p>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-4 lg:gap-10">
          <LocationCard
            location="Woodlands"
            state="Singapore"
            rating={4.6}
            url="https://images.pexels.com/photos/4105120/pexels-photo-4105120.jpeg"
          />
          <LocationCard
            location="Toa Payoh"
            state="Singapore"
            rating={4.7}
            url="https://images.pexels.com/photos/9422491/pexels-photo-9422491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <LocationCard
            location="Bedok"
            state="Singapore"
            rating={4.7}
            url="https://images.pexels.com/photos/4969884/pexels-photo-4969884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <LocationCard
            location="Orchard"
            state="Singapore"
            rating={4.5}
            url="https://images.pexels.com/photos/11357851/pexels-photo-11357851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  );
};

export default Locations;
