import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            {/* Background image */}
            <div className={styles.bgImage}>
                <Image
                    src="/fotos/fondo.png"
                    alt="Arte abstracto micropigmentación"
                    fill
                    priority
                    className={styles.bgImageInner}
                />
                <div className={styles.bgOverlay}></div>
            </div>

            <div className={styles.container}>
                {/* Hero Card: content LEFT, signature RIGHT */}
                <div className={styles.heroCard}>
                    {/* Content section - LEFT */}
                    <div className={styles.content}>
                        <div className={styles.intro}>
                            <div className={styles.line}></div>
                            <span className={styles.artistLabel}>Micropigmentación Artística</span>
                            <div className={styles.line}></div>
                        </div>

                        <h1 className={styles.title}>
                            Resalta tu <span className={styles.highlight}>Belleza Natural</span>
                        </h1>

                        <p className={styles.subtitle}>
                            Cambios armónicos que respetan tu esencia y potencian lo mejor de ti.
                            Micropigmentación de cejas, labios y eyeliner con técnicas artísticas
                            que realzan tu belleza única.
                        </p>

                        <div className={styles.cta}>
                            <Link href="/contacto" className={styles.btnPrimary}>
                                Solicitar Cita
                            </Link>
                            <Link href="/galeria" className={styles.btnSecondary}>
                                Ver Resultados
                            </Link>
                        </div>
                    </div>

                    {/* Signature section - RIGHT */}
                    <div className={styles.signatureSection}>
                        <img
                            src="/fotos/firma Ainigriv/firma-original.png"
                            alt="Ainigriv Ferreira - PMU Artist"
                            className={styles.signatureImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
