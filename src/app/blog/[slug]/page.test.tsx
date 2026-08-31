import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import BlogPostPage, { generateMetadata } from "./page";

describe("/blog/[slug] page", () => {
  it("builds canonical metadata for a published post", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        slug: "choosing-custom-software-vs-off-the-shelf-tools",
      }),
    });

    expect(metadata.alternates?.canonical).toBe(
      "https://www.nexiohyper.com/blog/choosing-custom-software-vs-off-the-shelf-tools"
    );
    expect((metadata.openGraph as { type?: string } | undefined)?.type).toBe("article");
  });

  it("renders a valid post detail page", async () => {
    const page = await BlogPostPage({
      params: Promise.resolve({
        slug: "choosing-custom-software-vs-off-the-shelf-tools",
      }),
    });

    const html = renderToStaticMarkup(page);
    expect(html).toContain("Back to blog");
    expect(html).toContain("What usually breaks first");
  });

  it("throws for an invalid slug so the branded not-found flow can render", async () => {
    await expect(
      BlogPostPage({
        params: Promise.resolve({
          slug: "does-not-exist",
        }),
      })
    ).rejects.toMatchObject({
      digest: "NEXT_HTTP_ERROR_FALLBACK;404",
    });
  });
});
