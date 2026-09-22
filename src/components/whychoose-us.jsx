import React from "react";
import {
  ShieldCheck,
  Headset,
  BadgePercent,
  CalendarClock,
} from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="bg-sand">
      <div className="container">
        <h2 className="font-heading text-3xl sm:text-4xl text-sand-foreground max-w-lg">
          The parts of travel we handle so you don't have to
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Large featured tile */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-deep-sea text-deep-sea-foreground p-8 sm:p-10 flex flex-col justify-between min-h-[320px]">
            <ShieldCheck className="h-8 w-8 text-accent" />
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl leading-snug">
                If a trip falls through, we rebook it — no back-and-forth.
              </h3>
              <p className="mt-4 text-deep-sea-foreground/75 max-w-md">
                Every package includes free rescheduling and a real person on
                call, day or night, wherever you've landed. Cancelled flight,
                closed border, bad weather — we handle the fix while you keep
                moving.
              </p>
            </div>
          </div>

          {/* Three smaller tiles */}
          <div className="space-y-4">
            {/*             <div className="rounded-3xl bg-card border border-border p-7">
              <Headset className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-heading text-xl">
                Support in your time zone
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Chat or call a human agent, not a queue — average reply under
                four minutes.
              </p>
            </div> */}

            <div className="rounded-3xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <BadgePercent className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-heading text-xl">
                Price match, automatically
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                If your booked rate drops before departure, we refund the
                difference without you asking.
              </p>
            </div>

            <div className="rounded-3xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CalendarClock className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-heading text-xl">
                Plans that flex with you
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Move dates up to 48 hours before most departures at no extra
                charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
