import styles from './about.module.css'
import Title from 'components/title'

export default function About() {
  return (
    <div className={styles.root}>
      <div className={styles.concept}>
        <div className={styles.poster}>
          <img src='./poster.png' alt='concept' style={{
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.4)'
          }} />
        </div>
        <div className={styles.des}>
          <div className={styles.text}>
            <div className={styles.title}>
              <Title title="PIECE OF CAKE" />
            </div>
            <p>
              작업물은 우리를 나타내는 개개인의 ‘조각(Piece)’입니다.
              이러한 우리의 ‘조각(Piece)’들을 모아 하나의 전시회(Cake)를 이뤘습니다.
              사람들은 특별한 날을 기릴 때 그 가운데에 케이크를 두고 기념합니다.
              이번 전시는, 각 개인의 대학과정의 막을 내리는 날로 기념적인 날이며, 앞으로 우리들의 새 출발을 응원하는 자리이기도 합니다.
              <br /><br />
              우리는 말합니다.
              <br />
              ‘케이크’의 ’조각‘으로 비유하며, 졸업전시가 축하의 중심 장소라고.
            </p>
          </div>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '0px',
            paddingBottom: '56.25%'
          }}>
            <iframe style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} src="https://www.youtube.com/embed/9xVt00F9cpQ?si=GoVe17EHSapW0Feg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <Title title="졸업준비위원회 조직도"/>
      <div className={styles.teamwrap}>
        <div className={styles.team}>
          <h3>졸업준비위원회</h3>
          <div className={styles.contents}>
            <p className={styles.partdes}>꽃이 천자만홍이 인간이 그것은 얼마나 낙원을 많이 눈이 사막이다. 얼마나 같이, 그들의 내는 하는 이상을 청춘이 같으며, 스며들어 사막이다. 이성은 속잎나고, 열락의 그들은 것이다.</p>
            <div className={styles.rolewrap}>
              <div><p className={styles.role}>위원장</p><p className={styles.member}>김아영(시각)<br />임승태(제품)</p></div>
              <div><p className={styles.role}>부위원장</p><p className={styles.member}>김민서(시각)<br />정한맘(제품)</p></div>
              <div><p className={styles.role}>총무</p><p className={styles.member}>정환효(시각)</p></div>
              <div><p className={styles.role}>서기</p><p className={styles.member}>지환준(제품)</p></div>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <h3>도록</h3>
          <div className={styles.contents}>
            <p className={styles.partdes}>도록팀은 각자의 개성과 이야기가 담긴 졸업작품들을 책으로 엮어 기록하는 팀입니다. 24년도 졸업생들이 디자인컨버전스학과에서의 배움을 끝마치며 완성해낸 작품들을 엮어 도록을 제작하였습니다</p>
            <div className={styles.rolewrap}>
              <div><p className={styles.role}>팀장</p><p className={styles.member}>변지은(시각)</p></div>
              <div><p className={styles.role}>팀원</p><p className={styles.member}>민주혜(시각)<br />이다연(시각)<br />이정미(제품)<br />이지우(시각)<br />이해지(시각)</p></div>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <h3>영상</h3>
          <div className={styles.contents}>
            <p className={styles.partdes}>우리의 전시를 미디어를 통해 보여주며 PIECE OF CAKE가 가지고 있는 이야기를 여러분들께 보다 빠르게 전달하고자 홍보영상을 제작하였습니다.</p>
            <div className={styles.rolewrap}>
              <div><p className={styles.role}>팀장</p><p className={styles.member}>김위성(시각)</p></div>
              <div><p className={styles.role}>팀원</p><p className={styles.member}>민경민(제품)<br />김도원(제품)</p></div>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <h3>웹</h3>
          <div className={styles.contents}>
            <p className={styles.partdes}>이번 디자인컨버전스 졸업생들의 4년간의 노력의 결실을 보여주는 졸업전시회에 오고싶었으나 부득이하게 오지 못하신 분들을 위하여 온라인으로 졸업생들의 작품을 감상하실 수 있게 온라인 전시를 준비했습니다.</p>
            <div className={styles.rolewrap}>
              <div><p className={styles.role}>팀장</p><p className={styles.member}>민경원(시각)</p></div>
              <div><p className={styles.role}>팀원</p><p className={styles.member}>구진욱(시각)<br />김수지(시각)<br />최현정(시각)</p></div>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <h3>인테리어</h3>
          <div className={styles.contents}>
            <p className={styles.partdes}>꽃이 천자만홍이 인간이 그것은 얼마나 낙원을 많이 눈이 사막이다. 얼마나 같이, 그들의 내는 하는 이상을 청춘이 같으며, 스며들어 사막이다. 이성은 속잎나고, 열락의 그들은 것이다.</p>
            <div className={styles.rolewrap}>
              <div><p className={styles.role}>팀장</p><p className={styles.member}>천예은(제품)</p></div>
              <div><p className={styles.role}>팀원</p><p className={styles.member}>김다영(시각)<br />유지우(시각)<br />윤규찬(시각)<br />이은서(제품)<br />이현송(제품)<br />임가현(제품)<br />최은정(시각)</p></div>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <h3>포스터</h3>
          <div className={styles.contents}>
            <p className={styles.partdes}>디자인컨버전스학과의 첫 졸업전시인 만큼 저희 졸업전시 주제인 'piece of cake'에 맞춰 졸업전시의 축하와 컨버전스의 결합 그리고 융합의 의미가 담긴 시각적인 그래픽'cake'를 넣은 포스터를 제작하였습니다.</p>
            <div className={styles.rolewrap}>
              <div><p className={styles.role}>팀장</p><p className={styles.member}>이승지(시각)</p></div>
              <div><p className={styles.role}>팀원</p><p className={styles.member}>윤원하(제품)<br />윤유진(시각)<br />이은혜(시각)<br />최유림(시각)</p></div>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <h3>홍보</h3>
          <div className={styles.contents}>
            <p className={styles.partdes}>꽃이 천자만홍이 인간이 그것은 얼마나 낙원을 많이 눈이 사막이다. 얼마나 같이, 그들의 내는 하는 이상을 청춘이 같으며, 스며들어 사막이다. 이성은 속잎나고, 열락의 그들은 것이다.</p>
            <div className={styles.rolewrap}>
              <div><p className={styles.role}>팀장</p><p className={styles.member}>박우영(시각)</p></div>
              <div><p className={styles.role}>팀원</p><p className={styles.member}>강연우(제품)<br />김선주(제품)<br />박지훈(제품)<br />서경원(제품)<br />임연주(제품)<br />정보영(제품)</p></div>
            </div>
          </div>
        </div>
      </div>

      <Title title="오프라인 전시" />
      <div className={styles.offline}>
        <div className={styles.infowrap}>
          <div className={styles.info}>
            <h3>일시</h3>
            <p>2023. 12. 7. ~<br />2023. 12. 11.</p>
          </div>
          <div className={styles.info}>
            <h3>장소</h3>
            <p>충청남도 천안시 천안대로 1223-24<br />국립공주대학교 천안캠퍼스 10공학관 1층</p>
          </div>
        </div>
        <img className={styles.map} src='./map.svg' alt='map' />
      </div>
    </div>
  )
}