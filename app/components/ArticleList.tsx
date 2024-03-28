import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleList() {
  return (
      <div>
        <article className="flex flex-col shadow my-4">
          <Link href="#" className="hover:opacity-75">
            <Image
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
              alt=""
              width={1280}
              height={300}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</Link>
            <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">Next勉強中</Link>
            <p className="text-sm pb-3 text-slate-900">published on 2023/07/14</p>
            <Link href="#" className="pb-6 text-slate-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Atque doloremque fuga minus provident qui quod repudiandae.
              Alias commodi, doloribus eius esse,
              illo laboriosam nam nesciunt perspiciatis quam quas tempora vero.
            </Link>
            <Link href="#" className="uppercase text-pink-800 hover:text-black">続きを読む</Link>
          </div>
        </article>

        <article className="flex flex-col shadow my-4">
          <Link href="#" className="hover:opacity-75">
            <Image
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
              alt=""
              width={1280}
              height={300}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</Link>
            <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">Next勉強中</Link>
            <p className="text-sm pb-3 text-slate-900">published on 2023/07/14</p>
            <Link href="#" className="pb-6 text-slate-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Atque doloremque fuga minus provident qui quod repudiandae.
              Alias commodi, doloribus eius esse,
              illo laboriosam nam nesciunt perspiciatis quam quas tempora vero.
            </Link>
            <Link href="#" className="uppercase text-pink-800 hover:text-black">続きを読む</Link>
          </div>
        </article>
      </div>
  )
}
