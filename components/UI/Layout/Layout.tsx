import ReactTooltip from "react-tooltip";

import Header from "../Header/Header";

import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <ReactTooltip className={styles.tip} />
        </>
    )
}

export default Layout
