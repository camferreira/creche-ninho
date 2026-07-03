import { LucideIcon } from "lucide-react";

type ContactItemProps = {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  variant?: "green" | "orange";
};

export default function ContactItem({
  icon: Icon,
  title,
  children,
  variant = "green",
}: ContactItemProps) {
  const variants = {
    green: {
      container: "bg-[var(--primary-light)]",
      icon: "text-[var(--primary)]",
    },
    orange: {
      container: "bg-[var(--accent-light)]",
      icon: "text-[var(--accent)]",
    },
  };

  const colors = variants[variant];

  return (
    <div className="flex items-center gap-5 py-5">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${colors.container}`}
      >
        <Icon
          className={`h-6 w-6 ${colors.icon}`}
          strokeWidth={2}
        />
      </div>

      <div>
        <h2 className="font-semibold text-[var(--primary)]">
          {title}
        </h2>

        <div className="mt-1 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}