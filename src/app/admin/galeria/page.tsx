'use client';

import { useState } from 'react';
import styles from './galeria-admin.module.css';

interface GalleryItem {
    id: number;
    title: string;
    category: string;
    type: 'image' | 'video';
    createdAt: string;
}

// Datos de ejemplo - en producción vendrían de una base de datos
const initialItems: GalleryItem[] = [
    { id: 1, title: 'Microblading Natural', category: 'cejas', type: 'image', createdAt: '2024-01-10' },
    { id: 2, title: 'Full Lip', category: 'labios', type: 'image', createdAt: '2024-01-09' },
    { id: 3, title: 'Proceso Microblading', category: 'cejas', type: 'video', createdAt: '2024-01-08' },
];

export default function GaleriaAdminPage() {
    const [items, setItems] = useState<GalleryItem[]>(initialItems);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [newItem, setNewItem] = useState({
        title: '',
        category: 'cejas',
        type: 'image' as 'image' | 'video',
    });

    const handleUpload = (e: React.FormEvent) => {
        e.preventDefault();
        const item: GalleryItem = {
            id: Date.now(),
            ...newItem,
            createdAt: new Date().toISOString().split('T')[0],
        };
        setItems([item, ...items]);
        setShowUploadModal(false);
        setNewItem({ title: '', category: 'cejas', type: 'image' });
    };

    const handleDelete = (id: number) => {
        if (confirm('¿Estás segura de eliminar este elemento?')) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div>
                    <h1>Gestión de Galería</h1>
                    <p>Administra las imágenes y videos de tu portfolio</p>
                </div>
                <button
                    className="btn btn-gold"
                    onClick={() => setShowUploadModal(true)}
                >
                    + Subir contenido
                </button>
            </header>

            {/* Content Grid */}
            <div className={styles.content}>
                {items.length === 0 ? (
                    <div className={styles.empty}>
                        <span className={styles.emptyIcon}>📷</span>
                        <h3>No hay contenido todavía</h3>
                        <p>Sube tu primera imagen o video para empezar</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowUploadModal(true)}
                        >
                            Subir contenido
                        </button>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {items.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <div className={styles.cardImage}>
                                    <span>{item.type === 'video' ? '🎬' : '📷'}</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>{item.title}</h3>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.badge}>{item.category}</span>
                                        <span className={styles.date}>{item.createdAt}</span>
                                    </div>
                                </div>
                                <div className={styles.cardActions}>
                                    <button
                                        className={styles.deleteBtn}
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 6h18" />
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className={styles.modalOverlay} onClick={() => setShowUploadModal(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2>Subir contenido</h2>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setShowUploadModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleUpload} className={styles.modalForm}>
                            <div className="form-group">
                                <label htmlFor="title" className="form-label">Título</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="form-input"
                                    value={newItem.title}
                                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                                    placeholder="Ej: Microblading pelo a pelo"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category" className="form-label">Categoría</label>
                                <select
                                    id="category"
                                    className="form-input"
                                    value={newItem.category}
                                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                                >
                                    <option value="cejas">Cejas</option>
                                    <option value="labios">Labios</option>
                                    <option value="eyeliner">Eyeliner</option>
                                    <option value="areolas">Areolas</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="type" className="form-label">Tipo de contenido</label>
                                <select
                                    id="type"
                                    className="form-input"
                                    value={newItem.type}
                                    onChange={(e) => setNewItem({ ...newItem, type: e.target.value as 'image' | 'video' })}
                                >
                                    <option value="image">Imagen</option>
                                    <option value="video">Video</option>
                                </select>
                            </div>

                            <div className={styles.uploadArea}>
                                <span className={styles.uploadIcon}>📤</span>
                                <p>Arrastra tu archivo aquí o haz clic para seleccionar</p>
                                <span className={styles.uploadHint}>
                                    {newItem.type === 'video' ? 'MP4, MOV (máx. 100MB)' : 'JPG, PNG, WEBP (máx. 10MB)'}
                                </span>
                                <input
                                    type="file"
                                    accept={newItem.type === 'video' ? 'video/*' : 'image/*'}
                                    className={styles.fileInput}
                                />
                            </div>

                            <div className={styles.modalActions}>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowUploadModal(false)}
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-gold">
                                    Subir
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Info Note */}
            <div className={styles.note}>
                <strong>💡 Nota:</strong> Esta es una versión demo del panel de administración.
                Para una funcionalidad completa de subida de archivos, se requiere integrar un
                servicio de almacenamiento como Cloudinary, Supabase Storage o AWS S3.
            </div>
        </div>
    );
}
