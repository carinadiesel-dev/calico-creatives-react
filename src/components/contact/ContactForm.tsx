"use client";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { ValidationError, useForm } from "@formspree/react";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialogForm";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xvojrbdg");
  const [open, setOpen] = useState(true);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    await handleSubmit(e);

    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-8 px-12 py-20 border-2 border-transparent rounded-3xl bg-calicoPink-400"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="text-start">
          <Label htmlFor="fname" className="mb-2">
            First Name
          </Label>
          <Input
            id="fname"
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <ValidationError field="fname" prefix="fname" errors={state.errors} />
        </div>
        <div className="text-start">
          <Label htmlFor="lname">Last Name</Label>
          <Input
            id="lname"
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <ValidationError field="lname" prefix="lname" errors={state.errors} />
        </div>
      </div>

      <div className="text-start">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} />
      </div>

      <div className="text-start">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <ValidationError
          field="message"
          prefix="message"
          errors={state.errors}
        />
      </div>

      <div className="w-full translate-y-5">
        <button
          className="flex items-center justify-center w-full py-5 font-sans text-xl font-bold text-white border-4 rounded-full bg-calicoPink-400 hover:text-calicoPink-400 hover:bg-white"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
      {state.succeeded && (
        <div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center text-white lg:text-5xl">
                  Success !
                </DialogTitle>
                <DialogDescription className="font-sans text-xl font-bold text-center text-white">
                  <p className="pb-5 text-2xl">Thank you for contacting us.</p>
                  We have received your message and will get back to you soon.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </form>
  );
}
