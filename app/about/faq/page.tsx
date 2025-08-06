export default function FAQPage() {
  return (
    <main className="px-6 py-20 md:px-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-primary">Frequently Asked Questions</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <div>
          <h2 className="font-semibold">1. What types of security services do you provide?</h2>
          <p>We offer manned guarding, mobile patrols, event security, key holding, K9 units, and construction site protection.</p>
        </div>

        <div>
          <h2 className="font-semibold">2. Are your guards licensed?</h2>
          <p>Yes, all our security personnel are fully SIA licensed and undergo regular training.</p>
        </div>

        <div>
          <h2 className="font-semibold">3. Can services be customized?</h2>
          <p>Absolutely. We tailor every security plan based on your specific needs, site layout, and risk factors.</p>
        </div>
      </div>
    </main>
  );
}
