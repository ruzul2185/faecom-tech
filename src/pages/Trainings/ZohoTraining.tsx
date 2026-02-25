import { GrTechnology } from "react-icons/gr";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { Bookmark } from "../../components/Bookmark";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { zohoTrainingDetails } from "../../constants/TrainingDetails/ZohoTrainingDetails";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ZohoTraining = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const separator1Ref = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const learningOutcomesRef = useRef<HTMLDivElement>(null);
  const separator2Ref = useRef<HTMLDivElement>(null);
  const serviceAreasRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const separator3Ref = useRef<HTMLDivElement>(null);
  const practicalRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ================= HERO TIMELINE =================
      const tl = gsap.timeline();

      tl.from(".hero-bookmark", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-button",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // ================= HERO IMAGE SECTION =================
      gsap.from(".hero-image", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ================= AUTHORIZED TRAINING PARTNER SECTION =================
      gsap.from(".partner-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: partnerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".partner-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: partnerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".partner-button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: partnerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= SEPARATOR 1 =================
      gsap.from(".separator-1", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: separator1Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // ================= OVERVIEW SECTION =================
      gsap.from(".overview-image", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".overview-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".overview-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ================= LEARNING OUTCOMES SECTION =================
      gsap.from(".learning-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: learningOutcomesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".learning-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: learningOutcomesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".learning-item", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: learningOutcomesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".learning-image", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: learningOutcomesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= SEPARATOR 2 =================
      gsap.from(".separator-2", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: separator2Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // ================= SERVICE AREAS SECTION =================
      gsap.from(".service-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: serviceAreasRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".service-card", {
        opacity: 0,
        scale: 0.9,
        y: 60,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: serviceAreasRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= TECH STACK SECTION =================
      gsap.from(".tech-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-tag", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= SEPARATOR 3 =================
      gsap.from(".separator-3", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: separator3Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // ================= PRACTICAL TRAINING APPROACH SECTION =================
      gsap.from(".practical-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: practicalRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".practical-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: practicalRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".practical-item", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: practicalRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".practical-image", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: practicalRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= BUSINESS BENEFITS SECTION =================
      gsap.from(".benefits-image", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".benefits-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".benefits-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".benefit-item", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= WHY CHOOSE US SECTION =================
      gsap.from(".why-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".why-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".why-card", {
        opacity: 0,
        scale: 0.9,
        y: 60,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= CALL TO ACTION SECTION =================
      gsap.from(".cta-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-button", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );
  return (
    <div ref={container} className="flex flex-col gap-24 mt-30 mb-30">
      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="mx-auto min-w-86.25 w-full items-center rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 "
      >
        <div className="hero-bookmark">
          <Bookmark
            icon={<GrTechnology />}
            title="Zoho Training Program"
            className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
          />
        </div>
        <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 text-center">
          {zohoTrainingDetails.title}
        </h1>
        <p className="hero-subtitle text-xl text-gray-600 max-w-442.5 mx-auto text-center">
          {zohoTrainingDetails.subtitle}
        </p>
        <p className="hero-description text-xl text-center text-gray-600 max-w-442.5 mx-auto ">
          {zohoTrainingDetails.description}
        </p>
        <a href="/contact" className="hero-button">
          <PrimaryButton title="Get Started" classname="rounded-[25px]" />
        </a>
      </section>

      {/* ================= HERO IMAGE SECTION ================= */}
      <section
        ref={heroImageRef}
        className="max-w-7xl mx-auto overflow-hidden rounded-[25px]"
      >
        <picture>
          <source
            srcSet={zohoTrainingDetails.images.heroAvif}
            type="image/avif"
          />
          <source
            srcSet={zohoTrainingDetails.images.heroWebp}
            type="image/webp"
          />
          <img
            loading="lazy"
            src={zohoTrainingDetails.images.hero} // fallback (png/jpg)
            alt="Zoho Business Automation"
            className="hero-image w-full h-full rounded-[25px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </picture>
      </section>

      {/* ================= AUTHORIZED TRAINING PARTNER SECTION ================= */}
      <section ref={partnerRef} className="bg-[#ff6041] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="partner-heading text-3xl lg:text-4xl font-bold text-white mb-6">
            Authorized Training Partner
          </h2>
          <p className="partner-text text-xl text-white max-w-3xl mx-auto mb-8">
            Our company is an authorized training partner of{" "}
            <a
              href="https://www.zohocorp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-gray-200 transition-colors"
            >
              Zoho Corp
            </a>
            , ensuring you receive industry-recognized certifications and
            expert-led training.
          </p>
          <a
            href="https://www.zohocorp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton
              title="Visit Zoho Corp"
              classname="partner-button rounded-[25px] border border-black text-black hover:bg-gray-100"
            />
          </a>
        </div>
      </section>

      {/* ================= SEPARATOR ================= */}
      <section ref={separator1Ref} className="py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="separator-1 flex items-center justify-center">
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
            <div className="mx-4 p-2 bg-[#ff6041] rounded-full">
              <GrTechnology className="text-white text-lg" />
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section ref={overviewRef} className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-r from-gray-50 to-white rounded-3xl p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="overview-image relative overflow-hidden rounded-[25px]">
              <picture>
                <source
                  srcSet={zohoTrainingDetails.images.overviewAvif}
                  type="image/avif"
                />
                <source
                  srcSet={zohoTrainingDetails.images.overviewWebp}
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src={zohoTrainingDetails.images.overview} // fallback (jpg/png)
                  alt="Zoho Business Overview"
                  className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </picture>
            </div>
            <div>
              <h2 className="overview-heading text-3xl lg:text-4xl font-bold mb-8">
                Zoho Training Overview
              </h2>
              <div className="overview-text text-gray-600 text-lg leading-relaxed space-y-4">
                {zohoTrainingDetails.overview
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
      <section ref={learningOutcomesRef} className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-r from-[#f7f7f7] to-[#ffffff] rounded-3xl p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="learning-heading text-3xl lg:text-4xl font-bold mb-8">
                What Students Will Actually Learn
              </h2>
              <p className="learning-text text-gray-600 text-lg mb-6">
                This makes the training practical, job-ready, and
                industry-relevant.
              </p>
              <p className="learning-text text-gray-600 text-lg mb-6">
                By the end of this training, participants will be able to:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {zohoTrainingDetails.learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="learning-item flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="learning-image relative overflow-hidden rounded-[25px]">
              <picture>
                <source
                  srcSet={zohoTrainingDetails.images.learningOutcomesAvif}
                  type="image/avif"
                />
                <source
                  srcSet={zohoTrainingDetails.images.learningOutcomesWebp}
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src={zohoTrainingDetails.images.learningOutcomes} // fallback (png/jpg)
                  alt="Learning Outcomes"
                  className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEPARATOR ================= */}
      <section ref={separator2Ref} className="py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="separator-2 flex items-center justify-center">
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
            <div className="mx-4 p-2 bg-[#ff6041] rounded-full">
              <HiOutlineLightningBolt className="text-white text-lg" />
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS SECTION ================= */}
      <section ref={serviceAreasRef} className="max-w-7xl mx-auto px-6">
        <h2 className="service-heading text-3xl lg:text-4xl font-bold text-center mb-12">
          Service Areas of Work (Training Modules)
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zohoTrainingDetails.serviceAreas.map((area, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
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
      <section ref={techStackRef} className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="tech-bookmark">
                <Bookmark
                  title="Technologies"
                  icon={<GrTechnology color="#ff6041" />}
                  className="text-[#ff6041] bg-white border gap-3"
                />
              </div>
            </div>
            <h2 className="tech-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Zoho Products Covered in Training
            </h2>
            <p className="tech-subtext text-xl text-gray-300 max-w-3xl mx-auto">
              Hands-on experience with the following Zoho products:
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {zohoTrainingDetails.techStack.map((tech, index) => (
              <span
                key={index}
                className="tech-tag px-6 py-3 bg-gray-400 text-white rounded-full font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEPARATOR ================= */}
      <section ref={separator3Ref} className="py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="separator-3 flex items-center justify-center">
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
            <div className="mx-4 p-2 bg-[#ff6041] rounded-full">
              <HiOutlineLightningBolt className="text-white text-lg" />
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#ff6041] to-transparent flex-1"></div>
          </div>
        </div>
      </section>

      {/* ================= PRACTICAL TRAINING APPROACH SECTION ================= */}
      <section ref={practicalRef} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="practical-heading text-3xl lg:text-4xl font-bold mb-8">
              Practical Training Approach
            </h2>
            <p className="practical-text text-gray-600 text-lg mb-6">
              {zohoTrainingDetails.practicalApproach.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {zohoTrainingDetails.practicalApproach.methodologies.map(
                (method, index) => (
                  <div
                    key={index}
                    className="practical-item flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{method}</span>
                  </div>
                ),
              )}
            </div>
            <p className="practical-text text-gray-600 text-lg">
              {zohoTrainingDetails.practicalApproach.conclusion}
            </p>
          </div>
          <div className="practical-image relative overflow-hidden rounded-[25px]">
            <picture>
              <source
                srcSet={zohoTrainingDetails.images.practicalApproachAvif}
                type="image/avif"
              />
              <source
                srcSet={zohoTrainingDetails.images.practicalApproachWebp}
                type="image/webp"
              />
              <img
                loading="lazy"
                src={zohoTrainingDetails.images.practicalApproach} // fallback (png/jpg)
                alt="Practical Training Approach"
                className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS BENEFITS SECTION ================= */}
      <section ref={benefitsRef} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="benefits-image relative overflow-hidden rounded-[25px]">
            <picture>
              <source
                srcSet={zohoTrainingDetails.images.benefitsAvif}
                type="image/avif"
              />
              <source
                srcSet={zohoTrainingDetails.images.benefitsWebp}
                type="image/webp"
              />
              <img
                loading="lazy"
                src={zohoTrainingDetails.images.benefits} // fallback (png/jpg)
                alt="Business Benefits"
                className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </picture>
          </div>
          <div>
            <h2 className="benefits-heading text-3xl lg:text-4xl font-bold mb-8">
              Business Benefits of Zoho Training
            </h2>
            <p className="benefits-text text-gray-600 text-lg mb-8">
              Organizations and professionals who complete this program gain:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {zohoTrainingDetails.businessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION (Modern on Solid Orange) ================= */}
      <section
        ref={whyChooseRef}
        className="max-w-7xl mx-auto px-6 py-16 bg-[#ff6041] rounded-[40px]"
      >
        <div className="text-center text-white mb-12">
          <h2 className="why-heading text-3xl lg:text-4xl font-extrabold">
            Why Choose Our Zoho Training?
          </h2>
          <p className="why-subtext mt-4 text-lg opacity-90">
            Expert-led, hands-on learning to boost your Zoho career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zohoTrainingDetails.whyChooseUs.map((reason, index) => (
            <div
              key={index}
              className="why-card flex items-start gap-4 p-6 rounded-2xl bg-[#ff6041] border border-white border-opacity-20 transition-transform transform hover:scale-105 cursor-pointer"
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
      <section ref={ctaRef} className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="cta-heading text-3xl lg:text-4xl font-bold mb-6">
          Ready to Master Zoho?
        </h2>
        <p className="cta-subtext text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Join thousands of professionals who have transformed their careers
          with our industry-leading Zoho training program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimaryButton
            title="Start Your Zoho Journey"
            classname="cta-button rounded-[25px]"
          />
          <SecondaryButton
            title="Contact Our Experts"
            classname="cta-button rounded-[25px]"
          />
        </div>
      </section>
    </div>
  );
};

export default ZohoTraining;
