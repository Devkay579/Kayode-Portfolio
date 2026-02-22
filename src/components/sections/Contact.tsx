import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const [toast, setToast] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);

    try {
      const response = await fetch('https://formspree.io/f/mjkeldpk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        showToast('success', 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        showToast('error', 'Failed to send message.');
      }
    } catch (error) {
      showToast('error', 'Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#E8E2D5] relative">
      <div className="container mx-auto max-w-2xl">

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 ${
                toast.type === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 text-white'
              }`}
            >
              {toast.type === 'success' ? (
                <CheckCircle size={20} />
              ) : (
                <XCircle size={20} />
              )}
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>

        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-[#2C5F4A] border-b-2 border-[#2C5F4A] pb-2 inline-block">
            Contact
          </h2>
        </SectionWrapper>

        <SectionWrapper>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-lg space-y-6 border-l-4 border-[#2C5F4A]"
          >
            {/* Name */}
            <div>
              <label className="block text-[#2C5F4A] mb-1 font-mono text-sm">
                name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                disabled={sending}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border-b-2 border-[#8B8B8B] py-2 px-1 bg-transparent focus:outline-none focus:border-[#2C5F4A] transition disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#2C5F4A] mb-1 font-mono text-sm">
                email
              </label>
              <input
                type="email"
                required
                disabled={sending}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border-b-2 border-[#8B8B8B] py-2 px-1 bg-transparent focus:outline-none focus:border-[#2C5F4A] transition disabled:opacity-50"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#2C5F4A] mb-1 font-mono text-sm">
                message
              </label>
              <textarea
                required
                rows={4}
                disabled={sending}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border-b-2 border-[#8B8B8B] py-2 px-1 bg-transparent focus:outline-none focus:border-[#2C5F4A] transition disabled:opacity-50"
              />
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: sending ? 1 : 1.02 }}
              whileTap={{ scale: sending ? 1 : 0.98 }}
              className="bg-[#2C5F4A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1E4A3A] transition flex items-center justify-center gap-2 w-full disabled:opacity-60"
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </SectionWrapper>

        {/* Socials */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/devkay579"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B8B8B] hover:text-[#2C5F4A] transition"
          >
            <Github size={28} />
          </a>

          <a
            href="https://linkedin.com/in/kay-ogbetah-b44a23323"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B8B8B] hover:text-[#2C5F4A] transition"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="https://x.com/kayode_oo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B8B8B] hover:text-[#2C5F4A] transition"
          >
            <Twitter size={28} />
          </a>

          <a
            href="mailto:kayodeogbetah76@gmail.com"
            className="text-[#8B8B8B] hover:text-[#2C5F4A] transition"
          >
            <Mail size={28} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;