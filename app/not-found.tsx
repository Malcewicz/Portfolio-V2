import Link from "next/link";
import styles from "@/app/_styles/notfound.module.css";

function NotFound() {
  return (
    <main className={styles.notfound}>
      <div className={styles.wrapper}>
        <div className={styles.error}>
          <h4>Error</h4>
          <h1>404</h1>
        </div>
        <div className={styles.message}>
          <h2>This page was not found</h2>
          <h3>
            Please
            <Link
              title="Go back to the homepage"
              href="/"
              className={styles.button}
            >
              Head back Home
            </Link>
          </h3>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.circle_top_left}></div>
        <div className={styles.circle_btm_right}></div>
      </div>
    </main>
  );
}

export default NotFound;
