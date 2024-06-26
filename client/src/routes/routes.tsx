import RootLayout from '@/layouts/RootLayout'
import {
  About,
  AddTask,
  Contact,
  DashboardHome,
  Error,
  Home,
  Login,
  ManageTasks,
  Profile,
} from '@/pages'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoute'
import DashboardLayout from '@/layouts/DashboardLayout'
import UpdateTask from '@/pages/dashboard/UpdateTask'
import { getSingleTask } from '@/services/api'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: 'dashboard/home',
        element: <DashboardHome />,
      },
      {
        path: 'dashboard/profile',
        element: <Profile />,
      },
      {
        path: 'dashboard/manage-tasks',
        element: <ManageTasks />,
      },
      {
        path: 'dashboard/manage-tasks/add-task',
        element: <AddTask />,
      },
      {
        path: 'dashboard/manage-tasks/update-task/:id',
        element: <UpdateTask />,
        loader: ({ params }) => getSingleTask(params.id!),
      },
    ],
  },
])
