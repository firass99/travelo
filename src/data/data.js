import { Package, Plane, Hotel } from "lucide-react";
export const DESTINATIONS = [
  {
    id: "1",
    name: "Santorini",
    country: "Greece",
    price: 890,
    start: "2026-09-12",
    end: "2026-09-30",
    rating: 4.9,
    description:
      "Whitewashed villages perched on volcanic cliffs above the Aegean, with legendary sunsets over Oia and black-sand beaches to match.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "2",
    name: "Kyoto",
    country: "Japan",
    price: 1240,
    start: "2026-09-12",
    end: "2026-09-30",
    rating: 4.8,
    description:
      "Japan's former imperial capital, where centuries-old temples, quiet bamboo groves, and geisha districts sit alongside serene Zen gardens.",
    image:
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "3",
    name: "Ubud",
    country: "Bali, Indonesia",
    price: 760,
    start: "2026-09-12",
    end: "2026-09-30",
    rating: 4.7,
    description:
      "Terraced rice paddies, jungle rivers, and a slower pace of life at the cultural heart of Bali, known for yoga retreats and artisan markets.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "4",
    name: "Torres del Paine",
    country: "Patagonia, Chile",
    price: 1580,
    start: "2026-09-12",
    end: "2026-09-30",
    rating: 4.9,
    description:
      "Dramatic granite peaks, glacial lakes, and windswept trails at the edge of the world — a bucket-list destination for hikers and photographers.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "5",
    name: "Marrakech",
    country: "Morocco",
    price: 690,
    start: "2026-09-12",
    end: "2026-09-30",
    rating: 4.6,
    description:
      "A maze of souks, spice markets, and riads behind ancient city walls, with the Atlas Mountains rising just beyond the medina.",
    image:
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "6",
    name: "Queenstown",
    country: "New Zealand",
    price: 1390,
    start: "2026-09-12",
    end: "2026-09-30",
    rating: 4.8,
    description:
      "New Zealand's adventure capital, set on a glacial lake surrounded by the Southern Alps — bungee jumping, skiing, and epic hiking all within reach.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=70",
  },
];

export const TYPES = [
  { value: "packages", label: "Packages", icon: Package },
  { value: "flights", label: "Flights", icon: Plane },
  { value: "stays", label: "Stays", icon: Hotel },
];

export const USERS = [
  { email: "user@gmail.com", password: "User2026", role: "USER" },
  { email: "admin@gmail.com", password: "Admin2026", role: "ADMIN" },
];
