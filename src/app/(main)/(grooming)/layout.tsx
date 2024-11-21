import { FC, PropsWithChildren } from "react";

import { SiteFooter } from "@/app/components/siteFooter";

const MainGroomingLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <SiteFooter variant="grooming" />
  </>
);

export default MainGroomingLayout;