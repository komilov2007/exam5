export default function ContactForm() {
  return (
    <div className="container mx-auto mt-12 max-w-xl bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <button className="py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
