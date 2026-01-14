import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from '../legal.module.css';

export const metadata = {
    title: 'Política de Cookies | Essentia Studio',
    description: 'Política de cookies del sitio web Essentia Studio.',
};

export default function CookiesPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Política de Cookies</h1>
                    <p className={styles.updateDate}>Última actualización: Enero 2026</p>

                    <section className={styles.section}>
                        <h2>1. ¿Qué son las cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador,
                            tablet, móvil) cuando visita un sitio web. Se utilizan ampliamente para hacer que los
                            sitios web funcionen de manera más eficiente y proporcionar información a los propietarios
                            del sitio.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Tipos de cookies que utilizamos</h2>

                        <h3>2.1 Cookies necesarias</h3>
                        <p>
                            Son esenciales para el funcionamiento del sitio web. Sin estas cookies, el sitio no
                            podría funcionar correctamente. Incluyen:
                        </p>
                        <ul>
                            <li>Cookies de sesión para mantener su estado de navegación.</li>
                            <li>Cookies de preferencias para recordar su configuración de cookies.</li>
                        </ul>

                        <h3>2.2 Cookies analíticas</h3>
                        <p>
                            Nos permiten reconocer y contar el número de visitantes y ver cómo los visitantes
                            navegan por el sitio. Esto nos ayuda a mejorar el funcionamiento del sitio web.
                        </p>

                        <h3>2.3 Cookies de marketing</h3>
                        <p>
                            Se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar
                            anuncios que sean relevantes y atractivos para el usuario individual.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>3. Cookies de terceros</h2>
                        <p>Además de nuestras propias cookies, podemos utilizar cookies de terceros para:</p>
                        <ul>
                            <li>Análisis de tráfico web (Google Analytics)</li>
                            <li>Integración con redes sociales (Instagram, Facebook)</li>
                            <li>Mejora de la experiencia de usuario</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Gestión de cookies</h2>
                        <p>
                            Puede aceptar, rechazar o configurar las cookies a través del banner que aparece al
                            visitar nuestro sitio web por primera vez.
                        </p>
                        <p>
                            También puede configurar su navegador para que rechace las cookies o le avise cuando
                            se envíe una cookie. A continuación le indicamos cómo hacerlo en los navegadores más
                            comunes:
                        </p>
                        <ul>
                            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                            <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                            <li><strong>Safari:</strong> Preferencias → Privacidad</li>
                            <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
                        </ul>
                        <p className={styles.warning}>
                            ⚠️ Tenga en cuenta que si bloquea las cookies, es posible que algunas funcionalidades
                            del sitio web no funcionen correctamente.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Periodo de conservación</h2>
                        <p>Las cookies se conservan durante diferentes periodos:</p>
                        <ul>
                            <li><strong>Cookies de sesión:</strong> se eliminan al cerrar el navegador.</li>
                            <li><strong>Cookies persistentes:</strong> permanecen durante un período definido (entre 30 días y 2 años, según el tipo).</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Actualización de la política</h2>
                        <p>
                            Esta Política de Cookies puede ser actualizada periódicamente para reflejar cambios en
                            las cookies que utilizamos o por motivos operativos, legales o reglamentarios. Le
                            recomendamos revisar esta política regularmente.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>7. Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en:
                        </p>
                        <ul>
                            <li><strong>Email:</strong> info@essentiastudio.com</li>
                            <li><strong>Teléfono:</strong> +34 600 000 000</li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
