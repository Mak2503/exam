import Navbar from "@ui/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
