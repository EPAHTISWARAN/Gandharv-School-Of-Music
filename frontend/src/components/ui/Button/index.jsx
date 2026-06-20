import { cn } from "../../../utils/cn";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:opacity-90",

    secondary:
      "bg-[var(--secondary)] text-black hover:opacity-90",

    outline:
      "border border-[var(--primary)] text-[var(--primary)]",
  };

  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3 font-medium transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}