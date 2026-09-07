import "./privacy-policy.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy-section">
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-title">Privacy Policy</h1>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">1. Introduction</h2>
          <p className="privacy-policy-text">
            Success Alchemists Business Coaching Pvt Ltd (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a company
            headquartered in Pune, India, operates the website success-alchemists.com (the &quot;Site&quot;).
            This Privacy Policy explains how we collect, use, disclose, and protect your information when
            you visit our Site or use our services. For more about our company, visit{" "}
            <a href="https://success-alchemists.com/home" target="_blank" rel="noopener noreferrer">
              success-alchemists.com
            </a>
            .
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">2. Information We Collect</h2>
          <ul className="privacy-policy-list">
            <li>
              <strong>Information you provide directly:</strong> name, email address, phone number, company
              name, and any details submitted through contact forms, webinar registrations, or consultation
              bookings.
            </li>
            <li>
              <strong>Automatically collected information:</strong> IP address, browser type, device
              information, and browsing behavior via cookies and similar technologies.
            </li>
            <li>
              <strong>Third-party information:</strong> data received from third-party platforms, such as
              CRM or email marketing tools, when you interact with our campaigns.
            </li>
          </ul>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">3. How We Use Your Information</h2>
          <p className="privacy-policy-text">We use collected information to:</p>
          <ul className="privacy-policy-list">
            <li>Respond to inquiries and provide coaching/consulting services, including our Webinars &amp; Basecamps</li>
            <li>Send newsletters, webinar &amp; basecamp invitations, and marketing communications (with opt-out options)</li>
            <li>Improve our website and services through analytics</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">4. Cookies and Analytics</h2>
          <p className="privacy-policy-text">
            Our Site uses cookies and similar technologies, including analytics and marketing tools, to
            understand site usage and deliver relevant advertising. You can manage cookie preferences
            through your browser settings or any cookie consent banner on the Site.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">5. Payments</h2>
          <p className="privacy-policy-text">
            Payments made in connection with our services are processed by Razorpay, a third-party payment
            gateway. We do not store your payment card or bank details on our servers. Razorpay&apos;s
            handling of your payment information is governed by its own privacy policy.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">6. Sharing of Information</h2>
          <p className="privacy-policy-text">We do not sell your personal information. We may share data with:</p>
          <ul className="privacy-policy-list">
            <li>
              Service providers who help operate our business (e.g., email platforms, scheduling tools,
              analytics providers, Razorpay for payment processing)
            </li>
            <li>Legal authorities, if required by law</li>
          </ul>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">7. Data Retention</h2>
          <p className="privacy-policy-text">
            We retain personal information for as long as necessary to fulfill the purposes outlined in
            this policy, unless a longer retention period is required by law.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">8. Your Rights</h2>
          <p className="privacy-policy-text">
            Depending on your location, you may have rights to access, correct, or delete your personal
            information. To exercise these rights, contact us at{" "}
            <a href="mailto:info@success-alchemists.com">info@success-alchemists.com</a>.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">9. Data Security</h2>
          <p className="privacy-policy-text">
            We implement reasonable technical and organizational measures to protect your information,
            though no method of transmission is 100% secure.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">10. Third-Party Links</h2>
          <p className="privacy-policy-text">
            Our Site may contain links to third-party websites, including Razorpay. We are not responsible
            for their privacy practices.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">11. Children&apos;s Privacy</h2>
          <p className="privacy-policy-text">
            Our services are not directed at individuals under 18, and we do not knowingly collect data
            from minors.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">12. Governing Law</h2>
          <p className="privacy-policy-text">
            This Privacy Policy and any disputes arising from it shall be governed by the laws of India.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">13. Changes to This Policy</h2>
          <p className="privacy-policy-text">
            We may update this Privacy Policy periodically. Changes will be posted on this page with an
            updated effective date.
          </p>
        </div>

        <div className="privacy-policy-block">
          <h2 className="privacy-policy-heading">14. Contact Us</h2>
          <p className="privacy-policy-text">If you have questions about this Privacy Policy, contact us at:</p>
          <div className="privacy-policy-contact-card">
            <strong>Success Alchemists Business Coaching Pvt Ltd</strong>
            <br />
            <a href="mailto:info@success-alchemists.com">info@success-alchemists.com</a>
            <br />
            Pune, India
          </div>
        </div>
      </div>
    </section>
  );
}
