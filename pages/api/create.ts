import {NextApiRequest, NextApiResponse} from "next";
import {mongoClient} from "@/utils/mongoClient";

export default async function createHandler(
  req: NextApiRequest,
  res: NextApiResponse
){
  const { id, title, content } = req.body;

  await mongoClient.connect()
    .then(client => {
      const collection = client.db("articles").collection("posts");
      return collection.insertOne({ id, title, content, createdAt: new Date().toISOString() });
    })
    .then(mongoId => {
      res.status(200).json(mongoId);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: error });
    })
    .finally(() => {
      mongoClient.close();
    });
}
