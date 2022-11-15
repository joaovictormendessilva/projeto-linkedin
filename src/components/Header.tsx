import styles from './Header.module.css';

import LogoLinkedin from '../assets/logo.png';
import HomeIconMenu from '../assets/home.svg';
import PeopleNetWorkIconMenu from '../assets/people-network.svg';
import SuitcaseIconMenu from '../assets/suitcase.svg';
import MessagesIconMenu from '../assets/messages.svg';
import BellNotificationsIconMenu from '../assets/bell-notifications.svg';
import { MagnifyingGlass } from 'phosphor-react';


export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_content}>
                <div className={styles.logoInputContent}>
                    <img src={LogoLinkedin} className={styles.logo} alt="Logo cópia do Linkedin" />
                    <input type="text" placeholder="Pesquisar"/>
                    <div className={styles.iconSearch}>
                        <MagnifyingGlass size={20} />
                    </div>
                </div>

                <div className={styles.main_menu}>
                    <ul>
                        <li className={styles.activeMenu}><img src={HomeIconMenu} alt="" />Início</li>
                        <li><img src={PeopleNetWorkIconMenu} alt="" />Minha rede</li>
                        <li><img src={SuitcaseIconMenu} alt="" />Vagas</li>
                        <li><img src={MessagesIconMenu} alt="" />Mensagens</li>
                        <li><img src={BellNotificationsIconMenu} alt="" />Notificações</li>
                        <li><img className={styles.avatarIcon} src="https://github.com/joaovictormendessilva.png" alt="" />Eu</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}