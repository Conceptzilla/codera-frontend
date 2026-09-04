export const languages = [
  { code: "En", label: "English" },
  { code: "Fr", label: "French" },
  { code: "De", label: "German" },
  { code: "Es", label: "Spanish" },
  { code: "中文", label: "Chinese" },
] as const;

export const businessMetrics = [
  {
    category: "Time saving",
    description: "Process automation frees you to focus on other tasks.",
    label: "less mundanity",
    value: 20,
  },
  {
    category: "Safety",
    description: "Analyzing driving behavior improves road safety.",
    label: "fewer accidents.",
    value: 50,
  },
  {
    category: "Improving efficiency",
    description: "Route optimization saves up to a third on fuel.",
    label: "reduction in fuel costs.",
    value: 30,
  },
] as const;

export const solutionTerms = {
  tracking: {
    label: "vehicle tracking",
    description: "Track your trucks, vans, cars, trailers and assets with GPS.",
  },
  safety: {
    label: "safety and maintenance",
    description:
      "Use live fleet signals to support safer driving and timely maintenance.",
  },
  workflow: {
    label: "workflow management",
    description:
      "Bring dispatch, assignments, and daily operations into one clear workflow.",
  },
  compliance: {
    label: "regulatory compliance",
    description:
      "Keep essential records and operational requirements visible to your team.",
  },
  sustainability: {
    label: "sustainability efforts and EV integration",
    description:
      "Plan a more efficient fleet mix and support the transition to electric vehicles.",
  },
  administration: {
    label: "business administration",
    description:
      "Connect fleet activity with the information needed to manage costs and resources.",
  },
} as const;

export type SolutionTermKey = keyof typeof solutionTerms;

export const resultsClients = [
  {
    id: "xpo",
    avatarPosition: "0% 0%",
    curveDepth: 0.72,
    label: "XPO Logistics",
    result: 81,
    highlight: "cut unplanned idle time by 19%.",
    quoteBefore: "After connecting our regional fleet with ",
    quoteAfter:
      ", dispatchers gained a much clearer picture of every route. In the first quarter, we ",
    person: "Michael Carter",
    role: "VP of Fleet Operations, XPO Logistics",
  },
  {
    id: "scan",
    avatarPosition: "scan",
    curveDepth: 1,
    label: "Scan Global Logistics",
    result: 73,
    highlight: "reduced costs by 27%.",
    quoteBefore: "Since implementing the telematics system from ",
    quoteAfter:
      ", our fleet has reached an entirely new level of efficiency. Over six months, we have ",
    person: "James Anderson",
    role: "Chief Operating Officer, Scan Global Logistics",
  },
  {
    id: "fedex",
    avatarPosition: "100% 0%",
    curveDepth: 0.84,
    label: "FedEx",
    result: 78,
    highlight: "improved route efficiency by 22%.",
    quoteBefore: "With live fleet insights from ",
    quoteAfter:
      ", our dispatch teams plan every route with greater confidence. In six months, we ",
    person: "Olivia Bennett",
    role: "Regional Transportation Director, FedEx",
  },
  {
    id: "amazon",
    avatarPosition: "0% 100%",
    curveDepth: 0.98,
    label: "Amazon",
    result: 69,
    highlight: "reduced avoidable mileage by 31%.",
    quoteBefore: "Bringing fleet data into one workspace with ",
    quoteAfter:
      ", gave our delivery teams a consistent way to spot inefficiencies. As a result, we ",
    person: "Daniel Kim",
    role: "Last Mile Operations Lead, Amazon",
  },
  {
    id: "exxonmobil",
    avatarPosition: "100% 100%",
    curveDepth: 0.68,
    label: "ExxonMobil",
    result: 82,
    highlight: "lowered fuel consumption by 18%.",
    quoteBefore: "The analytics provided by ",
    quoteAfter:
      ", helped us identify costly driving patterns without slowing down operations. Within months, we ",
    person: "Sophia Martinez",
    role: "Fleet Performance Manager, ExxonMobil",
  },
] as const;

export const compatibilityItems = [
  {
    icon: "/assets/codera/compatibility/integrations.svg",
    title: "Wide range of integrations.",
    description:
      "Our systems support integration with leading software solutions for fleet management, accounting, and analytics, including SAP, QuickBooks, Fleetio.",
  },
  {
    icon: "/assets/codera/compatibility/hardware.svg",
    title: "Hardware compatibility.",
    description:
      "We work with GPS trackers, fuel sensors, driver behavior monitoring devices, and other standard telematics hardware.",
  },
  {
    icon: "/assets/codera/compatibility/api.svg",
    title: "API for custom solutions",
    description:
      "Leverage our flexible API to create a tailored solution that fits your business specific needs.",
  },
  {
    icon: "/assets/codera/compatibility/setup.svg",
    title: "Fast setup.",
    description:
      "Integration takes just a few hours, allowing you to immediately start optimizing your processes.",
  },
] as const;

export const newsItems = [
  {
    date: "Dec 24",
    description:
      "Users can now connect Codera with SAP for financial and logistics management in one system.",
    image: "/assets/codera/news/sap.jpg",
    title: "Integration with SAP is now complete and fully operational.",
  },
  {
    date: "Dec 17",
    description:
      "New tools cover battery monitoring and route optimization with charging station locations.",
    image: "/assets/codera/news/ev.jpg",
    title: "Codera supports electric vehicles and fleet tools.",
  },
  {
    date: "Dec 14",
    description:
      "Real-time data analysis unlocks new opportunities for cost reduction and business efficiency.",
    image: "/assets/codera/news/data.jpg",
    title: "Big data technology: The future of fleet optimization.",
  },
] as const;

export const faqItems = [
  [
    "How quickly can I start using your solutions?",
    "Most fleets can be up and running within a few days, depending on fleet size and integration requirements.",
  ],
  [
    "Which types of vehicles are compatible with your system?",
    "Codera supports cars, vans, trucks, trailers, specialist vehicles, and mixed electric fleets.",
  ],
  [
    "Can I integrate your systems with existing hardware?",
    "Yes. We support common GPS trackers, sensors, telematics devices, and custom connections through our API.",
  ],
  [
    "How can I access fleet data?",
    "Your team can access live data and reports from a secure browser-based dashboard on desktop or mobile.",
  ],
  [
    "Do you provide technical support?",
    "Yes. Our support team helps with setup, integrations, training, and ongoing troubleshooting.",
  ],
  [
    "How do your solutions help reduce costs?",
    "Route optimization, idle-time monitoring, and maintenance alerts help reduce fuel use and avoidable downtime.",
  ],
  [
    "Are my data secure?",
    "Fleet data is encrypted in transit and at rest, with role-based access available for your team.",
  ],
  [
    "Do you offer a free trial?",
    "Yes. We can arrange a guided trial using a representative part of your fleet before a wider rollout.",
  ],
] as const;
