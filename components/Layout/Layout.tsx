import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Header, NavBar, A, H1, Main } from './LayoutStyled';
import { LayoutProps } from '../../interfaces';

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <H1>Simple Blog</H1>
      <NavBar>
        <Link href="/">
          <A>Home</A>
        </Link>
        <Link href="/posts/new">
          <A>Create Post</A>
        </Link>
      </NavBar>
    </Header>
    <Main>{children}</Main>
  </div>
);

export default Layout;
