import { memo, useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {

  const {pathname} = useLocation();

  const isHomePage = useMemo(() => pathname === '/')

  return <div className="text-white">
    {!isHomePage && <header className="px-5">
      <Link to='/'>
        <img src="/Netflix-big.png"  width={100}/>
      </Link>
    </header> }
    
    
    <Outlet />
  </div>
}

export default memo(Layout)