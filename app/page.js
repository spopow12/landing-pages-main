"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Shield, 
  Globe, 
  ChevronDown,
  ChevronUp,
  Sparkles,
  Rocket,
  Award,
  TrendingUp
} from 'lucide-react';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const heroLine1 = 'Deploy Apps & Databases';
  const heroLine2 = 'in Minutes with Ofclock';
  const heroSubtitle = 'Launch WordPress, n8n, MySQL, MongoDB, and more. Connect your domain, get free SSL, and scale fast.';
  const trustBadges = {
    noCard: 'No credit card required',
    trialLength: '60-minute free trial',
    setupTime: 'Setup in under 30 seconds'
  };
  const featuresTitle = 'Everything You Need';
  const featuresSubtitle = 'Enterprise-grade automation platform with zero complexity';
  const features = [
    {
      icon: <Rocket className="w-10 h-10 text-white" />,
      title: 'One-Click Launch',
      description: 'Deploy your private app or database in seconds. No complex setup or configuration required.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: 'Custom Domains Ready',
      description: 'Easily connect your own domain with a simple configuration and start using immediately.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: 'Fully Isolated Instances',
      description: 'Each user gets a dedicated, secure environment with complete isolation and privacy.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: 'Unlimited Instances',
      description: 'Create unlimited instances with no restrictions on complexity or usage.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: 'Free SSL for Every Domain',
      description: 'Automatic SSL certificates for all your custom domains with zero configuration required.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      title: 'Popular Stacks',
      description: 'WordPress, n8n, MySQL, MongoDB, Nextcloud, and more—ready to launch.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];
  const whyTitle = 'Built for Scale';
  const whySubtitle = 'Experience the difference with our enterprise-grade platform designed for modern automation needs.';
  const faqsTitle = 'Got Questions?';
  const faqsSubtitle = 'Everything you need to know about our hosting platform';
  const faqs = [
    { question: 'Can I connect my own domain?', answer: 'Yes! You can connect your domain to any instance. We provide simple DNS instructions and automatic SSL certificates.' },
    { question: 'Is SSL included?', answer: 'Absolutely! Every instance includes automatic SSL certificates, including for custom domains.' },
    { question: 'Are there any limits on instances?', answer: 'No artificial limits. You can create unlimited instances within fair-use and plan capacity.' },
    { question: 'How is this different from shared hosting?', answer: 'Each instance is dedicated and fully isolated. You get better performance, security, and control than typical shared environments.' },
    { question: 'What happens if I pause or stop paying?', answer: 'Your instance is paused but data remains safe for a retention period. You can reactivate anytime by resuming your subscription.' },
    { question: 'Do you support popular stacks?', answer: 'Yes. WordPress, n8n, MySQL, MongoDB, Nextcloud, and more are supported.' },
    { question: 'Is this secure?', answer: 'Yes. Each instance is isolated with enterprise-grade security, SSL encryption, and regular updates.' }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 text-gray-900 dark:text-white transition-all duration-300">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 translate-y-0 opacity-100`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border border-blue-200/50 dark:border-blue-700/50 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Trusted by 10,000+ developers worldwide</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                {heroLine1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                {heroLine2}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="https://app.ofclock.com/register" 
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[200px]"
              >
                Start Free Trial
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{trustBadges.noCard}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{trustBadges.trialLength}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{trustBadges.setupTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border border-blue-200/50 dark:border-blue-700/50 mb-6">
              <Star className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Premium Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {featuresTitle}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {featuresSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 border border-green-200/50 dark:border-green-700/50 mb-6">
                  <Award className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-300">Why Choose Us</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                  {whyTitle}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  {whySubtitle}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Unlimited Everything</h3>
                    <p className="text-gray-600 dark:text-gray-300">No restrictions on workflows, executions, or data processing. Scale without limits.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Lightning Fast Setup</h3>
                    <p className="text-gray-600 dark:text-gray-300">Get your n8n instance running in under 30 seconds with zero configuration.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Enterprise Security</h3>
                    <p className="text-gray-600 dark:text-gray-300">Bank-grade security with isolated instances and automatic SSL certificates.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="https://app.ofclock.com/register" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            {/* Trial Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">60 Minutes</div>
                  <div className="text-xl text-gray-600 dark:text-gray-300 mb-8">Free Trial</div>
                  
                  <div className="space-y-4 text-left mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Full n8n access & features</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Custom domain setup</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">SSL certificates included</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">No credit card required</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="https://app.ofclock.com/register" 
                    className="block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border border-purple-200/50 dark:border-purple-700/50 mb-6">
              <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-800 dark:text-purple-300">FAQ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-800 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">
              {faqsTitle}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {faqsSubtitle}
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200 rounded-2xl"
                >
                  <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-500 transform group-hover:scale-110 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transform group-hover:scale-110 transition-all duration-200" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
