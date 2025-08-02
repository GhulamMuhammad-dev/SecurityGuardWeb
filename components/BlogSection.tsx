'use client';

const blogs = [
  {
    title: "5 Key Benefits of Hiring a Manned Guarding Service",
    excerpt: "Discover how professional security personnel can protect your assets and reduce liability risks.",
    category: "Security Tips",
    date: "May 15, 2023"
  },
  {
    title: "How to Choose the Right Security Provider for Your Business",
    excerpt: "Learn the essential factors to consider when selecting a security partner for your organization.",
    category: "Business Security",
    date: "April 28, 2023"
  },
  {
    title: "Construction Site Thefts on the Rise — Here's How to Prevent Them",
    excerpt: "Recent statistics show increasing thefts at construction sites. Here are proven prevention strategies.",
    category: "Industry News",
    date: "March 10, 2023"
  },
  {
    title: "What to Expect from an SIA-Licensed Guard",
    excerpt: "Understanding the training and standards required for SIA-licensed security professionals.",
    category: "Regulations",
    date: "February 22, 2023"
  }
];

export function BlogSection() {
  return (
    <>
    <section className="py-28 px-6 bg-[#1A1A1A] text-[#F4F4F4] relative overflow-hidden" id="blog">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#EF443B] font-semibold tracking-wider uppercase text-sm">
            Security Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Latest <span className="text-[#EF443B]">Industry Updates</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-[#F4F4F4]/80">
            Expert knowledge and security best practices to help you make informed decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((post, index) => (
            <article
              key={index}
              className="bg-[#2B2B2B] hover:bg-[#333333] border border-[#3A3A3A] hover:border-[#EF443B] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-full flex flex-col">
                {/* Placeholder icon or image */}
                <div className="h-48 bg-[#262626] flex items-center justify-center">
                  <DocumentTextIcon className="w-16 h-16 text-[#EF443B]" />
                </div>

                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-[#EF443B] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#F4F4F4]/60">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#EF443B] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[#F4F4F4]/80 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <button className="text-[#EF443B] font-medium text-sm flex items-center gap-2 group-hover:underline">
                    Read article
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-[#EF443B] text-[#EF443B] hover:bg-[#EF443B] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

// Icon components
function DocumentTextIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}