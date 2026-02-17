'use client';

import SenseiCard from './SenseiCard';

export default function SenseiList({
  senseis,
  selectedDay,
  activeBelts,
  beltColors,
}) {
  // Filter senseis by selected day and active belts
  const filteredSenseis = senseis.filter(
    (sensei) =>
      sensei.availability.includes(selectedDay) &&
      activeBelts.includes(sensei.belt)
  );

  if (filteredSenseis.length === 0) {
    return (
      <div className="rounded-lg bg-gray-50 px-6 py-8 text-center text-gray-600">
        <p>No senseis available for {selectedDay} with selected belt categories.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredSenseis.map((sensei) => (
        <SenseiCard
          key={sensei.id}
          sensei={sensei}
          beltColor={sensei.belt}
        />
      ))}
    </div>
  );
}
