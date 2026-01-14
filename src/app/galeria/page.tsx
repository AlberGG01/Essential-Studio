'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import PageHero from '@/components/sections/PageHero';
import styles from './galeria.module.css';

const galleryItems = [
    { id: 1, category: 'cejas', type: 'image', title: 'Microblading Natural' },
    { id: 2, category: 'cejas', type: 'image', title: 'Powder Brows' },
    { id: 3, category: 'labios', type: 'image', title: 'Full Lip' },
    { id: 4, category: 'cejas', type: 'image', title: 'Técnica Híbrida' },
    { id: 5, category: 'eyeliner', type: 'image', title: 'Eyeliner Clásico' },
    { id: 6, category: 'labios', type: 'image', title: 'Perfilado Natural' },
    { id: 7, category: 'cejas', type: 'image', title: 'Corrección de Color' },
    { id: 8, category: 'cejas', type: 'video', title: 'Proceso Microblading' },
    { id: 9, category: 'labios', type: 'image', title: 'Efecto Acuarela' },
    { id: 10, category: 'eyeliner', type: 'image', title: 'Línea Sutil' },
    { id: 11, category: 'cejas', type: 'image', title: 'Ombré Brows' },
    { id: 12, category: 'labios', type: 'video', title: 'Resultado Final' },
];

const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'cejas', label: 'Cejas' },
    { id: 'labios', label: 'Labios' },
    { id: 'eyeliner', label: 'Eyeliner' },
];

export default function GaleriaPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <PageHero
                    badge="Galería"
                    title="Mis"
                    highlight="Trabajos"
                    description="Descubre resultados reales de micropigmentación que respetan tu belleza natural."
                />

                {/* Gallery */}
                <section className={styles.gallery}>
                    <div className={styles.container}>
                        {/* Filters */}
                        <div className={styles.filters}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className={styles.grid}>
                            {filteredItems.map((item, index) => (
                                <article key={item.id} className={styles.gridItem}>
                                    <div className={styles.imagePlaceholder}>
                                        <span className={styles.itemNumber}>0{index + 1}</span>
                                        {item.type === 'video' && (
                                            <div className={styles.playButton}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                    <polygon points="5 3 19 12 5 21 5 3" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.overlay}>
                                        <span className={styles.category}>{item.category}</span>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredItems.length === 0 && (
                            <div className={styles.empty}>
                                <p>No hay trabajos en esta categoría todavía.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2>¿Te gustan los resultados?</h2>
                        <p>Agenda tu consulta y descubre cómo potenciar tu belleza natural.</p>
                        <a href="/contacto" className={styles.btnPrimary}>
                            Solicitar Cita
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
            <CookieBanner />
        </>
    );
}
