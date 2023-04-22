import { GlobalStyle } from '../GlobalStyle';
import { Layout } from 'components/Layout';
// import { Header } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { UserMenu } from '../UserMenu/UserMenu';
// import AuthNav from '../AuthNav';
// import Navigation from '../Navigation';
// import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/auth/auth-selectors';
import Navigation from '../../components/Navigation';

const SharedLayout = () => {

  return (
    <Layout>
      <div>
        <Navigation />
      </div>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Layout>
  );
};

export default SharedLayout;
