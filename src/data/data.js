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

export const BLOGS = [
  {
    id: "1",
    title: "10 Hidden Gems in Southeast Asia You've Never Heard Of",
    excerpt: "Discover breathtaking destinations that aren't on every tourist's radar. From secret beaches to mountain villages, these spots offer authentic experiences away from the crowds.",
    author: "Sarah Chen",
    date: "2026-10-05",
    readTime: "8 min read",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&auto=format&fit=crop&q=70",
    featured: true,
  },
  {
    id: "2",
    title: "The Ultimate Guide to Solo Travel in Europe",
    excerpt: "Everything you need to know about traveling solo across Europe, from safety tips to the best hostels, and how to meet fellow travelers along the way.",
    author: "Michael Torres",
    date: "2026-09-28",
    readTime: "12 min read",
    category: "Solo Travel",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=70",
    featured: false,
  },
  {
    id: "3",
    title: "How to Plan a Budget-Friendly Trip to Japan",
    excerpt: "Japan doesn't have to break the bank. Learn how to experience cherry blossoms, temples, and incredible food while staying within your budget.",
    author: "Yuki Tanaka",
    date: "2026-09-20",
    readTime: "10 min read",
    category: "Budget Travel",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=70",
    featured: true,
  },
  {
    id: "4",
    title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
    excerpt: "Make your adventures more eco-friendly with these practical tips for sustainable travel, from choosing accommodations to supporting local communities.",
    author: "Emma Green",
    date: "2026-09-15",
    readTime: "6 min read",
    category: "Sustainable Travel",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=70",
    featured: false,
  },
  {
    id: "5",
    title: "Best Photography Spots for Your Instagram Feed",
    excerpt: "Level up your travel photography with these stunning locations guaranteed to make your followers stop scrolling. Includes camera settings and best times to visit.",
    author: "David Kim",
    date: "2026-09-10",
    readTime: "7 min read",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=70",
    featured: false,
  },
  {
    id: "6",
    title: "A Foodie's Guide to Street Food Around the World",
    excerpt: "From Bangkok's night markets to Mexico City's tacos, explore the world's best street food scenes and what you absolutely must try in each destination.",
    author: "Maria Rodriguez",
    date: "2026-09-05",
    readTime: "9 min read",
    category: "Food & Culture",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=70",
    featured: false,
  },
  {
    id: "7",
    title: "Digital Nomad Life: Working Remotely from Paradise",
    excerpt: "What's it really like to be a digital nomad? The truth about working from tropical beaches, reliable WiFi, and maintaining work-life balance on the road.",
    author: "Alex Thompson",
    date: "2026-08-28",
    readTime: "11 min read",
    category: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop&q=70",
    featured: false,
  },
  {
    id: "8",
    title: "Adventure Travel: Conquering the Inca Trail to Machu Picchu",
    excerpt: "A first-hand account of hiking the legendary Inca Trail. What to pack, fitness requirements, altitude sickness tips, and why it's worth every step.",
    author: "Carlos Mendez",
    date: "2026-08-20",
    readTime: "15 min read",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&auto=format&fit=crop&q=70",
    featured: true,
  },
];
