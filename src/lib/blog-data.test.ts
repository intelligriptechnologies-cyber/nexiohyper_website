import { describe, expect, it } from "vitest";
import {
  blogPosts,
  getAllPublishedPosts,
  getLatestPosts,
  getPostBySlug,
} from "./blog-data";

describe("blog-data", () => {
  it("returns published posts in reverse chronological order", () => {
    const posts = getAllPublishedPosts();
    expect(posts).toHaveLength(blogPosts.length);
    expect(posts.map((post) => post.slug)).toEqual([
      "choosing-custom-software-vs-off-the-shelf-tools",
      "why-operator-led-businesses-need-better-workflow-visibility",
      "building-a-practical-foundation-for-cloud-and-ai-work",
    ]);
  });

  it("looks up a published post by slug", () => {
    expect(getPostBySlug("why-operator-led-businesses-need-better-workflow-visibility")?.title).toBe(
      "Why Operator-Led Businesses Need Better Workflow Visibility",
    );
    expect(getPostBySlug("missing-post")).toBeUndefined();
  });

  it("returns the latest posts up to the requested limit", () => {
    expect(getLatestPosts(2).map((post) => post.slug)).toEqual([
      "choosing-custom-software-vs-off-the-shelf-tools",
      "why-operator-led-businesses-need-better-workflow-visibility",
    ]);
  });
});
