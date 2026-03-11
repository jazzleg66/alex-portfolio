import ContactSection from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alex Chang for freelance, consulting, or collaborations.",
  openGraph: {
    title: "Contact | Alex Chang",
    description: "Get in touch with Alex Chang for freelance, consulting, or collaborations.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
