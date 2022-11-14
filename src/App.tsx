import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { SideBar } from './components/SideBar';
import { MainContent } from './components/MainContent';
import { RightSideBar } from './components/RightSideBar';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <SideBar />
          <MainContent />
          <RightSideBar />
      </div>
      
        
    </div>
  )
}

export default App
