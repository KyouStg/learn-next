import React from "react";
import Image from "next/image";
import {getDetailArticle} from "@/blogApi";
import DeleteButton from "@/app/components/DeleteButton";

export default async function Article({ params }: {params: { id: string }}) {
  const detailArticle = await getDetailArticle(params.id);

  return (
      <div className="max-w-3xl mx-auto p-5">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
          alt=""
          width={1280}
          height={300}
        />
        <h1 className="text-4xl text-center my-10">{detailArticle.title}</h1>
        <div className="text-lg leading-relaxed text-justify">
          <p>{detailArticle.content}</p>
        </div>
        <div className="text-right mt-3">
          <DeleteButton id={detailArticle.id} />
        </div>
      </div>
  )
}
