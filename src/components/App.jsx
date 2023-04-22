import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import Tweets from '../pages/Tweets';
// import { Layout } from './Layout';
// import { GlobalStyle } from './GlobalStyle';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />

      </Route>
    </Routes>
  );
};
