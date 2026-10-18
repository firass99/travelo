import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import Footer from "@/components/footer";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(60, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  subject: z
    .string()
    .min(3, "Subject is too short")
    .max(100, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message is too long"),
});

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@travelo.com", "support@travelo.com"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "Mon-Fri, 9am-6pm EST"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Travel Avenue, Suite 400", "New York, NY 10001"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9am - 6pm", "Weekend: 10am - 4pm"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Contact form submitted:", data);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background border-b">
          <div className="container py-16 md:py-20 text-center">
            <h1 className="animate-fade-up font-heading text-4xl md:text-5xl text-foreground mb-4">
              Get in Touch
            </h1>
            <p
              className="animate-fade-up text-lg text-muted-foreground max-w-2xl mx-auto"
              style={{ animationDelay: "100ms" }}
            >
              Have questions about your trip? Our travel experts are here to
              help you plan the perfect adventure.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CONTACT_INFO.map((info, index) => (
              <div
                key={index}
                className="animate-fade-up bg-card border rounded-2xl p-6 hover:shadow-lg transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${info.bgColor} mb-4`}
                >
                  <info.icon className={`h-6 w-6 ${info.color}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left side - Form */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="mb-8">
                <h2 className="font-heading text-3xl mb-3">Send us a message</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {isSubmitSuccessful && (
                  <div className="animate-fade-up bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 rounded-lg px-4 py-3">
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">
                      Thanks for reaching out. We'll respond soon.
                    </p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Your name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className={errors.name ? "border-destructive" : ""}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      className={errors.email ? "border-destructive" : ""}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What can we help you with?"
                    className={errors.subject ? "border-destructive" : ""}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className={errors.message ? "border-destructive" : ""}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Right side - Map & Additional Info */}
            <div
              className="animate-fade-up space-y-6"
              style={{ animationDelay: "300ms" }}
            >
              <div>
                <h2 className="font-heading text-3xl mb-3">Visit our office</h2>
                <p className="text-muted-foreground mb-6">
                  Drop by our office for personalized travel planning assistance
                </p>

                {/* Map Placeholder */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=70"
                    alt="Office location"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold">123 Travel Avenue</p>
                      <p className="text-sm text-muted-foreground">
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-muted/50 border rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Answers</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Need immediate help?</p>
                    <p className="text-muted-foreground">
                      Check our Help Center for instant answers to common
                      questions
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Booking modifications?</p>
                    <p className="text-muted-foreground">
                      Login to your account to view and modify existing bookings
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Partnership inquiries?</p>
                    <p className="text-muted-foreground">
                      Email us at partners@travelo.com for business
                      opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-muted/30 border-t">
          <div className="container py-12 text-center">
            <p className="text-muted-foreground mb-6">
              Join 42,000+ travelers who trust Travelo
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {/* Social media icons would go here */}
              <div className="text-sm font-medium">Facebook</div>
              <div className="text-sm font-medium">Instagram</div>
              <div className="text-sm font-medium">Twitter</div>
              <div className="text-sm font-medium">LinkedIn</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
