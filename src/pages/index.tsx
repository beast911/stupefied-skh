import React from 'react';
import Layout from '@theme/Layout';


/* function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
} */

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <main>
      </main>
    </Layout>
  );
}
