import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from '../legal.module.css';

export const metadata = {
    title: 'Política de Privacidad | Essentia Studio',
    description: 'Política de privacidad y protección de datos de Essentia Studio.',
};

export default function PrivacidadPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Política de Privacidad</h1>
                    <p className={styles.updateDate}>Última actualización: Enero 2026</p>

                    <section className={styles.section}>
                        <h2>1. Responsable del tratamiento</h2>
                        <ul>
                            <li><strong>Identidad:</strong> Ainigriv Ferreia (Essentia Studio)</li>
                            <li><strong>NIF:</strong> [Tu NIF/CIF]</li>
                            <li><strong>Dirección:</strong> [Tu dirección completa]</li>
                            <li><strong>Email:</strong> info@essentiastudio.com</li>
                            <li><strong>Teléfono:</strong> +34 600 000 000</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Finalidad del tratamiento de datos</h2>
                        <p>En Essentia Studio tratamos la información que nos facilitan las personas interesadas con los siguientes fines:</p>
                        <ul>
                            <li>Gestionar las solicitudes de información y consultas realizadas a través del formulario de contacto.</li>
                            <li>Gestionar las citas y servicios de micropigmentación.</li>
                            <li>Enviar comunicaciones comerciales sobre nuestros servicios (solo si se ha dado consentimiento).</li>
                            <li>Realizar seguimiento post-procedimiento para garantizar la satisfacción del cliente.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>3. Legitimación</h2>
                        <p>La base legal para el tratamiento de sus datos es:</p>
                        <ul>
                            <li><strong>Consentimiento del interesado:</strong> al rellenar el formulario de contacto o solicitar nuestros servicios.</li>
                            <li><strong>Ejecución de un contrato:</strong> para la prestación de los servicios de micropigmentación contratados.</li>
                            <li><strong>Obligación legal:</strong> para cumplir con las obligaciones fiscales y contables aplicables.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Destinatarios de los datos</h2>
                        <p>
                            Sus datos personales no serán cedidos a terceros, salvo obligación legal. No se realizan
                            transferencias internacionales de datos.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Conservación de los datos</h2>
                        <p>Los datos personales proporcionados se conservarán:</p>
                        <ul>
                            <li>Mientras se mantenga la relación comercial.</li>
                            <li>Durante los plazos necesarios para cumplir con las obligaciones legales aplicables.</li>
                            <li>Hasta que el interesado solicite su supresión.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Derechos del interesado</h2>
                        <p>Usted tiene derecho a:</p>
                        <ul>
                            <li><strong>Acceso:</strong> conocer qué datos personales tenemos sobre usted.</li>
                            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
                            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
                            <li><strong>Limitación:</strong> solicitar que limitemos el tratamiento de sus datos.</li>
                            <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado.</li>
                            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
                        </ul>
                        <p>
                            Para ejercer estos derechos, puede contactar con nosotros en info@essentiastudio.com
                            indicando en el asunto "Protección de datos" y adjuntando copia de su DNI.
                        </p>
                        <p>
                            También tiene derecho a presentar una reclamación ante la Agencia Española de Protección
                            de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>7. Medidas de seguridad</h2>
                        <p>
                            Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad
                            de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>8. Modificaciones de la política de privacidad</h2>
                        <p>
                            Esta política de privacidad puede ser modificada en cualquier momento para adaptarla a
                            novedades legislativas o cambios en nuestras actividades. Le recomendamos revisarla
                            periódicamente.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
