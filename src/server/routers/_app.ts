import { publicProcedure, router } from '../trpc'
import {ContactSchema} from '@/ui/forms/Form'
import sendMail from '@/server/lib/sendMail'

export const mainRouter = router({

  submitContactForm: publicProcedure
    .input(ContactSchema)
    .mutation(async ({ input }) => {
      await sendMail({
        to: input.email,
        subject: "Re: Fig2Story enquiry",
        replyTo: `Regardt Nel <regardt@codeswop.com>`,
        cc: ["regardt@codeswop.com", "dean@codeswop.com"],
        text: `Hey ${input.firstName},\n\nThanks so much for reaching out. Please open the link below so that we can meet up and discuss your new Storybook.\n\nhttps://calendar.app.google/oMHPYVytkNGQ6YpJ6 \n\nAlternatively, you can just message me if you have any questions! \n\nRegards,\nRegardt Nel`
      });
    })

});