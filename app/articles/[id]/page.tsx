"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
//import {getDetailArticle} from "@/blogApi";
import DeleteButton from "@/app/components/DeleteButton";
import Link from "next/link";

export default async function Article({ params }: {params: { id: string }}) {
  //const detailArticle = await getDetailArticle(params.id);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [detailArticle, setDetailArticle] = useState<any>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`${API_URL}/api/${params.id}`, {
        method: "GET"
      });
      const data = await res.json();
      setDetailArticle(data);
    };

    fetchArticle();
  }, []);

  if (!detailArticle) {

    return <div>Loading...</div>;
  }



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
        <div className="mt-3 flex justify-end gap-10">
          <div>
            <Link
              type="button"
              className="bg-yellow-700 hover:bg-yellow-600 rounded-md py-2 px-5 inline cursor-pointer"
              href={`${API_URL}/articles/${params.id}/put`}>
              編集
            </Link>
          </div>
          <div>
            <DeleteButton id={detailArticle.id} />
          </div>
        </div>

      </div>
  )
}
