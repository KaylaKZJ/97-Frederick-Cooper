import ClassNames from "classnames";

// Components
import Container from "../Container/Container"

// Styles
import styles from "./section.module.scss";

interface IProps {
    children: React.ReactNode;
    className?: string;
    heading: React.ReactNode;
    id?: string;
}

const Section = ({ children, className, heading, id }: IProps) => {
    const classes = ClassNames(
        className,
        styles.section,
    )

    return (
        <section className={classes} id={id} >
            <Container>
                <div className={styles.heading}>
                    {heading}
                </div>
                {children}
            </Container>
        </section >
    )
}

export default Section
