export default function handler(req, res) {
  const meta = {
    description:
      "Projects of 911 CAD Systems, 911 Creativity & Software Development Company | 911 CAD Mobile Software, Where creativity  meets code, innovative solutions are born, transforming ideas into reality and pushing the boundaries of what's possible in the digital world.",
    keywords: [
      "911 development",
      "911 cad",
      "911 cad systems",
      "911 cad software",
      "911 cad mobile software",
      "911 cad software systems",
      "911 cad software free",
      "911 software development",
      "911 creativity",
      "911 software",
      "911 Creativity and Development",
      "911 Creativity & Development",
      "Cyprus 911",
      "kibris 911",
      "kıbrıs 911",
      "911 Kibris",
      "911 kıbrıs",
    ],
    title:
      "911 CAD Systems' Projects | 911 Creativity & Software Development Company | Where creativity meets code",
  };

  res.status(200).json({
    status: "success",
    data: {
      meta,
    },
  });
}
