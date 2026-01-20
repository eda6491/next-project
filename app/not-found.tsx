import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした</dt>
        <dd className={styles.text}>
          あなたがアクセスしたページは存在しません。
          <br />
          URLをご参照ください。
        </dd>
      </dl>
    </div>
  );
}