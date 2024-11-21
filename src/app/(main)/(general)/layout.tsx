import { FC, PropsWithChildren } from "react";

import { SiteFooter } from "@/app/components/siteFooter";

const MainGeneralLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <SiteFooter variant="general" />
  </>
);

export default MainGeneralLayout;