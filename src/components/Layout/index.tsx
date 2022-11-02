import { ReactNode } from 'react';

import { Container } from './styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
