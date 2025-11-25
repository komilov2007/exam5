export default function ContactMap() {
  return (
    <div className="container mx-auto mt-12">
      <iframe
        className="w-full h-96 rounded-2xl shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.726690654017!2d69.28109531548711!3d41.31115127927354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f2225b0b1b%3A0x1c6a11c8f6f37b0b!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1699508321510!5m2!1sen!2s"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
