import React from "react";
import { Link } from "react-router-dom";
import { Plane, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", url: "/destinations" },
      { label: "Packages", url: "/packages" },
      { label: "Flights", url: "/flights" },
      { label: "Stays", url: "/stays" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Travelo", url: "/about" },
      { label: "Careers", url: "/careers" },
      { label: "Travel blog", url: "/blogs" },
      { label: "Press", url: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", url: "/contact" },
      { label: "Manage booking", url: "/manage-booking" },
      { label: "Cancellations", url: "/cancellations" },
      { label: "Travel insurance", url: "/insurance" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-sand text-sand-foreground">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-12 py-12 border-b border-sand-foreground/10">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-heading text-2xl"
            >
              <Plane className="h-5 w-5" />
              Travelo
            </Link>
            <p className="mt-4 text-sm text-sand-foreground/70 max-w-xs">
              Trip planning for people who'd rather be packing than comparing
              tabs. Get one good deal in your inbox a week.
            </p>
            <form
              className="mt-5 flex gap-2 max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                required
                placeholder="you@email.com"
                className="bg-background"
              />
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-medium text-sm">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.url}>
                      <Link
                        to={link.url}
                        className="text-sm text-sand-foreground/70 hover:text-sand-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sand-foreground/60">
          <p>© {new Date().getFullYear()} Travelo. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="hover:text-sand-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-sand-foreground transition-colors"
            >
              Terms
            </Link>
            <div className="flex items-center gap-3 pl-2">
              <a
                href="#"
                aria-label="Phone"
                className="hover:text-sand-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Phone"
                className="hover:text-sand-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Phone"
                className="hover:text-sand-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
