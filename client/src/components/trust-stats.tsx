import { Shield, Heart, Truck, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stat {
  icon: typeof Shield;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Shield,
    value: "2,500+",
    label: "Verified Sellers",
  },
  {
    icon: Heart,
    value: "15,000+",
    label: "Welfare Checkpoints",
  },
  {
    icon: Truck,
    value: "8,000+",
    label: "Compliant Shipments",
  },
  {
    icon: Globe,
    value: "45+",
    label: "Partner Countries",
  },
];

interface TrustStatsProps {
  className?: string;
}

export function TrustStats({ className }: TrustStatsProps) {
  return (
    <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-card border"
          data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <stat.icon className="h-8 w-8 text-primary mb-3" />
          <span className="text-3xl font-bold text-foreground mb-1">{stat.value}</span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
