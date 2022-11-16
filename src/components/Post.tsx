import styles from './Post.module.css';
import { Planet, Trash, ThumbsUp, ChatCircleText, Repeat, PaperPlaneTilt, DotsThree } from "phosphor-react";
import { Comment } from './Comment.';

export function Post() {
    return (
        <div className={styles.post}>
            <div>
                <div className={styles.headerContent}>
                    <div className={styles.imgWithRole}>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/D4D03AQGJ6iIqyH5W3w/profile-displayphoto-shrink_100_100/0/1665848536121?e=1673481600&v=beta&t=o58Psr1NBQ_rDHvzKlCD0CqWJ8cbWtG3OJpkAnfouJE"
                        />
                        <div>
                            <span className={styles.authorName}>João Victor</span>
                            <p className={styles.authorRole}>Engenheiro de Produção | Coordenador</p>
                            <div className={styles.publishedAtBox}>
                                <span className={styles.publishedAt}>1 sem </span>° <Planet size={16}/>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <button>
                            <Trash size={22} />
                        </button>
                    </div>
                </div>

            </div>

            <div className={styles.postContent}>
                <p>
                    Recebemos hoje da AMAPA o certificado de conformidade Algodão Brasileiro 
                    Responsável (ABR) para o beneficiamento de algodão na safra 2021/2022.
                </p>
                <img 
                    src="https://media-exp1.licdn.com/dms/image/D4D22AQHA5kAARsOSTQ/feedshare-shrink_800/0/1667400521959?e=1671062400&v=beta&t=AQv_7SQWCv9iDHEgcCGbuHmpINTDZS-ABI9HH0Vyj7w"
                />
            </div>

            <div className={styles.likesAndActions}>
                <a href="#"><span>104 pessoas curtiram</span></a>
                <hr />
                <div className={styles.actionsPost}>
                    <ul>
                        <li><button><ThumbsUp size={24} /> Gostei</button></li>
                        <li><button><ChatCircleText size={24} />Comentar</button></li>
                        <li><button><Repeat size={24} />Compartilhar</button></li>
                        <li><button><PaperPlaneTilt size={24} />Enviar</button></li>
                    </ul>
                </div>
            </div>

            <div className={styles.commentSpace}>
                {/* Input para comentar */}
                <div className={styles.inputForComment}>
                    <img className={styles.avatarImg} src="https://github.com/joaovictormendessilva.png" alt="Foto de perfil do usuário" />
                    <input type="text" placeholder='Adicionar comentário' />
                </div>

                {/* Comentário */}
                <Comment />
            </div>
        </div>
    );
}