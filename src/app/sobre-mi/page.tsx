import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import PageHero from '@/components/sections/PageHero';
import styles from './sobre-mi.module.css';

const certifications = [
    'Máster en Micropigmentación Avanzada',
    'Especialización en Microblading',
    'Técnicas Ombré y Powder Brows',
    'Corrección de Trabajos',
    'Micropigmentación de Labios',
    'Eyeliner Permanente',
    'Reconstrucción de Areolas',
    'Colorimetría y Diseño Facial',
];

const values = [
    {
        number: '01',
        title: 'Arte y Precisión',
        description: 'Cada trazo es una obra de arte. Combino técnica y creatividad para resultados únicos.',
    },
    {
        number: '02',
        title: 'Calidad Premium',
        description: 'Solo trabajo con los mejores pigmentos y materiales del mercado.',
    },
    {
        number: '03',
        title: 'Confianza',
        description: 'Creo un ambiente seguro donde te sientas cómoda y escuchada.',
    },
    {
        number: '04',
        title: 'Resultados Naturales',
        description: 'Mi objetivo es realzar tu belleza, no cambiarla.',
    },
];

export default function SobreMiPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PageHero
                    badge="Sobre Mí"
                    title="Ainigriv"
                    highlight="Ferreira"
                    description="Artista de Micropigmentación especializada en realzar tu belleza natural."
                />

                {/* Bio Section */}
                <section className={styles.bio}>
                    <div className={styles.container}>
                        <div className={styles.bioGrid}>
                            <div className={styles.bioImage}>
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.initials}>AF</span>
                                </div>
                            </div>
                            <div className={styles.bioContent}>
                                <h2>Mi Historia</h2>
                                <p>
                                    Desde pequeña siempre sentí una profunda pasión por el arte y la belleza.
                                    Descubrí el mundo de la micropigmentación y supe que había encontrado mi vocación:
                                    <strong> ayudar a las mujeres a sentirse más seguras y bellas</strong>.
                                </p>
                                <p>
                                    Me he formado con los mejores profesionales del sector, tanto a nivel
                                    nacional como internacional, perfeccionando cada técnica hasta dominarla.
                                    Mi filosofía es simple: <em>cada rostro es único y merece un trabajo
                                        personalizado</em>.
                                </p>
                                <p>
                                    En <strong>Essential Studio</strong>, no solo realizo procedimientos de
                                    micropigmentación; creo experiencias. Cada clienta que confía en mí
                                    recibe un trato cercano, profesional y resultados que superan sus
                                    expectativas.
                                </p>
                                <div className={styles.stats}>
                                    <div className={styles.stat}>
                                        <span className={styles.statNumber}>500+</span>
                                        <span className={styles.statLabel}>Clientas felices</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <span className={styles.statNumber}>15+</span>
                                        <span className={styles.statLabel}>Certificaciones</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className={styles.values}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Mis Valores</h2>
                        <div className={styles.valuesGrid}>
                            {values.map((value) => (
                                <article key={value.title} className={styles.valueCard}>
                                    <span className={styles.valueNumber}>{value.number}</span>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className={styles.certifications}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Formación y Certificaciones</h2>
                        <p className={styles.certDescription}>
                            La formación continua es fundamental en mi profesión. Estas son algunas
                            de mis certificaciones:
                        </p>
                        <div className={styles.certGrid}>
                            {certifications.map((cert, index) => (
                                <div key={index} className={styles.certItem}>
                                    <span className={styles.certNumber}>0{index + 1}</span>
                                    <span>{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2>¿Lista para conocernos?</h2>
                        <p>Reserva tu consulta y juntas diseñaremos tu look perfecto.</p>
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
