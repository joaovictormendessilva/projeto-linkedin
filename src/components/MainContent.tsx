import styles from './MainContent.module.css';
import { Image, YoutubeLogo, Calendar, Article } from 'phosphor-react';
import { Post } from './Post';

export function MainContent() {
    return (
        <div>
            <main>
                <div className={styles.addPostBox}>
                    <div className={styles.imageWithInput}>
                        <img className={styles.avatarImg} src="https://github.com/joaovictormendessilva.png" alt="Foto de perfil do usuário" />
                        <button>Começar publicação</button>
                    </div>

                    <div className={styles.optionsList}>
                        <ul>
                            <li><Image size={24} color="#0a66c2"/>Foto</li>
                            <li><YoutubeLogo size={24} color="#5f9b41" />Vídeo</li>
                            <li><Calendar size={24} color="#c37d16" />Evento</li>
                            <li><Article size={24} color="#db6443" />Escrever artigo</li>
                        </ul>
                    </div>
                </div>

                <Post />
                <Post />
            </main>
        </div>
    );
}