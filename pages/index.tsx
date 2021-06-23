import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";
import { ITenant } from "../utils/types";

// Components
import Page from "../components/UI/Library/Page/Page"
import Section from "../components/UI/Library/Section/Section"
import Tenant from "../components/content/Tenant/Tenant"

// Styles
import styles from "../styles/pages/home.module.scss"

const Home = ({ tenants }: { tenants: ITenant[] }) => {

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
          {tenants.map((tenant, index) => (
            <Tenant {...tenant} key={index} />
          ))}
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
