import { FC } from "react";

type Props = {
  variant: 'general' | 'grooming' | 'training'
}

export const SiteFooter: FC<Props> = ({ variant }) => (
<footer style={{ background: 'blue', padding: '2rem 0' }}>
  Site Wide Footer for {variant}
</footer>
)