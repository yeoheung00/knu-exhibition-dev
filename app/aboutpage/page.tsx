import styles from './about.module.css'
import Title from 'components/title'

export default function About() {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
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
              <iframe style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} src="https://www.youtube.com/embed/uC7m75gZkFU?si=3zDMyHUTfxHPR8gj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <Title title="지도교수님" />
        <div className={styles.profwrap}>
          <div className={styles.prof}>
            <h2>이동석 교수</h2>
          </div>
          <div className={styles.prof}>
            <h2>박태영 교수</h2>
          </div>
          <div className={styles.prof}>
            <h2>박유선 교수</h2>
          </div>
          <div className={styles.prof}>
            <h2>이정윤 교수</h2>
          </div>
          <div className={styles.prof}>
            <h2>원호연 교수</h2>
          </div>
          <div className={styles.prof}>
            <h2>김민정 외래교수</h2>
          </div>
          <div className={styles.prof}>
            <h2>김수희 외래교수</h2>
          </div>
          <div className={styles.profdummy} />
        </div>


        <Title title="졸업준비위원회 조직도" />
        <div className={styles.teamwrap}>
          <div className={styles.team}>
            <h2>졸업준비위원회</h2>
            <div className={styles.contents}>
              <p className={styles.partdes}>저희는 디자인 분야에서 새로운 도약을 이루고자 하는 학생들을 위해 모인 졸업준비위원회입니다. 저희의 목표는 졸업생들이 자신의 디자인 작품을 선보일 수 있는 기회를 제공하는 것뿐만 아니라, 그들의 역량과 노력을 인정받을 수 있는 기회를 마련하는 데 있습니다</p>
              <div className={styles.rolewrap}>
                <div><p className={styles.role}>위원장</p><p className={styles.member}>김아영<br />임승태</p></div>
                <div><p className={styles.role}>부위원장</p><p className={styles.member}>김민서<br />정한맘</p></div>
                <div><p className={styles.role}>총무</p><p className={styles.member}>정환효</p></div>
                <div><p className={styles.role}>서기</p><p className={styles.member}>지환준</p></div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <h2>도록</h2>
            <div className={styles.contents}>
              <p className={styles.partdes}>도록팀은 각자의 개성과 이야기가 담긴 졸업작품들을 책으로 엮어 기록하는 팀입니다. 24년도 졸업생들이 디자인컨버전스학과에서의 배움을 끝마치며 완성해낸 작품들을 엮어 도록을 제작하였습니다</p>
              <div className={styles.rolewrap}>
                <div><p className={styles.role}>팀장</p><p className={styles.member}>변지은</p></div>
                <div><p className={styles.role}>팀원</p><p className={styles.member}>민주혜<br />이다연<br />이정미<br />이지우<br />이해지</p></div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <h2>영상</h2>
            <div className={styles.contents}>
              <p className={styles.partdes}>우리의 전시를 미디어를 통해 보여주며 PIECE OF CAKE가 가지고 있는 이야기를 여러분들께 보다 빠르게 전달하고자 홍보영상을 제작하였습니다.</p>
              <div className={styles.rolewrap}>
                <div><p className={styles.role}>팀장</p><p className={styles.member}>김위성</p></div>
                <div><p className={styles.role}>팀원</p><p className={styles.member}>민경민<br />김도원</p></div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <h2>웹</h2>
            <div className={styles.contents}>
              <p className={styles.partdes}>이번 디자인컨버전스 졸업생들의 4년간의 노력의 결실을 보여주는 졸업전시회에 오고싶었으나 부득이하게 오지 못하신 분들을 위하여 온라인으로 졸업생들의 작품을 감상하실 수 있게 온라인 전시를 준비했습니다.</p>
              <div className={styles.rolewrap}>
                <div><p className={styles.role}>팀장</p><p className={styles.member}>민경원</p></div>
                <div><p className={styles.role}>팀원</p><p className={styles.member}>구진욱<br />김수지<br />최현정</p></div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <h2>인테리어</h2>
            <div className={styles.contents}>
              <p className={styles.partdes}>이번 졸업전시회에서는 1차적으로 과목별로 공간을 구분하여 관람객들의 전시 이해도를 높이고, 학생들이 자신의 작품을 개성있게 표현하도록 개별 부스를 통해 공간을 구성했습니다.</p>
              <div className={styles.rolewrap}>
                <div><p className={styles.role}>팀장</p><p className={styles.member}>천예은</p></div>
                <div><p className={styles.role}>팀원</p><p className={styles.member}>김다영<br />유지우<br />윤규찬<br />이은서<br />이현송<br />임가현<br />최은정</p></div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <h2>포스터</h2>
            <div className={styles.contents}>
              <p className={styles.partdes}>디자인컨버전스학과의 첫 졸업전시인 만큼 저희 졸업전시 주제인 'piece of cake'에 맞춰 졸업전시의 축하와 컨버전스의 결합 그리고 융합의 의미가 담긴 시각적인 그래픽'cake'를 넣은 포스터를 제작하였습니다.</p>
              <div className={styles.rolewrap}>
                <div><p className={styles.role}>팀장</p><p className={styles.member}>이승지</p></div>
                <div><p className={styles.role}>팀원</p><p className={styles.member}>윤원하<br />윤유진<br />이은혜<br />최유림</p></div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <h2>홍보</h2>
            <div className={styles.contents}>
              <p className={styles.partdes}>홍보팀은 SNS를통해 여러분들께 아름다운 순간들을 전달하고, 우리만의 아이덴티티가 들어간 굿즈들로 이번 졸업전시회를 더욱 특별하게 만들어냅니다.</p>
              <div className={styles.rolewrap}>
                <div><p className={styles.role}>팀장</p><p className={styles.member}>박우영</p></div>
                <div><p className={styles.role}>팀원</p><p className={styles.member}>강연우<br />김선주<br />박지훈<br />서경원<br />임연주<br />정보영</p></div>
              </div>
            </div>
          </div>
        </div>

        <Title title="오프라인 전시" />
        <div className={styles.offline}>
          <div className={styles.infowrap}>
            <div className={styles.info}>
              <h2>일시</h2>
              <p>2023. 12. 7. ~<br />2023. 12. 12.</p>
            </div>
            <div className={styles.info}>
              <h2>장소</h2>
              <p>충청남도 천안시 천안대로 1223-24<br />국립공주대학교 천안캠퍼스 10공학관 1층</p>
            </div>
          </div>
          <img className={styles.map} src='./map.svg' alt='map' />
        </div>
      </div>

    </main>
  )
}