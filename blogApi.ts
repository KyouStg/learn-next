import {Article} from "@/types";
import {notFound} from "next/navigation";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, {cache: "no-store"}); //SSR

  if(!res.ok) throw Error("エラー！エラー！エラー！エラー！");

  await new Promise((resolve) => setTimeout(resolve, 500));

  return await res.json()
}

export const getDetailArticle = async (id: string ): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 }
  }); //ISR

  if(res.status === 404) {
    notFound();
  }

  if(!res.ok) throw Error("エラー！エラー！エラー！エラー！");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await res.json()
}

export const createArticle = async (
  id: string,
  title: string,
  content: string
  ): Promise<Article> => {

  const currentDatetime = new Date().toISOString();

  const res = await fetch(`http://localhost:3001/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id, title, content, createdAt: currentDatetime }),
  });

  if(!res.ok) throw Error("エラー！エラー！エラー！エラー！");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await res.json()
}

export const deleteArticle = async (
  id: string,
): Promise<Article> => {

  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if(!res.ok) throw Error("エラー！エラー！エラー！エラー！");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await res.json()
}
