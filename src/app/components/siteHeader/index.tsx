import { FC } from "react";
import { SubNav } from "./subNav";


export const SiteHeader: FC = () => (
  <div style={{ position: 'sticky', top: 0 }}>
    <header style={{ background: 'red', padding: '2rem 0', zIndex: 100 }}>
      Site Wide Header
    </header>
    <SubNav />
  </div>
)