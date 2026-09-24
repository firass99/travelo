import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DESTINATIONS } from "../data/data";

function SearchWidget() {
  const navigate = useNavigate();
  const [destinationId, setDestinationId] = useState("anywhere");
  const [depart, setDepart] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [errors, setErrors] = useState({});

  const todayStr = new Date().toISOString().split("T")[0]; // for the `min` attr

  const selectedDestination = DESTINATIONS.find((d) => d.id === destinationId);

  const clearError = (field) =>
    setErrors((prev) => ({ ...prev, [field]: undefined }));

  const validate = () => {
    const newErrors = {};
    const today = new Date();
    //today.setHours(0, 0, 0, 0);

    if (!destinationId) {
      newErrors.destination = "Please choose a destination.";
    }

    if (!depart) {
      newErrors.depart = "Please choose a departure date.";
    } else if (new Date(depart) < today) {
      newErrors.depart = "Departure date can't be in the past.";
    }

    if (!returnDate) {
      newErrors.returnDate = "Please choose a return date.";
    } else if (depart && new Date(returnDate) <= new Date(depart)) {
      newErrors.returnDate = "Return date must be after departure.";
    }

    if (!travelers || travelers < 1) {
      newErrors.travelers = "At least 1 traveler is required.";
    } else if (travelers > 20) {
      newErrors.travelers = "Max 20 travelers per search.";
    }

    // Cross-check requested dates against this destination's own availability
    if (
      selectedDestination &&
      selectedDestination.start &&
      selectedDestination.end &&
      depart &&
      returnDate &&
      !newErrors.depart &&
      !newErrors.returnDate
    ) {
      const availStart = new Date(selectedDestination.start);
      const availEnd = new Date(selectedDestination.end);
      const reqStart = new Date(depart);
      const reqEnd = new Date(returnDate);

      if (reqStart < availStart || reqEnd > availEnd) {
        newErrors.returnDate = `${selectedDestination.name} is only available ${selectedDestination.start} to ${selectedDestination.end}.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (destinationId === "anywhere") {
      const results = DESTINATIONS.filter((d) => {
        if (!d.start || !d.end) return true;
        const availStart = new Date(d.start);
        const availEnd = new Date(d.end);
        return (
          new Date(depart) >= availStart && new Date(returnDate) <= availEnd
        );
      });
      navigate("/destinations", {
        state: { results, depart, returnDate, travelers },
      });
      return;
    }

    navigate(`/destinations/${destinationId}`, {
      state: { depart, returnDate, travelers },
    });
  };

  return (
    <div className="rounded-3xl bg-card border border-border shadow-2xl p-5 sm:p-6 md:p-8">
      <form
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.9fr_auto] gap-4 items-start"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="destination"
            className="text-xs text-muted-foreground"
          >
            Destination
          </Label>
          <Select
            value={destinationId}
            onValueChange={(val) => {
              setDestinationId(val);
              clearError("destination");
            }}
          >
            <SelectTrigger
              id="destination"
              className={`w-full ${errors.destination ? "border-destructive" : ""}`}
            >
              {/* Forcing the display text fixes the "shows id" issue */}
              <SelectValue placeholder="Where to?">
                {destinationId === "anywhere"
                  ? "Anywhere"
                  : selectedDestination
                    ? `${selectedDestination.name}, ${selectedDestination.country}`
                    : "Where to?"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="anywhere">Anywhere</SelectItem>
              {DESTINATIONS.map((dest) => (
                <SelectItem value={dest.id} key={dest.id}>
                  {dest.name}, {dest.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.destination && (
            <p className="text-xs text-destructive">{errors.destination}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="depart" className="text-xs text-muted-foreground">
            Departing
          </Label>
          <Input
            id="depart"
            type="date"
            min={todayStr}
            className={`w-full ${errors.depart ? "border-destructive" : ""}`}
            value={depart}
            onChange={(e) => {
              setDepart(e.target.value);
              clearError("depart");
            }}
          />
          {errors.depart && (
            <p className="text-xs text-destructive">{errors.depart}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="return" className="text-xs text-muted-foreground">
            Returning
          </Label>
          <Input
            id="return"
            type="date"
            min={depart || todayStr}
            className={`w-full ${errors.returnDate ? "border-destructive" : ""}`}
            value={returnDate}
            onChange={(e) => {
              setReturnDate(e.target.value);
              clearError("returnDate");
            }}
          />
          {errors.returnDate && (
            <p className="text-xs text-destructive">{errors.returnDate}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="travelers" className="text-xs text-muted-foreground">
            Travelers
          </Label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="travelers"
              type="number"
              min={1}
              max={20}
              className={`pl-9 w-full ${errors.travelers ? "border-destructive" : ""}`}
              value={travelers}
              onChange={(e) => {
                setTravelers(Number(e.target.value));
                clearError("travelers");
              }}
            />
          </div>
          {errors.travelers && (
            <p className="text-xs text-destructive">{errors.travelers}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-muted-foreground invisible select-none">
            Search
          </Label>
          <Button
            type="submit"
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 w-full lg:w-auto"
          >
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchWidget;
