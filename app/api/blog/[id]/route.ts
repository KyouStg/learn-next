import { mongoClient } from "@/utils/mongoClient";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextResponse) {
  const client = await mongoClient.connect();
  const id = req.url.split("/blog/")[1];

  try {
    const collection = client.db("articles").collection("posts");
    const mongoId = await collection.findOne({ id: id });
    return NextResponse.json(mongoId, { status : 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });

  } finally {
    await client.close();
  }
}


export async function PUT(req: Request, res: NextResponse) {
  const client = await mongoClient.connect();
  const id = req.url.split("/blog/")[1];

  try {
    const collection = client.db("articles").collection("posts");
    const updatedResult = await collection.updateOne(
      { id: id },
      { $set: await req.json() }
    );
    if (updatedResult.modifiedCount === 0) {
      return NextResponse.json({ error: "Document not found" }, {status: 404});
    }
    return NextResponse.json({ message: "Updated successfully" }, {status: 200});

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });

  } finally {
    await client.close();
  }
}


export async function DELETE(req: Request, res: NextResponse) {
  const client = await mongoClient.connect();
  const id = req.url.split("/blog/")[1];

  try {
    const deleteResult = await client
      .db("articles")
      .collection("posts")
      .deleteOne({ id: id });

    if (deleteResult.deletedCount === 0) {
      return NextResponse.json({ error: "Document not found" });
    }
    return NextResponse.json({ message: "Deleted successfully" }, {status: 200});

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, {status: 500});

  } finally {
    await client.close()
  }
}
