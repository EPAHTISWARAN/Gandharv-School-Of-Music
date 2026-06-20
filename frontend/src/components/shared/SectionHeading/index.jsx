export default function SectionHeading({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
          {subtitle}
        </p>
      )}

      <h2 className="font-heading text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}