'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        savePreferences(allAccepted);
    };

    const handleRejectAll = () => {
        const onlyNecessary: CookiePreferences = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        savePreferences(onlyNecessary);
    };

    const handleSavePreferences = () => {
        savePreferences(preferences);
    };

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem('cookieConsent', JSON.stringify(prefs));
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setIsVisible(false);
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return;
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={`${styles.banner} ${showSettings ? styles.expanded : ''}`}>
                <div className={styles.content}>
                    <h3 className={styles.title}>Cookies</h3>
                    <p className={styles.description}>
                        Utilizamos cookies para mejorar tu experiencia.
                        <Link href="/legal/cookies" className={styles.link}> Más información</Link>
                    </p>
                </div>

                {showSettings && (
                    <div className={styles.settings}>
                        <div className={styles.settingItem}>
                            <div className={styles.settingInfo}>
                                <span className={styles.settingName}>Necesarias</span>
                            </div>
                            <label className={`${styles.toggle} ${styles.disabled}`}>
                                <input type="checkbox" checked={preferences.necessary} disabled />
                                <span className={styles.slider}></span>
                            </label>
                        </div>

                        <div className={styles.settingItem}>
                            <div className={styles.settingInfo}>
                                <span className={styles.settingName}>Analíticas</span>
                            </div>
                            <label className={styles.toggle}>
                                <input
                                    type="checkbox"
                                    checked={preferences.analytics}
                                    onChange={() => togglePreference('analytics')}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>

                        <div className={styles.settingItem}>
                            <div className={styles.settingInfo}>
                                <span className={styles.settingName}>Marketing</span>
                            </div>
                            <label className={styles.toggle}>
                                <input
                                    type="checkbox"
                                    checked={preferences.marketing}
                                    onChange={() => togglePreference('marketing')}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>
                )}

                <div className={styles.actions}>
                    <button onClick={() => setShowSettings(!showSettings)} className={styles.btnText}>
                        {showSettings ? 'Ocultar' : 'Configurar'}
                    </button>
                    <button onClick={handleRejectAll} className={styles.btnText}>
                        Rechazar
                    </button>
                    {showSettings ? (
                        <button onClick={handleSavePreferences} className={styles.btnPrimary}>
                            Guardar
                        </button>
                    ) : (
                        <button onClick={handleAcceptAll} className={styles.btnPrimary}>
                            Aceptar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
