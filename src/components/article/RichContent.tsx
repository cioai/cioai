import { useEffect, useRef } from "react";

interface RichContentProps {
  content: string;
}

export const RichContent = ({ content }: RichContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Mejorar listas con iconos
    const lists = contentRef.current.querySelectorAll("ul");
    lists.forEach((list) => {
      list.classList.add("space-y-3", "my-6");
      const items = list.querySelectorAll("li");
      items.forEach((item) => {
        if (!item.querySelector("strong")) {
          item.classList.add("flex", "items-start", "gap-3");
          const content = item.innerHTML;
          item.innerHTML = `<span class="text-primary mt-1">•</span><span>${content}</span>`;
        }
      });
    });

    // Mejorar títulos h2
    const h2s = contentRef.current.querySelectorAll("h2");
    h2s.forEach((h2) => {
      h2.classList.add(
        "text-3xl",
        "font-bold",
        "mt-12",
        "mb-6",
        "bg-gradient-to-r",
        "from-primary",
        "to-accent",
        "bg-clip-text",
        "text-transparent",
        "flex",
        "items-center",
        "gap-3"
      );
    });

    // Mejorar títulos h3
    const h3s = contentRef.current.querySelectorAll("h3");
    h3s.forEach((h3) => {
      h3.classList.add("text-2xl", "font-semibold", "mt-8", "mb-4", "flex", "items-center", "gap-2");
    });

    // Añadir clases a párrafos
    const paragraphs = contentRef.current.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.classList.add("text-muted-foreground", "leading-relaxed", "my-4");
    });

    // Mejorar strong tags
    const strongs = contentRef.current.querySelectorAll("strong");
    strongs.forEach((strong) => {
      strong.classList.add("text-foreground", "font-semibold");
    });

    // Convertir tablas en componentes estilizados
    const tables = contentRef.current.querySelectorAll("table");
    tables.forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "my-8 overflow-hidden rounded-xl border border-border bg-card shadow-lg";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);

      table.classList.add("w-full");

      const thead = table.querySelector("thead");
      if (thead) {
        thead.classList.add("bg-secondary/20", "border-b", "border-border");
        const ths = thead.querySelectorAll("th");
        ths.forEach((th) => {
          th.classList.add("px-6", "py-4", "font-semibold", "text-left");
        });
      }

      const tbody = table.querySelector("tbody");
      if (tbody) {
        const rows = tbody.querySelectorAll("tr");
        rows.forEach((row, index) => {
          row.classList.add("border-b", "border-border", "hover:bg-accent/5", "transition-colors");
          if (index === rows.length - 1) {
            row.classList.add("last:border-0");
          }
          const tds = row.querySelectorAll("td");
          tds.forEach((td) => {
            td.classList.add("px-6", "py-4");
          });
        });
      }
    });
  }, [content]);

  return (
    <div
      ref={contentRef}
      className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
        prose-code:bg-secondary/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
        prose-pre:bg-secondary/20 prose-pre:border prose-pre:border-border prose-pre:rounded-xl"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
