import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl mb-8">Post Page</h1>
        <h2>
          <Link href="/" className="hover:underline underline-offset-4">
            Back to home
          </Link>
        </h2>
      </div>
    </>

  )
}
