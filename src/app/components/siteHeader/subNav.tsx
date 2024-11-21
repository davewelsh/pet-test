import { FC } from "react";
import { headers } from "next/headers";
import { subnavs } from "./subnavData";

export const Subnav: FC = () => {
  const headersList = headers();
  const pathname = headersList.get('next-url')

  const subnav = subnavs[0];// subnavs.find(s => s.includeChildren && pathname?.startsWith(s.pathname) || pathname === s.pathname);

  if (subnav) {
    return <nav style={{ padding: '1rem 0', background: 'green' }}>{subnav.title} <ul>{subnav.links.map((l, i) => <li key={i}><a href={l.href}>{l.title}</a></li>)}</ul></nav>
  }
}