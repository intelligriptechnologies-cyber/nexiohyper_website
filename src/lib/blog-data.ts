export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  coverImage?: string;
  tags: string[];
  seoDescription: string;
  published?: boolean;
  content: BlogContentBlock[];
}

// Authoring template for repo-based publishing:
// {
//   slug: "clear-kebab-case-slug",
//   title: "Post title",
//   excerpt: "Short card summary.",
//   publishedAt: "2026-08-31",
//   author: "Author name",
//   coverImage: "/optional-image.png",
//   tags: ["Tag one", "Tag two"],
//   seoDescription: "Search-friendly summary.",
//   published: true,
//   content: [
//     { type: "paragraph", text: "Opening paragraph." },
//     { type: "heading", text: "Section title" },
//     { type: "list", items: ["Point one", "Point two"] },
//   ],
// }
export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-custom-software-vs-off-the-shelf-tools",
    title: "Choosing Custom Software vs Off-the-Shelf Tools Without Guesswork",
    excerpt:
      "A practical way to decide when buying software is enough and when your workflow needs something built around it.",
    publishedAt: "2026-08-18",
    author: "NexioHyper Team",
    tags: ["Custom Software", "Operations", "Decision Making"],
    seoDescription:
      "Learn when custom software is the right choice versus off-the-shelf tools, based on workflow complexity, integration needs, and operational risk.",
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Teams usually reach for custom software too early or too late. The better question is not whether bespoke software sounds impressive, but whether your workflow is important enough, repetitive enough, and constrained enough that generic tooling keeps creating friction.",
      },
      {
        type: "heading",
        text: "What usually breaks first",
      },
      {
        type: "paragraph",
        text: "The first failure mode is not scale. It is operational mismatch. Teams start with separate tools that each solve a narrow problem, then lose time stitching them together with spreadsheets, manual approvals, and duplicated data entry.",
      },
      {
        type: "list",
        items: [
          "The workflow crosses multiple systems and owners.",
          "Reporting depends on hand-built spreadsheets.",
          "Customer or staff delays come from process gaps, not demand.",
        ],
      },
      {
        type: "paragraph",
        text: "When those issues keep recurring, custom software stops being a vanity project and becomes a control layer for the business.",
      },
    ],
  },
  {
    slug: "why-operator-led-businesses-need-better-workflow-visibility",
    title: "Why Operator-Led Businesses Need Better Workflow Visibility",
    excerpt:
      "If daily decisions depend on scattered updates, the bottleneck is usually visibility rather than effort.",
    publishedAt: "2026-08-11",
    author: "NexioHyper Team",
    tags: ["Workflow", "Operations", "SMEs"],
    seoDescription:
      "See why workflow visibility matters for operator-led businesses and how clearer systems improve follow-through, billing, and reporting.",
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Most small and mid-sized businesses do not fail because people are unwilling to work. They fail because work disappears between handoffs. A lead is followed up late, a job card is missing context, a payment status lives in someone else's phone, or stock movement is understood only after the day ends.",
      },
      {
        type: "heading",
        text: "Visibility is operational leverage",
      },
      {
        type: "paragraph",
        text: "Once the team can see the same workflow, execution gets simpler. Owners spend less time asking for updates, staff spend less time reconstructing status, and customers receive faster answers because the system carries context forward.",
      },
      {
        type: "list",
        items: [
          "Fewer status-chasing calls and messages.",
          "Cleaner billing and reconciliation.",
          "Reports that reflect the actual business, not a delayed approximation.",
        ],
      },
    ],
  },
  {
    slug: "building-a-practical-foundation-for-cloud-and-ai-work",
    title: "Building a Practical Foundation for Cloud and AI Work",
    excerpt:
      "Cloud and AI projects fail when teams skip the discipline layer: structure, ownership, and dependable data.",
    publishedAt: "2026-07-29",
    author: "NexioHyper Team",
    tags: ["Cloud", "AI", "Engineering"],
    seoDescription:
      "Understand the practical foundations required before cloud modernization and AI projects can deliver reliable business value.",
    published: true,
    content: [
      {
        type: "paragraph",
        text: "There is a recurring pattern in cloud and AI work: teams want the outcome, but not always the operating discipline that makes the outcome possible. Modern infrastructure and applied AI both depend on stable ownership, predictable deployment, and data that can be trusted.",
      },
      {
        type: "heading",
        text: "Start with the boring parts",
      },
      {
        type: "list",
        items: [
          "Clear environments and release ownership.",
          "Traceable data movement and naming.",
          "Reporting definitions the business agrees on.",
        ],
      },
      {
        type: "paragraph",
        text: "Once those basics are in place, cloud and AI stop being disconnected experiments and start becoming capabilities that the business can rely on.",
      },
    ],
  },
];

function sortPostsByPublishedAtDescending(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
  );
}

export function getAllPublishedPosts(): BlogPost[] {
  return sortPostsByPublishedAtDescending(
    blogPosts.filter((post) => post.published !== false),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPublishedPosts().find((post) => post.slug === slug);
}

export function getLatestPosts(limit: number): BlogPost[] {
  return getAllPublishedPosts().slice(0, limit);
}
