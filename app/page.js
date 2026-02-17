'use client';

import { useState } from 'react';
import { DAYS, SENSEIS, BELT_CATEGORIES } from './data/senseis';
import DayCard from './components/DayCard';
import BeltToggle from './components/BeltToggle';
import SenseiList from './components/SenseiList';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [activeBelts, setActiveBelts] = useState(['HB', 'LB', 'HYBRID']);

  const toggleBelt = (belt) => {
    setActiveBelts((prev) =>
      prev.includes(belt) ? prev.filter((b) => b !== belt) : [...prev, belt]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Sensei Coverage</h1>
          <p className="mt-2 text-gray-600">
            Select a day and belt category to find available senseis
          </p>
        </div>

        {/* Day Selection */}
        <div className="mb-8">
          <h2 className="mb-4 font-semibold text-gray-700">Select Day</h2>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7">
            {DAYS.map((day) => (
              <DayCard
                key={day}
                day={day}
                isSelected={selectedDay === day}
                onClick={() => setSelectedDay(day)}
              />
            ))}
          </div>
        </div>

        {/* Belt Category Filters */}
        <div className="mb-8">
          <h2 className="mb-4 font-semibold text-gray-700">Belt Categories</h2>
          <div className="flex flex-wrap gap-3">
            <BeltToggle
              label={BELT_CATEGORIES.HB}
              isActive={activeBelts.includes('HB')}
              onClick={() => toggleBelt('HB')}
              color="HB"
            />
            <BeltToggle
              label={BELT_CATEGORIES.LB}
              isActive={activeBelts.includes('LB')}
              onClick={() => toggleBelt('LB')}
              color="LB"
            />
            <BeltToggle
              label={BELT_CATEGORIES.HYBRID}
              isActive={activeBelts.includes('HYBRID')}
              onClick={() => toggleBelt('HYBRID')}
              color="HYBRID"
            />
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="mb-4 font-semibold text-gray-700">
            Available Senseis - {selectedDay}
          </h2>
          <SenseiList
            senseis={SENSEIS}
            selectedDay={selectedDay}
            activeBelts={activeBelts}
          />
        </div>
      </div>
    </div>
  );
}
