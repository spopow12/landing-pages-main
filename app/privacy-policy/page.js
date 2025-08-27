export const metadata = {
  title: 'Privacy Policy - n8n SaaS',
  description: 'How we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <svg className="h-8 w-8 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to our platform ("we," "our," or "us"). We are committed to protecting your personal information and privacy.
            </p>
            <p className="mb-4">
              By using our service, you consent to the collection and use of information as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Account information: name, username, email, account type</li>
              <li>Authentication data: password (securely stored; we do not have access to n8n instance passwords)</li>
              <li>Usage and technical data: deployment logs, system performance, errors</li>
              <li>Cookies: only for improving service functionality</li>
              <li>Optional communications: support messages or inquiries</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, operate, and maintain the service</li>
              <li>Manage accounts and n8n instances</li>
              <li>Improve and personalize user experience</li>
              <li>Communicate important updates and support notifications</li>
              <li>Ensure security and prevent unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
            <p className="mb-4">We do not sell or rent your personal information. We may share information only in these circumstances:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Service providers assisting with hosting or support</li>
              <li>Legal obligations or enforcement of rights</li>
              <li>Business transfers (merger, acquisition) with notice</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">We use industry-standard security measures to protect your data:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encryption of data in transit (TLS) and at rest (AES-256)</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security monitoring and infrastructure audits</li>
              <li>n8n instance passwords are managed by users; we do not store or recover them</li>
            </ul>
            <p className="mb-4">No system is 100% secure. While we strive to protect your data, absolute security cannot be guaranteed.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
            <p className="mb-4">
              Cookies are used only to enhance the service and user experience. No third-party analytics or advertising cookies are used. For more details, see our <a href="/cookies" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="mb-4">We retain personal information only as long as necessary to provide the service or comply with legal obligations. Afterward, data is securely deleted or anonymized.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access, correct, or delete personal information</li>
              <li>Request data portability</li>
              <li>Restrict or object to processing</li>
            </ul>
            <p className="mb-4">
              To exercise your rights, please visit our <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Help Center</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. International Transfers</h2>
            <p className="mb-4">Your information may be processed in countries other than your own. We ensure proper safeguards are in place according to data protection laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
            <p className="mb-4">Our services are not intended for children under 13. We do not knowingly collect information from children under 13.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
            <p className="mb-4">We may update this policy and notify users of material changes via email or platform notifications. Continued use constitutes acceptance.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <ul className="list-none space-y-2">
              <li>
                For support, visit our <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Help Center</a>.
              </li>
            </ul>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms and Conditions</a>
              <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</a>
              <a href="/gdpr" className="text-blue-600 dark:text-blue-400 hover:underline">GDPR Information</a>
              <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Help Center</a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
