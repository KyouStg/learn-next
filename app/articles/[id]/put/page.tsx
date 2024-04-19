"use client";
import React, {useState} from "react";
//import {createArticle} from "@/blogApi";
import {useRouter} from "next/navigation";

export default function PutBlogPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handlePut = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, title, content , createdAt: new Date().toISOString()})
    });

    await fetch(`${API_URL}/api/${params.id}`);
    setLoading(false);

    router.push(`${API_URL}`);
    router.refresh();

  }

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">更新</h2>

      <form className="bg-slate-200 p-6 rounded shadow-lg" onSubmit={handlePut}>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">タイトル</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
        </div>

        ${loading
        ?  <div className="w-8 h-8 border-t-4 border-orange-500 rounded-full animate-spin"></div>
        : <button type="submit" className={`py-2 px-4 border rounded-md bg-orange-300 hover:bg-orange-500`}>更新</button>
      }

      </form>
    </div>
  )
}
