import Link from 'next/link';
import styles from './ServicesPreview.module.css';

const services = [
    {
        id: 'cejas',
        title: 'Micropigmentación de Cejas',
        subtitle: 'Microblading & Powder Brows',
        description: 'Técnicas artísticas que definen y enmarcan tu mirada respetando la armonía natural de tu rostro.',
        cta: 'Ver transformaciones',
    },
    {
        id: 'labios',
        title: 'Micropigmentación de Labios',
        subtitle: 'Full Lips & Perfilado',
        description: 'Color, definición y volumen visual que potencian la belleza natural de tus labios.',
        cta: 'Ver resultados',
    },
    {
        id: 'eyeliner',
        title: 'Eyeliner Permanente',
        subtitle: 'Línea Sutil & Definida',
        description: 'Líneas precisas que intensifican y realzan tu mirada con elegancia duradera.',
        cta: 'Ver galería',
    },
];

export default function ServicesPreview() {
    return (
        <section className={styles.services} id="servicios">
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <div className={styles.labelWrapper}>
                            <div className={styles.line}></div>
                            <span className={styles.label}>Servicios de Micropigmentación</span>
                            <div className={styles.line}></div>
                        </div>
                        <h2 className={styles.title}>
                            Técnicas <span className={styles.italic}>Artísticas</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Cada trazo respeta tu esencia. Descubre resultados que
                            realzan tu belleza de forma natural y armónica.
                        </p>
                    </div>
                </header>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <article key={service.id} className={styles.card}>
                            <div className={styles.cardNumber}>
                                <span>0{index + 1}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardSubtitle}>{service.subtitle}</span>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <div className={styles.cardDivider}></div>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <Link href={`/galeria#${service.id}`} className={styles.cardLink}>
                                    <span>{service.cta}</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                            </div>
                            <div className={styles.cardOverlay}>
                                <span className={styles.overlayText}>Ver fotos reales</span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <p className={styles.ctaText}>
                        ¿Quieres ver más ejemplos de nuestro trabajo?
                    </p>
                    <Link href="/galeria" className={styles.btnPrimary}>
                        Explorar Galería Completa
                    </Link>
                </div>
            </div>
        </section>
    );
}
