import "./FeatureCard.css";
import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.3, ease: "easeInOut" }}
    >
      <div className="feature-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
}
