import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function ProductsList() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
            <Link href="/products">
              <a>画像一覧へ</a>
            </Link>
      </main>
    </div>
  );
}
