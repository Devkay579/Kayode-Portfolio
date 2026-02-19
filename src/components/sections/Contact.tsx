import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        'service_id',
        'template_id',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'public_key'
      );
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#E8E2D5]">
      <div className="container mx-auto max-w-2xl">
        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-[#2C5F4A] border-b-2 border-[#2C5F4A] pb-2 inline-block">
            Contact
          </h2>
        </SectionWrapper>

        {sent ? (
          <SectionWrapper>
            <div className="bg-white p-8 rounded shadow-lg text-center border-l-4 border-[#2C5F4A]">
              <p className="text-2xl text-[#2C5F4A] mb-4">Message sent!</p>
              <p className="text-[#2D2D2D]">I'll get back to you soon.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-[#2C5F4A] hover:underline"
              >
                Send another
              </button>
            </div>
          </SectionWrapper>
        ) : (
          <SectionWrapper>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg space-y-6 border-l-4 border-[#2C5F4A]">
              <div>
                <label className="block text-[#2C5F4A] mb-1 font-mono text-sm">name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b-2 border-[#8B8B8B] py-2 px-1 bg-transparent focus:outline-none focus:border-[#2C5F4A] transition"
                />
              </div>
              <div>
                <label className="block text-[#2C5F4A] mb-1 font-mono text-sm">email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b-2 border-[#8B8B8B] py-2 px-1 bg-transparent focus:outline-none focus:border-[#2C5F4A] transition"
                />
              </div>
              <div>
                <label className="block text-[#2C5F4A] mb-1 font-mono text-sm">message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b-2 border-[#8B8B8B] py-2 px-1 bg-transparent focus:outline-none focus:border-[#2C5F4A] transition"
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                className="bg-[#2C5F4A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1E4A3A] transition flex items-center justify-center gap-2 w-full"
              >
                {sending ? 'Sending...' : 'Send Message'} <Send size={18} />
              </motion.button>
            </form>
          </SectionWrapper>
        )}

        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-[#8B8B8B] hover:text-[#2C5F4A] transition">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-[#8B8B8B] hover:text-[#2C5F4A] transition">
            <Linkedin size={28} />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-[#8B8B8B] hover:text-[#2C5F4A] transition">
            <Twitter size={28} />
          </a>
          <a href="mailto:your.email@example.com" className="text-[#8B8B8B] hover:text-[#2C5F4A] transition">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;