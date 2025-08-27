"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const heroTitleLine1 = 'How can we';
  const heroTitleLine2 = 'help you?';
  const heroSubtitle = 'Find answers to common questions, or get in touch with our support team';
  const faqsTitle = 'Frequently Asked Questions';
  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        { question: 'What is this platform?', answer: 'It is a managed n8n hosting service. You can deploy, scale, and manage n8n instances without worrying about servers.' },
        { question: 'Do I need an n8n license?', answer: 'n8n is open-source. Our service provides the infrastructure and management for running your n8n instances.' },
      ],
    },
    {
      category: 'Billing & Plans',
      questions: [
        { question: 'Is there a free trial?', answer: 'Yes. We provide a limited-time trial so you can evaluate the platform before subscribing.' },
        { question: 'Can I upgrade or downgrade later?', answer: 'Yes. You can switch plans at any time. Changes take effect at the next billing cycle or immediately for one-time upgrades.' },
      ],
    },
    {
      category: 'Technical',
      questions: [
        { question: 'Can I connect my own domain?', answer: 'Yes. You can map your custom domain to your instance with automatic SSL.' },
        { question: 'How do I back up my workflows?', answer: 'We recommend exporting critical workflows regularly. Our infrastructure provides redundancy, but manual exports offer extra safety.' },
      ],
    },
  ];

  useEffect(() => { setOpenFaq(null); }, []);

  const faqSectionRef = useRef(null);
  useEffect(() => {
    let wasVisible = false;
    const handleCheck = () => {
      const el = faqSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top < vh && rect.bottom > 0;
      if (!isVisible) {
        wasVisible = false;
      } else if (isVisible && !wasVisible) {
        setOpenFaq(null);
        wasVisible = true;
      }
    };
    window.addEventListener('scroll', handleCheck, { passive: true });
    window.addEventListener('resize', handleCheck);
    handleCheck();
    return () => {
      window.removeEventListener('scroll', handleCheck);
      window.removeEventListener('resize', handleCheck);
    };
  }, []);

  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, path: '/help' }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success ?? true)) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
            {heroTitleLine1}
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{heroTitleLine2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSectionRef} className="relative z-10 pt-6 md:pt-8 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 bg-gradient-to-r from-gray-900 to-purple-800 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">{faqsTitle}</h2>
          <div className="space-y-8 md:space-y-10">
            {faqs.map((category, categoryIndex) => (
              <div key={`cat-${category.category}-${categoryIndex}`}>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{category.category}</h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const id = `${category.category}:${faq.question}`;
                    return (
                      <div key={`faq-${id}`} className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(id)}
                          className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-200 rounded-2xl"
                        >
                          <span className="font-semibold text-lg text-gray-900 dark:text-white pr-4">{faq.question}</span>
                          <div className="flex-shrink-0">
                            {openFaq === id ? (
                              <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                            )}
                          </div>
                        </button>
                        {openFaq === id && (
                          <div className="px-8 pb-6 border-t border-gray-200/50 dark:border-gray-700/50 mt-2 pt-4">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-800 dark:from-white dark:to-green-200 bg-clip-text text-transparent">Still need help?</h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">Get in touch with our support team</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Response Times</h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Technical Support (Starter Plan):</span>
                    <span className="text-blue-600 dark:text-blue-400">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Priority Support (Pro Plan):</span>
                    <span className="text-purple-600 dark:text-purple-400">4 hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Thanks! Your message has been sent.</h3>
                  <p className="text-gray-600 dark:text-gray-300">We typically respond within 24 hours.</p>
                </div>
              ) : (
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a message</h3>
              )}

              {!submitted && (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {error && <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                      <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                      <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Category</label>
                    <select value={contactForm.category} onChange={(e) => setContactForm({ ...contactForm, category: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors">
                      <option value="general">General Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                    <input type="text" required value={contactForm.subject} onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Brief description of your inquiry" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                    <textarea required rows={5} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Please provide as much detail as possible..." />
                  </div>
                  <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
