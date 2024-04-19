import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Article} from "@/types";

type ArticleCardProps = {
  article: Article
}

export default function ArticleCard({article} : ArticleCardProps) {
  return (
    <article className="flex flex-col shadow my-4" key={article.id}>
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          alt=""
          width={1280}
          height={300}
        />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</Link>
        <Link href={`articles/${article.id}`} className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">{article.title}</Link>
        <p className="text-sm pb-3 text-slate-900">published on {new Date(article.createdAt).toLocaleString()}</p>
        <Link href={`articles/${article.id}`} className="pb-6 text-slate-900">
          {article.content.length > 70
            ? article.content.substring(0, 70) + "..."
            : article.content
          }
        </Link>
        <Link href={`articles/${article.id}`} className="uppercase text-pink-800 hover:text-black">続きを読む</Link>
      </div>
    </article>
  )
}
