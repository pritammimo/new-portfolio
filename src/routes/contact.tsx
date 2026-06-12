import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { GlassCard } from '../components/GlassCard';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const to = 'crpritamsaha@gmail.com';
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Pritam,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}\n\n---\nSent from your portfolio contact form.`
    );
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {/* Title Header */}
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Let's Connect</h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
          Have an interesting project, job opportunity, or just want to chat engineering? Feel free to reach out.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Contact info sidebar */}
        <section className="md:col-span-2 flex flex-col gap-6">
          <GlassCard className="flex flex-col gap-6 border border-white/5" hoverable={false}>
            <h2 className="text-lg font-bold text-white border-b border-white/5 pb-3">Contact Details</h2>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Email Address</h4>
                  <a href="mailto:crpritamsaha@gmail.com" className="text-sm text-white hover:text-brand-primary transition-colors font-medium mt-1 inline-block">
                    crpritamsaha@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Phone</h4>
                  <a href="tel:+918961783042" className="text-sm text-white hover:text-brand-secondary transition-colors font-medium mt-1 inline-block">
                    +91 8961783042
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Location</h4>
                  <p className="text-sm text-white font-medium mt-1">
                    Kolkata, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-5 mt-2">
              <h4 className="text-sm font-semibold text-gray-400">Social Profiles</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/pritammimo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/5"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/Pritam-saha-b3b65b190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/5"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Message form section */}
        <section className="md:col-span-3">
          <GlassCard className="relative overflow-hidden border border-white/5" hoverable={false}>
            {isSuccess && (
              <div className="absolute inset-0 bg-brand-bg/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                <CheckCircle size={56} className="text-brand-secondary mb-4 animate-float" />
                <p className="text-sm text-gray-400 max-w-sm mb-6">
                  Your message details have been pre-filled in Gmail. Just hit send to reach me!
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-5 py-2.5 bg-brand-primary hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all cursor-pointer text-sm"
                >
                  Send Another Message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`px-4 py-2.5 bg-black/40 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${errors.name
                        ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20'
                        : 'border-white/10 focus:border-brand-primary focus:ring-brand-primary/30'
                      }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-400">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-4 py-2.5 bg-black/40 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${errors.email
                        ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20'
                        : 'border-white/10 focus:border-brand-primary focus:ring-brand-primary/30'
                      }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-gray-400">
                  Subject Topic
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`px-4 py-2.5 bg-black/40 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${errors.subject
                      ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-white/10 focus:border-brand-primary focus:ring-brand-primary/30'
                    }`}
                  placeholder="Inquiry about full-time role..."
                />
                {errors.subject && (
                  <span className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-gray-400">
                  Detailed Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`px-4 py-2.5 bg-black/40 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all resize-none ${errors.message
                      ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-white/10 focus:border-brand-primary focus:ring-brand-primary/30'
                    }`}
                  placeholder="Hey Pritam, I noticed your portfolio and wanted to discuss a potential opportunity..."
                />
                {errors.message && (
                  <span className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 bg-brand-primary hover:bg-brand-primary/95 disabled:bg-brand-primary/60 text-white font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer select-none transition-all shadow-md shadow-brand-primary-glow hover:translate-y-[-1px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
