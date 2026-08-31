import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import BlogPage, { metadata } from "./page";

describe("/blog page", () => {
  it("exposes blog list metadata with the blog canonical URL", () => {
    expect(metadata.alternates?.canonical).toBe("https://www.nexiohyper.com/blog");
  });

  it("renders published posts only", () => {
    const html = renderToStaticMarkup(<BlogPage />);
    expect(html).toContain("NexioHyper Insights");
    expect(html).toContain("Choosing Custom Software vs Off-the-Shelf Tools Without Guesswork");
    expect(html).not.toContain("missing-post");
  });
});
