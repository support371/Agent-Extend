import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The documentation-first approach saved us months of compliance headaches. Every permit was handled seamlessly.",
    author: "Dr. Sarah Chen",
    role: "Conservation Director",
    organization: "Pacific Wildlife Reserve",
  },
  {
    quote: "Finally a platform that understands institutional requirements. The verification process gave us complete confidence.",
    author: "Marcus Thompson",
    role: "Procurement Manager",
    organization: "National Zoo Authority",
  },
  {
    quote: "Their welfare checkpoints exceeded our standards. The animals arrived in excellent condition with complete transit documentation.",
    author: "Elena Rodriguez",
    role: "Veterinary Lead",
    organization: "European Research Institute",
  },
];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.author
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-primary/30 mb-4" />
        <p className="text-foreground leading-relaxed flex-1 mb-6">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{testimonial.author}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}, {testimonial.organization}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
}
