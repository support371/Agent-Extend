import { FileText, Upload, Eye, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type DocumentStatus = "draft" | "submitted" | "under_review" | "needs_action" | "approved" | "expired";

interface DocumentStatusProps {
  status: DocumentStatus;
  showLabel?: boolean;
  size?: "sm" | "md";
}

const statusConfig: Record<DocumentStatus, { icon: typeof FileText; label: string; className: string }> = {
  draft: {
    icon: FileText,
    label: "Draft",
    className: "text-muted-foreground",
  },
  submitted: {
    icon: Upload,
    label: "Submitted",
    className: "text-blue-600 dark:text-blue-400",
  },
  under_review: {
    icon: Eye,
    label: "Under Review",
    className: "text-amber-600 dark:text-amber-400",
  },
  needs_action: {
    icon: AlertCircle,
    label: "Needs Action",
    className: "text-orange-600 dark:text-orange-400",
  },
  approved: {
    icon: CheckCircle,
    label: "Approved",
    className: "text-green-600 dark:text-green-400",
  },
  expired: {
    icon: Clock,
    label: "Expired",
    className: "text-red-600 dark:text-red-400",
  },
};

export function DocumentStatus({ status, showLabel = true, size = "md" }: DocumentStatusProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={cn("flex items-center gap-1.5", config.className)}>
      <Icon className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      {showLabel && (
        <span className={size === "sm" ? "text-xs" : "text-sm"}>{config.label}</span>
      )}
    </div>
  );
}

interface DocumentStatusTimelineProps {
  currentStatus: DocumentStatus;
}

const statusOrder: DocumentStatus[] = ["draft", "submitted", "under_review", "approved"];

export function DocumentStatusTimeline({ currentStatus }: DocumentStatusTimelineProps) {
  const currentIndex = statusOrder.indexOf(
    currentStatus === "needs_action" ? "under_review" : 
    currentStatus === "expired" ? "approved" : currentStatus
  );

  return (
    <div className="flex items-center gap-2 w-full">
      {statusOrder.map((status, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        const config = statusConfig[status];
        const Icon = config.icon;

        return (
          <div key={status} className="flex items-center gap-2 flex-1">
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors",
                isCompleted && "bg-primary border-primary text-primary-foreground",
                isCurrent && "border-primary text-primary",
                !isCompleted && !isCurrent && "border-muted-foreground/30 text-muted-foreground/50"
              )}
            >
              <Icon className="h-4 w-4" />
            </div>
            {index < statusOrder.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 rounded-full",
                  isCompleted ? "bg-primary" : "bg-muted-foreground/20"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
