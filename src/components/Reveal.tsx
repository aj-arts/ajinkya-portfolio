import type { CSSProperties, ReactNode } from "react";

type EnterProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "p" | "span";
  style?: CSSProperties;
};

export function Enter({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  style,
}: EnterProps) {
  return (
    <Tag
      className={`enter ${className}`}
      style={{ ...style, ["--delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
