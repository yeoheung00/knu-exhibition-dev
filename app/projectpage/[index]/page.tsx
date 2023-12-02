import styles from './page.module.css'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import ImageViewer from '@/components/mdx/ImageViewer'
import Book from '@/components/mdx/Book'
import Video from '@/components/mdx/Video'
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
  const images = new Array(post.image).fill(0).map((item, idx) => (idx + 1).toString().padStart(2, '0') + '.jpg');
  console.log(post._id)
  console.log(images);
  type typeC = {
    [k: string]: string
  }
  const category: typeC = {
    'package': '패키지디자인',
    'editorial': '시각정보디자인',
    'multimedia': '멀티미디어디자인',
    'visualproject': '비쥬얼디자인프로젝트',
    'advertisement': '광고디자인',
    'product_pi': '제품 PI/영상',
    'product_main': '제품 메인'
  }
  return (
    <article className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <h3 className={styles.category}>{category[post.category]}</h3>
          <p>Designed by {Designer}</p>

        </div>
        <div className={styles.markdown}>
          <Content components={{ ImageViewer, Book, Video }} />
          <div className={styles.images}>
            {
              images.map((item, idx) => (
                <img key={idx} src={`/profile/${post.designer}/${post._id.split('.')[0]}/${item}`} alt={item} />
              ))
            }
          </div>
        </div>
        <Link href={`/profilepage/${post.designer}`} className={styles.footer}>
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