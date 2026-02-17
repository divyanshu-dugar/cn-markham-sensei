'use client';

export default function BeltToggle({ label, isActive, onClick, color }) {
  const toggleColor = {
    HB: 'bg-red-500',
    LB: 'bg-green-500',
    HYBRID: 'bg-blue-500',
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onClick}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all ${
          isActive ? toggleColor[color] : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
            isActive ? 'translate-x-7' : 'translate-x-1'
          }`}
        />
      </button>
      <span className="font-medium text-gray-700">{label}</span>
    </div>
  );
}
