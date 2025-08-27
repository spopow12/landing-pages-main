export const metadata = {
  title: 'GDPR Compliance - n8n SaaS',
  description: 'Details on GDPR compliance, data rights, and requests.',
};

export default function GdprPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mb-6">
            <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy & GDPR</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* 1. Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              We respect your privacy and are committed to protecting your personal data. This page explains how we
              handle your data in accordance with GDPR.
            </p>
          </section>

          {/* 2. Data We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Account information: Name, email, username, password</li>
              <li>Billing information: Payment details via PayPal, Stripe, Metamask</li>
              <li>Usage data: Features used to improve service quality</li>
            </ul>
          </section>

          {/* 3. How We Use Your Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To manage your account and subscription</li>
              <li>To communicate updates or important information</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* 4. Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
            <p className="mb-4">
              We do not share your personal data with third parties for marketing or analytics purposes. Data may only
              be shared with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Payment processors: Stripe, PayPal, Metamask</li>
            </ul>
          </section>

          {/* 5. Your GDPR Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your GDPR Rights</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access: Request a copy of the data we hold about you</li>
              <li>Correction: Correct inaccurate or incomplete data</li>
              <li>Deletion: Request deletion of your personal data</li>
              <li>Restriction: Request limitation of data processing</li>
              <li>Portability: Receive your data in a machine-readable format</li>
              <li>Withdrawal of consent: Withdraw consent for data processing</li>
            </ul>
          </section>

          {/* 6. Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your personal data only as long as necessary for service delivery and legal obligations.
              Unneeded data is securely deleted.
            </p>
          </section>

          {/* 7. Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal data from
              unauthorized access, loss, or misuse.
            </p>
          </section>

          {/* 8. Data Protection Officer */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Data Protection Officer</h2>
            <p className="mb-4">
              For GDPR or privacy inquiries, contact our Data Protection Officer or visit our Help Center for guidance:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v14H5.17L4 19.17V4z"/><path d="M12 14h.01"/></svg>
                <span className="font-medium">Data Protection Officer</span>
              </div>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  Help: <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Help Center</a>
                </li>
              </ul>
            </div>
          </section>

          {/* 9. Supervisory Authority */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Supervisory Authority</h2>
            <p className="mb-4">If you are not satisfied with our response, you can contact your local data protection authority.</p>
            <p className="mb-4">
              For EU residents:
              <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                European Data Protection Board
              </a>
            </p>
          </section>

          {/* Footer Links */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
              <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms and Conditions</a>
              <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</a>
              <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Support</a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
