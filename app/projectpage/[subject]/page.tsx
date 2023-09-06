import styles from "./project.module.css";
import Title from "../../components/title";

export default function Page({ params }: {params:{subject: string}}) {
  const subject = params.subject.charAt(0).toUpperCase() + params.subject.slice(1) + " Design";
  return(
    <div className={styles.root}>
      <div className={styles.title}>
        <Title title={<h1>{subject}</h1>}/>
      </div>
      <div className={styles.gallery}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
    </div>
  )
}