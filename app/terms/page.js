export const metadata = {
  title: 'Terms of Service - n8n SaaS',
  description: 'Terms governing the use of the n8n SaaS platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
            <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11A2.5 2.5 0 0 0 20 19.5V6l-5-4H6.5A2.5 2.5 0 0 0 4 4.5v15Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing or using our platform and services, including creating n8n instances via our deployment system, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Overview</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Create n8n instances with a unique name and select a datacenter location</li>
              <li>Receive a randomly generated instance URL or use a custom domain</li>
              <li>Access and manage instances through a secure dashboard</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-medium mb-3">3.1 Account Creation</h3>
            <p className="mb-4">To use the Service, users must create an account with accurate and complete information. Required fields include account type, name, username, email, and password.</p>
            <h3 className="text-xl font-medium mb-3">3.2 Account Responsibility</h3>
            <p className="mb-4">Users are responsible for maintaining the confidentiality of their account credentials. Any activities performed under your account are your responsibility.</p>
            <h3 className="text-xl font-medium mb-3">3.3 Instance Passwords</h3>
            <p className="mb-4">When creating an n8n instance, you will receive credentials to access that instance. We do not have access to instance passwords and cannot recover them if lost. Authentication and security within each instance are the user's responsibility.</p>
            <h3 className="text-xl font-medium mb-3">3.4 Account Termination</h3>
            <p>We reserve the right to suspend or terminate accounts for violation of these Terms or other improper conduct.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="mb-2">Users must not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Engage in illegal activities</li>
              <li>Attempt unauthorized access to the platform</li>
              <li>Interfere with or disrupt services</li>
              <li>Upload harmful or malicious content</li>
              <li>Violate intellectual property rights</li>
              <li>Send unsolicited communications or spam</li>
              <li>Reverse engineer or extract source code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data and Privacy</h2>
            <p className="mb-4">We respect user privacy. Personal data is never shared with third parties, and we do not use tracking services like Google Analytics. Cookies are used only to improve service functionality.</p>
            <p className="mb-4">Users retain ownership of data within their instances. We may access data only as needed to provide services or comply with legal obligations.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Service Availability</h2>
            <p>While we aim to maintain high availability, we do not guarantee uninterrupted service. Instances are subject to maintenance or outages beyond our control.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>We are not liable for indirect, incidental, or consequential damages, including data loss or service interruptions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="mb-4">We may update these Terms at any time. Significant changes will be communicated via email or platform notifications.</p>
            <p className="mb-4">Continued use constitutes acceptance of updated Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by the laws of [Your Jurisdiction]. Disputes shall be resolved in the courts of [Your Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="mb-4">For questions about these Terms of Service, please contact support via:</p>
            <ul className="list-none space-y-2">
              <li>Support Page: <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Get Help</a></li>
            </ul>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
              <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</a>
              <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Support</a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
