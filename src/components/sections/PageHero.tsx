import Image from 'next/image';
import styles from './PageHero.module.css';

interface PageHeroProps {
    badge: string;
    title: string;
    highlight?: string;
    description: string;
}

export default function PageHero({ badge, title, highlight, description }: PageHeroProps) {
    return (
        <section className={styles.hero}>
            {/* Background image */}
            <div className={styles.bgImage}>
                <Image
                    src="/fotos/foto-fondo-content.png"
                    alt="Arte abstracto"
                    fill
                    priority
                    className={styles.bgImageInner}
                />
                <div className={styles.bgOverlay}></div>
            </div>

            <div className={styles.heroContent}>
                <span className={styles.badge}>{badge}</span>
                <h1>
                    {title} {highlight && <span className={styles.highlight}>{highlight}</span>}
                </h1>
                <p>{description}</p>
            </div>
        </section>
    );
}
