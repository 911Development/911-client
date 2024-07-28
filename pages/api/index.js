import connectMongoDb from "@/lib/mongodb";

// * API HEALTH
export default async function handler(req, res) {
  await connectMongoDb();
  res.status(200).json({ status: "success", message: "OK" });
}
