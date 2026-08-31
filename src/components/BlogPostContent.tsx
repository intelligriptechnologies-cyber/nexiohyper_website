import type { BlogContentBlock } from "@/lib/blog-data";

export function BlogPostContent({ content }: { content: BlogContentBlock[] }) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "heading") {
          return (
            <h2 key={key} className="text-[1.6rem] font-semibold tracking-tight text-slate-900">
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={key} className="space-y-3 pl-6 text-[1.05rem] leading-8 text-slate-700">
              {block.items.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={key} className="text-[1.05rem] leading-8 text-slate-700">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
