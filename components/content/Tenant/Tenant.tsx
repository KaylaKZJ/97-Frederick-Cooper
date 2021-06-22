import { ITenant } from "../../../utils/types";

// Components
import NextImage from "../../UI/Library/NextImage/NextImage";

// Styles
import styles from "./tenant.module.scss";

const Tenant = (tenant: ITenant) => {
    return (
        <article className={styles.tenant}>
            <div className={styles.details}>
                <div className={styles.text}>
                    <h2>{tenant.name}</h2>
                    <h3>{tenant.tagline}</h3>
                    <p>{tenant.services.join(" | ")}</p>
                </div>
                <div className={styles.logo}>
                    <NextImage
                        src={tenant.logo.asset.url}
                        width={400}
                        alt={`${tenant.name} Logo`}
                        align="Center"
                        priority
                    />
                </div>
            </div>
        </article>
    )
}

export default Tenant
