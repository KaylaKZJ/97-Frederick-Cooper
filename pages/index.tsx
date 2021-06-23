import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";
import { ITenant } from "../utils/types";
import { sortByName } from '../utils/utils';

// Components
import Page from "../components/UI/Library/Page/Page"
import Section from "../components/UI/Library/Section/Section"
import Tenant from "../components/content/Tenant/Tenant"

// Styles
import styles from "../styles/pages/home.module.scss"

const Home = ({ tenants }: { tenants: ITenant[] }) => {
  const tenantsSorted = sortByName(tenants)

  return (
    <Page
      head={{
        title: "@97 Frederick Cooper Drive",
        description: "FIX THIS",
        canonical: "/",
      }}
      className={styles.home}
    >
      <Section className={styles.tenants}
        id="tenants"
        heading={<h1>Our <span>Tenants</span>.</h1>}
      >
        <div className={styles.grid}>
          {tenantsSorted.map((tenant, index) => (
            <Tenant {...tenant} key={index} />
          ))}
        </div>
      </Section>

      <Section className={styles.contact}
        id="contact"
        heading={<h1><span>Contact</span> Us.</h1>}
      >
        <div className={styles.grid}>
          <iframe src="https://snazzymaps.com/embed/321756"></iframe>
          <div className={styles.details}>
            <a href="https://wa.me/+27672257945?text=Hi%20@97!%20">
              <i className="icon-whatsapp"></i>
              067 225 7945
            </a>
            <a href="mailto:97frederickcooperdrive@gmail.com">
              <i className="icon-mail"></i>
              97frederickcooperdrive@gmail.com
            </a>
            <a href="https://goo.gl/maps/Vnyk2rzdvi6gQvaJA" target="blank">
              <i className="icon-pin"></i>
              97 Fredrick Cooper Dr, Kenmare, Krugersdorp, 1745</a>
          </div>
        </div>
      </Section>
    </Page>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await await client.query({
    query: gql`
      query {
        allTenant {
        name
            tagline
      contactPerson
      phone
      services
      websiteURL
      facebookURL
      instagramURL
      twitterURL
      bookingURL
      logo {
        asset {
        url
      }
            }
          }
          }
      `,
  });

  return {
    props: {
      tenants: data.allTenant,
    }
  }
}
