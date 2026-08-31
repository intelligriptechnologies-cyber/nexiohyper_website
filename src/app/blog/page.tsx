import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getAllPublishedPosts } from "@/lib/blog-data";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPath } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights from NexioHyper on software delivery, workflow design, cloud engineering, and practical AI adoption.",
  path: "/blog",
  keywords: ["NexioHyper blog", "software insights", "cloud and AI articles"],
});

export default function BlogPage() {
  const posts = getAllPublishedPosts();

  return (
    <section className="page-section surface-soft">
      <div className="content-shell section-pad-compact">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ])}
        />

        <div className="max-w-4xl">
          <p className="marketing-kicker text-teal-700">Blog</p>
          <h1 className="marketing-title mt-5 font-bold text-slate-900">NexioHyper Insights</h1>
          <p className="marketing-body mt-5 max-w-3xl text-slate-600">
            Short practical writing on software delivery, cloud foundations, workflow
            clarity, and the operating discipline behind useful systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="surface-panel-strong rounded-[1.75rem] p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-500">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>{post.author}</span>
              </div>
              <h2 className="mt-4 text-[1.8rem] font-semibold tracking-tight text-slate-900">
                <Link href={getBlogPath(post.slug)} className="hover:text-teal-700">
                  {post.title}
                </Link>
              </h2>
              <p className="marketing-support mt-4 max-w-3xl text-slate-600">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={getBlogPath(post.slug)}
                className="mt-6 inline-block font-semibold text-teal-700 transition-colors duration-200 hover:text-teal-800"
              >
                Read article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
