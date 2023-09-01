import { ContactUs } from "@/components/contact/ContactUs";
import { Footer } from "@/components/footer/Footer";

export default function Contact() {
  return (
    <div className="bg-no-repeat bg-contain bg-single">
      <div className="py-32">
        <ContactUs />
      </div>

      <Footer backgroundColor="bg-calicoPink-400" />
    </div>
  );
}
