import connectMongoDb from "@/lib/mongodb";
import Email from "@/lib/models/Email";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      await connectMongoDb();

      if (await Email.findOne({ email }))
        return res.status(409).json({
          status: "fail",
          message: "We've already been contacted via this email.",
        });

      await Email.create({ email });

      res.status(201).json({
        status: "success",
        message: "Your email address has sent successfully, we'll contact you.",
      });
    } catch (e) {
      res.status(500).json({
        status: "fail",
        message:
          "Something went wrong. Please check if your email address is valid.",
      });
    }
  }
}
