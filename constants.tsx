
import { NavItem, Service, Project, TeamMember, PriceTier, Testimonial, FAQItem } from './types';

export const BRAND_NAME = "SRI Frames";
export const TAGLINE = "Building Digital Futures";
export const CONTACT_INFO = {
  phone: "+94 75 409 7421",
  whatsapp: "+94 75 409 7421",
  email: "theekshana.scout@gmail.com",
  location: "Colombo, Sri Lanka"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Team", path: "/team" },
  { label: "Pricing", path: "/pricing" },
  { label: "Growth Guide", path: "/growth-guide" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Website Development",
    description: "High-performance, responsive websites built with modern technologies to scale your business.",
    icon: "Layout"
  },
  {
    id: "s2",
    title: "Branding & Logo Design",
    description: "Unique visual identities that resonate with your audience and build lasting brand recall.",
    icon: "Palette"
  },
  {
    id: "s3",
    title: "Digital Identity Building",
    description: "Crafting a cohesive online presence across all platforms for a professional digital footprint.",
    icon: "Fingerprint"
  },
  {
    id: "s4",
    title: "NGO & Charity Solutions",
    description: "Specialized platforms for non-profits to showcase impact, collect donations, and manage volunteers.",
    icon: "Heart"
  },
  {
    id: "s5",
    title: "Educational Institutions",
    description: "Secure and feature-rich portals for schools and institutes to manage students and curriculum.",
    icon: "GraduationCap"
  },
  {
    id: "s6",
    title: "Digital Transformation",
    description: "Strategic consultancy to help traditional businesses move operations to the digital realm efficiently.",
    icon: "Zap"
  },
  {
    id: "s7",
    title: "Graphic Design",
    description: "Stunning posters, social media graphics, and marketing materials that grab attention.",
    icon: "Image"
  },
  {
    id: "s8",
    title: "Consultancy & Strategy",
    description: "Data-driven roadmaps to navigate the complex digital landscape and achieve measurable growth.",
    icon: "LineChart"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Lanka Eco Travels",
    description: "Premium booking platform for an eco-tourism venture in Ella.",
    impact: "45% increase in direct international bookings within 3 months.",
    imageUrl: "https://picsum.photos/seed/travel/800/600"
  },
  {
    id: "p2",
    title: "Bright Minds Academy",
    description: "Comprehensive LMS and student portal for a private education institute.",
    impact: "Streamlined communication for 500+ students and automated grading.",
    imageUrl: "https://picsum.photos/seed/edu/800/600"
  },
  {
    id: "p3",
    title: "Hope Foundation",
    description: "Modern donation-focused website for a local non-profit organization.",
    impact: "Successfully raised over 2M LKR in the first quarter of the launch.",
    imageUrl: "https://picsum.photos/seed/hope/800/600"
  },
  {
    id: "p4",
    title: "Nexus Tech Solutions",
    description: "Corporate rebranding and high-end landing page for a B2B tech firm.",
    impact: "Won 'Best Corporate Design' at a local digital summit.",
    imageUrl: "https://picsum.photos/seed/tech/800/600"
  },
  {
    id: "p5",
    title: "Ceylonese Gems",
    description: "E-commerce platform with high-security features for luxury gem export.",
    impact: "Expanded reach to 12 new countries in Europe and Middle East.",
    imageUrl: "https://picsum.photos/seed/gems/800/600"
  },
  {
    id: "p6",
    title: "Urban Bites",
    description: "Brand identity and digital menu system for a modern restaurant chain.",
    impact: "20% reduction in order processing time via digital adoption.",
    imageUrl: "https://picsum.photos/seed/food/800/600"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "t1",
    name: "Theekshana Rajapakshe",
    role: "Founder & Lead Strategist",
    bio: "Visionary leader with 5+ years of experience in helping local brands reach the global stage.",
    imageUrl: "public/images/theekshana.png",
    specialties: ["Brand Strategy", "Project Management", "Business Growth"],
    experience: "5+ Years",
    motto: "Leading with vision, delivering with precision."
  },
  {
    id: "t2",
    name: "Sanuja Kaveen",
    role: "Senior UI/UX Designer",
    bio: "Passionate about creating futuristic and user-centric interfaces that tell a story.",
    imageUrl: "https://picsum.photos/seed/team2/400/400",
    specialties: ["User Experience", "Futuristic UI", "Motion Design"],
    experience: "4 Years",
    motto: "Design is not just what it looks like, it's how it works."
  },
  {
    id: "t3",
    name: "Kasun Jayawardena",
    role: "Lead Full-Stack Developer",
    bio: "Expert in building robust and scalable web architectures using cutting-edge tech stacks.",
    imageUrl: "https://picsum.photos/seed/team3/400/400",
    specialties: ["React & Next.js", "Node.js", "Cloud Infrastructure"],
    experience: "6 Years",
    motto: "Clean code, powerful solutions, zero limits."
  },
  {
    id: "t4",
    name: "Sehandu Ganganath",
    role: "Digital Marketing Head",
    bio: "Strategic thinker focused on data-driven growth and impactful social media presence.",
    imageUrl: "https://picsum.photos/seed/team4/400/400",
    specialties: ["SEO & SEM", "Content Strategy", "Performance Marketing"],
    experience: "5 Years",
    motto: "Connecting brands with the people who love them."
  }
];

