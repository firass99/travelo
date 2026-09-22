import React, { useState } from "react";
import { Search, Plane, Hotel, Package, Users } from "lucide-react";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  { value: "packages", label: "Packages", icon: Package },
  { value: "flights", label: "Flights", icon: Plane },
  { value: "stays", label: "Stays", icon: Hotel },
];

function SearchWidget() {
  const [tab, setTab] = useState("packages");

  return (
    <div className="rounded-3xl bg-card border border-border shadow-2xl p-5 sm:p-6 md:p-8">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="bg-muted">
          {TABS.map(({ value, label, icon: Icon }) => (
            <TabsTrigger key={value} value={value} className="gap-1.5">
              <Icon className="h-3.5 w-3.5" />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <form
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.9fr_auto] gap-4 items-end"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="destination"
            className="text-xs text-muted-foreground"
          >
            Destination
          </Label>
          <Select defaultValue="anywhere">
            <SelectTrigger id="destination" className="w-full">
              <SelectValue placeholder="Where to?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="anywhere">Anywhere</SelectItem>
              <SelectItem value="santorini">Santorini, Greece</SelectItem>
              <SelectItem value="bali">Bali, Indonesia</SelectItem>
              <SelectItem value="kyoto">Kyoto, Japan</SelectItem>
              <SelectItem value="patagonia">Patagonia, Chile</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="depart" className="text-xs text-muted-foreground">
            Departing
          </Label>
          <Input id="depart" type="date" className="w-full" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="return" className="text-xs text-muted-foreground">
            Returning
          </Label>
          <Input id="return" type="date" className="w-full" />
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
              defaultValue={2}
              className="pl-9 w-full"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 w-full lg:w-auto"
        >
          <Search className="h-4 w-4" />
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchWidget;
