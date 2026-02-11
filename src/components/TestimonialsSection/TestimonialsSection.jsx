import React from "react";
import "./TestimonialsSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import photo from "../../assets/john-doe-image.png";

export default function TestimonialsSection() {
  const defaultTestimonial = {
    image: photo,
    content:
      "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    rating: 5,
    name: "John Doe",
  };

  return (
    <div className="testimonials-section">
      <SectionTitle
        label="Testimonial"
        title="What They Are Saying"
        description="Our customers love our service and quality of food delivery"
      />

      <TestimonialCard {...defaultTestimonial} />
    </div>
  );
}
