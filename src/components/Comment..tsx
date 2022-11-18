import { DotsThree, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
}

export function Comment({ content }: CommentProps) {

    const [commentLikeCount, setcommentLikeCount] = useState(0);
    const [alreadyLikedComment, setalreadyLikedComment] = useState(false);

    function handleAddCommentLikeCount(){
        if(alreadyLikedComment == false){
            setcommentLikeCount(commentLikeCount + 1)
            setalreadyLikedComment(alreadyLikedComment => true)
        }
    }

    return (
        <div className={styles.comment}>
                    <div>
                        <img className={styles.avatarImg} src="https://github.com/joaovictormendessilva.png" alt="Foto de perfil do usuário" />
                    </div>
                    <div>
                        <div className={styles.commentBox}>
                            <div className={styles.commentHeader}>
                                <div>
                                    <h2 className={styles.commentOwnersName}>Owner</h2>
                                    <span className={styles.commentOwnersRole}>Cargo</span>
                                </div>
                                <div className={styles.publishedAtAndActions}>
                                    <span className={styles.publishedAt}>5 d</span>
                                    <button className={styles.commentActions}><DotsThree size={18} /></button>
                                </div>
                            </div>
                            <div className={styles.commentText}>
                                <p>
                                    {content}
                                </p>
                            </div>
                        </div>
                        <div className={styles.likeContainer}>
                            <button onClick={handleAddCommentLikeCount}>Gostei</button>
                            <span>°</span>
                            <ThumbsUp className={styles.likeIcon} size={16}/><span> {commentLikeCount}</span>
                            
                        </div>
                    </div>
                </div>
    );
}