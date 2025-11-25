import FAQItem from './FAQItem';

export default function FAQList() {
  const faqs = [
    {
      q: 'Buyurtma necha kunda yetib boradi?',
      a: 'Odatda 1–3 ish kuni ichida yetkazib beriladi.',
    },
    {
      q: 'Mahsulotni qaytarish mumkinmi?',
      a: 'Ha, 14 kun ichida qaytarish yoki almashtirish imkoniyati bor.',
    },
    {
      q: 'To‘lov qanday amalga oshiriladi?',
      a: 'Naqd, Click, Payme yoki karta orqali to‘lash mumkin.',
    },
    {
      q: 'Yetkazib berish bepulmi?',
      a: '70,000 so‘mdan yuqori buyurtmalarga — BEPUL!',
    },
  ];

  return (
    <div className="container w-full max-w-7xl mx-auto mx-auto grid md:grid-cols-2 gap-6 mt-12">
      {faqs.map((f, i) => (
        <FAQItem key={i} question={f.q} answer={f.a} />
      ))}
    </div>
  );
}
