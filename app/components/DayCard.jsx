'use client';

export default function DayCard({ day, isSelected, onClick }) {
  const dayabbrev = day.slice(0, 3);

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center rounded-lg border-2 px-6 py-4 font-semibold transition-all ${
        isSelected
          ? 'border-blue-600 bg-blue-50 text-blue-900'
          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
      }`}
    >
      <span className="text-sm text-gray-500">{dayabbrev}</span>
      <span className="text-base">{day}</span>
    </button>
  );
}
