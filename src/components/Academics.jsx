import { useState } from "react";
import { Book, GraduationCap, School, Users } from "lucide-react";

const academicLevels = [
  {
    id: "junior",
    title: "Junior School",
    icon: <Users className="w-10 h-10 text-[#B1040E]" />,
    grades: "Grades 1-5",
    description:
      "Foundation years focusing on core subjects and developmental skills.",
    image: "./academics-1.jpg",
    features: [
      "Core curriculum: Math, English, Science",
      "Interactive learning environment",
      "Sports and extracurricular activities",
      "Individual attention and care",
    ],
  },
  {
    id: "middle",
    title: "Middle School",
    icon: <Book className="w-10 h-10 text-[#B1040E]" />,
    grades: "Grades 6-8",
    description: "Transitional years developing academic and social skills.",
    image: "./academics-2.jpg",
    features: [
      "Advanced core subjects",
      "Introduction to specialized courses",
      "Leadership opportunities",
      "Career exploration",
    ],
  },
  {
    id: "high",
    title: "High School",
    icon: <School className="w-10 h-10 text-[#B1040E]" />,
    grades: "Grades 9-12",
    description: "College preparatory education with diverse course offerings.",
    image: "./academics-4.jpg",
    features: [
      "Advanced Placement courses",
      "College counseling",
      "Specialized electives",
      "Athletic programs",
    ],
  },
  {
    id: "university",
    title: "University Prep",
    icon: <GraduationCap className="w-10 h-10 text-[#B1040E]" />,
    grades: "Grade 12+",
    description: "Specialized programs for university preparation.",
    image: "./academics-3.jpg",
    features: [
      "SAT/ACT preparation",
      "College application support",
      "Research opportunities",
      "Internship programs",
    ],
  },
];

export default function AcademicsSection() {
  const [selectedLevel, setSelectedLevel] = useState(academicLevels[0]);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Academic Programs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {academicLevels.map((level) => (
          <div
            key={level.id}
            className={`cursor-pointer bg-white shadow-md rounded-lg p-6 transition transform ${
              selectedLevel.id === level.id
                ? "scale-105 ring-2 ring-red-500"
                : "hover:scale-105"
            }`}
            onClick={() => setSelectedLevel(level)}
          >
            <div className="flex flex-col items-center">
              {level.icon}
              <h2 className="text-xl font-semibold mt-2">{level.title}</h2>
              <p className="text-gray-500">{level.grades}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src={selectedLevel.image}
            alt={selectedLevel.title}
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-2">{selectedLevel.title}</h2>
          <p className="text-gray-600 mb-4">{selectedLevel.description}</p>

          <ul className="space-y-3">
            {selectedLevel.features.map((feature, index) => (
              <li
                key={index}
                className="p-3 bg-gray-100 rounded-md flex items-center"
              >
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
