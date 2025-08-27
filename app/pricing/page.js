"use client";
import React, { useState } from 'react';
import { CheckCircle, Star, Zap, Clock, Shield, Globe, Server, Infinity } from 'lucide-react';
import Link from 'next/link';

// Mirror of calculatePlanPricing from CRA utils for parity
const calculatePlanPricing = (planId, billingCycle, prices = {}) => {
  const monthly = planId === 'pro' ? Number(prices.pro || 19.99) : Number(prices.starter || 3.99);
  if (billingCycle === 'yearly') {
    const months = 12;
    const discount = planId === 'pro' ? 0.30 : 0.10; // Pro 30%, Starter 10%
    const yearlyPrice = monthly * months * (1 - discount);
    return {
      price: yearlyPrice,
      period: '/year',
      monthlyEquivalent: yearlyPrice / 12,
      discount: Math.round(discount * 100),
      savingsText: `Save ${Math.round(discount * 100)}%`,
      isYearly: true,
    };
  }
  return {
    price: monthly,
    period: '/month',
    monthlyEquivalent: null,
    discount: 0,
    savingsText: null,
    isYearly: false,
  };
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const heroTitleLine1 = 'Simple, Transparent';
  const heroTitleLine2 = 'Pricing';
  const heroSubtitle = 'Choose the perfect plan for your automation needs. Start with our free trial and scale as you grow.';
  const trialBannerText = '🎉 Free 1-Hour Trial – Instantly launch your own live instance for testing';
  const plans = [
    {
      name: 'Starter', tagline: 'Perfect for individuals', price: 3.99, period: 'month',
      features: ['1 Active Instance','Instant Deployment','Fast & Secure Performance','Custom Domain Support','Automatic SSL Certificates','Technical Support'],
      highlight: false, badgeText: '', icon: 'zap'
    },
    {
      name: 'Pro', tagline: 'For professionals & teams', price: 19.99, period: 'month',
      features: ['Unlimited Instances','Full API Access','150 API Requests/Minute','High-Performance Infrastructure','Unlimited Custom Domains','Advanced SSL Management','Priority Support'],
      highlight: true, badgeText: 'RECOMMENDED', icon: 'infinity'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-8 leading-tight">
              {heroTitleLine1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{heroTitleLine2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>

            {/* Free Trial Banner */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50 rounded-2xl px-6 py-4 text-blue-700 dark:text-blue-300 mb-12 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Clock className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-lg">{trialBannerText}</span>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex flex-col items-center justify-center gap-2 mb-10">
              <div className="inline-flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-full p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow' : 'text-gray-700 dark:text-gray-300'} px-4 py-2 rounded-full text-sm font-semibold transition-colors`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                  className={`${billingCycle === 'yearly' ? 'bg-blue-600 text-white shadow' : 'text-gray-700 dark:text-gray-300'} px-4 py-2 rounded-full text-sm font-semibold transition-colors`}
                >
                  Yearly
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {billingCycle === 'yearly' ? 'Prices shown are billed yearly.' : 'Prices shown are billed monthly.'}
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => {
              const isPro = plan.highlight;
              const IconComp = plan.icon === 'infinity' ? Infinity : plan.icon === 'server' ? Server : plan.icon === 'globe' ? Globe : plan.icon === 'shield' ? Shield : Zap;
              const gradient = isPro ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-cyan-500';
              const planId = plan.name.toLowerCase() === 'pro' ? 'pro' : 'starter';
              const basePrices = { starter: Number(plans[0].price), pro: Number(plans[1].price) };
              const pricing = calculatePlanPricing(planId, billingCycle, basePrices);
              const priceStr = `$${Number(pricing.price).toFixed(2)}`;
              const periodLabel = pricing.period.replace('/', '');
              const borderClasses = isPro ? 'border-2 border-purple-500/50' : 'border';
              return (
                <div key={idx} className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl ${borderClasses} border-gray-200/50 dark:border-gray-700/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                  {isPro && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 lg:px-6 xl:px-8 py-1.5 sm:py-2 lg:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-xl whitespace-nowrap">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2 flex-shrink-0" />
                        {plan.badgeText || 'RECOMMENDED'}
                      </span>
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${isPro ? 'from-purple-500/10 to-pink-500/10' : 'from-blue-500/5 to-cyan-500/5'} rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  <div className="relative mb-8 mt-4">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-full h-full text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{plan.tagline}</p>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{priceStr}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-xl ml-2">/{periodLabel}</span>
                    </div>
                    {pricing.isYearly && (
                      <div className="mb-6 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <span>Billed annually</span>
                        {pricing.savingsText && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            {pricing.savingsText}
                          </span>
                        )}
                        {pricing.monthlyEquivalent && (
                          <span className="text-gray-500 dark:text-gray-400">(≈ ${Number(pricing.monthlyEquivalent).toFixed(2)}/mo)</span>
                        )}
                      </div>
                    )}
                  </div>
                  <ul className="relative space-y-4 mb-10">
                    {(plan.features || []).map((feat, fi) => (
                      <li className="flex items-start" key={fi}>
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-200 text-lg">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/register"
                    className={`relative w-full inline-flex items-center justify-center py-4 px-8 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 bg-gradient-to-r ${isPro ? 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'}`}
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
