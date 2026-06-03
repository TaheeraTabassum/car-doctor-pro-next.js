import React from 'react'
import dbConnect, {collectionNamesObj} from '../../../lib/dbConnect'
import { ObjectId } from 'mongodb';
import Image from 'next/image';
export default async function singleServicePage({params}) {
    const p= await params;
    const servicesCollection =await dbConnect(collectionNamesObj.servicesCollection);
    const data = await servicesCollection.findOne({_id: new ObjectId(p.id)});
  return (
    <div>
      {p.id}

      <section>
        <figure>
            <Image></Image>
        </figure>
      </section>
      
    </div>
  )
}
