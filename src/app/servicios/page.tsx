import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import PageHero from '@/components/sections/PageHero';
import styles from './servicios.module.css';

const services = [
    {
        id: 'cejas',
        title: 'Micropigmentación de Cejas',
        subtitle: 'El marco perfecto para tu mirada',
        description: 'Las cejas son el marco de tu rostro. Con técnicas como microblading, microshading o la combinación de ambas, diseño cejas naturales y perfectamente adaptadas a tu morfología facial.',
        techniques: ['Microblading pelo a pelo', 'Microshading (efecto polvo)', 'Técnica híbrida', 'Corrección de trabajos anteriores'],
        duration: '2-3 horas',
        healing: '4-6 semanas',
        price: 'Desde 250€',
        popular: true,
    },
    {
        id: 'labios',
        title: 'Micropigmentación de Labios',
        subtitle: 'Color y definición natural',
        description: 'Consigue unos labios definidos, con color uniforme y aspecto jugoso. Desde un sutil realce hasta un look más intenso, todo adaptado a tus preferencias.',
        techniques: ['Perfilado y definición', 'Full lip (labio completo)', 'Efecto acuarela', 'Neutralización de tonos oscuros'],
        duration: '2-3 horas',
        healing: '4-6 semanas',
        price: 'Desde 200€',
        popular: false,
    },
    {
        id: 'eyeliner',
        title: 'Eyeliner Permanente',
        subtitle: 'Una mirada intensa 24/7',
        description: 'Desde una línea sutil que realce tus pestañas hasta un eyeliner más definido. Despierta cada mañana con la mirada perfecta.',
        techniques: ['Línea de pestañas (efecto natural)', 'Eyeliner clásico', 'Eyeliner con cola', 'Sombreado suave'],
        duration: '1.5-2 horas',
        healing: '3-4 semanas',
        price: 'Desde 180€',
        popular: false,
    },
    {
        id: 'areolas',
        title: 'Reconstrucción de Areolas',
        subtitle: 'Arte y sensibilidad',
        description: 'Trabajo especializado de reconstrucción y pigmentación de areolas con la máxima profesionalidad, discreción y sensibilidad. Devolvemos la confianza.',
        techniques: ['Reconstrucción post-mastectomía', 'Corrección de asimetrías', 'Mejora de color', 'Creación de efecto 3D'],
        duration: '2-3 horas',
        healing: '4-6 semanas',
        price: 'Consultar',
        popular: false,
    },
];

export default function ServiciosPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PageHero
                    badge="Servicios"
                    title="Servicios de"
                    highlight="Micropigmentación"
                    description="Técnicas artísticas que respetan tu esencia y potencian tu belleza natural con resultados duraderos."
                />

                {/* Services */}
                <section className={styles.services}>
                    <div className={styles.container}>
                        {services.map((service, index) => (
                            <article key={service.id} id={service.id} className={`${styles.serviceCard} ${index % 2 !== 0 ? styles.reverse : ''}`}>
                                <div className={styles.serviceImage}>
                                    <div className={styles.imagePlaceholder}>
                                        <span className={styles.serviceNumber}>0{index + 1}</span>
                                    </div>
                                    {service.popular && <span className={styles.popularTag}>Más solicitado</span>}
                                </div>
                                <div className={styles.serviceContent}>
                                    <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                                    <p className={styles.serviceDescription}>{service.description}</p>

                                    <div className={styles.techniques}>
                                        <h4>Técnicas disponibles:</h4>
                                        <ul>
                                            {service.techniques.map((tech) => (
                                                <li key={tech}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.details}>
                                        <div className={styles.detail}>
                                            <span className={styles.detailLabel}>Duración</span>
                                            <span className={styles.detailValue}>{service.duration}</span>
                                        </div>
                                        <div className={styles.detail}>
                                            <span className={styles.detailLabel}>Cicatrización</span>
                                            <span className={styles.detailValue}>{service.healing}</span>
                                        </div>
                                        <div className={styles.detail}>
                                            <span className={styles.detailLabel}>Precio</span>
                                            <span className={styles.detailValue}>{service.price}</span>
                                        </div>
                                    </div>

                                    <a href="/contacto" className={styles.btnPrimary}>
                                        Reservar cita
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faq}>
                    <div className={styles.container}>
                        <h2 className={styles.faqTitle}>Preguntas Frecuentes</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>¿Duele el procedimiento?</h4>
                                <p>Aplicamos anestesia tópica para minimizar las molestias. La mayoría de clientas lo describen como una sensación de cosquilleo.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>¿Cuánto dura el resultado?</h4>
                                <p>Entre 1 y 3 años dependiendo del tipo de piel, cuidados posteriores y estilo de vida.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>¿Necesito retoque?</h4>
                                <p>Se recomienda un retoque a las 4-6 semanas después del primer tratamiento para perfeccionar el resultado.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>¿Hay contraindicaciones?</h4>
                                <p>Embarazo, lactancia, diabetes no controlada, tratamientos con retinoides, entre otros. Te informaré en la consulta.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <CookieBanner />
        </>
    );
}
