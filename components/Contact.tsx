"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSubmitting(true)
    setStatus("idle")
    setStatusMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEBFORM || ""
    )

    formData.set(
        "subject",
        formData.get("message_subject")?.toString() ||
        "New Contact Form Message - Green Minds Malawi"
    )

    formData.set(
        "from_name",
        "Green Minds Malawi Website"
    )

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus("success")
        setStatusMessage(
            "Thank you for contacting us. Your message has been sent successfully."
        )

        form.reset()
      } else {
        console.error("Web3Forms error:", result)

        setStatus("error")
        setStatusMessage(
            result.message ||
            "Something went wrong while sending your message. Please try again."
        )
      }
    } catch (error) {
      console.error("Contact form error:", error)

      setStatus("error")
      setStatusMessage(
          "Unable to send your message right now. Please try again later."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <section className="py-24 md:py-40 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* Left: Content & Info */}
            <div className="space-y-12">
              <div className="space-y-6">

                {/* Contact heading */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight">
                  Let's grow a <br />
                  <span className="text-accent italic font-serif">
                  greener
                </span>{" "}
                  future.
                </h2>

                {/* Contact introduction */}
                <p className="text-muted text-lg leading-relaxed max-w-lg">
                  Have a question, an idea, or want to partner with us? We'd
                  love to hear from you. Our team usually responds within 24
                  hours.
                </p>
              </div>

              {/* Contact information */}
              <div className="space-y-8">

                {/* Email */}
                <div className="group flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-accent/30 hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>

                  <div>
                    {/* Contact email label */}
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">
                      Email Us
                    </p>

                    <p className="text-lg md:text-xl font-black text-primary break-all">
                      greenminds43@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-accent/30 hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>

                  <div>
                    {/* Contact phone label */}
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">
                      Call Us
                    </p>

                    <p className="text-lg md:text-xl font-black text-primary">
                      +265 981 01 08 14 / +265 886 55 59 64
                    </p>
                  </div>
                </div>

                {/* Volunteer and partnership */}
                <div className="group flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-accent/30 hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <div>
                    {/* Volunteer information */}
                    <p className="text-lg md:text-xl font-black text-primary">
                      Volunteer Now and Partner with Us
                    </p>

                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      Send us a message using the contact form and our team will
                      get back to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="premium-card p-8 md:p-12 relative overflow-hidden">

              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl" />

              <form
                  onSubmit={handleSubmit}
                  className="relative z-10 flex flex-col gap-6"
              >

                {/* Form metadata */}
                <input
                    type="hidden"
                    name="subject"
                    value="New Contact Form Message - Green Minds Malawi"
                />

                <input
                    type="hidden"
                    name="from_name"
                    value="Green Minds Malawi Website"
                />

                {/* Honeypot spam protection */}
                <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                {/* Name and email */}
                <div className="grid md:grid-cols-2 gap-6">

                  {/* Full name */}
                  <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-xs font-black uppercase tracking-widest text-primary/60 ml-1"
                    >
                      Full Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Davis"
                        required
                        disabled={isSubmitting}
                        className="w-full bg-[#FAFAF7] border-2 border-transparent focus:border-accent/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium disabled:opacity-60"
                    />
                  </div>

                  {/* Email address */}
                  <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-xs font-black uppercase tracking-widest text-primary/60 ml-1"
                    >
                      Email Address
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                        className="w-full bg-[#FAFAF7] border-2 border-transparent focus:border-accent/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                      htmlFor="message-subject"
                      className="text-xs font-black uppercase tracking-widest text-primary/60 ml-1"
                  >
                    Subject
                  </label>

                  <input
                      id="message-subject"
                      name="message_subject"
                      type="text"
                      placeholder="How can we help you?"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[#FAFAF7] border-2 border-transparent focus:border-accent/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium disabled:opacity-60"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                      htmlFor="message"
                      className="text-xs font-black uppercase tracking-widest text-primary/60 ml-1"
                  >
                    Your Message
                  </label>

                  <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, partnership, volunteering opportunity, or inquiry..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[#FAFAF7] border-2 border-transparent focus:border-accent/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium resize-none disabled:opacity-60"
                  />
                </div>

                {/* Submission status */}
                {status === "success" && (
                    <div className="flex items-start gap-3 rounded-2xl bg-accent/10 border border-accent/20 px-5 py-4">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />

                      <p className="text-sm font-medium text-primary leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                )}

                {status === "error" && (
                    <div className="flex items-start gap-3 rounded-2xl bg-red-50 border border-red-100 px-5 py-4">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />

                      <p className="text-sm font-medium text-red-700 leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                )}

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-premium bg-primary text-white w-full py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/10 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                      <>
                        {/* Loading spinner */}
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                        Sending...
                      </>
                  ) : (
                      <>
                        Send Message

                        <Send className="w-4 h-4" />
                      </>
                  )}
                </button>

                {/* Privacy notice */}
                <p className="text-center text-[10px] text-muted font-bold uppercase tracking-widest pt-4">
                  By clicking send, you agree to our{" "}
                  <a
                      href="#"
                      className="text-accent hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact