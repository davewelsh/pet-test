import { FC } from "react";
import { headers } from "next/headers";

export const SubNav: FC = () => {
  const headersList = headers();
  const pathname = headersList.get('next-url')

  if (pathname === '/faq') {
    return <nav>Sub Nav</nav>
  }
}