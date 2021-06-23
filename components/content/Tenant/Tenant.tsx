import { ITenant } from "../../../utils/types";
const Fade = require("react-reveal/Fade");

// Components
import NextImage from "../../UI/Library/NextImage/NextImage";

// Styles
import styles from "./tenant.module.scss";

const Tenant = (tenant: ITenant) => {


    return (
        <Fade >
            <article className={styles.tenant}>
                <a href={tenant.websiteURL && tenant.websiteURL}
                    target="blank"
                    className={styles.logo}>
                    <NextImage
                        src={tenant.logo.asset.url}
                        width={400}
                        alt={`${tenant.name} Logo`}
                        align="Center"
                        priority
                    />
                </a>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h2>{tenant.name}</h2>
                        <h3>{tenant.tagline}</h3>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.row}>
                            <h3>Services:</h3>
                            <p dangerouslySetInnerHTML={{ __html: tenant.services.join(" <span>|</span> ") }}></p>
                        </div>
                        <div className={`${styles.row} ${styles.contact}`}>
                            <div className={styles.phone}>
                                <h3>Contact:</h3>
                                <a href={`tel:${tenant.phone.replace(/ /g, "")}`}>{tenant.phone}</a>
                                <p>{tenant.contactPerson}</p>
                            </div>
                            <div className={styles.links}>
                                {tenant.websiteURL &&
                                    <a href={tenant.websiteURL} target="blank">
                                        <i className="icon-website" />
                                    </a>}
                                {tenant.facebookURL &&
                                    <a href={tenant.facebookURL} target="blank">
                                        <i className="icon-facebook" />
                                    </a>}
                                {tenant.instagramURL &&
                                    <a href={tenant.instagramURL} target="blank">
                                        <i className="icon-instagram" />
                                    </a>}
                                {tenant.twitterURL &&
                                    <a href={tenant.twitterURL} target="blank">
                                        <i className="icon-twitter" />
                                    </a>}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Fade>
    )
}

export default Tenant
