export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-16">
        Privacy Policy
      </h1>
      <p className="text-gray-500 mb-8">Effective Date: [20-February-2025]</p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong className="text-gray-800">Personal Information:</strong>{" "}
            Name, email, phone number, and booking details.
          </li>
          <li>
            <strong className="text-gray-800">Usage Data:</strong> IP address,
            browser type, and pages visited.
          </li>
          <li>
            <strong className="text-gray-800">Payment Information:</strong> We
            do not store payment details; transactions are processed securely.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600">
          Your information is used to process bookings, communicate with you,
          improve our services, and ensure security.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          3. Sharing of Information
        </h2>
        <p className="text-gray-600">
          We do not sell your data. Information is shared only when required by
          law or with trusted service providers.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          4. Data Security
        </h2>
        <p className="text-gray-600">
          We implement industry-standard security measures, though no online
          transmission is 100% secure.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          5. Cookies and Tracking
        </h2>
        <p className="text-gray-600">
          We use cookies to improve your experience. You can manage them via
          browser settings.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          6. Your Rights
        </h2>
        <p className="text-gray-600">
          You can access, update, delete your data, or opt out of marketing
          communications.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          7. Third-Party Links
        </h2>
        <p className="text-gray-600">
          Our website may link to third-party sites. We are not responsible for
          their privacy practices.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          8. Changes to This Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy. Any changes will be posted on this
          page.
        </p>
      </section>

      <section className="space-y-6 text-left">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          9. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have questions, contact us at{" "}
          <a
            href="mailto:mirrentx@gmail.com"
            className="text-blue-500 hover:underline"
          >
            <button
              type="button"
              class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-3 h-3 text-white me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              Email Us
            </button>
          </a>
          .
        </p>
      </section>
    </div>
  );
}
