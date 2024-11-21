import { FC, PropsWithChildren } from "react";
import { SiteHeader } from "../components/siteHeader";
import { Banner } from "../components/banner";

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Banner />
    <SiteHeader />
    {children}
  </>
);

export default MainLayout;