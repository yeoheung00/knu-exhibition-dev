import styles from './page.module.css'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import ImageViewer from '@/components/mdx/ImageViewer'
import Book from '@/components/mdx/Book'
import Link from 'next/link'
import graduate from 'db/graduate.json'

export const generateStaticParams = async () => allPosts.map((post) => ({ index: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.index)
  if (post) return { title: post.title }
}

export default function ProjectIndex({ params }: { params: { index: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.index);
  if (!post) throw new Error(`Post not found for index: ${params.index}`);
  const Content = getMDXComponent(post.body.code);
  const Designer = graduate[post.designer].name;
  return (
    <article className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <h3 className={styles.category}>{post.category[0].toUpperCase() + post.category.slice(1)}</h3>
          <p>Designed by {Designer} <span style={{ color: "var(--main)" }}>| {graduate[post.designer].major}디자인전공</span></p>

        </div>
        <div className={styles.markdown}>
          <Content components={{ ImageViewer, Book }} />
        </div>
        <Link href={`/indexpage/${post.designer}`} className={styles.footer}>
          <h3>{Designer} 학생의 더 많은 작품 보러가기</h3>
          <div style={{
            maskImage: "url('/icons/arrow_right.svg')",
            maskSize: "24px",
            WebkitMaskImage: "url('/icons/arrow_right.svg')",
            WebkitMaskSize: "24px",
            backgroundColor: "white",
            width: "24px",
            height: "24px"
          }} />
        </Link>
      </div>
    </article>
  )
}