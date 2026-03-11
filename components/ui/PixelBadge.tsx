type PixelBadgeProps = {
  children: React.ReactNode;
  variant?: "tan" | "black" | "red" | "green";
  className?: string;
};

const variantStyles: Record<string, string> = {
  tan:   "bg-[var(--tan)]   text-[var(--black)] border-[var(--black)]",
  black: "bg-[var(--black)] text-[var(--cream)] border-[var(--black)]",
  red:   "bg-[var(--red)]   text-[var(--cream)] border-[var(--black)]",
  green: "bg-[var(--green)] text-[var(--cream)] border-[var(--black)]",
};

export default function PixelBadge({
  children,
  variant = "tan",
  className = "",
}: PixelBadgeProps) {
  return (
    <span
      className={
        "inline-block px-3 py-1 text-[0.75rem] leading-none " +
        "border-[2px] shadow-[2px_2px_0px_var(--black)] " +
        variantStyles[variant] +
        " " +
        className
      }
    >
      {children}
    </span>
  );
}
