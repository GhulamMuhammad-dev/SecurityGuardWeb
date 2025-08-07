import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F4F4F4] pt-16 pb-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <Image
                  width={60}
                  height={60}
                  src="/images/crossfrontLogo.jpg"
                  alt="CrossFront logo"
                  className="object-cover rounded-2xl"
                />
              </Link>
              <h3 className="text-xl font-bold text-white">CrossFront Services</h3>
            </div>
            <p className="text-sm mb-4">
              Trusted nationwide for corporate, event, and asset protection.
              Delivering professional security services since 2010.
            </p>
            {/* <div className="flex gap-4">
              <SocialIcon href="#" label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <TwitterIcon className="w-5 h-5" />
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <LinkedInIcon className="w-5 h-5" />
              </SocialIcon>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-color">Quick Links</h3>
            <FooterLinkList
              links={[
                { label: "Home", href: "/" },
                { label: "Mission Statement", href: "/about/mission" },
                { label: "Environmental Policy", href: "/environmental-policy" },
                { label: "Health & Safety", href: "/health-safety-policy" },
                { label: "Quality Policy", href: "/quality-policy" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-color">Services</h3>
            <FooterLinkList
              links={[
                { label: "Manned Guarding", href: "/serviceInfo/manned-guarding" },
                { label: "Mobile Patrols", href: "/serviceInfo/mobile-patrols" },
                { label: "K9 Dog Units", href: "/serviceInfo/k9-dog-units" },
                { label: "Event Security", href: "/serviceInfo/event-security" },
                { label: "Construction Site Security", href: "/serviceInfo/construction-site-security" },
                { label: "Key Holding", href: "/serviceInfo/key-holding" },
              ]}
            />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-color">Contact Us</h3>
            <address className="not-italic text-sm space-y-3">
              <ContactItem icon={<MapPinIcon />} text="456 Shield Lane, London, UK" />
              <ContactItem icon={<PhoneIcon />} text={<a href="tel:+442033221100">+44 20 3322 1100</a>} />
              <ContactItem icon={<MailIcon />} text={<a href="mailto:info@crossfrontservices.co.uk">info@crossfrontservices.co.uk</a>} />
              <ContactItem icon={<ClockIcon />} text="24/7 Response Nationwide" />
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} CrossFront Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <FooterPolicyLink label="Privacy Policy" href="/privacy-policy" />
            <FooterPolicyLink label="Terms of Service" href="/terms" />
            <FooterPolicyLink label="Sitemap" href="/sitemap" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// === Helpers ===

function FooterLinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href} className="hover:text-primary-color transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) {
  return (
    <p className="flex items-start gap-2">
      <span className="text-primary-color mt-0.5">{icon}</span>
      <span>{text}</span>
    </p>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-[#F4F4F4] hover:text-primary-color transition-colors">
      {children}
    </a>
  );
}

function FooterPolicyLink({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="hover:text-primary-color transition-colors">
      {label}
    </Link>
  );
}

// === Icons ===

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
      <path d="M22 12A10 10 0 1 0 10.06 21.9v-6.3H7.08v-3.6h2.98v-2.75c0-2.95 1.75-4.57 4.43-4.57 1.29 0 2.64.23 2.64.23v2.89h-1.49c-1.47 0-1.93.91-1.93 1.84v2.36h3.3l-.53 3.6h-2.77v6.3A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
      <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.18 8.18 0 0 0 22 5.9a8.2 8.2 0 0 1-2.4.7 4.1 4.1 0 0 0 1.8-2.3 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 2 4.8a4.1 4.1 0 0 0 1.3 5.5A4.1 4.1 0 0 1 2.8 9.7v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.2 8.2 0 0 1 2 18.4 11.6 11.6 0 0 0 8 19Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
      <path d="M19 0H5A5 5 0 0 0 0 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Zm-8 19H8V8h3v11Zm-1.5-12.3A1.8 1.8 0 1 1 10 4.9a1.8 1.8 0 0 1-.5 1.8ZM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 2 4.11a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
