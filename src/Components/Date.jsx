import React, { useState } from "react";

const DateSelector = () => {
  const days = [
    { day: "MON", date: 10 },
    { day: "TUE", date: 11 },
    { day: "WED", date: 12 },
    { day: "THU", date: 13 },
    { day: "FRI", date: 14 },
    { day: "SAT", date: 15 },
    { day: "SUN", date: 16 },
  ];

  const times = [
    "8:00 am",
    "8:30 am",
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
  ];

  const [selectedDay, setSelectedDay] = useState(10); 
  const [selectedTime, setSelectedTime] = useState("9:00 am");

  return (
    <div className="max-w-[900px] w-full px-4 flex flex-col mt-10 space-y-8 mx-auto lg:mx-0 lg:ml-[255px]">

      <h3 className="text-gray-800 font-medium text-lg">Booking slots</h3>


      <div className="flex flex-wrap gap-3 justify-center sm:justify-start lg:justify-start">
        {days.map((d) => (
          <button
            key={d.date}
            onClick={() => setSelectedDay(d.date)}
            className={`flex flex-col items-center justify-center w-14 h-20 rounded-full transition font-medium
              ${
                selectedDay === d.date
                  ? "bg-[#5F6FFF] text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
          >
            <span className="text-xs">{d.day}</span>
            <span className="text-sm">{d.date}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center sm:justify-start lg:justify-start">
        {times.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTime(t)}
            className={`px-3 py-1 min-w-[70px] sm:min-w-[70px] md:min-w-[50px] text-xs sm:text-sm rounded-full transition font-medium
              ${
                selectedTime === t
                  ? "bg-[#5F6FFF] text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      <button className="w-full sm:w-80 h-12 bg-[#5F6FFF] cursor-pointer text-white font-semibold rounded-full shadow-md hover:shadow-lg transition hover:bg-[#4f5cd3] mx-auto lg:mx-0">
        Book an appointment
      </button>
    </div>
  );
};

export default DateSelector;
