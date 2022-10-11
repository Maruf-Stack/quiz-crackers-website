import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Topics from './component/all-topics/Topics';
import Blog from './component/blog/Blog';
import Error from './component/error/Error';
import Home from './component/home/Home';
import Main from './component/layout/Main';
import Quiz from './component/quiz/Quiz';
import Stratistic from './component/statistic/Stratistic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>,
        },
        {
          path: '/topic',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistic',
          element: <Stratistic></Stratistic>
        }
      ],
    },
  ])
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
