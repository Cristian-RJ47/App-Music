import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { PrivateRouter } from './shared/PrivateRouter/PrivateRouter'
import { AuthProvider } from './context/AuthProvider'
import ExplorePage from './explore/ExplorePage'
import UploadPage from './upload/UploadPage'
import StartPage from './start/StartPage'
import HomePage from './home/HomePage'
import NotFoundPage from './notFound/NotFoundPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/start',
      element: <StartPage />
    },
    {
      path: '/explore',
      element: <PrivateRouter />,
      children: [
        {
          path: '',
          element: <ExplorePage />
        }
      ]
    },
    {
      path: '/upload',
      element: <PrivateRouter />,
      children: [
        {
          path: '',
          element: <UploadPage />
        }
      ]
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
