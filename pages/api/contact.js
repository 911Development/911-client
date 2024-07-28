import Contact from "@/lib/models/Contact";
import Email from "@/lib/models/Email";
import Quote from "@/lib/models/Quote";
import connectMongoDb from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { fullname, email, phone, message } = req.body;

      await connectMongoDb();

      const findEmailDocument = await Email.findOne({ email });
      const findPhoneDocument = await Quote.findOne({ phone });

      if (findEmailDocument)
        return res.status(409).json({
          status: "fail",
          message: {
            en: "We've already been contacted via this email.",
            tr: "Bu e-posta aracılığıyla bizimle zaten iletişime geçildi.",
          },
        });

      if (findPhoneDocument)
        return res.status(409).json({
          status: "fail",
          message: {
            en: "We've already been contacted via this phone number.",
            tr: "Bu telefon numarası aracılığıyla bizimle zaten iletişime geçildi.",
          },
        });

      const emailDocument = await Email.create({ email });

      await Contact.create({
        fullname,
        email: emailDocument,
        phone,
        message,
      });

      res.status(201).json({
        status: "success",
        message: {
          en: "We've received your request, you will be contacted by us soon.",
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
