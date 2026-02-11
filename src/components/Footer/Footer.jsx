import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.svg";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion"; // استيراد موشن

export default function Footer() {
  const socialLinks = [
    { icon: BsTwitter, label: "Twitter", url: "#" },
    { icon: SiLinkedin, label: "LinkedIn", url: "#" },
    { icon: BsYoutube, label: "YouTube", url: "#" },
    { icon: FaFacebookF, label: "Facebook", url: "#" },
  ];

  // مصفوفات البيانات كما هي في كودك
  const quickLinks = [
    { title: "Quality", url: "#" },
    { title: "Help", url: "#" },
    { title: "Share", url: "#" },
    { title: "Careers", url: "#" },
    { title: "Testimonials", url: "#" },
    { title: "Work", url: "#" },
  ];

  const contactInfo = [
    { value: "244-5333-7783", type: "phone" },
    { value: "hello@food.com", type: "email" },
    { value: "press@food.com", type: "email" },
    { value: "contact@food.com", type: "email" },
  ];

  const legalLinks = [
    { title: "Terms & Conditions", url: "#" },
    { title: "Privacy Policy", url: "#" },
  ];

  // إعدادات الأنيميشن الخفيف
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.18, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="footer-content">
        {/* العمود الأول: اللوجو والسوشيال */}
        <motion.div
          className="footer-brand"
          custom={1}
          variants={fadeInVariant}
        >
          <div className="footer-logo">
            <img src={Logo} alt="Foodei Logo" />
          </div>
          <div className="footer-socials">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  whileHover={{ y: -3, color: "white" }} // حركة بسيطة جداً
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-column"
          custom={2}
          variants={fadeInVariant}
        >
          <h4 className="footer-column-title">Quick Links</h4>
          <ul className="footer-list">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="footer-column"
          custom={3}
          variants={fadeInVariant}
        >
          <h4 className="footer-column-title">Contact</h4>
          <ul className="footer-list">
            {contactInfo.map((info, index) => (
              <li key={index}>
                <span>{info.value}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          className="footer-column"
          custom={4}
          variants={fadeInVariant}
        >
          <h4 className="footer-column-title">Legal</h4>
          <ul className="footer-list">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div className="footer-bottom" custom={5} variants={fadeInVariant}>
        <p>&copy; {new Date().getFullYear()} Foodei. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
