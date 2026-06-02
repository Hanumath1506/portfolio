type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="type-h2 text-[#E8EDF2] mb-2">{title}</h2>
      {subtitle && <p className="type-subtitle">{subtitle}</p>}
    </div>
  );
}
