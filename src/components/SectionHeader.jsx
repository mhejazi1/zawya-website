export default function SectionHeader({ number, label, title, description, align = "left" }) {
  return (
    <div className={`mb-12 md:mb-20 ${align === "center" ? "text-center" : ""}`}>
      <div className={`flex items-center gap-4 mb-6 ${align === "center" ? "justify-center" : ""}`}>
        {number && <span className="technical text-sage">{number}</span>}
        <div className="h-px w-12 bg-sage/30" />
        {label && <span className="technical text-muted-foreground">{label}</span>}
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}