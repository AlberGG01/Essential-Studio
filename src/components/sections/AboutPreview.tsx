import Link from 'next/link';
import styles from './AboutPreview.module.css';

export default function AboutPreview() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.imageSection}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imagePlaceholder}>
                            {/* Placeholder for artist photo */}
                            <div className={styles.photoFrame}>
                                <div className={styles.photoInner}>
                                    <span className={styles.initials}>AF</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageAccent}></div>
                    </div>
                    <div className={styles.decorLine}></div>
                </div>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.line}></div>
                        <span className={styles.label}>Sobre Mí</span>
                    </div>

                    <h2 className={styles.title}>
                        El Arte de la<br />
                        <span className={styles.italic}>Micropigmentación</span>
                    </h2>

                    <div className={styles.text}>
                        <p>
                            Con más de cinco años dedicados al arte de la micropigmentación,
                            he perfeccionado cada técnica para crear resultados que realzan
                            la belleza natural de cada rostro.
                        </p>
                        <p>
                            Mi formación con los mejores profesionales del sector, tanto
                            nacional como internacional, me permite ofrecer un trabajo
                            de precisión artística excepcional.
                        </p>
                    </div>

                    <div className={styles.highlights}>
                        <div className={styles.highlight}>
                            <span className={styles.highlightNumber}>500+</span>
                            <span className={styles.highlightLabel}>Clientas Satisfechas</span>
                        </div>
                        <div className={styles.highlightDivider}></div>
                        <div className={styles.highlight}>
                            <span className={styles.highlightNumber}>15+</span>
                            <span className={styles.highlightLabel}>Certificaciones</span>
                        </div>
                    </div>

                    <Link href="/sobre-mi" className={styles.link}>
                        <span>Conoce mi historia</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
