import { DotsThree, Info } from 'phosphor-react';
import styles from './RightSideBar.module.css'

import KeyImg from '../assets/key.jpg'
import LogoFooter from '../assets/logo-footer.svg'

export function RightSideBar() {
    return (
        <div>
            <div className={styles.rightSideBar}>
                <div className={styles.headerTitleNotices}>
                    <h2><span>LinkedIn Notícias</span></h2>
                    <Info size={18} />
                </div>

                <div className={styles.listOfNotices}>
                    <ul>
                        <li>
                            <a href="#">
                                <div>
                                    <span className={styles.ballDividerNotice}></span>
                                    <span className={styles.notice}>Eleições 2022: últimas notícias</span>
                                </div>
                                <span className={styles.infoNotice}>Notícias mais lidas ° 8.526 leitores</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div>
                                    <span className={styles.ballDividerNotice}></span>
                                    <span className={styles.notice}>Maior varejista de pneus do brasil receb...</span>
                                </div>
                                <span className={styles.infoNotice}>Há 1d ° 500 leitores</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div>
                                    <span className={styles.ballDividerNotice}></span>
                                    <span className={styles.notice}>Fórmula 1: GP de São Paulo combate ass...</span>
                                </div>
                                <span className={styles.infoNotice}>há 1 d</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div>
                                    <span className={styles.ballDividerNotice}></span>
                                    <span className={styles.notice}>Mulheres são ainda 12% do mercado de...</span>
                                </div>
                                <span className={styles.infoNotice}>há 1 d ° 476 leitores</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div>
                                    <span className={styles.ballDividerNotice}></span>
                                    <span className={styles.notice}>Amazon apresenta novo robô para seu ...</span>
                                </div>
                                <span className={styles.infoNotice}>há 2 d ° 620 leitores</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.ad}>
                <div className={styles.adContainer}>
                    <div className={styles.adTitle}>
                        <span>Anúncio</span>
                        <button><DotsThree size={32} /></button>
                    </div>

                    <h2>
                        <span>
                            João Victor
                        </span>
                        , alcance todo o seu potencial com o LinkedIn Premium
                    </h2>

                    <div>
                        <img src={KeyImg} alt="Ícone de chave LinkedIn Premium" />
                    </div>

                    <div className={styles.callToActionText}>
                        <p>
                            Saiba quem viu seu perfil nos últimos 90 dias
                        </p>
                    </div>

                    <div className={styles.callToActionButton}>
                        <a href="#">Experimente grátis</a>
                    </div>
                </div>

                <div className={styles.sideRightFooter}>
                    <nav>
                        <ul>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Acessibilidade</a></li>
                            <li><a href="#">Central de Ajuda</a></li>
                            <li><a href="#">Termos e Privacidade</a></li>
                            <li><a href="#">Preferência de anúncios</a></li>
                            <li><a href="#">Publicidade</a></li>
                            <li><a href="#">Serviços empresariais</a></li>
                            <li><a href="#">Baixe o aplicativo do LinkedIn</a></li>
                            <li><a href="#">Mais</a></li>
                        </ul>

                        <footer>
                            <img src={LogoFooter} alt="Logo linkedIn footer" />
                            <h2>LinkedIn Corporation © 2022</h2>
                        </footer>
                    </nav>
                </div>
            </div>
        </div>    
    );
}