import { GrTechnology } from "react-icons/gr";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { Bookmark } from "../../components/Bookmark";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { salesforceTrainingDetails } from "../../constants/TrainingDetails/SalesforceTrainingDetails";

const SalesforceTraining = () => {
  return (
    <div className="flex flex-col gap-24 mt-30 mb-30">
      {/* ================= HERO SECTION ================= */}
      <section className="mx-auto min-w-86.25 w-full items-center rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 ">
        <Bookmark
          icon={<GrTechnology />}
          title="Salesforce Training Program"
          className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 text-center">
          {salesforceTrainingDetails.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-442.5 mx-auto text-center">
          {salesforceTrainingDetails.subtitle}
        </p>
        <p className="text-xl text-center text-gray-600 max-w-442.5 mx-auto">
          {salesforceTrainingDetails.description}
        </p>
        <a href="/contact">
          <PrimaryButton title="Get Started" classname="rounded-[25px]" />
        </a>
      </section>

      {/* ================= HERO IMAGE SECTION ================= */}
      <section className="max-w-7xl mx-auto overflow-hidden rounded-[25px]">
        <picture>
          <source
            srcSet={salesforceTrainingDetails.images.heroAvif}
            type="image/avif"
          />
          <source
            srcSet={salesforceTrainingDetails.images.heroWebp}
            type="image/webp"
          />
          <img
            src={salesforceTrainingDetails.images.hero} // fallback (png/jpg)
            alt="Salesforce CRM Systems"
            className="w-full h-full rounded-[25px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </picture>
      </section>

      {/* ================= SEPARATOR ================= */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
            <div className="mx-4 p-2 bg-[#ff6041] rounded-full">
              <GrTechnology className="text-white text-lg" />
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-r from-gray-50 to-white rounded-3xl p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-[25px]">
              <picture>
                <source
                  srcSet={salesforceTrainingDetails.images.overviewAvif}
                  type="image/avif"
                />
                <source
                  srcSet={salesforceTrainingDetails.images.overviewWebp}
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src={salesforceTrainingDetails.images.overview} // fallback
                  alt="Salesforce CRM Overview"
                  className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </picture>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Salesforce Training Overview
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                {salesforceTrainingDetails.overview
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNING OUTCOMES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-r from-[#f7f7f7] to-[#ffffff] rounded-3xl p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                What Students Will Actually Learn
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                This makes the training practical, job-ready, and
                industry-relevant.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                By the end of this training, participants will be able to:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {salesforceTrainingDetails.learningOutcomes.map(
                  (outcome, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[25px]">
              <picture>
                <source
                  srcSet={salesforceTrainingDetails.images.learningOutcomesAvif}
                  type="image/avif"
                />
                <source
                  srcSet={salesforceTrainingDetails.images.learningOutcomesWebp}
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src={salesforceTrainingDetails.images.learningOutcomes} // fallback (png/jpg)
                  alt="Learning Outcomes"
                  className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEPARATOR ================= */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
            <div className="mx-4 p-2 bg-[#ff6041] rounded-full">
              <HiOutlineLightningBolt className="text-white text-lg" />
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Service Areas of Work (Training Modules)
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salesforceTrainingDetails.serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineLightningBolt className="text-[#ff6041] text-2xl" />
                <h3 className="text-xl font-semibold">{area.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <h4 className="font-semibold mb-2">Topics include:</h4>
              <ul className=" mb-4">
                {area.topics.map((topic, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-[#ff6041] rounded-full"></div>
                    {topic}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 italic">{area.studentsWill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK SECTION ================= */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Bookmark
                title="Technologies"
                icon={<GrTechnology color="#ff6041" />}
                className="text-[#ff6041] bg-white border gap-3"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tech Stack Covered in Training
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Participants gain hands-on experience with:
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {salesforceTrainingDetails.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-400 text-white rounded-full font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEPARATOR ================= */}
      <section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
            <div className="mx-4 p-2 bg-[#ff6041] rounded-full">
              <HiOutlineLightningBolt className="text-white text-lg" />
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
          </div>
        </div>
      </section>

      {/* ================= PRACTICAL TRAINING APPROACH SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Practical Training Approach
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {salesforceTrainingDetails.practicalApproach.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {salesforceTrainingDetails.practicalApproach.methodologies.map(
                (method, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{method}</span>
                  </div>
                ),
              )}
            </div>
            <p className="text-gray-600 text-lg">
              {salesforceTrainingDetails.practicalApproach.conclusion}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[25px]">
            <picture>
              <source
                srcSet={salesforceTrainingDetails.images.practicalApproachAvif}
                type="image/avif"
              />
              <source
                srcSet={salesforceTrainingDetails.images.practicalApproachWebp}
                type="image/webp"
              />
              <img
                loading="lazy"
                src={salesforceTrainingDetails.images.practicalApproach} // fallback (png/jpg)
                alt="Practical Training Approach"
                className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS BENEFITS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-[25px]">
            <picture>
              <source
                srcSet={salesforceTrainingDetails.images.benefitsAvif}
                type="image/avif"
              />
              <source
                srcSet={salesforceTrainingDetails.images.benefitsWebp}
                type="image/webp"
              />
              <img
                loading="lazy"
                src={salesforceTrainingDetails.images.benefits} // fallback (png/jpg)
                alt="Business Benefits"
                className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </picture>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Business Benefits of Salesforce Training
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Organizations and professionals who complete this program gain:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {salesforceTrainingDetails.businessBenefits.map(
                (benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION (Modern on Solid Orange) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-[#ff6041] rounded-[40px]">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold">
            Why Choose Our Salesforce Training?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Expert-led, hands-on learning to boost your Salesforce career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salesforceTrainingDetails.whyChooseUs.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#ff6041] border border-white border-opacity-20 transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#ff6041] font-bold text-xl transition-transform duration-300 group-hover:scale-110">
                ✓
              </div>
              <p className="text-white text-lg leading-relaxed hover:underline">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Master Salesforce?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Join thousands of professionals who have transformed their careers
          with our industry-leading Salesforce training program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimaryButton
            title="Start Your Salesforce Journey"
            classname="rounded-[25px]"
          />
          <SecondaryButton
            title="Contact Our Experts"
            classname="rounded-[25px]"
          />
        </div>
      </section>
    </div>
  );
};

export default SalesforceTraining;
