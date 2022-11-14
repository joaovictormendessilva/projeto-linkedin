import { Info } from 'phosphor-react';
import styles from './RightSideBar.module.css'

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
        </div>    
    );
}