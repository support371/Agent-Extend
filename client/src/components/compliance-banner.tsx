import { Shield, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type BannerType = "compliance" | "warning" | "info";

interface ComplianceBannerProps {
  type?: BannerType;
  message: string;
  className?: string;
}

const bannerConfig: Record<BannerType, { icon: typeof Shield; className: string }> = {
  compliance: {
    icon: Shield,
    className: "bg-primary/10 border-primary/20 text-foreground",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-900/20 dark:border-amber-800/30 dark:text-amber-200",
  },
  info: {
    icon: Info,
    className: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800/30 dark:text-blue-200",
  },
};

export function ComplianceBanner({ type = "compliance", message, className }: ComplianceBannerProps) {
  const config = bannerConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 border rounded-md",
        config.className,
        className
      )}
      role="alert"
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
