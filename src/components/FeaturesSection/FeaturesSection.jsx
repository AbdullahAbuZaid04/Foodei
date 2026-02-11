import React from "react";
import "./FeaturesSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import FeatureCard from "../FeatureCard/FeatureCard";
import photo1 from "../../assets/pick-meals-image.png";
import photo2 from "../../assets/choose-image.png";
import photo3 from "../../assets/delivery-image.png";

export default function FeaturesSection() {
  const defaultFeatures = [
    {
      id: 1,
      icon: photo1,
      title: "Pick Meals",
      description:
        "Lorem ipsum dolor sit amet consectetur. More orci and sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      id: 2,
      icon: photo2,
      title: "Choose How Often",
      description:
        "Lorem ipsum dolor sit amet consectetur. More orci and sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      id: 3,
      icon: photo3,
      title: "Fast Deliveries",
      description:
        "Lorem ipsum dolor sit amet consectetur. More orci and sagittis duis elementum interdum facilisi bibendum.",
    },
  ];

  return (
    <div className="features-section">
      <SectionTitle
        label="How It Works"
        title="Simple 3 Steps"
        description="Pick your meals, choose delivery frequency, and enjoy fresh food at your door"
      />

      <div className="features-grid">
        {defaultFeatures.map((feature) => (
          <FeatureCard key={feature.id} {...feature} index={feature.id} />
        ))}
      </div>
    </div>
  );
}
