import { mongoClient } from "@/utils/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const client = await mongoClient.connect();

  try {
    // MongoDBのクエリを実行してデータを取得
    const posts = await client
      .db("articles")
      .collection("posts")
      .find()
      .toArray();

    // データをJSON形式でレスポンスとして返す
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(req: Request, res: NextResponse) {
  const { id, title, content } = await req.json();
  const client = await mongoClient.connect();

  try {
    const collection = client.db("articles").collection("posts");
    const result = await collection.insertOne({ id, title, content, createdAt: new Date().toISOString() });
    return NextResponse.json(result.insertedId, {status: 200});

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, {status: 500});

  } finally {
    await client.close();
  }
}
