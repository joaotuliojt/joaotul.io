import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <main className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.text)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.text)}>
          Aqui é onde reúno meus conteúdos didáticos <br /> para outros devs que querem aprender mais sobre programação.
          </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.cta)}
            to="/docs/intro"
          >
              Começar 🚀
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Description will go into a meta tag in <head />"
      wrapperClassName={styles.hero}
    >
      <HomepageHeader />
    </Layout>
  );
}
