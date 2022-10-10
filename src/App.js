import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Topics from './component/all-topics/Topics';
import Blog from './component/blog/Blog';
import Home from './component/home/Home';
import Main from './component/layout/Main';
import Quiz from './component/quiz/Quiz';
import Topic from './component/Topic/Topic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
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
          loader: (params) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
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
