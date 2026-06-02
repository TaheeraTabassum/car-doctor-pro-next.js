import Image from "next/image";
import React from "react";
import dbConnect from "../lib/dbConnect";

export default async function ServicesSection() {
const serviceCollection = await dbConnect("test-services");
const data = await serviceCollection.find({}).toArray()

  return (
    <div className=" grid sm:grid-cols-2 text-wrap gap-6 lg:grid-cols-3 justify-items-center m-22">
      {data.map((item) => (
        <div key={item._id} className="p-6">
          <Image
            alt="image note found"
            src={item.img}
            width={260}
            height={150}
          />
          <div className="mt-2">
            <h1>{item.title}</h1>
            <p className="font-semibold">price: {item.price} $ </p>
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}  
