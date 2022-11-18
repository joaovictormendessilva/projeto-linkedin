import styles from './MainContent.module.css';
import { Image, YoutubeLogo, Calendar, Article } from 'phosphor-react';
import { Post } from './Post';

const post = [
    {
      id: 1,
      author: {
        name: "John Doe",
        role: "Engenheiro de Produção",
        avatarUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
      },
      publishedAt: "16/11/2022 19:24:00",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores possimus, similique ut repellendus accusamus sapiente vero nemo est aspernatur explicabo, voluptatum, ullam accusantium architecto ducimus voluptatem vitae in molestias expedita!"
    },
    {
      id: 2,
      author: {
        name: "Jane Doe",
        role: "Assistente Social",
        avatarUrl: "https://cdn-icons-png.flaticon.com/512/194/194938.png"
      },
      publishedAt: "13/11/2022 19:24:00",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores possimus, similique ut repellendus accusamus sapiente vero nemo est aspernatur explicabo, voluptatum."
    },
  ]

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

                {post.map((post) => {
                    return (
                        <Post 
                            key={post.id}
                            authorName={post.author.name}
                            authorRole={post.author.role}
                            authorAvatarUrl={post.author.avatarUrl}
                            publishedAt={post.publishedAt}
                            postContent={post.content}
                        />)
                })}
            </main>
        </div>
    );
}