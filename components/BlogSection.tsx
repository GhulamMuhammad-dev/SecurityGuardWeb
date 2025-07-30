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
    <section className="py-28 px-6 bg-[#10002B] text-[#E0AAFF] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-[#C77DFF] blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-[#9D4EDD] blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C77DFF] font-semibold tracking-wider uppercase text-sm">
            Security Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Latest <span className="text-[#C77DFF]">Industry Updates</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-[#E0AAFF]/80">
            Expert knowledge and security best practices to help you make informed decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((post, index) => (
            <article 
              key={index} 
              className="bg-[#240046] hover:bg-[#3C096C] border border-[#3C096C] hover:border-[#C77DFF] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-full flex flex-col">
                {/* Image placeholder - replace with actual blog images */}
                <div className="h-48 bg-[#3C096C] flex items-center justify-center">
                  <DocumentTextIcon className="w-16 h-16 text-[#C77DFF]" />
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-[#C77DFF] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#E0AAFF]/60">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#C77DFF] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#E0AAFF]/80 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="px-6 pb-6">
                  <button className="text-[#C77DFF] font-medium text-sm flex items-center gap-2 group-hover:underline">
                    Read article
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-[#C77DFF] text-[#C77DFF] hover:bg-[#C77DFF] hover:text-black font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}

// Icon components
function DocumentTextIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}