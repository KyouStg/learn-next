import {Article} from "@/types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, {cache: "no-store"}); //SSR

  if(!res.ok) throw Error("エラー！エラー！エラー！エラー！");

  await new Promise((resolve) => setTimeout(resolve, 500));

  return await res.json()
}
