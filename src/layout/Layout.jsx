import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>Milad Shahriyari Exchange</p>
      </header>

      {children}

      <footer className={styles.footer}>
        <p>Developed with milad</p>
      </footer>
    </>
  );
}

export default Layout;
