import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail, CheckCircle, XCircle, ArrowUpRight } from 'lucide-react';

const socials = [
  { href: 'mailto:kayodeogbetah76@gmail.com', label: 'Email', handle: 'kayodeogbetah76@gmail.com', Icon: Mail },
  { href: 'https://linkedin.com/in/kay-ogbetah-b44a23323', label: 'LinkedIn', handle: 'kay-ogbetah', Icon: Linkedin },
  { href: 'https://github.com/devkay579', label: 'GitHub', handle: 'devkay579', Icon: Github },
  { href: 'https://x.com/kayode_oo', label: 'X', handle: '@kayode_oo', Icon: Twitter },
];

const fieldClass =
  'w-full rounded-xl border border-ink/15 bg-paper/50 px-4 py-3 text-ink placeholder:text-ink-faint transition focus:outline-none focus:border-forest focus:bg-white focus:ring-4 focus:ring-forest/10 disabled:opacity-50';

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
    <section id="contact" className="section bg-paper-deep relative">
      <div className="page">

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

        <SectionHeading
          index="06"
          label="Contact"
          title={
            <>
              Let's build <em className="italic text-forest">something</em>.
            </>
          }
        />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
          <SectionWrapper>
            <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-sm">
              Have a project, a role or a question? Send a message, or reach me directly.
            </p>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {socials.map(({ href, label, handle, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4 text-ink hover:text-forest transition-colors"
                  >
                    <Icon size={18} className="text-forest" />
                    <span className="font-semibold">{label}</span>
                    <span className="ml-auto text-sm text-ink-muted truncate group-hover:text-forest">{handle}</span>
                    <ArrowUpRight size={16} className="shrink-0 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-6">
              {(
                [
                  ['name', 'Name', 'text', 'Your name'],
                  ['email', 'Email', 'email', 'you@example.com'],
                ] as const
              ).map(([key, label, type, placeholder]) => (
                <div key={key}>
                  <label htmlFor={`contact-${key}`} className="eyebrow block mb-2 text-[0.6875rem]">
                    {label}
                  </label>
                  <input
                    id={`contact-${key}`}
                    type={type}
                    required
                    placeholder={placeholder}
                    autoComplete={key}
                    value={formData[key]}
                    disabled={sending}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className={fieldClass}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-message" className="eyebrow block mb-2 text-[0.6875rem]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me a little about it"
                  disabled={sending}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-paper border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message <Send size={17} />
                  </>
                )}
              </button>
            </form>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
