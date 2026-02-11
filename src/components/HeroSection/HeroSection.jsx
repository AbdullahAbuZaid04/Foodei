import React from "react";
import Button from "../Button/Button";
import "./HeroSection.css";
import { motion } from "framer-motion";

export default function HeroSection({
  title,
  description,
  buttonText,
  contentImg,
  imagePosition = "right",
}) {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {imagePosition === "left" && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="hero-image-container"
        >
          <img src={contentImg} alt="Hero" className="hero-main-img" />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="hero-content"
      >
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <Button text={buttonText} />
      </motion.div>

      {imagePosition === "right" && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-image-container"
        >
          <img src={contentImg} alt="Hero" className="hero-main-img" />
        </motion.div>
      )}
    </motion.div>
  );
}
