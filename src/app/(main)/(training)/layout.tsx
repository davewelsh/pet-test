import { FC, PropsWithChildren } from "react";

import { SiteFooter } from "@/app/components/siteFooter";

const MainTrainingLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <SiteFooter variant="training" />
  </>
);

export default MainTrainingLayout;