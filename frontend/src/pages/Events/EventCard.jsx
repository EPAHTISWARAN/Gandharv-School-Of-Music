import { motion } from "framer-motion";

export default function EventCard({
  title,
  description,
  image,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover"
        />
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}