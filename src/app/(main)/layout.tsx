import { FC, PropsWithChildren } from "react";
import { SiteHeader } from "../components/siteHeader";

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SiteHeader />
    {children}
  </>
);

export default MainLayout;