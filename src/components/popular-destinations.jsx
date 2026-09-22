import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import "swiper/css";

const DESTINATIONS = [
  {
    name: "Santorini",
    country: "Greece",
    price: 890,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=700&auto=format&fit=crop&q=70",
  },
  {
    name: "Kyoto",
    country: "Japan",
    price: 1240,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=700&auto=format&fit=crop&q=70",
  },
  {
    name: "Ubud",
    country: "Bali, Indonesia",
    price: 760,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&auto=format&fit=crop&q=70",
  },
  {
    name: "Torres del Paine",
    country: "Patagonia, Chile",
    price: 1580,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=70",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    price: 690,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=700&auto=format&fit=crop&q=70",
  },
  {
    name: "Queenstown",
    country: "New Zealand",
    price: 1390,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=70",
  },
];

function DestinationCard({ d }) {
  return (
    <Link
      to={`/destinations/${d.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
        <img
          src={d.image}
          alt={`${d.name}, ${d.country}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium">
          <Star className="h-3 w-3 fill-seafoam text-seafoam" />
          {d.rating}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="font-heading text-xl leading-tight">{d.name}</p>
          <p className="text-sm text-white/80">{d.country}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        from <span className="font-semibold text-foreground">${d.price}</span>
      </p>
    </Link>
  );
}

function PopularDestinations() {
  const swiperRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const syncEdges = (swiper) => {
    // With loop enabled these stay true even at the "real" ends, since
    // Swiper wraps around — kept here for a non-loop fallback.
    setCanScrollPrev(!swiper.isBeginning || swiper.params.loop);
    setCanScrollNext(!swiper.isEnd || swiper.params.loop);
  };

  return (
    <section>
      <div className="container">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground">
              Places people keep going back to
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Pulled from this year's actual bookings, not a stock list — these
              are where our travelers spend the most nights.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6  lg:mx-[max(1.5rem,calc((100vw-80rem)/2+2rem))]">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncEdges(swiper);
          }}
          onSlideChange={syncEdges}
          loop
          spaceBetween={20}
          slidesPerView={1.4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            520: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.6 },
            1024: { slidesPerView: 3.4 },
            1280: { slidesPerView: 4.2 },
          }}
        >
          {DESTINATIONS.map((d) => (
            <SwiperSlide key={d.name}>
              <DestinationCard d={d} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PopularDestinations;
