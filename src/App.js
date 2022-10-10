import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Main from './component/layout/Main';
import Topic from './component/Topic/Topic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }, {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/topic',
          element: <Topic></Topic>
        }

      ]
    },


  ])
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
