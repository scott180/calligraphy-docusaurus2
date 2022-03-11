import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>无为徐生</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        无为徐生，希冀无为有为，徐生长生。人生在世，有所作为，文化长生，思想永恒。
      </>
    ),
  },
  {
    title: <>书法练习轨迹ReadMe</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        人情必有所寄，习惯而成自然。练着练着，书法就成了生活的一部分，记录书法练习轨迹更是有趣有意思的点缀。
      </>
    ),
  },
  {
    title: <>书法练习轨迹--明月几时有</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        何以学书法，一字记之曰：练。天天练，月月练，年年练。时时琢磨。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
