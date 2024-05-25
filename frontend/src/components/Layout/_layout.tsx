import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen dark:bg-[#030712]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
