export interface Product {
  slug: string;
  name: string;
  highlightLabel: string;
  purpose: string;
  description: string;
  workflowFocus: string;
  keyModules: string[];
  targetBusinesses: string[];
  detailCards: Array<{
    title: string;
    description: string;
  }>;
}

export const products: Product[] = [
  {
    slug: "nexio-stock",
    name: "Nexio Stock",
    highlightLabel: "Retail control",
    purpose: "Inventory and billing software for retail-led businesses",
    description:
      "Built for liquor shops, pharma stores, grocery counters, retail outlets, and similar businesses that need tighter stock control, faster billing, and simpler tax and compliance reporting.",
    workflowFocus:
      "Move from shelf-level stock visibility to reliable billing, supplier control, and owner-ready reporting in one daily workflow.",
    keyModules: [
      "Stock tracking",
      "Billing workflow",
      "Purchase and supplier handling",
      "GST and routine compliance reports",
      "Owner-ready operational dashboards",
    ],
    targetBusinesses: [
      "Liquor shops",
      "Pharma stores",
      "Grocery stores",
      "Retail counters",
    ],
    detailCards: [
      {
        title: "Billing discipline",
        description:
          "Keep counters moving with quick invoices, tax-ready records, and fewer manual reconciliation gaps.",
      },
      {
        title: "Purchase control",
        description:
          "Track inward stock, supplier dependencies, and replenishment patterns before fast-moving items run dry.",
      },
      {
        title: "Owner visibility",
        description:
          "Surface daily sales, margin signals, and exception reporting in a format that operators can review quickly.",
      },
    ],
  },
  {
    slug: "nexio-workspace",
    name: "Nexio WorkSpace",
    highlightLabel: "Center operations",
    purpose: "ERP for coworking and managed office operators",
    description:
      "A center-management system for coworking spaces covering leads, desk or seat allocation, subscriptions, member operations, billing, and daily front-desk workflows.",
    workflowFocus:
      "Coordinate leads, occupancy, plans, and billing across a center without fragmenting the member journey.",
    keyModules: [
      "Lead capture and follow-up",
      "Desk, seat, and space management",
      "Plans and subscriptions",
      "Member onboarding and operations",
      "Billing and center reporting",
    ],
    targetBusinesses: ["Coworking spaces", "Managed offices", "Business centers"],
    detailCards: [
      {
        title: "Occupancy planning",
        description:
          "Manage desks, cabins, and seats with a live view of allocations, availability, and move-ins.",
      },
      {
        title: "Member lifecycle",
        description:
          "Handle onboarding, renewals, support requests, and daily operations from one front-desk workflow.",
      },
      {
        title: "Subscription billing",
        description:
          "Run recurring plans, due tracking, and center-level reporting without spreadsheets as the control layer.",
      },
    ],
  },
  {
    slug: "nexio-workshop",
    name: "Nexio WorkShop",
    highlightLabel: "Service floor",
    purpose: "ERP for garages, automobile workshops, and detailing centers",
    description:
      "Designed for service centers that need job cards, service workflow visibility, parts and inventory control, worker assignment, billing, and reliable day-to-day shop operations.",
    workflowFocus:
      "Turn incoming vehicles into trackable jobs with clearer technician allocation, parts usage, and billing closure.",
    keyModules: [
      "Job cards",
      "Service workflow tracking",
      "Parts and inventory",
      "Technician assignment",
      "Billing and daily operations",
    ],
    targetBusinesses: [
      "Automobile workshops",
      "Garages",
      "Detailing studios",
      "Service centers",
    ],
    detailCards: [
      {
        title: "Job card flow",
        description:
          "Capture service requests, approvals, and stage updates so owners can see work moving across the floor.",
      },
      {
        title: "Parts linkage",
        description:
          "Connect inventory usage directly to jobs to reduce missed charges and stock confusion.",
      },
      {
        title: "Technician coordination",
        description:
          "Assign work, monitor turnaround, and reduce workshop bottlenecks across active service bays.",
      },
    ],
  },
  {
    slug: "nexio-academy",
    name: "Nexio Academy",
    highlightLabel: "Programs and classes",
    purpose: "ERP for sports academies and appointment-based learning programs",
    description:
      "A management platform for sports academies and one-to-one classes such as Zumba, guitar, and similar programs, covering leads, bookings, subscriptions, class scheduling, and learner administration.",
    workflowFocus:
      "Bring inquiries, admissions, recurring plans, and class scheduling into a single operating rhythm for coaches and admins.",
    keyModules: [
      "Lead and inquiry handling",
      "Bookings and admissions",
      "Subscriptions",
      "Class scheduling",
      "Learner management",
    ],
    targetBusinesses: [
      "Sports academies",
      "Dance programs",
      "Music classes",
      "Skill coaching centers",
    ],
    detailCards: [
      {
        title: "Admissions pipeline",
        description:
          "Track inquiries, trials, and admissions so follow-up does not disappear between instructors and admin staff.",
      },
      {
        title: "Schedule clarity",
        description:
          "Coordinate classes, batches, and one-to-one sessions with fewer clashes and less manual reshuffling.",
      },
      {
        title: "Plan management",
        description:
          "Handle subscriptions, renewals, and learner records in a format built for recurring programs.",
      },
    ],
  },
  {
    slug: "nexio-gym",
    name: "Nexio Gym",
    highlightLabel: "Membership engine",
    purpose: "Member operations software for fitness businesses",
    description:
      "A focused gym management system covering members, plans, renewals, attendance, trainers, payments, and reminder flows for smooth daily operations.",
    workflowFocus:
      "Keep membership revenue, attendance routines, and trainer coordination under control without bloated gym software.",
    keyModules: [
      "Member records",
      "Plans and renewals",
      "Attendance tracking",
      "Trainer assignment",
      "Payments and reminders",
    ],
    targetBusinesses: ["Gyms", "Fitness studios", "Training centers"],
    detailCards: [
      {
        title: "Renewal rhythm",
        description:
          "Support recurring plans, due tracking, and reminder flows that protect membership continuity.",
      },
      {
        title: "Attendance capture",
        description:
          "Give staff a clearer daily picture of who is active, overdue, or disengaging from the routine.",
      },
      {
        title: "Trainer support",
        description:
          "Coordinate trainer assignments and member follow-through without building separate manual rosters.",
      },
    ],
  },
  {
    slug: "nexio-crm",
    name: "Nexio CRM",
    highlightLabel: "Pipeline control",
    purpose: "Sales operations CRM for growing teams",
    description:
      "A practical CRM that helps teams manage leads, follow-ups, pipelines, quotations, customer records, and activity history without adding process overhead.",
    workflowFocus:
      "Keep revenue teams focused on follow-through, quoting, and pipeline movement instead of scattered tracking tools.",
    keyModules: [
      "Lead management",
      "Follow-ups",
      "Pipeline tracking",
      "Quotations",
      "Customers and activities",
    ],
    targetBusinesses: ["SMEs", "Sales teams", "Service businesses", "Growing startups"],
    detailCards: [
      {
        title: "Lead follow-through",
        description:
          "Structure call-backs, reminders, and ownership so active opportunities do not stall between touches.",
      },
      {
        title: "Quotation flow",
        description:
          "Prepare and track quotes within the same sales workspace instead of splitting work across tools.",
      },
      {
        title: "Pipeline visibility",
        description:
          "Give managers a practical view of deal progress, activity history, and conversion friction.",
      },
    ],
  },
];
