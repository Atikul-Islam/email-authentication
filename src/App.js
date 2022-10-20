
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Layout/Main';
import Login from './components/Login';
import Register from "./components/Register/Register";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main>0</Main>,
    children: [
      {
        path: '/',
        element: <Register></Register>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  }
])


function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
