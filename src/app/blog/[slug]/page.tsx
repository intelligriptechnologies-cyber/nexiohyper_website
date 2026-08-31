import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/BlogPostContent";
import { JsonLd } from "@/components/JsonLd";
import { getAllPublishedPosts, getPostBySlug } from "@/lib/blog-data";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPath } from "@/lib/routes";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.seoDescription,
    path: getBlogPath(post.slug),
    keywords: post.tags,
    openGraphType: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postPath = getBlogPath(post.slug);

  return (
    <section className="page-section surface-soft">
      <div className="content-shell section-pad-compact">
        <JsonLd data={articleJsonLd(post)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: postPath },
          ])}
        />

        <article className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_28px_70px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-10">
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 transition-colors duration-200 hover:text-teal-800"
          >
            Back to blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>{post.author}</span>
          </div>
          <h1 className="marketing-title mt-4 font-bold text-slate-900">{post.title}</h1>
          <p className="marketing-body mt-5 text-slate-600">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <BlogPostContent content={post.content} />
          </div>
        </article>
      </div>
    </section>
  );
}
