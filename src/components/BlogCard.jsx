export default function BlogCard() {
  return (
    <div className="max-w-[1370px] mx-auto mt-12 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1581091215366-13c5d37d0521?auto=format&fit=crop&w=1470&q=80"
          alt="Blog"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold px-4 text-center">
            Latest Tech & Design Insights
          </h1>
        </div>
      </div>
      <div className="p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">
          Top 10 React Tips for Beginners
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Improve your React skills with these essential tips and tricks. From
          hooks to state management, learn everything you need to build
          efficient and scalable React applications. This blog post is perfect
          for beginners and intermediate developers looking to level up their
          React knowledge.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
