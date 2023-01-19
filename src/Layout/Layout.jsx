import MainNav from "./MainNav";
import "./Layout.css";

function Layout(props) {
  return (
    <div>
      <MainNav />
      <main className="MainLayout py-5">{props.children}</main>
      <footer className="p-5 bg-dark text-white text-center position-relative">
        Copyright © 2036 Sample Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
