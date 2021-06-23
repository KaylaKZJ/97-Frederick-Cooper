// Components
import Container from "../Library/Container/Container";

// Styles
import styles from "./header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <img src="/images/branding/Logo.svg" alt="@97 Frederick Cooper Logo" />
                    </div>
                    <div className={styles.menu}>
                        <a href="/#tenants">Our Tenants</a>
                        <a href="/#contact">Contact Us</a>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header
