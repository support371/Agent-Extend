import { CheckCircle, Shield, FileCheck, Globe, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BadgeType = "verified_seller" | "health_docs" | "region_eligible" | "institutional" | "approved";

interface VerificationBadgeProps {
  type: BadgeType;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const badgeConfig: Record<BadgeType, { icon: typeof CheckCircle; label: string; variant: "default" | "secondary" | "outline" }> = {
  verified_seller: {
    icon: Shield,
    label: "Verified Seller",
    variant: "default",
  },
  health_docs: {
    icon: FileCheck,
    label: "Health Docs Complete",
    variant: "secondary",
  },
  region_eligible: {
    icon: Globe,
    label: "Region Eligible",
    variant: "outline",
  },
  institutional: {
    icon: Building2,
    label: "Institutional Account",
    variant: "default",
  },
  approved: {
    icon: CheckCircle,
    label: "Approved",
    variant: "default",
  },
};

const sizeClasses = {
  sm: "text-xs py-0.5 px-2 gap-1",
  md: "text-sm py-1 px-3 gap-1.5",
  lg: "text-base py-1.5 px-4 gap-2",
};

const iconSizes = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function VerificationBadge({ type, size = "sm", className }: VerificationBadgeProps) {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <Badge
      variant={config.variant}
      className={cn("flex items-center", sizeClasses[size], className)}
    >
      <Icon className={iconSizes[size]} />
      <span>{config.label}</span>
    </Badge>
  );
}
