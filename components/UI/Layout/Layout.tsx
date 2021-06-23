import ReactTooltip from "react-tooltip";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <ReactTooltip />
        </>
    )
}

export default Layout
