import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Imagine',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Imagine a jornada emocionante de criar um aplicativo, desde a concepção da ideia até a escrita do código que o torna realidade.
      </>
    ),
  },
  {
    title: 'Planeje',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Antes de mergulhar na codificação, é crucial estabelecer um plano sólido que guie cada passo do desenvolvimento, desde a definição dos requisitos até o mapeamento do fluxo de trabalho.
      </>
    ),
  },
  {
    title: 'Execute',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
     Com o plano em mãos, é hora de transformar visão em ação. Nesta etapa, vamos mergulhar na implementação prática do aplicativo, transformando ideias em código funcional.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
