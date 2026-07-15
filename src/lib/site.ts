export const siteConfig = {
  name: "Oldbury MOT Centre",
  tagline: "MOT testing, servicing & repairs in Oldbury",
  description:
    "Independent MOT test centre and full garage in Oldbury. Class 4, 5 & 7 MOTs, servicing, brakes, clutches, exhausts, welding, wheel alignment and accident repairs — with honest advice and German car specialists.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://oldburymotcentre.co.uk",
  serviceArea: "Oldbury, Sandwell and the West Midlands",
  products: [
    "MOT Testing",
    "Servicing",
    "Brakes",
    "Clutches",
    "Exhausts",
    "Welding",
    "Wheel Alignment",
    "Accident Repairs",
  ],
};

export const contact = {
  // TODO: confirm email and opening hours with the owner before going live.
  address: {
    street: "2 Popes Lane",
    area: "Oldbury",
    city: "Oldbury",
    postcode: "B69 4PN",
    country: "England",
    full: "2 Popes Lane, Oldbury, B69 4PN",
  },
  phone: "0121 552 9933",
  phoneHref: "tel:+441215529933",
  email: "info@oldburymotcentre.co.uk", // TODO: confirm real business email
  emailHref: "mailto:info@oldburymotcentre.co.uk", // TODO: confirm real business email
  // TODO: placeholder opening hours — confirm actual hours with the garage.
  hours: [
    { day: "Monday", hours: "8:30 am – 6:00 pm" },
    { day: "Tuesday", hours: "8:30 am – 6:00 pm" },
    { day: "Wednesday", hours: "8:30 am – 6:00 pm" },
    { day: "Thursday", hours: "8:30 am – 6:00 pm" },
    { day: "Friday", hours: "8:30 am – 6:00 pm" },
    { day: "Saturday", hours: "8:30 am – 1:00 pm" },
    { day: "Sunday", hours: "Closed" },
  ],
  mapEmbedUrl:
    "https://maps.google.com/maps?q=2+Popes+Lane,+Oldbury,+B69+4PN&t=&z=15&ie=UTF8&iwloc=&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=2+Popes+Lane,+Oldbury,+B69+4PN",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "MOT Testing", href: "/mot-testing" },
  { label: "Servicing & Repairs", href: "/servicing" },
  { label: "Accident Repairs", href: "/accident-repairs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/testimonials" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const trustPillars = [
  {
    title: "DVSA-Approved MOT Testing",
    description:
      "Class 4, 5 and 7 MOTs carried out by qualified testers. Straight-talking results and clear advice on anything that needs putting right.",
    icon: "shield" as const,
  },
  {
    title: "A Full Garage Under One Roof",
    description:
      "MOTs, servicing, brakes, clutches, exhausts, welding, tracking and accident repairs — everything your vehicle needs in one place.",
    icon: "wrench" as const,
  },
  {
    title: "German Car Specialists",
    description:
      "Audi, BMW, Mercedes, VW and more — our team knows German vehicles inside out, with honest, fairly-priced work you can trust.",
    icon: "car" as const,
  },
];

export const categories = [
  {
    title: "MOT Testing",
    description:
      "Class 4, 5 & 7 MOTs, plus motorhomes, quad bikes and larger vehicles — booked in and tested by approved examiners.",
    tag: "Class 4, 5 & 7 · specialist vehicles",
    href: "/mot-testing",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
  },
  {
    title: "Servicing & Repairs",
    description:
      "Servicing, brakes, clutches, exhausts and general mechanical repairs — including German car specialists.",
    tag: "Servicing · brakes · clutches · exhausts",
    href: "/servicing",
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
  },
  {
    title: "Accident Repairs & Bodywork",
    description:
      "Accident repairs, welding and wheel tracking & alignment to get your vehicle straight, safe and back on the road.",
    tag: "Accident repairs · welding · tracking",
    href: "/accident-repairs",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  },
];

// Small, local trust cues — shown as badges rather than corporate benefit cards.
export const localTrust = [
  { label: "Class 4, 5 & 7 MOTs", icon: "shield" as const },
  { label: "German automobile specialists", icon: "car" as const },
  { label: "MOT, servicing & repairs in one place", icon: "wrench" as const },
  { label: "Serving Oldbury & Sandwell", icon: "map" as const },
  { label: "Honest, no-pressure advice", icon: "smile" as const },
];

// Simple, customer-friendly explanation of how booking your vehicle in works.
export const bookingSteps = [
  {
    title: "Book your slot",
    text: "Give us a call on 0121 552 9933 and tell us what your vehicle needs. We'll find a time that works — allow 2 hours for Class 5 & 7 MOTs.",
    icon: "phone" as const,
  },
  {
    title: "Bring your vehicle in",
    text: "Drop it off at our Oldbury garage on Popes Lane. Cars, vans, motorhomes, quad bikes and larger vehicles all welcome.",
    icon: "car" as const,
  },
  {
    title: "Full inspection",
    text: "Our qualified testers and technicians check your vehicle thoroughly, whether it's an MOT, a service or a repair.",
    icon: "search" as const,
  },
  {
    title: "Clear report & fair quote",
    text: "We explain exactly what we found in plain English, with an honest, no-surprises price for any work needed.",
    icon: "receipt" as const,
  },
  {
    title: "Back on the road",
    text: "Once it's passed or the work is done, you're good to go. We're just up the road in Oldbury whenever you need us again.",
    icon: "check" as const,
  },
];

export const motClasses = [
  {
    title: "Class 4 MOT",
    description:
      "The most common MOT — for cars, small vans, campervans, motorhomes up to 3,000 kg, and quad bikes. Typically completed within the hour.",
    features: [
      "Cars & small vans",
      "Quad bikes",
      "Smaller motorhomes & campervans",
      "Usually done within an hour",
    ],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    title: "Class 5 MOT",
    description:
      "For larger passenger vehicles with 13 or more seats, such as minibuses, and larger motorhomes. Please allow 2 hours for the inspection.",
    features: [
      "Minibuses & 13+ seat vehicles",
      "Larger motorhomes",
      "Private passenger vehicles",
      "Allow 2 hours for inspection",
    ],
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
  },
  {
    title: "Class 7 MOT",
    description:
      "For larger goods vehicles and vans between 3,000 kg and 3,500 kg design gross weight. Please allow 2 hours for the inspection.",
    features: [
      "Goods vehicles 3,000–3,500 kg",
      "Larger vans",
      "Commercial vehicles",
      "Allow 2 hours for inspection",
    ],
    image:
      "https://images.unsplash.com/photo-1600661653561-629509216228?w=800&q=80",
  },
];

// Genuine 5-star Google reviews.
export const testimonials = [
  {
    name: "Gagandeep Sandhu",
    location: "Google review",
    rating: 5,
    quote:
      "Had my MOT done at Oldbury MOT Centre and the service was excellent. Steve was great to deal with — knowledgeable, efficient, and professional throughout. Everything was handled smoothly and to a high standard. Would definitely recommend.",
  },
  {
    name: "Harbind Sandhu",
    location: "Google review",
    rating: 5,
    quote:
      "Excellent garage, great service. The main chap Steve is a top bloke. Knows what he's talking about and has many years of experience in German cars. Has helped me with all of the cars in my family and always looked after me.",
  },
  {
    name: "Dan Ray",
    location: "Google review",
    rating: 5,
    quote:
      "Highly recommended. Booked in for a full service. No issues and kept me updated on the progress to ensure I had my car back in time.",
  },
  {
    name: "Ayaz Ayoob",
    location: "Google review",
    rating: 5,
    quote:
      "Highly recommended. Been here for my MOT. Mr Bharje welcomed me with full politeness and explained everything in detail. Such wonderful customer service — they really know what they're doing. Really impressive and recommendable.",
  },
  {
    name: "Luke Hensey",
    location: "Google review",
    rating: 5,
    quote:
      "Great service, sorted my MOT and all the work needed same day for a good price.",
  },
  {
    name: "Kathleen Lloyd",
    location: "Google review",
    rating: 5,
    quote:
      "Garage replaced a refurbished engine timing belt, serviced and MOT'd — runs better than when first purchased. Highly recommended. Keeps you well informed if other work needs attention in future. Well done to all involved.",
  },
  {
    name: "Craig Freeman",
    location: "Google review",
    rating: 5,
    quote:
      "Been using Oldbury MOT for the last 10 years, never had a problem. The gaffer goes above and beyond. Family and nan use them too. Thank you.",
  },
  {
    name: "Rachel Rowley",
    location: "Google review",
    rating: 5,
    quote:
      "Yet again, brilliant service here. Very careful, very thorough and very reasonably priced — would highly recommend!",
  },
];

export const faqs = [
  {
    question: "Which MOT classes do you test?",
    answer:
      "We carry out Class 4, Class 5 and Class 7 MOTs. That covers everything from cars, small vans and quad bikes (Class 4), to minibuses and larger passenger vehicles (Class 5), to larger vans and goods vehicles between 3,000 kg and 3,500 kg (Class 7). We can also test motorhomes and larger, specialist vehicles.",
  },
  {
    question: "How long does an MOT take?",
    answer:
      "A standard Class 4 MOT is usually completed within the hour. For Class 5 and Class 7 vehicles we ask you to allow 2 hours, as the larger inspection takes more time. We'll always give you a clear timeframe when you book.",
  },
  {
    question: "What happens if my vehicle fails its MOT?",
    answer:
      "Because we're a full garage, we can carry out any repairs needed to get your vehicle through — brakes, exhausts, clutches, welding and general mechanical work — and then retest it. We'll explain exactly what's required and give you an honest price before we do anything.",
  },
  {
    question: "Do you specialise in German cars?",
    answer:
      "Yes. We're German automobile specialists and regularly work on Audi, BMW, Mercedes, Volkswagen and more — from servicing and diagnostics to repairs — with fair, transparent pricing.",
  },
  {
    question: "What other services do you offer?",
    answer:
      "As well as MOTs we offer full servicing, brakes, clutches, exhausts, welding, wheel tracking and alignment, accident repairs and general mechanical repairs. Whatever your vehicle needs, it can usually be handled under one roof.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We're based on Popes Lane in Oldbury and serve customers across Oldbury, Sandwell and the wider West Midlands — including Smethwick, West Bromwich, Tipton, Rowley Regis, Halesowen and beyond.",
  },
  {
    question: "How do I book my vehicle in?",
    answer:
      "The quickest way is to call us on 0121 552 9933. Tell us what your vehicle needs and we'll find you a slot. You can also drop by the garage at 2 Popes Lane, Oldbury, B69 4PN.",
  },
  {
    question: "Can you test motorhomes, quad bikes and larger vehicles?",
    answer:
      "Yes. We're set up for larger and specialist vehicles including motorhomes, quad bikes, park homes and luxury lodges, as well as the standard Class 4, 5 and 7 range. Give us a call to discuss your vehicle and we'll advise on the right test.",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    alt: "Technician carrying out an inspection under a vehicle",
    category: "MOT",
  },
  {
    src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
    alt: "Engine bay open during a vehicle service",
    category: "Servicing",
  },
  {
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80",
    alt: "Running diagnostics on a car in the workshop",
    category: "Diagnostics",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    alt: "Car booked in for its MOT test",
    category: "MOT",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    alt: "Vehicle in for repair and bodywork",
    category: "Repairs",
  },
  {
    src: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800&q=80",
    alt: "Serviced car ready to collect",
    category: "Servicing",
  },
  {
    src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    alt: "Larger vehicle in for a Class 5 MOT",
    category: "MOT",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    alt: "German car in for specialist servicing",
    category: "Repairs",
  },
];

export const pageMetadata = {
  home: {
    title: "Oldbury MOT Centre | MOT Testing, Servicing & Repairs in Oldbury",
    description:
      "Class 4, 5 & 7 MOTs, servicing, brakes, clutches, exhausts, welding, wheel alignment and accident repairs in Oldbury. German car specialists. Call 0121 552 9933.",
  },
  about: {
    title: "About Us | Oldbury MOT Centre",
    description:
      "Learn about Oldbury MOT Centre — your local independent MOT test centre and full garage on Popes Lane, Oldbury, with German car specialists.",
  },
  mot: {
    title: "MOT Testing | Class 4, 5 & 7 MOTs | Oldbury MOT Centre",
    description:
      "Class 4, 5 & 7 MOT testing in Oldbury, plus motorhomes, quad bikes and larger vehicles. Allow 2 hours for Class 5 & 7. Book on 0121 552 9933.",
  },
  servicing: {
    title: "Servicing & Repairs | Brakes, Clutches & Exhausts | Oldbury MOT Centre",
    description:
      "Full vehicle servicing and mechanical repairs in Oldbury — brakes, clutches, exhausts, diagnostics and general repair. German car specialists.",
  },
  accidentRepairs: {
    title: "Accident Repairs & Bodywork | Welding & Tracking | Oldbury MOT Centre",
    description:
      "Accident repairs, welding and wheel tracking & alignment in Oldbury. We get your vehicle straight, safe and back on the road.",
  },
  gallery: {
    title: "Gallery | Oldbury MOT Centre",
    description:
      "A look inside Oldbury MOT Centre — MOT testing, servicing, diagnostics and repairs at our Popes Lane garage.",
  },
  testimonials: {
    title: "Reviews | Oldbury MOT Centre",
    description:
      "Read what our customers say about Oldbury MOT Centre — honest MOTs, servicing and repairs with German car specialists in Oldbury.",
  },
  faq: {
    title: "FAQs | Oldbury MOT Centre",
    description:
      "Frequently asked questions about MOT classes, timings, repairs, German car servicing and booking at Oldbury MOT Centre.",
  },
  contact: {
    title: "Contact Us | Oldbury MOT Centre",
    description:
      "Find Oldbury MOT Centre at 2 Popes Lane, Oldbury, B69 4PN. Call 0121 552 9933 to book your MOT, service or repair.",
  },
};
