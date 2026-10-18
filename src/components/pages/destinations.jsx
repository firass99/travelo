import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, Star, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DESTINATIONS } from "../../data/data";
import Footer from "@/components/footer";

const CATEGORIES = ["All", "Beach", "Mountain", "City", "Adventure"];

const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

function DestinationCard({ destination, index }) {
  return (
    <Link to={`/destinations/${destination.id}`} className="group block">
      <div
        className="animate-fade-up"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
          <img
            src={destination.image}
            alt={`${destination.name}, ${destination.country}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Rating badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-3 py-1.5 text-sm font-semibold shadow-lg">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span>{destination.rating}</span>
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-heading text-2xl leading-tight mb-1 group-hover:text-yellow-300 transition-colors">
                  {destination.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-white/90">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{destination.country}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-sm text-white/80 line-clamp-2 mb-3">
                {destination.description}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/70">Starting from</span>
                  <p className="text-2xl font-bold">${destination.price}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Destinations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    let filtered = [...DESTINATIONS];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (dest) =>
          dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (dest) => dest.price >= priceRange[0] && dest.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Most popular (default order)
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("popular");
    setPriceRange([0, 2000]);
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "All" ||
    sortBy !== "popular" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 2000;

  return (
    <>
      <div className="min-h-screen bg-background pt-8">
        {/* Page Title */}
        <div className="container mb-8">
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
            Discover Destinations
          </h1>
          <p className="text-muted-foreground">
            Explore handpicked destinations from around the world
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b shadow-sm">
          <div className="container py-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  className="pl-10 pr-4"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Sort & Filters */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {SORT_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowFilters(!showFilters)}
                  className={showFilters ? "bg-accent" : ""}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <span className="text-sm text-muted-foreground">
                  Active filters:
                </span>
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchQuery}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setSearchQuery("")}
                    />
                  </Badge>
                )}
                {selectedCategory !== "All" && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedCategory}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setSelectedCategory("All")}
                    />
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="h-7 text-xs"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredDestinations.length}
              </span>{" "}
              {filteredDestinations.length === 1
                ? "destination"
                : "destinations"}{" "}
              found
            </p>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredDestinations.map((destination, index) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                No destinations found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <Button onClick={handleClearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {filteredDestinations.length > 0 && (
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-t">
            <div className="container py-16 md:py-20 text-center">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our travel experts can craft a custom itinerary just for you.
                Tell us where you want to go.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Destinations;
