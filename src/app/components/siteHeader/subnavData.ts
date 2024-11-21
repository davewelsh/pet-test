type SubnavLink = {
  title: string;
  href: string;
}

type Subnav = {
  pathname: string;
  includeChildren?: boolean;
  title: string;
  links: SubnavLink[];
}

export const subnavs: Subnav[] = [
  { pathname: '/faq', title: 'Lorem Ipsum', links: [ { title: 'top', href: '#' } , { title: 'foo', href: '#foo' } ] },
]