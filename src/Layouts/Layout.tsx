import './Layout.css';
import Navbar from '../components/Navbar/Navbar';
import { ChildrenProp } from '../types/props';

function Layout({ children }: ChildrenProp) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-container">{children}</main>
    </div>
  );
}

export default Layout;
