export default function handler(req, res) {
  const meta = {
    description:
      "911 CAD, 911 Creativity & Software Development Company | 911 CAD Mobile Software, Where creativity  meets code, innovative solutions are born, transforming ideas into reality and pushing the boundaries of what's possible in the digital world.",
    keywords: [
      "911 development",
      "911 cad",
      "911 cad systems",
      "911 cad mobile software",
      "911 cad software",
      "911 cad software systems",
      "911 cad software free",
      "911 software development",
      "911 creativity",
      "911 software",
      "911 Creativity and Development",
      "911 Creativity & Development",
      "Cyprus 911 cad",
      "kibris 911 cad",
      "kıbrıs 911 cad",
      "911 cad Kibris",
      "911 cad kıbrıs",
    ],
    title:
      "About 911 CAD Systems | 911 Creativity & Software Development Company | Where creativity meets code",
  };

  res.status(200).json({
    status: "success",
    data: {
      meta,
    },
  });
}
