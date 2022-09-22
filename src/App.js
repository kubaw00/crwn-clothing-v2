import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>
        <h2>I am navigation bar</h2>
      </div>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <h1>HEllo to shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
