import { useState } from "react";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton } from "../components/Button";
import { FaUser, FaCalendar, FaTag, FaStar, FaReply, FaQuoteRight, FaLightbulb, FaChartLine } from "react-icons/fa6";

const Blogs = () => {
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showComments, setShowComments] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Unlocking Business Growth With Innovative Solutions",
      excerpt: "Discover how cutting-edge technology and strategic partnerships can transform your business operations and drive sustainable growth in today's competitive landscape.",
      author: "Admin",
      date: "18 Dec, 2025",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      content: `In today's rapidly evolving digital landscape, businesses face unprecedented challenges and opportunities. The key to sustainable growth lies in embracing innovative solutions that not only address current needs but also anticipate future trends.

      At FaecomTech, we understand that true business transformation goes beyond implementing new technologies. It requires a holistic approach that combines strategic planning, technical expertise, and a deep understanding of industry-specific requirements.

      Our comprehensive suite of services is designed to empower businesses at every stage of their digital journey. From initial consultation to ongoing support, we partner with our clients to deliver solutions that drive efficiency, enhance productivity, and create lasting competitive advantages.

      The integration of emerging technologies such as artificial intelligence, cloud computing, and data analytics has revolutionized how businesses operate. Organizations that leverage these technologies effectively are better positioned to adapt to market changes, meet customer expectations, and achieve their strategic objectives.

      Success in the digital age requires more than just technological adoption – it demands a cultural shift towards continuous innovation and learning. By fostering a mindset of experimentation and adaptation, businesses can create an environment where new ideas flourish and transformation becomes a continuous process rather than a one-time event.`,
      quote: "Innovation distinguishes between a leader and a follower. The future belongs to those who embrace change and turn challenges into opportunities.",
      tags: ["News", "Business", "Marketing"],
      comments: [
        {
          id: 1,
          name: "Sohel Tanvir",
          date: "March 20, 2024 at 2:37 pm",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
          message: "This article provides excellent insights into business transformation strategies. The emphasis on holistic approach and cultural shift is particularly relevant for organizations looking to drive sustainable growth."
        },
        {
          id: 2,
          name: "Alex Flores",
          date: "March 20, 2024 at 2:37 pm",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
          message: "Great read! The points about AI integration and data analytics are spot on. Looking forward to implementing some of these strategies in our organization."
        }
      ]
    }
  ];

  // Sample related articles
  const relatedArticles = [
    {
      id: 2,
      title: "The Future of ERP Systems: Cloud-Based Solutions",
      excerpt: "Explore how cloud-based ERP systems are revolutionizing business operations and why FaecomTech's ERP solutions are leading the digital transformation.",
      author: "Tech Team",
      date: "15 Dec, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Bridging the Skills Gap: Modern IT Training Programs",
      excerpt: "How FaecomTech's comprehensive training programs are preparing the next generation of IT professionals for the challenges of tomorrow's digital workplace.",
      author: "Training Division",
      date: "12 Dec, 2025",
      category: "Education",
      image: "https://images.unsplash.com/photo-15172453868074-6c090a6d5f7b?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Digital Transformation Strategies for 2025",
      excerpt: "Key trends and strategies businesses should adopt to stay competitive in the evolving digital landscape of 2025.",
      author: "Strategy Team",
      date: "10 Dec, 2025",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    }
  ];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Comment submitted:", commentData);
    setCommentData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentData(prev => ({ ...prev, [name]: value }));
  };

  const currentPost = blogPosts[0];

  return (
    <div className="flex flex-col items-stretch gap-30 mt-30">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-5xl mx-auto w-[93%] text-center flex flex-col gap-6 justify-center items-center">
        <Bookmark
          icon={<FaTag className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
          title="Industry Updates"
          className="bg-white"
        />
        <div className="text-4xl sm:text-[64px] font-medium">
          <p>
            Stay Ahead With<span className="text-[#ff6041]">Expert Insights</span>
          </p>
        </div>
        <div className="text-[14px] sm:text-[20px]/[40px] font-medium text-[#7e7e7e] max-w-xl">
          <p>Stay updated with the latest trends, insights, and innovations in technology and business transformation.</p>
        </div>
      </section>

      {/* ================= BLOG READER ================= */}
      <section className="max-w-5xl mx-auto w-[93%]">
        {/* Book Container */}
        <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden">
          {/* Book Binding Effect */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-900 to-amber-700 shadow-lg" />
          <div className="absolute right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-900 to-amber-700 shadow-lg" />
          
          {/* Page Content */}
          <div className="bg-white rounded-2xl mx-12 my-8 p-8 sm:p-12 lg:p-16 shadow-inner">
            {/* Page Header */}
            <div className="border-b-2 border-gray-200 pb-6 mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#ff6041]" />
                  <span>By {currentPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[#ff6041]" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTag className="text-[#ff6041]" />
                  <span>{currentPost.category}</span>
                </div>
              </div>
            </div>

            {/* Blog Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 leading-tight text-center">
              {currentPost.title}
            </h1>

            {/* Featured Image */}
            <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden rounded-2xl mb-8 shadow-md">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>

            {/* Blog Excerpt */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center italic">
              {currentPost.excerpt}
            </p>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-8">
              {currentPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-justify">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Quote Block */}
            <div className="relative bg-[#EFEADF] rounded-2xl p-6 my-8 border-l-4 border-[#ff6041]">
              <blockquote className="text-lg italic text-gray-800 leading-relaxed">
                {currentPost.quote}
              </blockquote>
              <div className="absolute bottom-2 right-2 text-[#ff6041]/20">
                <FaQuoteRight className="w-12 h-12" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {currentPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#EFEADF] text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Page Number */}
            <div className="text-center text-sm text-gray-500 font-medium">
              Page 1
            </div>
          </div>
        </div>
      </section>

      {/* Comments Toggle */}
      <section className="max-w-5xl mx-auto w-[93%] mt-12">
        <div className="text-center">
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-[#ff6041] text-white rounded-full hover:bg-[#e55030] transition-colors duration-300"
          >
            <FaReply className="w-4 h-4" />
            {showComments ? 'Hide Comments' : 'Show Comments'} ({currentPost.comments.length})
          </button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-8 bg-[#EFEADF] rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 text-center">
              {currentPost.comments.length.toString().padStart(2, '0')} Comments
            </h2>

            {/* Comments List */}
            <div className="space-y-6 mb-12">
              {currentPost.comments.map((comment) => (
                <div key={comment.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-4">
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                          <p className="text-sm text-gray-600">{comment.date}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`w-4 h-4 ${i < comment.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{comment.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Leave A Comment</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={commentData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ff6041] focus:ring-2 focus:ring-[#ff6041]/20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={commentData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ff6041] focus:ring-2 focus:ring-[#ff6041]/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Write Message
                  </label>
                  <textarea
                    name="message"
                    value={commentData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ff6041] focus:ring-2 focus:ring-[#ff6041]/20 transition-all duration-300 resize-none"
                    placeholder="Share your thoughts..."
                  />
                </div>
                <PrimaryButton
                  title="Post Comment"
                  classname="rounded-full px-8"
                />
              </form>
            </div>
          </div>
        )}
      </section>

      {/* ================= RELATED ARTICLES SECTION ================= */}
      <section className="max-w-5xl mx-auto w-[93%]">
        <div className="text-center mb-12">
          <Bookmark
            icon={<FaLightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
            title="RELATED INSIGHTS"
            className="bg-white mx-auto w-fit"
          />
          <div className="text-3xl sm:text-4xl font-medium mt-6">
            <p>Explore More <span className="text-[#ff6041]">Articles</span></p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedArticles.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-[#ff6041] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#ff6041] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= COMPANY STATS SECTION ================= */}
      <section className="bg-[#EFEADF] py-16">
        <div className="max-w-5xl mx-auto w-[93%]">
          <div className="text-center mb-12">
            <Bookmark
              icon={<FaChartLine className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
              title="Our Impact"
              className="bg-white mx-auto w-fit"
            />
            <div className="text-3xl sm:text-4xl font-medium mt-6">
              <p>Driving <span className="text-[#ff6041]">Digital Excellence</span></p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center border border-[#ff6041]/20">
              <div className="text-4xl font-bold text-[#ff6041] mb-2">500+</div>
              <p className="text-gray-700 font-medium">Professionals Trained</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-[#ff6041]/20">
              <div className="text-4xl font-bold text-[#ff6041] mb-2">50+</div>
              <p className="text-gray-700 font-medium">ERP Implementations</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-[#ff6041]/20">
              <div className="text-4xl font-bold text-[#ff6041] mb-2">10+</div>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-[#ff6041]/20">
              <div className="text-4xl font-bold text-[#ff6041] mb-2">98%</div>
              <p className="text-gray-700 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

        
      </div>
    );
};

export default Blogs;