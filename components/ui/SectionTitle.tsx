type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={
        "text-[1.5rem] text-[var(--black)] mb-8 pb-2 " +
        "border-b-[3px] border-[var(--black)] " +
        "leading-tight " +
        className
      }
    >
      {children}
    </h2>
  );
}
