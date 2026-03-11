import React from "react";

type PixelButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "black" | "red" | "green";
  type?: "button" | "submit";
  className?: string;
};

const variantStyles: Record<string, string> = {
  black: "bg-[var(--black)] text-[var(--cream)] border-[var(--black)] hover:bg-[var(--cream)] hover:text-[var(--black)]",
  red:   "bg-[var(--red)]   text-[var(--cream)] border-[var(--black)] hover:bg-[var(--cream)] hover:text-[var(--red)]",
  green: "bg-[var(--green)] text-[var(--cream)] border-[var(--black)] hover:bg-[var(--cream)] hover:text-[var(--green)]",
};

export default function PixelButton({
  children,
  onClick,
  href,
  variant = "black",
  type = "button",
  className = "",
}: PixelButtonProps) {
  const base =
    "inline-block px-5 py-3 text-[0.875rem] leading-none border-[3px] " +
    "shadow-[4px_4px_0px_var(--black)] transition-all duration-100 " +
    "active:shadow-none active:translate-x-[4px] active:translate-y-[4px] " +
    "cursor-pointer select-none " +
    variantStyles[variant] +
    " " +
    className;

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
