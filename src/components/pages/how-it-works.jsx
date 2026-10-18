import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  Plane,
  MapPin,
  Heart,
  Shield,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/footer";

const STEPS = [
  {
    icon: Search,
    title: "Discover & Explore",
    description:
      "Browse our curated collection of destinations or use our smart search to find exactly what you're looking for. Filter by budget, season, or travel style.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Calendar,
    title: "Plan Your Dates",
    description:
      "Select your travel dates and number of travelers. Our system checks real-time availability and shows you the best options for your schedule.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Heart,
    title: "Customize Your Trip",
    description:
      "Choose from flights, hotels, and complete packages. Add experiences, tours, and activities to create your perfect itinerary.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Plane,
    title: "Book & Travel",
    description:
      "Secure your booking with our safe payment system. Get instant confirmation and all your travel documents in one place.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const FEATURES = [
  {
    icon: Shield,
    title: "Travel Protection",
    description: "Comprehensive insurance and 24/7 traveler support",
  },
  {
    icon: MapPin,
    title: "Local Experts",
    description: "Guides and recommendations from people who live there",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Real humans ready to help, any time, anywhere",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Travelo made planning our honeymoon so easy. Everything was perfectly organized, and we could focus on enjoying our trip.",
    author: "Sarah & Mike",
    destination: "Santorini, Greece",
  },
  {
    quote:
      "I was nervous about traveling solo, but the itinerary and support made me feel confident every step of the way.",
    author: "Jessica Chen",
    destination: "Kyoto, Japan",
  },
  {
    quote:
      "Best travel booking experience ever. The customization options let us create exactly the trip we wanted.",
    author: "David Rodriguez",
    destination: "Patagonia, Chile",
  },
];

function HowItWorksPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background border-b">
          <div className="container py-16 md:py-24 text-center">
            <h1 className="animate-fade-up font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              How Travelo Works
            </h1>
            <p
              className="animate-fade-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
              style={{ animationDelay: "100ms" }}
            >
              From dream to departure in four simple steps. We handle the
              logistics so you can focus on the adventure.
            </p>
            <div
              className="animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <Button size="lg" asChild>
                <Link to="/destinations">Start Exploring</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="container py-20">
          <div className="space-y-16">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className={`animate-fade-up grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} mb-6`}
                  >
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading text-3xl text-foreground">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border shadow-lg">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        [
                          "1488646953014-85cb44e25828",
                          "1436491865332-7a61a109cc05",
                          "1501785888041-af3ef285b470",
                          "1436491865332-7a61a109cc05",
                        ][index]
                      }?w=800&auto=format&fit=crop&q=70`}
                      alt={step.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-muted/30 border-y">
          <div className="container py-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Why Choose Travelo
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're not just a booking platform—we're your travel partner
                every step of the way
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fade-up text-center p-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="container py-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Trusted by Travelers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it—here's what our travelers say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-up bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.destination}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-muted/30 border-y">
          <div className="container py-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How far in advance should I book?",
                  answer:
                    "We recommend booking 3-6 months in advance for international trips and 1-3 months for domestic travel. However, we often have last-minute deals available too.",
                },
                {
                  question: "Can I modify my booking after confirmation?",
                  answer:
                    "Yes! Most bookings can be modified up to 14 days before departure. Some restrictions may apply depending on your selected package.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, debit cards, and PayPal. You can also split your payment into installments for bookings over $1,000.",
                },
                {
                  question: "Is travel insurance included?",
                  answer:
                    "Basic travel protection is included with all bookings. You can upgrade to comprehensive coverage during checkout for complete peace of mind.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="animate-fade-up bg-card border rounded-xl p-6"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container py-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered their dream
            destinations with Travelo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/destinations" className="flex items-center gap-2">
                Browse Destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HowItWorksPage;
