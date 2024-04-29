"use client"
import React from "react";
import {deleteArticle} from "@/blogApi";
import {useRouter} from "next/navigation";

type DeleteButtonProps = {
  id:string
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();
  const handleDelete = async () => {
    //await deleteArticle(id);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/blog/${id}`, {
      method: "DELETE",
     });

    router.push("/");
    router.refresh();
  }

  return (
    <button
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer"
      onClick={handleDelete}
    >
      削除
    </button>
  )
}
