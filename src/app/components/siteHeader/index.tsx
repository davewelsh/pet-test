import { FC } from "react";
import { Subnav } from "./subnav";


export const SiteHeader: FC = () => (
  <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
    <header style={{ background: 'red', padding: '2rem 0' }}>
      Site Wide Header
    </header>
    <Subnav />
  </div>
)