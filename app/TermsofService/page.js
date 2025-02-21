import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-900 bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Terms of Service
      </h1>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="mt-2">
          Welcome to MirrenTX. By accessing or using our services, you agree to
          be bound by these terms. Please read them carefully.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">
          2. Account Registration
        </h2>
        <p className="mt-2">
          To access certain features, you may be required to create an account.
          You are responsible for maintaining the confidentiality of your
          account details.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. Rental Terms</h2>
        <ul className="mt-2 list-disc pl-6">
          <li>All rentals must be booked in advance.</li>
          <li>Users must comply with local laws and regulations.</li>
          <li>Any damages must be reported immediately.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">
          4. Payments & Cancellations
        </h2>
        <p className="mt-2">
          Payments are required at the time of booking. Cancellations made
          within 24 hours may be subject to a fee.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">
          5. User Responsibilities
        </h2>
        <p className="mt-2">
          You agree to use our services responsibly and not engage in fraudulent
          or illegal activities.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">
          6. Limitation of Liability
        </h2>
        <p className="mt-2">
          We are not responsible for any direct or indirect damages arising from
          the use of our services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">
          7. Changes to Terms
        </h2>
        <p className="mt-2">
          We reserve the right to modify these terms at any time. Continued use
          of our services constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">8. Contact Us</h2>
        <p className="mt-2">
          If you have any questions, feel free to contact us at{" "}
          <a
            href="mailto:support@mirrentx.com"
            className="text-blue-500 hover:underline"
          >
            mirrentx@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
