import { Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";

export const contactConfig = {
  title: "Let's Contact",
  description:
    "Open for collaboration, ideas, or just a good tech conversation.",
  form: {
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone Number",
      message: "Message",
    },
    placeholders: {
      name: "Your name",
      email: "your.email@example.com",
      phone: "+1 (555) 123-4567",
      message: "Tell me about your project...",
    },
    submitButton: "Send Message",
    successMessage: "Thanks for your message! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again.",
  },
  socialData: [
    {
      name: "Email",
      text: "vaibhavkesarwani100@gmail.com",
      icon: Mail,
      href: "mailto:vaibhavkesarwani100@gmail.com"
    },
  ],
  socialLinks: [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/vaibhavkesarwani__",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/Vaibhav_k__",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vaibhavdev",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@soon",
    },
  ],
};
