import { useLocation } from "react-router-dom";
import Header from "./Head";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();

  // Hide header/footer on the dashboard page
  const hideHeaderFooter = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <Header />}

      <main className="flex-1">
        {children}
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}