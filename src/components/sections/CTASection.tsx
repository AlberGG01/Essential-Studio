import Link from 'next/link';
import Image from 'next/image';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.cta}>
            {/* Background */}
            <div className={styles.bgImage}>
                <Image
                    src="/fotos/fondo.png"
                    alt="Arte micropigmentación"
                    fill
                    className={styles.bgImageInner}
                />
                <div className={styles.bgOverlay}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.line}></div>
                        <span className={styles.label}>Tu Transformación</span>
                        <div className={styles.line}></div>
                    </div>

                    <h2 className={styles.title}>
                        Realza tu <span className={styles.italic}>Belleza Natural</span>
                    </h2>

                    <p className={styles.subtitle}>
                        Cada rostro es único. Agenda tu consulta personalizada y descubre
                        cómo la micropigmentación puede potenciar tu belleza de forma
                        armónica y natural.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/contacto" className={styles.btnPrimary}>
                            Solicitar Cita Gratuita
                        </Link>
                        <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                            Consulta por WhatsApp
                        </a>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.signatureWrapper}>
                        <Image
                            src="/fotos/firma Ainigriv/Ainigriv-blanco.jpeg"
                            alt="Ainigriv Ferreira - Artista PMU Essential Studio"
                            width={280}
                            height={280}
                            className={styles.signatureImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
