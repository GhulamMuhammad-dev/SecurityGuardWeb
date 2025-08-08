// data/services.ts
export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  details: {
    intro: string;
    features: string[];
    outro: string;
  };
}

export const services: Service[] = [
  {
    slug: "manned-guarding",
    title: "Manned Guarding",
    description:
      "Trained and licensed personnel ensuring safety at all times for businesses, events, and private premises.",
    image: "/images/securityImg1.webp",
    details: {
      intro:
        "Our trained and licensed personnel ensure around‑the‑clock safety for corporate, residential, and event sites.",
      features: [
        "Highly visible deterrents",
        "Access control & reception",
        "Overnight and day shifts",
        "Customized patrol schedules",
      ],
      outro:
        "We comply with UK security standards and deliver service with integrity, precision, and discipline.",
    },
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Patrols",
    description:
      "Visible deterrents with mobile units providing surveillance and rapid response across multiple sites.",
    image: "/images/securityImg4.webp",
    details: {
      intro:
        "Our mobile patrol teams provide flexible coverage across multiple locations, enhancing visibility and response time.",
      features: [
        "Routine and random patrol rounds",
        "Alarm response dispatch",
        "Vehicle security checks",
        "Custom route tracking",
      ],
      outro:
        "Optimized for cost-effectiveness, our patrol services give proactive coverage where fixed posts aren’t feasible.",
    },
  },
  {
    slug: "event-security",
    title: "Event Security",
    description:
      "Crowd control, access monitoring, and risk management for events of all sizes.",
    image: "/images/securityImg3.webp",
    details: {
      intro:
        "From corporate events to concerts, our security teams manage access, crowd flow, and VIP protection with expert oversight.",
      features: [
        "Bag checks & ticket verification",
        "Crowd control barriers",
        "VIP escort and access management",
        "Emergency planning & coordination",
      ],
      outro:
        "Our certified teams are trained in mass-event protocols and are ready to react with speed and professionalism.",
    },
  },
  {
    slug: "k9-dog-units",
    title: "K9 Dog Units",
    description:
      "Professional dog units trained in detection, deterrence, and tactical response.",
    image: "/images/k9Dog.jpg",
    details: {
      intro:
        "Our K9 units combine highly trained security dogs and licensed handlers to proactively patrol and detect threats.",
      features: [
        "Intruder detection patrols",
        "Crowd & crowd control deployment",
      ],
      outro:
        "We operate under strict safety protocols to ensure effectiveness while maintaining public and animal welfare.",
    },
  },
  {
    slug: "key-holding",
    title: "Key Holding Service",
    description:
      "Secure key management and rapid dispatch when alarms are triggered—ensuring peace of mind around the clock.",
    image: "/images/securityImg2.webp",
    details: {
      intro:
        "Our key holding service ensures that only vetted staff can respond to your alarm events with immediate site access.",
      features: [
        "Secure key storage",
        "Rapid 24/7 alarm response",
        "Call-out & escort services",
        "Incident reporting & log access",
      ],
      outro:
        "We help you minimize downtime and reduce false call-outs with reliable access control and documentation.",
    },
  },
  {
    slug: "construction-site-security",
    title: "Construction Site Security",
    description:
      "Prevent theft, vandalism, and unauthorized access with specialized construction site protection.",
    image: "/images/security1.jpg",
    details: {
      intro:
        "Construction sites are high‑risk areas. Our security solutions protect your assets, materials, and contractors.",
      features: [
        "Site wardens & supervisors",
        "Perimeter patrol & CCTV monitoring",
        "Out‑of‑hours protection",
        "Material access control",
      ],
      outro:
        "We tailor solutions to site phases (day/night) and provide flexible security plans aligned with your build schedule.",
    },
  },
];
