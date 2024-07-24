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
          message: {
            en: "We've already been contacted via this email.",
            tr: "Bu e-posta aracılığıyla bizimle zaten iletişime geçildi.",
          },
        });

      await Email.create({ email });

      res.status(201).json({
        status: "success",
        message: {
          en: "We've received your e-mail address! Thank you for contacting us.",
          tr: "E-posta adresiniz aldık! Bizimle iletişime geçtiğiniz için teşekkür ederiz.",
        },
      });
    } catch (e) {
      res.status(500).json({
        status: "fail",
        message: {
          en: "Something went wrong! Please check if your email address is valid.",
          tr: "Lütfen e-posta adresinizin geçerli olup olmadığını kontrol edin.",
        },
      });
    }
  }
}
