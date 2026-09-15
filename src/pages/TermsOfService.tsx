import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { usePageMeta } from "@/lib/usePageMeta";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  usePageMeta({ title: "Terms of Service" });

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" lead="Last updated March 25, 2026" compact />

      <section>
        <Container className="max-w-3xl py-16 sm:py-20">
          <div className="legal-prose">
            <p>
              Welcome to Net-Tech. By accessing or using our website and
              services, you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree, please do not use our services.
            </p>

            <h2>
              1. Services
            </h2>
            <p>
              Net-Tech provides managed IT services, networking, physical
              security, cloud integrations, and related technology solutions for
              businesses. The specific services provided to you will be defined
              in a separate service agreement or statement of work.
            </p>

            <h2>
              2. Use of Website
            </h2>
            <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
            <ul>
              <li>Violate any applicable law or regulation.</li>
              <li>Infringe the rights of any third party.</li>
              <li>Attempt to interfere with the proper functioning of the website.</li>
              <li>Submit false, misleading, or fraudulent information through any form.</li>
            </ul>

            <h2>
              3. SMS/Text Messaging Terms
            </h2>
            <p>
              By opting in to receive SMS messages from Net-Tech, you agree to
              the following terms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Who Is Sending Messages:</strong> All text messages are
                sent by or on behalf of <strong>Net-Tech</strong>, located at
                112 W Main St, New Albany, MS 38652.
              </li>
              <li>
                <strong>Types of Messages:</strong> You may receive
                transactional messages (service updates, appointment reminders,
                support notifications) and/or marketing messages (promotions,
                offers, newsletters) depending on the consent you provided.
              </li>
              <li>
                <strong>Message Frequency:</strong> Message frequency may vary
                based on your interactions, service activity, and the type of
                messages you opted into.
              </li>
              <li>
                <strong>Message & Data Rates:</strong> Standard message and data
                rates may apply. Contact your mobile carrier for details about
                your plan.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out at any time by
                replying <strong>STOP</strong> to any text message. You will
                receive a single confirmation message and no further messages
                will be sent unless you re-opt in.
              </li>
              <li>
                <strong>Help:</strong> For assistance, reply{" "}
                <strong>HELP</strong> to any message, email{" "}
                <a
                  href="mailto:support@nettech.ms"
                 
                >
                  support@nettech.ms
                </a>
                , or call{" "}
                <a href="tel:+16625397787">
                  (662) 539-7787
                </a>
                .
              </li>
              <li>
                <strong>Consent Not Required:</strong> SMS consent is not a
                condition of purchase. You are not required to opt in to SMS
                messaging to use our services or make a purchase.
              </li>
              <li>
                <strong>No Sharing of SMS Consent:</strong> Your SMS consent and
                phone number will not be sold, rented, or shared with third
                parties or affiliates for their marketing purposes. SMS consent
                data is only shared with service providers necessary to deliver
                messages (e.g., SMS platforms, mobile carriers).
              </li>
            </ul>

            <h2>
              4. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos,
              images, and software — is the property of Net-Tech or its content
              suppliers and is protected by intellectual property laws. You may
              not reproduce, distribute, or create derivative works without our
              prior written consent.
            </p>

            <h2>
              5. Disclaimers
            </h2>
            <p>
              Our website and services are provided "as is" and "as available"
              without warranties of any kind, either express or implied. We do
              not warrant that the website will be uninterrupted, error-free, or
              free of viruses or other harmful components.
            </p>

            <h2>
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Net-Tech shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of our
              website or services.
            </p>

            <h2>
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Net-Tech, its officers,
              directors, employees, and agents from any claims, damages, losses,
              or expenses arising from your use of our website or violation of
              these Terms.
            </p>

            <h2>
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content or privacy practices of those sites.
              Accessing third-party links is at your own risk.
            </p>

            <h2>
              9. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Mississippi, without regard to its
              conflict of law provisions.
            </p>

            <h2>
              10. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective upon posting to this page. Your continued use of
              our services constitutes acceptance of the updated Terms.
            </p>

            <h2>
              11. Privacy Policy
            </h2>
            <p>
              Your use of our services is also governed by our{" "}
              <Link
                to="/privacy-policy"
               
              >
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>

            <h2>
              12. Contact Us
            </h2>
            <p>
              If you have questions about these Terms, please contact us:
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
        </Container>
      </section>
    </>
  );
};

export default TermsOfService;
