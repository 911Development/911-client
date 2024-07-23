{
  /* <meta
name="description"
content="911 CAD, 911 Creativity & Software Development Company | Where creativity  meets code, innovative solutions are born, transforming ideas into reality and pushing the boundaries of what's possible in the digital world."
/>
<meta
name="keywords"
content="911 development, 911 CAD, 911 cad, 911cad, 911 software development, 911 creativity, 911 software, 911 Creativity and Development, 911 Creativity & Development, kibris 911, kıbrıs 911, kıbrısevim, kibrisevim"
/>
<title>
911 CAD | 911 Creativity & Software Development Company | Where
creativity meets code
</title> */
}

export default function handler(req, res) {
  const meta = {
    description:
      "911 CAD Systems, 911 Creativity & Software Development Company | 911 CAD Mobile Software, Where creativity  meets code, innovative solutions are born, transforming ideas into reality and pushing the boundaries of what's possible in the digital world.",
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
      "Cyprus 911 cad",
      "kibris 911 cad",
      "kıbrıs 911 cad",
      "911 cad Kibris",
      "911 cad kıbrıs",
    ],
    title:
      "911 CAD Systems | 911 Creativity & Software Development Company | Where creativity meets code",
  };

  const headings = {
    title: "911 CAD | CREATIVITY & SOFTWARE DEVELOPMENT",
    description:
      "911 Development: Where creativity  meets code, innovative solutions are born, transforming ideas into reality and pushing the boundaries of what's possible in the digital world with 911 cad systems.",
  };

  res.status(200).json({
    status: "success",
    data: {
      meta,
      headings,
    },
  });
}
