import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/' className='nav-logo'>
          <div>Logo</div>
        </Link>
        <div className='nav-link-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
