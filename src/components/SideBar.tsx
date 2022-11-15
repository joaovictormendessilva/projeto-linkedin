import styles from './SideBar.module.css';

import { BookmarkSimple, Plus } from 'phosphor-react';

export function SideBar() {
    return (
        
        <aside>
            <div className={styles.sidebar}>
                <img 
                    className={styles.cover}
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                    alt="" 
                />
                <div className={styles.profile}>
                    <img src="https://github.com/joaovictormendessilva.png" alt="Foto de perfil do usuário" />
                
                    <div>
                        <span>Olá, John Doe!</span>
                        <p><a href="#">Alterar foto</a></p>
                    </div>
                </div>

                <div className={styles.profileconections}>
                    <div className={styles.conections}>
                        <span>Conexões</span>
                        <p>Amplie sua rede</p>
                    </div>

                    <div>
                        <a href="#">2</a>
                    </div>
                </div>

                <div className={styles.myitems}>
                    <BookmarkSimple size={20} />
                    <span>Meus itens</span>
                </div>
            </div>

            <div className={styles.moreActions}>
                <nav>
                    <ul>
                        <li><a href="#">Grupos</a></li>
                        <li>
                            <a className={styles.linkAndPlusButton} href="#">
                                Eventos
                                <button><Plus size={16}/></button>
                            </a>
                        </li>
                        <li><a href="#">Hashtags seguidas</a></li>
                    </ul>
                    
                    <a className={styles.findOutMore} href="#">
                        <h2>Descubra mais</h2>
                    </a>
                </nav>

            </div>
        </aside>
    );
}