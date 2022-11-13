import { Container } from './Layout.styled';
import { Suspense } from 'react';
import Appbar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container>
      <Appbar />
      <Suspense fallback={''}>
        <Outlet />
      </Suspense>
    </Container>
  );
}