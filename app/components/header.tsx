import Link from "next/link";

export default function Header(){
  return(
    <div>
      <h1>국립공주대학교 디자인컨버전스학과 졸업전시</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </div>
  )
}