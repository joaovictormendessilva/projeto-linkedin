import { DotsThree, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
                    <div>
                        <img className={styles.avatarImg} src="https://github.com/joaovictormendessilva.png" alt="Foto de perfil do usuário" />
                    </div>
                    <div>
                        <div className={styles.commentBox}>
                            <div className={styles.commentHeader}>
                                <div>
                                    <h2 className={styles.commentOwnersName}>Dono do comentário</h2>
                                    <span className={styles.commentOwnersRole}>Cargo</span>
                                </div>
                                <div className={styles.publishedAtAndActions}>
                                    <span className={styles.publishedAt}>5 d</span>
                                    <button className={styles.commentActions}><DotsThree size={18} /></button>
                                </div>
                            </div>
                            <div className={styles.commentText}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Asperiores possimus, similique ut repellendus accusamus sapiente 
                                    vero nemo est aspernatur explicabo, voluptatum, ullam accusantium 
                                    architecto ducimus voluptatem vitae in molestias expedita!
                                </p>
                            </div>
                        </div>
                        <div className={styles.likeContainer}>
                            <a href="#">Gostei</a>
                            <span>°</span>
                            <ThumbsUp className={styles.likeIcon} size={16}/><span> 1</span>
                            
                        </div>
                    </div>
                </div>
    );
}