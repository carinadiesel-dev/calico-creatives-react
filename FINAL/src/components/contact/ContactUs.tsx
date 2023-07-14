import { SingleHeader } from "../singlePage/SingleHeader"
import { IconEnvelope } from "../icons/IconEnvelope"


export const ContactUs = () => {
    return (
      <div className="grid bg-center bg-no-repeat bg-contain bg-single lg:grid-cols-2">
        <div className="pl-16">
         <SingleHeader title="Contact Us" />
         <ol className="space-y-6 font-sans text-4xl text-calicoGray-400">
            <li>Suané Erweë</li>
            <li className="flex items-center gap-2"><IconEnvelope stroke="#707070" size={1.5} /><a href="#">info@calicocreatives.net</a></li>
         </ol>
        </div>
        <div>
        </div>
      </div>
    )
}
