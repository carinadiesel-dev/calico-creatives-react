import { SingleHeader } from "../singlePage/SingleHeader"
import { IconEnvelope } from "../icons/IconEnvelope"
import { ContactForm } from "./ContactForm"


export const ContactUs = () => {
    return (
      <div className="flex flex-col-reverse gap-8 px-16 lg:justify-around lg:flex-row">
        
        <div className="">
         <SingleHeader title="Contact Us" />
         <ol className="space-y-6 font-sans text-4xl text-calicoGray-400">
            <li>Suané Erweë</li>
            <li className="flex items-center gap-2"><IconEnvelope stroke="#707070" size={1.5} /><a href="#">info@calicocreatives.net</a></li>
         </ol>
        </div>
        <div className="lg:w-1/3">
          <ContactForm />
        </div>
        
      </div>
    )
}
