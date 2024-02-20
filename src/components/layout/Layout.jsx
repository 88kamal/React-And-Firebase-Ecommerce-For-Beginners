import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="main-content min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
