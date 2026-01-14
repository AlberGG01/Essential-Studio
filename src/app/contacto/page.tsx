'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import PageHero from '@/components/sections/PageHero';
import styles from './contacto.module.css';

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        setTimeout(() => {
            setStatus('success');
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                servicio: '',
                mensaje: '',
            });
        }, 1500);
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <PageHero
                    badge="Contacto"
                    title="Hablemos de tu"
                    highlight="Transformación"
                    description="Estoy aquí para ayudarte a realzar tu belleza natural. Reserva tu consulta."
                />

                {/* Contact Section */}
                <section className={styles.contact}>
                    <div className={styles.container}>
                        <div className={styles.contactGrid}>
                            {/* Contact Info */}
                            <div className={styles.info}>
                                <h2>Información de Contacto</h2>
                                <p className={styles.infoDescription}>
                                    ¿Tienes dudas o quieres reservar tu cita? Contáctame por el medio que prefieras.
                                </p>

                                <div className={styles.infoList}>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoContent}>
                                            <h4>Teléfono</h4>
                                            <a href="tel:+34600000000">+34 600 000 000</a>
                                        </div>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <div className={styles.infoContent}>
                                            <h4>Email</h4>
                                            <a href="mailto:info@essentialstudio.com">info@essentialstudio.com</a>
                                        </div>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <div className={styles.infoContent}>
                                            <h4>Ubicación</h4>
                                            <span>Tu ciudad, España</span>
                                        </div>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <div className={styles.infoContent}>
                                            <h4>Horario</h4>
                                            <span>Lun - Vie: 10:00 - 19:00</span>
                                            <span>Sáb: Previa cita</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whatsapp}>
                                    <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
                                        Escríbeme por WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className={styles.formWrapper}>
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <h3>Envíame un mensaje</h3>

                                    <div className={styles.formGrid}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="nombre">Nombre *</label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                required
                                                placeholder="Tu nombre"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="tu@email.com"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="telefono">Teléfono</label>
                                            <input
                                                type="tel"
                                                id="telefono"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                placeholder="+34 600 000 000"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="servicio">Servicio de interés</label>
                                            <select
                                                id="servicio"
                                                name="servicio"
                                                value={formData.servicio}
                                                onChange={handleChange}
                                            >
                                                <option value="">Selecciona un servicio</option>
                                                <option value="cejas">Micropigmentación de Cejas</option>
                                                <option value="labios">Micropigmentación de Labios</option>
                                                <option value="eyeliner">Eyeliner Permanente</option>
                                                <option value="areolas">Reconstrucción de Areolas</option>
                                                <option value="otro">Otro / Consulta general</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="mensaje">Mensaje *</label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                            placeholder="Cuéntame sobre tu proyecto..."
                                            rows={5}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                                    </button>

                                    {status === 'success' && (
                                        <div className={styles.successMessage}>
                                            ¡Mensaje enviado! Te responderé lo antes posible.
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className={styles.errorMessage}>
                                            Hubo un error. Por favor, inténtalo de nuevo.
                                        </div>
                                    )}
                                </form>
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
