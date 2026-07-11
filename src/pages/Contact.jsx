import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import { contactInfo } from "@/data/siteContent";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <SectionHeader
          number="01"
          label="Contact"
          title="Let's discuss your next development."
          description="Whether you're exploring a partnership, seeking advisory, or have a general inquiry, we'd welcome the conversation."
        />
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
        <AnimatedLine className="mb-12 md:mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <Reveal>
                <div className="border border-sage p-12 md:p-16 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Thank you.</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your message has been received. Our team will be in touch shortly.
                  </p>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="technical text-muted-foreground block mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="technical text-muted-foreground block mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="technical text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="technical text-muted-foreground block mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Investment Inquiry</option>
                    <option>Advisory Services</option>
                    <option>Media & Press</option>
                  </select>
                </div>
                <div>
                  <label className="technical text-muted-foreground block mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && (
                    <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-4 space-y-10">
            <Reveal>
              <div>
                <span className="technical text-sage block mb-5">Offices</span>
                {contactInfo.entities.map((entity) => (
                  <div key={entity.name} className="mb-5">
                    <p className="font-medium text-sm">{entity.name}</p>
                    <p className="text-muted-foreground text-sm mt-1">{entity.address}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="technical text-sage block mb-5">Email</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm hover:text-sage transition-colors border-b border-border pb-1"
                >
                  {contactInfo.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <span className="technical text-sage block mb-5">Response Time</span>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24–48 hours.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}