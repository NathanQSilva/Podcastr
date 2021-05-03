import { Header } from '../components/Header/Index';
import { Player } from '../components/Player/Index';
import { PlayerContextProvider } from '../Contexts/PlayerContext';


import styles from '../styles/app.module.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
