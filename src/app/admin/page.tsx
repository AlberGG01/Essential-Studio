import styles from './dashboard.module.css';

export default function AdminDashboard() {
    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Dashboard</h1>
                <p>Bienvenida a tu panel de administración, Ainigriv</p>
            </header>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}>📸</div>
                    <div className={styles.statInfo}>
                        <span className={styles.statNumber}>0</span>
                        <span className={styles.statLabel}>Imágenes</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}>🎬</div>
                    <div className={styles.statInfo}>
                        <span className={styles.statNumber}>0</span>
                        <span className={styles.statLabel}>Videos</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}>✨</div>
                    <div className={styles.statInfo}>
                        <span className={styles.statNumber}>4</span>
                        <span className={styles.statLabel}>Servicios</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}>📱</div>
                    <div className={styles.statInfo}>
                        <span className={styles.statNumber}>4</span>
                        <span className={styles.statLabel}>Redes sociales</span>
                    </div>
                </div>
            </div>

            <div className={styles.quickActions}>
                <h2>Acciones rápidas</h2>
                <div className={styles.actionsGrid}>
                    <a href="/admin/galeria" className={styles.actionCard}>
                        <span className={styles.actionIcon}>📤</span>
                        <span className={styles.actionTitle}>Subir contenido</span>
                        <span className={styles.actionDescription}>Añade nuevas imágenes o videos a tu galería</span>
                    </a>
                    <a href="/" target="_blank" className={styles.actionCard}>
                        <span className={styles.actionIcon}>👁️</span>
                        <span className={styles.actionTitle}>Ver web</span>
                        <span className={styles.actionDescription}>Previsualiza cómo se ve tu sitio web</span>
                    </a>
                </div>
            </div>

            <div className={styles.info}>
                <h2>Información</h2>
                <div className={styles.infoCard}>
                    <h3>🚀 Próximas funcionalidades</h3>
                    <ul>
                        <li>Integración con almacenamiento en la nube</li>
                        <li>Gestión de citas desde el panel</li>
                        <li>Estadísticas de visitas</li>
                        <li>Personalización de contenido</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
