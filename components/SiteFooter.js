import React from 'react';
import Link from 'next/link';

export default function SiteFooter() {
  const sections = [
    {
      title: 'Resources',
      links: [
        { label: 'Pricing', path: '/pricing', external: false },
        { label: 'Help', path: 'https://app.ofclock.com/help', external: false },
        { label: 'Terms of Service', path: '/terms', external: false },
        { label: 'Privacy Policy', path: '/privacy-policy', external: false },
        { label: 'Cookie Policy', path: '/cookie-policy', external: false },
        { label: 'GDPR Compliance', path: '/gdpr', external: false },
      ]
    },
    {
      title: 'Affiliate Program',
      links: [
        { label: 'Join Program', path: 'https://app.ofclock.com/affiliate/register', external: false },
        { label: 'Login', path: 'https://app.ofclock.com/affiliate/login', external: false },
        { label: 'Dashboard', path: 'https://app.ofclock.com/affiliate/dashboard', external: false },
        { label: 'Terms', path: 'https://app.ofclock.com/affiliate/terms', external: false },
        { label: 'Privacy Policy', path: 'https://app.ofclock.com/affiliate/privacy-policy', external: false },
      ]
    }
  ];
  const logoText = 'Ofclock';
  const logoImageUrl = '/logo-ofclock.svg';
  const copyright = `© ${new Date().getFullYear()} Ofclock. All rights reserved.`;

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220] text-slate-700 dark:text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="mb-4">
                {logoImageUrl ? (
                  <img src={logoImageUrl} alt={logoText || 'Logo'} className="h-10 w-auto object-contain" />
                ) : (
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    {logoText}
                  </h3>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Deploy apps and databases in minutes with Ofclock. Connect your domain, get free SSL, and scale on enterprise-grade infrastructure.
              </p>
            </div>
          </div>

          {(sections || []).map((sec, i) => (
            <div key={i}>
              <h4 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white tracking-tight">{sec.title}</h4>
              <div className="space-y-3">
                {(sec.links || []).map((l, idx) => (
                  l.external ? (
                    <a
                      key={idx}
                      href={l.path || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:translate-x-0.5 transform"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      href={l.path || '#'}
                      className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:translate-x-0.5 transform"
                    >
                      {l.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700/60 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 dark:text-slate-400 mb-2 md:mb-0 text-sm">
              {copyright}
            </p>
            <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full md:w-auto">
              {/* Social media icons hidden */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-slate-500 dark:text-slate-400">Powered by</span>
                <div className="flex items-center space-x-2">
                  <span
                    aria-hidden="true"
                    className="inline-block w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-indigo-400 ring-1 ring-slate-300/60 dark:ring-slate-700/60"
                  />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Enterprise Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
