import { Leaf, Trees, Mountain, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CareLevel = "beginner" | "intermediate" | "advanced" | "expert";

interface CareLevelBadgeProps {
  level: CareLevel;
  className?: string;
}

const careLevelConfig: Record<CareLevel, { icon: typeof Leaf; label: string; className: string }> = {
  beginner: {
    icon: Leaf,
    label: "Beginner",
    className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  },
  intermediate: {
    icon: Trees,
    label: "Intermediate",
    className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  },
  advanced: {
    icon: Mountain,
    label: "Advanced",
    className: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  },
  expert: {
    icon: Crown,
    label: "Expert",
    className: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  },
};

export function CareLevelBadge({ level, className }: CareLevelBadgeProps) {
  const config = careLevelConfig[level];
  const Icon = config.icon;

  return (
    <Badge
      variant="secondary"
      className={cn(
        "flex items-center gap-1 text-xs no-default-hover-elevate no-default-active-elevate",
        config.className,
        className
      )}
    >
      <Icon className="h-3 w-3" />
      <span>{config.label}</span>
    </Badge>
  );
}
