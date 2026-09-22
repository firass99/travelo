import React from "react";

const STATS = [
  { value: "42K+", label: "Trips booked this year" },
  { value: "128", label: "Destinations covered" },
  { value: "4.8 / 5", label: "Average traveler rating" },
  { value: "< 4 min", label: "Average support reply" },
];

function StatsBar() {
  return (
    <section className="bg-deep-sea text-deep-sea-foreground py-14">
      <div className="container ">
        <div className=" grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="px-0 md:px-8 py-6 md:py-0 first:pl-0"
            >
              <p className="font-heading text-4xl sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-deep-sea-foreground/65 max-w-[16ch]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
