import React from "react";
import Image from "next/image";

export default function Article({ params }: {params: { id: string }}) {
  return (
      <div className="max-w-3xl mx-auto p-5">
        <Image
          src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
          alt=""
          width={1280}
          height={300}
        />
        <h1 className="text-4xl text-center my-10">this is title</h1>
        <div className="text-lg leading-relaxed text-justify">
          <p>this is content</p>
        </div>
      </div>
  )
}
