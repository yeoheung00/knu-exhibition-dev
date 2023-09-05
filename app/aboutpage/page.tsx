import styles from './about.module.css'

export default function About(){
  return(
    <div className={styles.root}>
      <h1 className={styles.title}>2023년도<br/>공주대학교 디자인컨버전스학과<br/>16회 졸업전시</h1>
      <h2 className={styles.concept_head}>전시 컨셉</h2>
      <div className={styles.concept_article}>
        <img src='poster.jpeg' alt='poster'/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
}