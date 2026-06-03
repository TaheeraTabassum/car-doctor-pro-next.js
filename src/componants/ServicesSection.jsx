import Image from "next/image";
import React from "react";
import { ArrowRight } from 'lucide-react';
import dbConnect, {collectionNamesObj} from "../lib/dbConnect";
import Link from "next/link";

export default async function ServicesSection() {
  const serviceCollection = await dbConnect(collectionNamesObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className=" grid sm:grid-cols-2 text-wrap gap-6 lg:grid-cols-3 justify-items-center m-22 md:m-32">
      {data.map((item) => (
        <div key={item._id} className="p-6 border border-amber-100 rounded-md ">
          <Image
            alt="image note found"
            src={item.img}
            width={260}
            height={150}
          />
         <div className="flex items-center justify-between">

           <div className="mt-2">
            <h1>{item.title}</h1>
            <p className="font-semibold text-orange-400">price: {item.price} $ </p>
           
          </div>
          <div>
             <Link  href={`services/${item._id}`}>
             <div className="hover:bg-gray-200 p-2 rounded-full  duration-500"><ArrowRight className="text-orange-400" />
             </div>
             </Link>
          </div>
         </div>
        </div>
      ))}
    </div>
  );
}
