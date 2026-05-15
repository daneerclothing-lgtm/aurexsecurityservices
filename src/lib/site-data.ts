import { Building2, HardHat, ShoppingBag, Calendar, Cctv, Siren, ConciergeBell, Warehouse, Hotel, Home, Flame, BellRing, GraduationCap, Truck, Users, ShieldCheck, Clock, BadgeCheck, Zap, Cog, PoundSterling, Sparkles } from "lucide-react";

export const SERVICES = [
  { slug: "corporate", title: "Corporate Security", icon: Building2, desc: "Discreet, suited officers safeguarding HQs, boardrooms and executives.", points: ["Front-of-house & access control", "Threat assessments", "Visitor screening"] },
  { slug: "construction", title: "Construction Site Security", icon: HardHat, desc: "Round-the-clock protection against theft, vandalism and trespass.", points: ["Mobile patrols", "Plant & material security", "Site access logging"] },
  { slug: "retail", title: "Retail Security", icon: ShoppingBag, desc: "Loss-prevention specialists protecting stores, staff and customers.", points: ["Plain-clothes detection", "Stock-loss reduction", "Incident reporting"] },
  { slug: "event", title: "Event Security", icon: Calendar, desc: "Crowd management for galas, festivals, conferences and stadia.", points: ["Crowd dynamics planning", "VIP protection", "Stewarding teams"] },
  { slug: "cctv", title: "CCTV Monitoring", icon: Cctv, desc: "Manned 24/7 control room with rapid verification and dispatch.", points: ["Live monitoring", "Incident verification", "Police liaison"] },
  { slug: "alarm", title: "Alarm Response", icon: Siren, desc: "SIA-licensed keyholders responding within rapid SLAs across the UK.", points: ["Keyholding service", "Lock/unlock", "Post-incident reporting"] },
  { slug: "concierge", title: "Concierge Security", icon: ConciergeBell, desc: "Five-star front-desk presence for premium residential and offices.", points: ["Guest reception", "Parcel handling", "Resident liaison"] },
  { slug: "warehouse", title: "Warehouse Security", icon: Warehouse, desc: "Asset protection, access control and goods-in/out verification.", points: ["Loading bay control", "Driver verification", "ANPR integration"] },
  { slug: "hotel", title: "Hotel Security", icon: Hotel, desc: "Discreet protection that complements luxury hospitality standards.", points: ["Lobby security", "Night audits", "Guest welfare"] },
  { slug: "residential", title: "Residential Security", icon: Home, desc: "High-net-worth estate protection and gated community patrols.", points: ["Estate patrols", "Resident protocols", "Discreet officers"] },
  { slug: "fire", title: "Fire Marshal Services", icon: Flame, desc: "Trained fire marshals for offices, events and construction sites.", points: ["Risk assessments", "Evacuation drills", "Fire warden cover"] },
  { slug: "reception", title: "Reception Security", icon: BellRing, desc: "Polished officers blending hospitality with full security duties.", points: ["Switchboard cover", "Visitor management", "Access systems"] },
  { slug: "education", title: "Educational Security", icon: GraduationCap, desc: "Safeguarding-aware officers for schools, colleges and universities.", points: ["DBS-checked staff", "Safeguarding training", "Campus patrols"] },
] as const;

export const INDUSTRIES = [
  { slug: "construction", title: "Construction", icon: HardHat, desc: "Site theft, plant security and 24/7 patrols across active builds." },
  { slug: "corporate", title: "Corporate Offices", icon: Building2, desc: "Reception, access control and executive protection programmes." },
  { slug: "retail", title: "Retail Stores", icon: ShoppingBag, desc: "Visible deterrence and intelligence-led loss prevention." },
  { slug: "shopping", title: "Shopping Centres", icon: ShoppingBag, desc: "Concourse patrols, response teams and CCTV control rooms." },
  { slug: "education", title: "Schools & Universities", icon: GraduationCap, desc: "Safeguarding-trained officers and after-hours protection." },
  { slug: "hotels", title: "Hotels", icon: Hotel, desc: "Five-star aware security for guests, lobbies and back-of-house." },
  { slug: "logistics", title: "Logistics & Warehouses", icon: Truck, desc: "Goods-in/out, loading bays and high-value asset protection." },
  { slug: "events", title: "Events & Festivals", icon: Calendar, desc: "Crowd safety, accreditation, VIP and perimeter security." },
  { slug: "residential", title: "Residential", icon: Home, desc: "Gated estates, HNW residences and luxury developments." },
] as const;

