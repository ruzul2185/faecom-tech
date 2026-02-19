import { useState } from "react";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton } from "../components/Button";
import {
  FaUser,
  FaCalendar,
  FaTag,
  FaStar,
  FaReply,
  FaQuoteRight,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa6";

const Blogs = () => {
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showComments, setShowComments] = useState(true);
  // const [scrollProgress, setScrollProgress] = useState(0);

  // ================= READING PROGRESS =================
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const totalHeight =
  //       document.documentElement.scrollHeight -
  //       document.documentElement.clientHeight;
  //     const progress =
  //       (window.scrollY / totalHeight) * 100;
  //     setScrollProgress(progress);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () =>
  //     window.removeEventListener("scroll", handleScroll);
  // }, []);

  // ================= DATA =================
  const blogPosts = [
    {
      id: 1,
      title: "Unlocking Business Growth With Innovative Solutions",
      excerpt:
        "Discover how cutting-edge technology and strategic partnerships can transform your business operations and drive sustainable growth.",
      author: "Admin",
      date: "18 Dec, 2025",
      category: "Corporate",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      content: `In today's rapidly evolving digital landscape, businesses face unprecedented challenges and opportunities. The key to sustainable growth lies in embracing innovative solutions.

At FaecomTech, we understand that true business transformation goes beyond implementing new technologies. It requires a holistic approach.

The integration of emerging technologies such as artificial intelligence, cloud computing, and data analytics has revolutionized how businesses operate.

Success in the digital age requires more than just technological adoption – it demands a cultural shift towards continuous innovation and learning.`,
      quote:
        "Innovation distinguishes between a leader and a follower. The future belongs to those who embrace change.",
      tags: ["News", "Business", "Marketing"],
      comments: [
        {
          id: 1,
          name: "Sohel Tanvir",
          date: "March 20, 2024",
          rating: 5,
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50",
          message:
            "This article provides excellent insights into business transformation strategies.",
        },
      ],
    },
  ];

  const relatedArticles = [
    {
      id: 2,
      title: "The Future of ERP Systems",
      date: "15 Dec, 2025",
    },
    {
      id: 3,
      title: "Bridging the Skills Gap",
      date: "12 Dec, 2025",
    },
  ];

  const currentPost = blogPosts[0];

  const readTime = Math.ceil(currentPost.content.split(" ").length / 200);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(commentData);
    setCommentData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setCommentData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-24 mt-24">
      {/* ================= READING PROGRESS BAR ================= */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-[#ff6041] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div> */}

      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto text-center w-[93%] relative">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#ff6041]/10 to-[#ff6041]/5 rounded-3xl blur-3xl"></div> */}
        <div className="relative z-10">
          <Bookmark
            icon={<FaTag className="text-[#ff6041]" />}
            title="Industry Insights"
            className="bg-white mx-auto w-fit shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mt-6 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Stay Ahead With{" "}
            <span className="text-[#ff6041] relative">
              Expert Knowledge
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff6041]/30 rounded-full"></span>
            </span>
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Insights, trends and strategies shaping the
            <br className="hidden sm:block" />
            future of digital transformation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-[#ff6041]/20">
              <span className="text-sm font-medium text-[#ff6041]">
                {blogPosts.length} Articles
              </span>
            </div>
            <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-[#ff6041]/20">
              <span className="text-sm font-medium text-gray-700">
                Updated Daily
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG CONTENT ================= */}
      <section className="max-w-6xl mx-auto w-[93%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* MAIN ARTICLE */}
          <div className="lg:col-span-2">
            <span className="bg-linear-to-r from-[#ff6041] to-[#ff8041] text-white px-4 py-1 rounded-full text-sm shadow-md">
              {currentPost.category}
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 leading-tight text-gray-900">
              {currentPost.title}
            </h2>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
              <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                <FaUser className="text-[#ff6041]" />
                {currentPost.author}
              </span>
              <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                <FaCalendar className="text-[#ff6041]" />
                {currentPost.date}
              </span>
              <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                <FaStar className="text-[#ff6041]" />
                {readTime} min read
              </span>
            </div>

            <div className="relative group">
              <img
                src={currentPost.image}
                className="rounded-2xl w-full shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                alt=""
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-10">
              <p className="text-xl text-gray-600 leading-relaxed italic">
                {currentPost.excerpt}
              </p>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
              {currentPost.content.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* QUOTE */}
            <div className="relative my-16">
              <div className="absolute inset-0 bg-linear-to-r from-[#ff6041]/10 to-[#ff8041]/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl border-l-4 border-[#ff6041] shadow-lg">
                <FaQuoteRight className="absolute right-6 top-6 text-[#ff6041]/20 text-5xl" />
                <p className="italic text-lg text-gray-800 font-medium">
                  {currentPost.quote}
                </p>
                <div className="mt-4 text-sm text-[#ff6041] font-medium">
                  — Inspiration
                </div>
              </div>
            </div>

            {/* COMMENTS */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Discussion ({currentPost.comments.length})
                </h3>
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="px-6 py-3 bg-linear-to-r from-[#ff6041] to-[#ff8041] text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <FaReply className="text-sm" />
                  {showComments ? "Hide Comments" : "Show Comments"}
                </button>
              </div>

              {showComments && (
                <div className="space-y-8">
                  {currentPost.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex gap-4">
                        <div className="relative">
                          <img
                            src={comment.avatar}
                            className="w-12 h-12 rounded-full ring-2 ring-[#ff6041]/20"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#ff6041] rounded-full flex items-center justify-center">
                            <FaStar className="text-white text-xs" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">
                              {comment.name}
                            </h4>
                            <div className="flex items-center gap-1">
                              {[...Array(comment.rating)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className="text-yellow-400 text-sm"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {comment.date}
                          </p>
                          <p className="mt-3 text-gray-700 leading-relaxed">
                            {comment.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* COMMENT FORM */}
                  <div className="bg-linear-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Share Your Thoughts
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Join the discussion and share your perspective with our
                      community.
                    </p>

                    <form onSubmit={handleCommentSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={commentData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#ff6041] focus:ring-2 focus:ring-[#ff6041]/20 transition-all duration-200"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={commentData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#ff6041] focus:ring-2 focus:ring-[#ff6041]/20 transition-all duration-200"
                        />
                      </div>

                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Share your thoughts..."
                        value={commentData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#ff6041] focus:ring-2 focus:ring-[#ff6041]/20 transition-all duration-200 resize-none"
                      />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="notify"
                            className="rounded text-[#ff6041]"
                          />
                          <label
                            htmlFor="notify"
                            className="text-sm text-gray-600"
                          >
                            Notify me of replies
                          </label>
                        </div>
                        <PrimaryButton
                          title="Post Comment"
                          classname="rounded-full px-8 hover:shadow-lg transition-all duration-300"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8 sticky top-24 h-fit">
            {/* TAGS */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-6 text-gray-900 flex items-center">
                <FaTag className="inline mr-2 text-[#ff6041]" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentPost.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-linear-to-r from-[#ff6041]/10 to-[#ff8041]/10 text-[#ff6041] rounded-full text-sm font-medium hover:from-[#ff6041] hover:to-[#ff8041] hover:text-white transition-all duration-300 cursor-pointer border border-[#ff6041]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RELATED */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-6 text-gray-900 flex items-center">
                <FaLightbulb className="inline mr-2 text-[#ff6041]" />
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((post, index) => (
                  <div key={post.id} className="group cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#ff6041] rounded-full mt-2 shrink-0"></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 group-hover:text-[#ff6041] transition-colors duration-200">
                          {post.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-[#ff6041] font-medium">
                            {index + 1} min read
                          </span>
                        </div>
                      </div>
                    </div>
                    {index < relatedArticles.length - 1 && (
                      <div className="ml-1 mt-4 border-l border-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="bg-linear-to-br from-[#ff6041] to-[#ff8041] p-6 rounded-2xl text-white">
              <h3 className="font-bold mb-4 flex items-center">
                <FaChartLine className="inline mr-2" />
                Stay Updated
              </h3>
              <p className="text-sm mb-4 text-white/90">
                Get the latest insights delivered to your inbox weekly.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white transition-all duration-200"
                />
                <button className="w-full py-2 bg-white text-[#ff6041] rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="bg-white border border-[#ff6041]/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-linear-to-r from-[#ff6041]/20 to-[#ff8041]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl text-[#ff6041]" />
              </div>
              <h4 className="font-bold text-lg text-gray-900">
                98% Client Satisfaction
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Delivering digital excellence through innovation.
              </p>
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
