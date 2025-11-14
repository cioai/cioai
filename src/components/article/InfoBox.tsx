import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoBoxProps {
  type: "info" | "success" | "warning" | "error";
  title: string;
  children: React.ReactNode;
}

export const InfoBox = ({ type, title, children }: InfoBoxProps) => {
  const config = {
    info: {
      icon: Info,
      className: "bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-300",
    },
    success: {
      icon: CheckCircle,
      className: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-300",
    },
    warning: {
      icon: AlertTriangle,
      className: "bg-yellow-500/10 border-yellow-500/20 text-yellow-700 dark:text-yellow-300",
    },
    error: {
      icon: AlertCircle,
      className: "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-300",
    },
  };

  const { icon: Icon, className } = config[type];

  return (
    <div className={cn("my-6 p-6 rounded-xl border", className)}>
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold mb-2">{title}</h4>
          <div className="text-sm leading-relaxed opacity-90">{children}</div>
        </div>
      </div>
    </div>
  );
};
