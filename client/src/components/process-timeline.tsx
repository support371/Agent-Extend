import { useState } from "react";
import { 
  Search, MapPin, UserCheck, Shield, FileText, 
  Stethoscope, CreditCard, Plane, CheckCircle,
  ChevronDown, ChevronUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  icon: typeof Search;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: Search,
    title: "Explore",
    shortDescription: "Browse verified species catalog",
    fullDescription: "Explore our curated catalog of species available for legal acquisition. Each entry includes care requirements, eligibility information, and educational resources.",
  },
  {
    number: 2,
    icon: MapPin,
    title: "Region Eligibility",
    shortDescription: "Scan for destination compliance",
    fullDescription: "Our system automatically checks eligibility based on your destination country, identifying any restrictions or special requirements before you proceed.",
  },
  {
    number: 3,
    icon: UserCheck,
    title: "Account Verification",
    shortDescription: "Complete buyer qualification",
    fullDescription: "Verify your account with required documentation. This may include facility inspections, purpose declarations, and readiness acknowledgments.",
  },
  {
    number: 4,
    icon: Shield,
    title: "Seller Vetting",
    shortDescription: "Connect with verified sellers",
    fullDescription: "All sellers undergo rigorous verification including license checks, facility audits, and ethical sourcing reviews before being approved on our platform.",
  },
  {
    number: 5,
    icon: FileText,
    title: "Document Readiness",
    shortDescription: "Compile required paperwork",
    fullDescription: "Our document center guides you through all required permits, health certificates, CITES documentation, and import/export licenses for your specific transaction.",
  },
  {
    number: 6,
    icon: Stethoscope,
    title: "Vet Clearance",
    shortDescription: "Health and travel fitness check",
    fullDescription: "Licensed veterinarians perform pre-travel health assessments to ensure animals meet fitness-to-travel standards and destination health requirements.",
  },
  {
    number: 7,
    icon: CreditCard,
    title: "Payment Confirmation",
    shortDescription: "Secure transaction processing",
    fullDescription: "Complete your payment through our secure system. Funds are held in escrow until all compliance checkpoints are cleared and delivery is confirmed.",
  },
  {
    number: 8,
    icon: Plane,
    title: "Booking & Transit",
    shortDescription: "Customs and transport support",
    fullDescription: "We coordinate with certified animal transport specialists, arrange customs clearance, and provide real-time tracking throughout the journey.",
  },
  {
    number: 9,
    icon: CheckCircle,
    title: "Delivery & Closeout",
    shortDescription: "Welfare-verified handover",
    fullDescription: "Final welfare check upon arrival, handover documentation, and post-transport care guidance to ensure a successful transition for the animal.",
  },
];

interface ProcessTimelineProps {
  compact?: boolean;
}

export function ProcessTimeline({ compact = false }: ProcessTimelineProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  if (compact) {
    return (
      <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <step.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs font-medium">{step.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="hidden lg:flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <button
              onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
              className="flex flex-col items-center gap-2 group"
              data-testid={`button-step-${step.number}`}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                expandedStep === step.number
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-primary group-hover:bg-primary/20"
              )}>
                <step.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-center max-w-[100px]">{step.title}</span>
            </button>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-border mx-2 min-w-[20px]" />
            )}
          </div>
        ))}
      </div>

      <div className="lg:hidden grid gap-3">
        {steps.map((step) => (
          <Card key={step.number} className="overflow-hidden" data-testid={`card-step-${step.number}`}>
            <button
              onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
              className="w-full flex items-center gap-4 p-4 text-left"
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors",
                expandedStep === step.number
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-primary"
              )}>
                <step.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Step {step.number}</span>
                </div>
                <h4 className="font-semibold">{step.title}</h4>
              </div>
              {expandedStep === step.number ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
            {expandedStep === step.number && (
              <CardContent className="pt-0 pb-4 px-4">
                <p className="text-sm text-muted-foreground pl-14">{step.fullDescription}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {expandedStep !== null && (
        <Card className="hidden lg:block">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                {(() => {
                  const step = steps.find(s => s.number === expandedStep);
                  if (step) {
                    const Icon = step.icon;
                    return <Icon className="h-6 w-6 text-primary-foreground" />;
                  }
                  return null;
                })()}
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Step {expandedStep}</p>
                <h4 className="text-xl font-semibold mb-2">
                  {steps.find(s => s.number === expandedStep)?.title}
                </h4>
                <p className="text-muted-foreground">
                  {steps.find(s => s.number === expandedStep)?.fullDescription}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
