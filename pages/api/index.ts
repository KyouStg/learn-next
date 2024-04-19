import {NextApiRequest, NextApiResponse} from "next";
import {mongoClient} from "@/utils/mongoClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){

  await mongoClient.connect()
    .then(client => {
      const collection = client.db("articles").collection("posts");
      return collection.find().toArray();
    })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: error });
    })
    .finally(() => {
      mongoClient.close();
    });
}
