import { createBrowserRouter, Outlet } from 'react-router';
import Home from './pages/Home';
import BasicComponent from './pages/BasicComponent';
import Lifecycle from './pages/Lifecycle';
import Forms from './pages/Forms';
import BasicHooks from './pages/BasicHooks';
import AdvancedStatefull from './pages/AdvancedStatefull';
import Navbar from './components/Navbar';

export const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* The Outlet component renders the matched child route */}
      {/* This allows the Navbar to be displayed on all pages */}
      {/* The Outlet component is a placeholder for the child routes */}
      {/* It will render the component that matches the current route */}
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/basic-component', element: <BasicComponent /> },
      { path: '/basic-hooks', element: <BasicHooks /> },
      { path: '/lifecycle', element: <Lifecycle /> },
      { path: '/forms', element: <Forms /> },
      {
        path: '/advanced-statefull',
        element: <AdvancedStatefull />,
      },
    ],
  },
]);
