import {NextApiRequest, NextApiResponse} from "next";
import {mongoClient} from "@/utils/mongoClient";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  try {
    const client = await mongoClient.connect();
    const collection = client.db("articles").collection("posts");
    const posts = await collection.find().toArray();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  } finally {
    await mongoClient.close();
  }
}
