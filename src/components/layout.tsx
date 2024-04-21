import { Outlet } from "react-router-dom";
import Header from "./header";

function Layout() {
  return (
    <div className="layout" >
    <Header data-testid="header-component" />
      <main data-testid="outlet-component">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
