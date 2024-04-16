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
    await deleteArticle(id);

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
