import {createBrowserRouter, Navigate} from 'react-router';
import App from './App';
import MyAppLayout from './components/ui/my-app/my-app-layout';
import DashboardPage from './pages/dashboard-page';
import HistoryPage from './pages/history-page';
import SettingPage from './pages/setting-page';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/my-app',
    element: <MyAppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="calendar" replace />,
      },
      {
        path: 'calendar',
        element: <DashboardPage />,
      },
      {
        path: 'history',
        element: <HistoryPage />,
      },
      {
        path: 'setting',
        element: <SettingPage />,
      },
    ],
  },
]);
