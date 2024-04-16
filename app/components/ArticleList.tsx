import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Article} from "@/types";
import ArticleCard from "@/app/components/ArticleCard";

type ArticleListProps = {
  articles: Article[];
}

export default function ArticleList({ articles }:ArticleListProps) {
  return (
      <div>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id}/>
        ))}
      </div>
  )
}
