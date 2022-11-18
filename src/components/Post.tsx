import styles from './Post.module.css';
import { Planet, Trash, ThumbsUp, ChatCircleText, Repeat, PaperPlaneTilt, DotsThree } from "phosphor-react";
import { Comment } from './Comment.';
import { ChangeEvent, FormEvent, useState } from 'react';

interface PostProps {
    authorName: string;
    authorRole: string;
    authorAvatarUrl: string;
    publishedAt: string;
    postContent: string;
}

export function Post({ authorName, authorRole, authorAvatarUrl, publishedAt, postContent }: PostProps) {
    
    // Like no post
    const [postLikeCount, setPostLikeCount] = useState(3);
    const [alreadyLiked, setAlreadyLiked] = useState(false);

    function handleAddPostLikeCount(){
        if(alreadyLiked == false){
            setPostLikeCount(postLikeCount + 1)
            setAlreadyLiked(alreadyLiked => true);
        }
    }

    // Adicionar Comentário
    const [comments, setComments] = useState(['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores possimus, similique ut repellendus accusamus sapiente vero nemo est !']);
    const [newComment, setNewComment] = useState('');

    function handleAddComment(event: FormEvent){
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    }

    function changeAddNewComment(event: ChangeEvent<HTMLInputElement>){
       setNewComment(event.target.value);
    }

    // Desabilitar input se vazio
    const isEmptyField = newComment.length == 0;

    return (
        <div className={styles.post}>
            <div>
                <div className={styles.headerContent}>
                    <div className={styles.imgWithRole}>
                        <img
                            src={authorAvatarUrl}
                        />
                        <div>
                            <span className={styles.authorName}>{authorName}</span>
                            <p className={styles.authorRole}>{authorRole}</p>
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
                    {postContent}
                </p>
                <img 
                    src="https://media-exp1.licdn.com/dms/image/D4D22AQHA5kAARsOSTQ/feedshare-shrink_800/0/1667400521959?e=1671062400&v=beta&t=AQv_7SQWCv9iDHEgcCGbuHmpINTDZS-ABI9HH0Vyj7w"
                />
            </div>

            <div className={styles.likesAndActions}>
                <a href="#"><span>{postLikeCount} pessoas curtiram</span></a>
                <hr />
                <div className={styles.actionsPost}>
                    <ul>
                        <li><button onClick={handleAddPostLikeCount}><ThumbsUp size={24} /> Gostei</button></li>
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
                    
                    <form onSubmit={handleAddComment}>
                        <input 
                            onChange={changeAddNewComment}
                            required
                            value={newComment} 
                            type="text" 
                            placeholder='Adicionar comentário' 
                        />
                        <button disabled={isEmptyField}>Publicar</button>
                    </form>
                </div>

                {/* Comentário */}
                {comments.map((comment) => {
                    return <Comment key={comment} content={comment}/>
                })}
            </div>
        </div>
    );
}