import Link from 'next/link';
import styles from './Footer.module.css';

const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://instagram.com/essentiastudio',
    },
    {
        name: 'TikTok',
        href: 'https://tiktok.com/@essentiastudio',
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/34600000000',
    },
];

const legalLinks = [
    { href: '/legal/aviso-legal', label: 'Aviso Legal' },
    { href: '/legal/privacidad', label: 'Privacidad' },
    { href: '/legal/cookies', label: 'Cookies' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top section */}
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoMain}>ESSENTIAL</span>
                            <span className={styles.logoSub}>STUDIO</span>
                        </Link>
                        <p className={styles.tagline}>
                            El arte de realzar tu belleza natural
                        </p>
                    </div>

                    <div className={styles.contact}>
                        <h4>Contacto</h4>
                        <div className={styles.contactItem}>
                            <span>info@essentiastudio.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span>+34 600 000 000</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span>Tu ciudad, España</span>
                        </div>
                    </div>

                    <div className={styles.social}>
                        <h4>Sígueme</h4>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                {/* Bottom section */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Essential Studio — Ainigriv Ferreira
                    </p>
                    <nav className={styles.legalNav}>
                        {legalLinks.map((link, index) => (
                            <span key={link.href}>
                                <Link href={link.href} className={styles.legalLink}>
                                    {link.label}
                                </Link>
                                {index < legalLinks.length - 1 && <span className={styles.separator}>·</span>}
                            </span>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
