export default function ContactInfo() {
  const info = [
    { title: 'Address', desc: '123 Main St, Tashkent, Uzbekistan' },
    { title: 'Phone', desc: '+998 90 123 45 67' },
    { title: 'Email', desc: 'support@example.com' },
  ];

  return (
    <div className="container mx-auto grid md:grid-cols-3 gap-6 mt-12">
      {info.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
