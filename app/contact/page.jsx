"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Hero Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Have a question about Echo Chats? Want to collaborate on a project?
            Or just want to say hello? I would love to hear from you. Drop me a
            message and I wll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur"></div>
              <div className="relative bg-card p-8 rounded-lg border">
                <form action="https://formspree.io/f/mzzgeeqk" method="POST">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                    Send Me a Message
                  </h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell me more about your project, question, or just say hello..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Lets Connect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I am always excited to discuss new ideas, collaborate on
                  projects, or help with any questions you might have about Echo
                  Link. Choose your preferred way to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-border/80 transition-colors duration-200">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      sanjaykanwasi3@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-border/80 transition-colors duration-200">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">Phone</h3>
                    <p className="text-muted-foreground">+91 9761709516</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-border/80 transition-colors duration-200">
                  <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      Roorkee, Uttarakhand
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Sanjaykanwasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-accent p-3 rounded-lg border border-border hover:border-border/80 transition-all duration-200 group"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sanjay-singh-kanwasi-057177200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-accent p-3 rounded-lg border border-border hover:border-border/80 transition-all duration-200 group"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
                  </a>
                  <a
                    href="https://portfolio-react-sanjay.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-accent p-3 rounded-lg border border-border hover:border-border/80 transition-all duration-200 group"
                  >
                    <Globe className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How quickly do you respond to messages?
              </h3>
              <p className="text-muted-foreground">
                I typically respond within 24-48 hours. For urgent matters,
                please mention it in your subject line.
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do you offer custom development services?
              </h3>
              <p className="text-muted-foreground">
                Yes! I am available for freelance projects and consulting. Lets
                discuss your requirements and see how I can help.
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Can I contribute to Echo Chats?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Echo Chat is open source. Check out the GitHub
                repository and feel free to submit pull requests or report
                issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
