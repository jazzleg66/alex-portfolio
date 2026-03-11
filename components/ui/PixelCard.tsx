import React from "react";

type PixelCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PixelCard({ children, className = "" }: PixelCardProps) {
  return (
    <div
      className={
        "bg-[var(--cream)] border-[3px] border-[var(--black)] " +
        "shadow-[4px_4px_0px_var(--black)] p-6 " +
        className
      }
    >
      {children}
    </div>
  );
}
