'use client';

export default function SenseiCard({ sensei, beltColor }) {
  const whatsappLink = `https://wa.me/${sensei.phone.replace(/\D/g, '')}?text=Hi%20${sensei.name}%2C%20can%20you%20cover%20me%3F`;

  const beltBg = {
    HB: 'bg-red-50 border-red-200',
    LB: 'bg-green-50 border-green-200',
    HYBRID: 'bg-blue-50 border-blue-200',
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between rounded-lg border-2 ${beltBg[sensei.belt]} px-4 py-3 transition-all hover:shadow-md`}
    >
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{sensei.name}</span>
        <span className="text-sm text-gray-600">{sensei.phone}</span>
      </div>
      <div className="text-2xl">💬</div>
    </a>
  );
}
