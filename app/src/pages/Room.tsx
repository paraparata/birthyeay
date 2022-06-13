import { motion } from "framer-motion";
import styles from "./Room.module.scss";

import { Backsound, Bg, Candle } from "../components";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Backsound />
      <div className={styles.root}>
        <header>
          <p>Happy Birthyeay!</p>
        </header>
        <main>
          <span>Your Name</span>
          <img src="/img/happier-one.svg" alt="Profile photo" />
          <Candle />
        </main>
        <footer>
          <span>Wish you all the best!</span>
        </footer>
      </div>
      <Bg />
    </motion.div>
  );
}

export default App;
