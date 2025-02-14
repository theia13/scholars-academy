import { CheckCircle, FileText, Mail, UserCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Submit Application",
    description: "Fill out the online application form with your details.",
    icon: <FileText className="w-10 h-10 text-[#B1040E]" />,
    details: [
      "Complete personal information",
      "Academic history and records",
      "Parent/Guardian details",
      "Previous school information",
    ],
  },
  {
    id: 2,
    title: "Document Verification",
    description: "Upload the required documents for verification.",
    icon: <Mail className="w-10 h-10 text-[#B1040E]" />,
    details: [
      "Birth certificate",
      "Previous academic records",
      "Transfer certificate",
      "Medical records",
    ],
  },
  {
    id: 3,
    title: "Interview & Assessment",
    description: "Attend an interview or entrance exam (if applicable).",
    icon: <UserCheck className="w-10 h-10 text-[#B1040E]" />,
    details: [
      "Academic assessment",
      "Parent interview",
      "Student interaction session",
      "School tour",
    ],
  },
  {
    id: 4,
    title: "Admission Confirmation",
    description: "Receive confirmation and proceed with enrollment.",
    icon: <CheckCircle className="w-10 h-10 text-[#B1040E]" />,
    details: [
      "Admission offer letter",
      "Fee payment",
      "Document submission",
      "Class allocation",
    ],
  },
];

export default function Admissions() {
  return (
    <div className="w-full bg-gray-50 min-h-screen mt-14">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Admissions Process
          </h1>
          <div className="h-1 w-24 bg-red-600 mx-auto" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Start your educational journey with us through our simple admission
            process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="cursor-pointer bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="p-6 flex flex-col items-center space-y-4">
                <div className="bg-red-50 p-4 rounded-full">{step.icon}</div>
                <h2 className="text-2xl text-center font-bold text-gray-900">
                  {step.title}
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need help with the admission process?
          </p>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
            Contact Admissions Office
          </button>
        </div>
      </div>
    </div>
  );
}
