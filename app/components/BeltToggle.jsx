'use client';

export default function BeltToggle({ label, isActive, onClick, color }) {
  const bgColor = {
    HB: 'bg-red-100 border-red-300 text-red-700',
    LB: 'bg-green-100 border-green-300 text-green-700',
    HYBRID: 'bg-blue-100 border-blue-300 text-blue-700',
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-lg border-2 px-4 py-2 font-medium transition-all ${
        isActive ? `${bgColor[color]} border-2` : 'border-gray-300 bg-white text-gray-700'
      }`}
    >
      {label}
    </button>
  );
}
