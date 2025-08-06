import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

// This tells Next.js that this page is async, and we're going to await `params`
export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // <- use() unwraps the async params

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <main className="bg-white text-black px-6 py-20 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            {service.description}
          </p>
        </header>

        {/* Image */}
        <div className="relative w-full h-72 md:h-[400px] rounded-2xl overflow-hidden mb-12">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <section className="space-y-8 text-gray-800">
          <p>{service.details.intro}</p>

          <ul className="list-disc list-inside pl-4 space-y-2">
            {service.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <p>{service.details.outro}</p>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-primary-color hover:bg-primary-color-hover text-white px-6 py-3 rounded-lg font-semibold"
          >
            Request {service.title} →
          </Link>
        </div>
      </div>
    </main>
  );
}
