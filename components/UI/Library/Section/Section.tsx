import ClassNames from "classnames";

// Components
import Container from "../Container/Container"

// Styles
import styles from "./section.module.scss";

interface IProps {
    children: React.ReactNode;
    className?: string;
}

const Section = ({ children, className }: IProps) => {
    const classes = ClassNames(
        className,
        styles.section,
    )

    return (
        <section className={classes} >
            <Container>
                {children}
            </Container>
        </section >
    )
}

export default Section
