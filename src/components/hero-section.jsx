import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchWidget from "./search-widget";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-14 pb-32 md:pb-40">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text column */}
        <div className="lg:col-span-6">
          <h1
            className="animate-fade-up font-heading text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-foreground max-w-md"
            style={{ animationDelay: "0ms" }}
          >
            Go somewhere that changes how you see the map.
          </h1>

          <p
            className="animate-fade-up mt-6 text-muted-foreground text-lg max-w-sm leading-relaxed"
            style={{ animationDelay: "120ms" }}
          >
            We plan the logistics — flights, stays, the parts that are easy to
            get wrong — so the trip you take is the one you actually wanted.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "220ms" }}
          >
            <Button
              asChild
              size="lg"
              className="  bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/destinations" className="flex items-center">
                Browse destinations
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/how-it-works">How it works</Link>
            </Button>
          </div>

          <div
            className="animate-fade-up mt-10 flex items-center gap-6 text-sm text-muted-foreground"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&q=60",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=60",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=60",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <span>Trusted by 42,000 travelers this year</span>
          </div>
        </div>

        {/* Image collage column */}
        <div className="lg:col-span-6 relative mx-2">
          <div
            className="animate-fade-up relative aspect-[4/5] max-w-md ml-auto rounded-3xl overflow-hidden"
            style={{ animationDelay: "160ms" }}
          >
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&auto=format&fit=crop&q=70"
              alt="Mountain lake at golden hour"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="animate-fade-up absolute -left-4 sm:left-0 bottom-8 w-44 sm:w-52 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-4 ring-background"
            style={{ animationDelay: "280ms" }}
          >
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=70"
              alt="Coastal town street"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="animate-fade-up absolute -top-6 right-2 sm:right-10 rounded-2xl bg-card px-4 py-3 shadow-lg border border-border flex items-center gap-2"
            style={{ animationDelay: "380ms" }}
          >
            <MapPin className="h-4 w-4 text-accent" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">Santorini, Greece</p>
              <p className="text-xs text-muted-foreground">from $890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating search widget overlapping the hero's bottom edge */}
      <div className="container relative z-10 -mb-40 md:-mb-48">
        <div className="animate-float-in" style={{ animationDelay: "420ms" }}>
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
