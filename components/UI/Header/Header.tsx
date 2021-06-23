import { useRef } from "react"

// Components
import Container from "../Library/Container/Container";

// Styles
import styles from "./header.module.scss"

const Header = () => {
    const mobileNavRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const openNav = () => {
        mobileNavRef.current.classList.add(styles.open)
    }

    const closeNav = () => {
        mobileNavRef.current.classList.remove(styles.open)
    }



    const Menu = () => {
        return (
            <div className={styles.menu}>
                <a href="/#tenants" onClick={closeNav}>Our Tenants</a>
                <a href="/#contact" onClick={closeNav}>Contact Us</a>
            </div>
        )
    }
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <img src="/images/branding/Logo.svg" alt="@97 Frederick Cooper Logo" />
                    </div>
                    <Menu />
                    <i className="icon-menu" onClick={openNav} />
                    <div className={styles.mobileNav} ref={mobileNavRef}>
                        <i className="icon-clear" onClick={closeNav}></i>
                        <Menu />
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header
