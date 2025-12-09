"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, User, Loader2, CheckCircle2, Music2, HelpCircle } from "lucide-react"
import { toast } from "sonner"
import { submitContactMessage } from "@/lib/actions/contact"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactMessage(formData)

      if (result.success) {
        setSubmitted(true)
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

        // Reset submitted message after a delay if desired, or leave it
        setTimeout(() => setSubmitted(false), 8000)
      } else {
        toast.error(result.error || "Failed to send message.")
      }
    } catch (error) {
      toast.error("An unexpected error occurred.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@melodymakerstudio.com",
      link: "mailto:contact@melodymakerstudio.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+44 (0) 7777 24 3332",
      link: "tel:+447777243332"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "London, United Kingdom",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden pt-32 pb-20">

      {/* Optional Top Gradient to separate header from nav if needed */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">MelodyMaker Studio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            We’d love to hear from you. Reach out to collaborate, create, or ask a question.
          </p>
          {/* Glowing Underline / Soundwave */}
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* 2. Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none group-hover:opacity-75 transition-opacity duration-1000" />

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center h-[500px] space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-300 max-w-md">
                    Thank you! Your message has been successfully sent to MelodyMaker Studio. We'll be in touch shortly.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-6 border-white/10 hover:bg-white/5">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <User size={16} className="text-purple-400" /> Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <Mail size={16} className="text-purple-400" /> Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <Phone size={16} className="text-purple-400" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <MessageCircle size={16} className="text-purple-400" /> Subject
                      </label>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all cursor-pointer"
                        >
                          <option value="" disabled className="bg-[#0a0514] text-gray-500">Select a subject...</option>
                          <option value="General Enquiry" className="bg-[#130b2b]">General Enquiry</option>
                          <option value="Song Production" className="bg-[#130b2b]">Song Production</option>
                          <option value="Ready-Made Songs" className="bg-[#130b2b]">Ready-Made Songs</option>
                          <option value="Artist Collaboration Request" className="bg-[#130b2b]">Artist Collaboration Request</option>
                          <option value="Personalised Songs" className="bg-[#130b2b]">Personalised Songs</option>
                          <option value="Producer Collaboration Request" className="bg-[#130b2b]">Producer Collaboration Request</option>
                          <option value="Music Distribution" className="bg-[#130b2b]">Music Distribution (Spotify, Apple Music, etc.)</option>
                          <option value="Music Release Strategy & Planning" className="bg-[#130b2b]">Music Release Strategy & Planning</option>
                          <option value="Marketing & Promo Support" className="bg-[#130b2b]">Marketing & Promo Support</option>
                          <option value="Licensing & Usage Rights Enquiry" className="bg-[#130b2b]">Licensing & Usage Rights Enquiry</option>
                          <option value="Project Quote / Pricing Request" className="bg-[#130b2b]">Project Quote / Pricing Request</option>
                          <option value="Partnership or Business Proposal" className="bg-[#130b2b]">Partnership or Business Proposal</option>
                          <option value="Technical Support" className="bg-[#130b2b]">Technical Support (Website / Account)</option>
                          <option value="Other" className="bg-[#130b2b]">Other – Not Listed</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <MessageCircle size={16} className="text-purple-400" /> Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-6 rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Message</>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ Helper Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Have questions before reaching out?</p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 gap-2 rounded-full px-6 border-0">
                <a href="/faq">
                  <HelpCircle className="w-4 h-4" />
                  Frequently Asked Questions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* 3. Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col h-full gap-6"
          >
            {/* Info Cards */}
            <div className="flex flex-col gap-6 shrink-0">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-center gap-6 group hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">{info.title}</h3>
                    <a href={info.link} className="text-lg font-semibold text-white hover:text-purple-300 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Interactive Map */}
            {/* 4. Flashing Action Buttons */}
            {/* 4. Flashing Action Buttons */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[150px] relative overflow-hidden flex flex-col justify-center gap-4">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none" />

              <Button asChild className="w-full h-auto py-4 text-lg font-bold rounded-xl relative overflow-hidden group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20">
                <a href="/ready-made-songs/request" className="flex flex-col items-center justify-center gap-1">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10"
                  />
                  <div className="flex items-center gap-2 relative z-10">
                    <Music2 className="w-6 h-6" />
                    <span>Request Ready-Made Song</span>
                  </div>
                  <span className="text-xs font-normal text-purple-200 relative z-10">Get a hit song with full stems</span>
                </a>
              </Button>

              <Button asChild className="w-full h-auto py-4 text-lg font-bold rounded-xl relative overflow-hidden group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/20">
                <a href="/request-song" className="flex flex-col items-center justify-center gap-1">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute inset-0 bg-white/10"
                  />
                  <div className="flex items-center gap-2 relative z-10">
                    {/* Imported Sparkles from lucide-react if not already available, or use Music2/Star */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                    <span>Request a Personal Song</span>
                  </div>
                  <span className="text-xs font-normal text-blue-200 relative z-10">Custom-made just for you</span>
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
