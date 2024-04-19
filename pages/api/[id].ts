import {NextApiRequest, NextApiResponse} from "next";
import {mongoClient} from "@/utils/mongoClient";

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse
){
  const { id } = req.query;
  let client;

  try {
    client = await mongoClient.connect();
    const collection = client.db("articles").collection("posts");

    switch (req.method) {
      case "GET":
        const mongoId = await collection.findOne({ id: id });
        return res.status(200).json(mongoId);

      case "PUT":
        const updatedResult = await collection.updateOne(
          { id: id },
          { $set: req.body }
        );
        if (updatedResult.modifiedCount === 0) {
          return res.status(404).json({ error: "Document not found" });
        }
        return res.status(200).json({ message: "Updated successfully" });

      case "DELETE":
        const deleteResult = await collection.deleteOne({ id: id });
        if (deleteResult.deletedCount === 0) {
          return res.status(404).json({ error: "Document not found" });
        }
        return res.status(200).json({ message: "Deleted successfully" });

      default:
        return res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  } finally {
    if (client) {
      client.close();
    }
  }
}
