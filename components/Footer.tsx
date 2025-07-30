export function Footer() {
  return (
    <footer className="bg-[#10002B] text-[#E0AAFF] pt-16 pb-10 px-6 border-t border-[#3C096C]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-[#C77DFF]">Intleaf Security</h3>
            <p className="text-sm mb-4">
              Professional security services you can trust. Protecting what matters most since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#E0AAFF] hover:text-[#C77DFF] transition-colors">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#E0AAFF] hover:text-[#C77DFF] transition-colors">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#E0AAFF] hover:text-[#C77DFF] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#C77DFF]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:underline hover:text-[#C77DFF] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:underline hover:text-[#C77DFF] transition-colors">Services</a></li>
              <li><a href="#blog" className="hover:underline hover:text-[#C77DFF] transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:underline hover:text-[#C77DFF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#C77DFF]">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Static Guarding</a></li>
              <li><a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Mobile Patrols</a></li>
              <li><a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Event Security</a></li>
              <li><a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Retail Security</a></li>
              <li><a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Alarm Response</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#C77DFF]">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-[#C77DFF]" />
                <span>123 Security Ave, Safe City, SC 12345</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#C77DFF]" />
                <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
              </p>
              <p className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-[#C77DFF]" />
                <a href="mailto:contact@intleafsecurity.com" className="hover:underline">contact@intleafsecurity.com</a>
              </p>
              <p className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-[#C77DFF]" />
                <span>24/7 Emergency Response</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3C096C]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Intleaf Security. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Terms of Service</a>
              <a href="#" className="hover:underline hover:text-[#C77DFF] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Icon components (replace with your actual icons)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}