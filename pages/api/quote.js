import Email from "@/lib/models/Email";
import Quote from "@/lib/models/Quote";
import connectMongoDb from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { firstname, lastname, email, message, fields } = req.body;

      await connectMongoDb();

      const findEmailDocument = await Email.findOne({ email });

      if (findEmailDocument)
        return res.status(409).json({
          status: "fail",
          message: {
            en: "We've already been contacted via this email.",
            tr: "Bu e-posta aracılığıyla bizimle zaten iletişime geçildi.",
          },
        });

      const emailDocument = await Email.create({ email });

      await Quote.create({
        firstname,
        lastname,
        email: emailDocument,
        message,
        fields,
      });

      res.status(201).json({
        status: "success",
        message: {
          en: "We've received your request, will contact you soon.",
          tr: "Talebinizi alındık. En kısa sürede sizinle iletişime geçeceğiz.",
        },
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        status: "error",
        message: {
          en: "Something went wrong! Please make sure you fill the requred fields.",
          tr: "Lütfen gerekli alanları doldurduğunuzu kontrol edin.",
        },
      });
    }
  }
}
