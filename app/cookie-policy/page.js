export const metadata = {
  title: 'Cookie Policy - n8n SaaS',
  description: 'Information about the cookies we use and how you can control them.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900 mb-6">
            <svg className="h-8 w-8 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 14A7.5 7.5 0 1 1 10 4.5 4.5 4.5 0 0 0 14.5 9 4.5 4.5 0 0 0 19 13.5c.17 0 .33 0 .5-.01Z"/><path d="M12 17v.01"/><path d="M8 14v.01"/><path d="M8 8v.01"/><path d="M12 7v.01"/><path d="M16 12v.01"/></svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              At our platform, we use cookies and similar technologies to improve user experience, provide personalized
              services, and ensure the smooth operation of our services.
            </p>
            <p className="mb-4">
              This Cookie Policy explains the types of cookies we use, their purposes, and how you can manage them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>

            <h3 className="text-xl font-medium mb-3">2.1 Essential Cookies</h3>
            <p className="mb-4">These cookies are strictly necessary for our services to function:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Authentication cookies:</strong> Keep you logged in to your account and manage sessions.</li>
              <li><strong>Security cookies:</strong> Protect against unauthorized access and attacks.</li>
              <li><strong>Service performance cookies:</strong> Ensure optimal load balancing and uptime.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.2 Functional Cookies</h3>
            <p className="mb-4">These cookies enhance your experience on our platform:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Theme preference:</strong> Remember light or dark mode choice.</li>
              <li><strong>Language preference:</strong> Save your preferred language settings.</li>
              <li><strong>User interface customizations:</strong> Remember your dashboard settings.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.3 Analytics &amp; Performance Cookies</h3>
            <p className="mb-4">These cookies help us understand how you interact with our service:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Usage analytics:</strong> Track which features are used the most.</li>
              <li><strong>Error tracking:</strong> Identify and fix issues quickly.</li>
              <li><strong>Performance monitoring:</strong> Monitor uptime and response times.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.4 Marketing Cookies</h3>
            <p className="mb-4">These cookies are used to show relevant promotions:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Conversion tracking:</strong> Measure marketing campaign effectiveness.</li>
              <li><strong>Retargeting cookies:</strong> Show relevant content and promotions.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Third-Party Cookies</h2>
            <p className="mb-4">We may use third-party services that set their own cookies, such as:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Payment processors (Stripe, PayPal)</li>
              <li>Analytics tools (Google Analytics)</li>
              <li>Support &amp; chat tools (Intercom, Crisp)</li>
            </ul>
            <p className="mb-4">Third-party cookies are subject to their own privacy policies.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              You can manage cookies via your browser settings or by adjusting preferences on our platform. Disabling
              non-essential cookies may limit some features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy periodically. Changes will be reflected here with the updated date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="mb-4">If you have questions about this Cookie Policy, you can contact us:</p>
            <ul className="list-none space-y-2">
              <li>
                For support, visit our{' '}
                <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Help Center</a>.
              </li>
            </ul>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
              <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms and Conditions</a>
              <a href="/gdpr" className="text-blue-600 dark:text-blue-400 hover:underline">GDPR Information</a>
              <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Support</a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
