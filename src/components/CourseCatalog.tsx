import { useRef } from "react";
import { COURSES as courses } from "../constants/TrainingDetails/AWSTrainingDetails";

const CourseCatalog = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      className="flex flex-col gap-24 mt-24 mb-24 px-4 sm:px-8"
    >
      {/* ================= HERO ================= */}
      <section className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          7-Day Zero to Hero Course Catalog
        </h1>
        <p className="text-lg text-gray-600">
          LearnITTechIndia.com
        </p>
      </section>

      {/* ================= PRICING ================= */}
      <section className="max-w-4xl mx-auto bg-[#ff6041] text-white rounded-3xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Pricing Model
        </h2>
        <p className="text-lg mb-2">
          $10/hour per student + Institute Share
        </p>
        <p className="text-lg font-semibold">
          If students &gt; 3 → $8/hour per student
        </p>
      </section>

      {/* ================= COURSE GRID ================= */}
      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-[#ff6041]">
                {course.title}
              </h3>

              <div className="space-y-3">
                {course.days.map((day, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="min-w-[28px] h-7 rounded-full bg-[#ff6041] text-white flex items-center justify-center text-sm font-semibold">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 text-sm">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Learning Journey
        </h2>
        <p className="text-gray-600 mb-6">
          Choose your path and become industry-ready in just 7 days.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact">
            <button className="bg-[#ff6041] text-white px-6 py-3 rounded-full hover:bg-[#e5533a] transition">
              Get Started
            </button>
          </a>
          <a href="/contact">
            <button className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CourseCatalog;