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

  const headings = {
    title: "About 911 CAD Software Systems & 911 Development",
    descriptions: [
      "Focusing on the technologies of the future, 911 CAD Systems & 911 Development Company was established after two years of service. Our goal is to be the best in our service areas. As we get better every day with our young and dynamic staff, we incorporate new technologies.",
      "We are aware of the value of doing our job and the value of our employees at 911 CAD Software Systems and 911 Development. For this reason, we always strive to improve working conditions for our team. We know that a good team will take us better with good teamwork with 911 CAD systems and 911 Development.",
      "With completely original projects and unique designs, all of 911 CAD Systems' and 911 Developments' teams and are always with you to create the product that suits your needs.",
    ],
  };

  res.status(200).json({
    status: "success",
    data: {
      meta,
      headings,
    },
  });
}
