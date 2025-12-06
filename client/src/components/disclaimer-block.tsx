import { Info, Shield, AlertTriangle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

type DisclaimerType = "eligibility" | "regulatory" | "prohibited" | "welfare";

interface DisclaimerBlockProps {
  type: DisclaimerType;
  className?: string;
}

const disclaimerContent: Record<DisclaimerType, { icon: typeof Info; title: string; text: string }> = {
  eligibility: {
    icon: Info,
    title: "Eligibility Notice",
    text: "Availability and transport eligibility vary by species, origin, and destination.",
  },
  regulatory: {
    icon: Shield,
    title: "Regulatory Authority Notice",
    text: "Documentation support does not replace official approvals by competent authorities.",
  },
  prohibited: {
    icon: AlertTriangle,
    title: "Prohibited Trade Notice",
    text: "We do not list, broker, or ship prohibited or restricted species.",
  },
  welfare: {
    icon: Heart,
    title: "Welfare Commitment",
    text: "All shipments must meet our welfare and fitness-to-travel thresholds.",
  },
};

export function DisclaimerBlock({ type, className }: DisclaimerBlockProps) {
  const content = disclaimerContent[type];
  const Icon = content.icon;

  return (
    <div className={cn("flex items-start gap-3 p-4 bg-muted/50 rounded-md", className)}>
      <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-foreground">{content.title}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{content.text}</p>
      </div>
    </div>
  );
}

export function DisclaimerStrip({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-4", className)}>
      <DisclaimerBlock type="eligibility" />
      <DisclaimerBlock type="regulatory" />
      <DisclaimerBlock type="prohibited" />
      <DisclaimerBlock type="welfare" />
    </div>
  );
}