export const WHY_CHOOSE = [
  { icon: Clock, title: "24/7 Response", desc: "Round-the-clock dispatch from our UK control room." },
  { icon: Users, title: "Experienced Guards", desc: "Vetted officers with sector-specific operational training." },
  { icon: Zap, title: "Rapid Deployment", desc: "Mobilise officers across the UK within hours, not days." },
  { icon: BadgeCheck, title: "Fully Licensed", desc: "100% SIA-licensed, DBS-checked and BS 7858 vetted." },
  { icon: Cog, title: "Modern Technology", desc: "GPS patrol logs, body-worn video and live reporting." },
  { icon: PoundSterling, title: "Competitive Pricing", desc: "Transparent, scalable contracts with no hidden fees." },
  { icon: Sparkles, title: "Tailored Solutions", desc: "Bespoke deployment plans built around your risk profile." },
  { icon: ShieldCheck, title: "Insured £10M", desc: "Comprehensive public liability and employer's insurance." },
] as const;

export const TESTIMONIALS = [
  { name: "James Whittaker", role: "Site Director, Carrington Build Group", quote: "Aurex transformed our site security. Theft incidents fell to zero within the first quarter and reporting is genuinely best-in-class.", avatar: "JW" },
  { name: "Priya Shah", role: "Head of Operations, Meridian Retail", quote: "Their loss-prevention team is sharp, polite and visible. Shrinkage across our flagship stores dropped 38% in six months.", avatar: "PS" },
  { name: "Oliver Bennett", role: "Facilities Manager, Lattice Holdings", quote: "Concierge officers that look the part and act with absolute professionalism. Tenants regularly comment on the upgrade.", avatar: "OB" },
  { name: "Sophia Clarke", role: "Director, Atlas Events London", quote: "Crowd management at our 18,000-capacity event was flawless. Briefings were detailed and the team adapted in real time.", avatar: "SC" },
] as const;

export const CASE_STUDIES = [
  { title: "Construction Site Theft Prevention", challenge: "A £42M residential development in East London suffered repeated overnight theft of copper, plant and tools.", solution: "Deployed dual-officer night patrols with body-worn video, ANPR-fed mobile units and a dedicated CCTV operator.", result: "Theft incidents reduced 100% over 9 months. Insurance premium reduced 22%.", stats: [{ k: "Incidents", v: "0" }, { k: "Months", v: "9" }, { k: "Saving", v: "£186k" }] },
  { title: "Event Crowd Control", challenge: "A 22,000-capacity outdoor festival required licensable crowd management, accreditation and counter-terror cover.", solution: "120 SIA officers across perimeter, pit and accreditation, with command-and-control from a temporary control room.", result: "Zero crowd incidents. Police commendation for incident reporting standards.", stats: [{ k: "Officers", v: "120" }, { k: "Attendees", v: "22k" }, { k: "Incidents", v: "0" }] },
  { title: "Corporate Building Protection", challenge: "A FTSE-listed HQ required a discreet upgrade to access control and executive arrival protocols.", solution: "Suited concierge-security team integrated with bespoke access workflows and visitor pre-screening.", result: "Tailgating attempts down 96%. Tenant satisfaction NPS up 41 points.", stats: [{ k: "Tailgating", v: "-96%" }, { k: "NPS", v: "+41" }, { k: "Coverage", v: "24/7" }] },
  { title: "Retail Loss Prevention", challenge: "A premium high-street retailer faced organised retail crime across five flagship stores.", solution: "Plain-clothes detection officers paired with intelligence-led store rotation and weekly briefing reviews.", result: "Shrinkage reduced 38% in six months. 31 prosecutions secured.", stats: [{ k: "Shrinkage", v: "-38%" }, { k: "Stores", v: "5" }, { k: "Prosecutions", v: "31" }] },
] as const;

export const POSTS = [
  { slug: "uk-security-2025-outlook", title: "UK Security Outlook 2025: Trends Reshaping Manned Guarding", category: "Industry", date: "12 May 2025", excerpt: "From AI-assisted CCTV to ProtectDuty, here's what UK security buyers need to know this year." },
  { slug: "construction-theft-prevention", title: "Construction Site Theft: A Practical Prevention Playbook", category: "Construction", date: "28 Apr 2025", excerpt: "Five battle-tested measures that consistently drive site-theft incidents to zero." },
  { slug: "cctv-best-practices", title: "CCTV Monitoring Best Practices for UK Businesses", category: "CCTV", date: "14 Apr 2025", excerpt: "How to design a control-room-grade CCTV strategy that pays for itself." },
  { slug: "event-security-checklist", title: "The 2025 Event Security Checklist Every Organiser Needs", category: "Events", date: "02 Apr 2025", excerpt: "Crowd dynamics, ProtectDuty readiness and contingency planning, distilled." },
  { slug: "sia-licensing-explained", title: "SIA Licensing Explained: What Buyers Should Verify", category: "Compliance", date: "20 Mar 2025", excerpt: "A buyer's guide to SIA licensing, ACS accreditation and BS 7858 vetting." },
  { slug: "lone-worker-protection", title: "Protecting Lone Workers After Hours", category: "Workplace", date: "06 Mar 2025", excerpt: "Practical, low-cost measures that meaningfully reduce lone-worker risk." },
] as const;
