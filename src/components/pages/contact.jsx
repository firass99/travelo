import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "name is too short").max(60, "name is too long"),
  email: z
    .string()
    .min(1, "email is required")
    .email("please enter a valid email"),
  subject: z
    .string()
    .min(3, "subject is too short")
    .max(100, "subject is too long"),
  message: z
    .string()
    .min(10, "message should be at least 10 characters")
    .max(1000, "message is too long"),
});

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
      // TODO: replace with a real API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Contact form submitted:", data);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="contact-page" className="w-full">
      <div className="container py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl text-foreground">
            Get in touch
          </h1>
          <p className="mt-3 text-muted-foreground">
            Questions about a trip, a booking, or anything else — we'd love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-muted-foreground">
                  hello@travelo.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-sm text-muted-foreground">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Office</p>
                <p className="text-sm text-muted-foreground">
                  123 Travel Ave, Suite 400
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {isSubmitSuccessful && (
              <p className="text-sm text-green-600 bg-green-50 dark:bg-green-950/30 rounded-lg px-3 py-2">
                Thanks — your message has been sent. We'll get back to you soon.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  className={errors.name ? "border border-red-500" : ""}
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  className={errors.email ? "border border-red-500" : ""}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                className={errors.subject ? "border border-red-500" : ""}
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-sm text-red-500">
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                className={errors.message ? "border border-red-500" : ""}
                {...register("message")}
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  {errors.message.message}
                </span>
              )}
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
