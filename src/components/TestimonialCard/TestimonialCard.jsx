import React from "react";
import "./TestimonialCard.css";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";

export default function TestimonialCard({ image, content, rating = 5, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 40, // سرعة الانطلاق (اجعلها قليلة لتكون الحركة هادئة)
        damping: 20, // السر هنا! الرقم العالي يمنع الاستعجال في النهاية ويجعل التوقف ناعماً
        mass: 1, // يعطي ثقل للعنصر فلا يبدو خفيفاً يهرول لمكانه
      }}
      className="testimonial-card"
    >
      <img src={image} alt={name} />
      <p>{content}</p>
      <div className="testimonial-rating">
        <Rating name="read-only" value={rating} readOnly />
      </div>
      <h3>{name}</h3>
    </motion.div>
  );
}
