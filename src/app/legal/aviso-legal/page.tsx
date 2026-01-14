import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from '../legal.module.css';

export const metadata = {
    title: 'Aviso Legal | Essentia Studio',
    description: 'Aviso legal y condiciones de uso del sitio web Essentia Studio.',
};

export default function AvisoLegalPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Aviso Legal</h1>
                    <p className={styles.updateDate}>Última actualización: Enero 2026</p>

                    <section className={styles.section}>
                        <h2>1. Datos identificativos</h2>
                        <p>
                            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002,
                            de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico,
                            a continuación se reflejan los siguientes datos:
                        </p>
                        <ul>
                            <li><strong>Titular:</strong> Ainigriv Ferreia (Essentia Studio)</li>
                            <li><strong>NIF:</strong> [Tu NIF/CIF]</li>
                            <li><strong>Domicilio:</strong> [Tu dirección completa]</li>
                            <li><strong>Email:</strong> info@essentiastudio.com</li>
                            <li><strong>Teléfono:</strong> +34 600 000 000</li>
                            <li><strong>Actividad:</strong> Servicios de micropigmentación y estética</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Objeto</h2>
                        <p>
                            El presente aviso legal regula el uso y utilización del sitio web www.essentiastudio.com,
                            del que es titular Ainigriv Ferreia (en adelante, EL TITULAR).
                        </p>
                        <p>
                            La navegación por el sitio web atribuye la condición de usuario del mismo e implica la
                            aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en
                            este Aviso Legal.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>3. Condiciones de acceso y uso</h2>
                        <p>
                            El sitio web y sus servicios son de acceso libre y gratuito. No obstante, EL TITULAR
                            puede condicionar la utilización de algunos de los servicios ofrecidos en su web a la
                            previa cumplimentación del correspondiente formulario.
                        </p>
                        <p>El usuario garantiza la autenticidad y actualidad de todos aquellos datos que comunique
                            y será el único responsable de las manifestaciones falsas o inexactas que realice.</p>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Propiedad intelectual e industrial</h2>
                        <p>
                            El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición,
                            compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos,
                            texto y/o gráficos, son propiedad de EL TITULAR o, en su caso, dispone de licencia o
                            autorización expresa por parte de los autores.
                        </p>
                        <p>
                            Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa
                            de propiedad intelectual e industrial, así como inscritos en los registros públicos
                            correspondientes.
                        </p>
                        <p>
                            Independientemente de la finalidad para la que fueran destinados, la reproducción total
                            o parcial, uso, explotación, distribución y comercialización, requiere en todo caso la
                            autorización escrita previa por parte de EL TITULAR.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Exclusión de garantías y responsabilidad</h2>
                        <p>
                            EL TITULAR no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier
                            naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los
                            contenidos, falta de disponibilidad del portal o la transmisión de virus o programas
                            maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas
                            tecnológicas necesarias para evitarlo.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Modificaciones</h2>
                        <p>
                            EL TITULAR se reserva el derecho de efectuar sin previo aviso las modificaciones que
                            considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos
                            y servicios que se presten a través de la misma como la forma en la que éstos aparezcan
                            presentados o localizados en su portal.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>7. Legislación aplicable y jurisdicción</h2>
                        <p>
                            Para la resolución de todas las controversias o cuestiones relacionadas con el presente
                            sitio web o de las actividades en él desarrolladas, será de aplicación la legislación
                            española, a la que se someten expresamente las partes, siendo competentes para la
                            resolución de todos los conflictos derivados o relacionados con su uso los Juzgados
                            y Tribunales más cercanos al domicilio de EL TITULAR.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
