import { ContactUs } from "@/components/contact/ContactUs";
import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/footer/Footer";

export default function Contact() {
  return (
    <div>
      <div className="flex">
        <ContactUs />
        <ContactForm/>
      </div>
      <Footer backgroundColor="bg-calicoPink-400" />
    </div>
  );
}
