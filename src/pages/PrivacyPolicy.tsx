import { Container } from "@/components/site/Container";
import { usePageMeta } from "@/lib/usePageMeta";

const PrivacyPolicy = () => {
  usePageMeta({ title: "Privacy Policy" });

  return (
    <section>
      <Container className="max-w-3xl py-16 sm:py-24">
        <div className="animate-rise-in">
          <div>
            <h1 className="display text-5xl sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-ink-soft">
              Last Updated: March 25, 2026
            </p>
          </div>

          <div className="legal-prose mt-10">
            <p>
              Net-Tech ("we," "us," or "our") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website, use our services, or interact with us in any way.
            </p>

            <h2>
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, business name, and mailing address provided
                through our contact or support forms.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages
                visited, time spent on pages, and other diagnostic data.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> We may use cookies and
                similar technologies to improve your experience on our site.
              </li>
            </ul>

            <h2>
              2. How We Use Your Information
            </h2>
            <ul>
              <li>To provide, operate, and maintain our IT services.</li>
              <li>To respond to your inquiries and support requests.</li>
              <li>To send transactional messages related to your service requests (e.g., appointment confirmations, ticket updates, service reminders).</li>
              <li>To send promotional or marketing messages <strong>only if you have provided explicit opt-in consent</strong>.</li>
              <li>To improve our website and services.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2>
              3. SMS/Text Messaging Policy
            </h2>
            <p>
              By providing your phone number and checking the appropriate
              consent boxes on our forms, you agree to receive text messages
              from <strong>Net-Tech</strong>. Our SMS practices are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Transactional Messages:</strong> If you consent, we may
                send non-promotional messages such as appointment reminders,
                service updates, account notifications, and support-related
                communications. Message frequency varies based on your service
                activity.
              </li>
              <li>
                <strong>Marketing Messages:</strong> If you separately opt in,
                we may send promotional messages including special offers, new
                service announcements, and newsletters. Message frequency may
                vary.
              </li>
              <li>
                <strong>Message & Data Rates:</strong> Standard message and data
                rates may apply depending on your mobile carrier and plan.
              </li>
              <li>
                <strong>Opt-Out:</strong> You may opt out of receiving text
                messages at any time by replying <strong>STOP</strong> to any
                message. After opting out, you will receive a one-time
                confirmation message.
              </li>
              <li>
                <strong>Help:</strong> Reply <strong>HELP</strong> to any
                message for assistance, or contact us at{" "}
                <a
                  href="mailto:support@nettech.ms"
                 
                >
                  support@nettech.ms
                </a>{" "}
                or{" "}
                <a href="tel:+16625397787">
                  (662) 539-7787
                </a>
                .
              </li>
              <li>
                <strong>No Sharing:</strong> We do not sell, rent, or share your
                phone number or SMS consent information with third parties or
                affiliates for marketing purposes. SMS consent data is not
                shared with any third parties except as required by SMS service
                providers (e.g., carriers) to deliver messages.
              </li>
              <li>
                <strong>Consent Not Required for Purchase:</strong> Your consent
                to receive SMS messages is not a condition of purchasing any
                goods or services from Net-Tech.
              </li>
            </ul>

            <h2>
              4. How We Share Your Information
            </h2>
            <p>
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> With trusted vendors who
                assist us in operating our business (e.g., CRM platforms, SMS
                delivery services). These providers are bound by
                confidentiality agreements.
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law,
                regulation, or legal process.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets.
              </li>
            </ul>

            <h2>
              5. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards to protect your personal information. However, no
              method of transmission over the Internet or electronic storage is
              100% secure.
            </p>

            <h2>
              6. Data Retention
            </h2>
            <p>
              We retain your personal information only as long as necessary to
              fulfill the purposes outlined in this policy or as required by
              law. SMS consent records are retained for the duration of your
              consent plus a reasonable period thereafter for compliance
              purposes.
            </p>

            <h2>
              7. Your Rights
            </h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>
                Withdraw consent for SMS messaging by texting STOP.
              </li>
            </ul>

            <h2>
              8. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under 13. We do not
              knowingly collect personal information from children under 13.
            </p>

            <h2>
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated "Last Updated" date. Your
              continued use of our services after changes constitutes acceptance
              of the updated policy.
            </p>

            <h2>
              10. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li>
                <strong>Net-Tech</strong>
              </li>
              <li>112 W Main St, New Albany, MS 38652</li>
              <li>
                Phone:{" "}
                <a href="tel:+16625397787">
                  (662) 539-7787
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:support@nettech.ms"
                 
                >
                  support@nettech.ms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
