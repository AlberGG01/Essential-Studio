'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './GalleryPreview.module.css';

const galleryItems = [
    { id: 1, category: 'cejas', title: 'Microblading Natural', subtitle: 'Resultado natural y definido' },
    { id: 2, category: 'labios', title: 'Full Lip Color', subtitle: 'Color vibrante y natural' },
    { id: 3, category: 'cejas', title: 'Powder Brows', subtitle: 'Efecto maquillaje suave' },
    { id: 4, category: 'eyeliner', title: 'Línea Sutil', subtitle: 'Mirada intensificada' },
    { id: 5, category: 'cejas', title: 'Técnica Híbrida', subtitle: 'Lo mejor de ambas técnicas' },
    { id: 6, category: 'labios', title: 'Perfilado Natural', subtitle: 'Definición elegante' },
];

export default function GalleryPreview() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
        <section className={styles.gallery} id="galeria">
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <div className={styles.labelWrapper}>
                            <div className={styles.line}></div>
                            <span className={styles.label}>Galería de Resultados</span>
                        </div>
                        <h2 className={styles.title}>
                            Trabajos <span className={styles.italic}>Reales</span>
                        </h2>
                        <p className={styles.headerSubtitle}>
                            Cada transformación es única. Descubre los resultados naturales
                            de nuestras clientas.
                        </p>
                    </div>
                    <Link href="/galeria" className={styles.viewAll}>
                        <span>Ver galería completa</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </header>

                <div className={styles.grid}>
                    {galleryItems.map((item, index) => (
                        <article
                            key={item.id}
                            className={`${styles.gridItem} ${index === 0 ? styles.large : ''}`}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className={styles.imagePlaceholder}>
                                <span className={styles.placeholderNumber}>0{index + 1}</span>
                                <span className={styles.placeholderText}>Foto próximamente</span>
                            </div>
                            <div className={`${styles.overlay} ${hoveredItem === item.id ? styles.active : ''}`}>
                                <span className={styles.category}>{item.category}</span>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemSubtitle}>{item.subtitle}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <p className={styles.ctaText}>
                        ¿Te gustaría ver resultados similares en ti?
                    </p>
                    <Link href="/contacto" className={styles.btnPrimary}>
                        Consulta Sin Compromiso
                    </Link>
                </div>
            </div>
        </section>
    );
}
