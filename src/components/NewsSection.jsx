import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "New School Curriculum Announced",
    image: "./news-1.avif",
    date: "Feb 12, 2025",
    description:
      "The education board has introduced a new curriculum focusing on AI and technology.",
  },
  {
    id: 2,
    title: "Sports Championship Results",
    image: "./news-2.jpg",
    date: "Feb 10, 2025",
    description:
      "Our school's basketball team secured 1st place in the state-level championship.",
  },
  {
    id: 3,
    title: "Annual Science Fair 2025",
    image: "./news-3.jpg",
    date: "Feb 08, 2025",
    description:
      "Students showcased their innovative projects at the Annual Science Fair.",
  },
];

const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mb-20 mt-14">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">{news.date}</p>
              <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
              <p className="text-gray-600 mt-2">{news.description}</p>
              <Link
                to="#"
                className="text-blue-500 font-medium hover:underline mt-3 block"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