export const PRICING: PriceTier[] = [
  {
    id: "pr1",
    name: "Starter Package",
    price: "45k LKR",
    features: ["Responsive 1-Page Site", "Contact Form", "Basic SEO", "Mobile Optimized", "Hosting Support"]
  },
  {
    id: "pr2",
    name: "Professional Package",
    price: "85k LKR",
    features: ["Up to 5 Pages", "Custom UI Design", "CMS Integration", "Google Analytics", "3 Months Support"],
    isPopular: true
  },
  {
    id: "pr3",
    name: "Premium Package",
    price: "150k+ LKR",
    features: ["E-commerce / Advanced App", "Premium Graphics", "Speed Optimization", "Payment Gateway", "Full Digital Identity"]
  },
  {
    id: "pr4",
    name: "NGO Special",
    price: "Custom",
    features: ["Donation System", "Impact Showcase", "Volunteer Portal", "Subsidized Maintenance", "Social Integration"]
  },
  {
    id: "pr5",
    name: "Education Institute",
    price: "Custom",
    features: ["Student Portal", "Learning Management", "Fees Integration", "Attendance System", "Admin Dashboard"]
  },
  {
    id: "pr6",
    name: "Business Upgrade",
    price: "Negotiable",
    features: ["Platform Refactor", "Database Migration", "Identity Refresh", "Enterprise Scale", "VIP 24/7 Support"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ts1",
    name: "Mahela Udawatte",
    role: "CEO, Lanka Eco Travels",
    content: "SRI Frames transformed our business. Our bookings tripled after our new site went live. Highly professional team!",
    avatarUrl: "https://picsum.photos/seed/av1/100/100"
  },
  {
    id: "ts2",
    name: "Sunil de Silva",
    role: "Founder, Hope Foundation",
    content: "We never expected a digital transformation would help us raise so much for our cause. Thank you for the heart you put in!",
    avatarUrl: "https://picsum.photos/seed/av2/100/100"
  },
  {
    id: "ts3",
    name: "Priyanthi K.",
    role: "Director, Bright Minds",
    content: "The educational portal they built is world-class. It's so easy for our students and teachers to use.",
    avatarUrl: "https://picsum.photos/seed/av3/100/100"
  },
  {
    id: "ts4",
    name: "Ranil Wickram",
    role: "Marketing Head, Nexus Tech",
    content: "Their design sense is futuristic. They truly represent the next generation of digital agencies in Sri Lanka.",
    avatarUrl: "https://picsum.photos/seed/av4/100/100"
  },
  {
    id: "ts5",
    name: "Chathura P.",
    role: "Owner, Urban Bites",
    content: "Speed, quality, and commitment. SRI Frames delivered exactly what they promised, on time.",
    avatarUrl: "https://picsum.photos/seed/av5/100/100"
  },
  {
    id: "ts6",
    name: "Imara J.",
    role: "Exotic Gems Exporter",
    content: "The global reach we have now is incredible. Our luxury brand finally feels luxury online.",
    avatarUrl: "https://picsum.photos/seed/av6/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you provide training on how to use the website?",
    answer: "Yes, every project includes a free 1-on-1 walkthrough and a custom user guide so you can manage your content with confidence."
  },
  {
    question: "Do you offer maintenance after the project is done?",
    answer: "Absolutely. We offer flexible maintenance packages to keep your site secure, updated, and performing at its best."
  },
  {
    question: "Can you help with writing professional content?",
    answer: "Yes, we have copywriters who can help craft your brand story, service descriptions, and blog posts to engage your audience."
  },
  {
    question: "Is it possible to upgrade my website later?",
    answer: "Our websites are built to be scalable. You can start small and add new features (like E-commerce or booking systems) as your business grows."
  },
  {
    question: "What are your payment terms?",
    answer: "We follow a 50/50 model: 50% advance to initiate the project and the remaining 50% upon successful completion before handover."
  }
];
