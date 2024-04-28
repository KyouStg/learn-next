import { mongoClient } from "@/utils/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const client = await mongoClient.connect();

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
    await mongoClient.close();
  }
}
