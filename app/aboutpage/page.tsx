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
            <h2>박유선 교수</h2>
            <h3>비쥬얼 디자인 프로젝트</h3>
            <p>가시적인 요소와 비가시적인 요소들을 통합적으로 기획할 수 있는 디자이너의 역할을 경험함으로써 감성적 커뮤니케이션의 중요성을 인식하고 적용하는데 그 목적을 둔 디자인 프로젝트 결과물입니다.</p> 
            <h3>프로덕트 아이덴티티</h3>
            <p>디자인 상품으로서의 가치를 극대화시키며 그 핵심가치를 소비자와 소통하고 만족할 수 있도록 도와주는 감성적인 디자인 결과물입니다.</p>
          </div>
          <div className={styles.prof}>
            <h2>원호연 교수</h2>
            <h3>프로덕트 디자인</h3>
            <p>디자인을 통해 사용자 또는 소비자의 새로운 경험과 혁신을 탐구하고, 창의적 아이디어를 구체화하는 과정입니다. 제품 가치의 본질의 이해를 바탕으로 조형을 표현하고 시각화한 결과물입니다.</p>
            <h3>프로덕트 아이덴티티</h3>
            <p>제품이 제공하는 기능과 서비스를 영상을 통해 명확한 메시지를 전달 하기위해 사용성을 높이고 보다 나은 사용자 경험을 표현한 영상작업을 진행했습니다.</p>
          </div>
          <div className={styles.prof}>
            <h2>박태영 교수</h2>
            <h3>프로덕트 디자인</h3>
            <p>인간을 위한 디자인 및 사회적 가치를 실현함에 있어서 디자이너로서의 의미와 만족감을 얻을 수 있으며 또한 이를 위한 모든 행위와 작업들이 디자인컨버전스학과에서 시작되기를 기원합니다.</p>
          </div>
          <div className={styles.prof}>
            <h2>이동석 교수</h2>
            <h3>프로덕트 디자인</h3>
            <p>제품디자인 본질에 충실하며, 인간의 모든 환경에서 보다나은 삶을 위하여 다양한 문제를 찾아냅니다. 이를 논리적이고 자유롭게 해결할 수 있는 컨버전스 디자이너 창의역량을 길러나가기 위한 과정입니다.</p>
          </div>
          <div className={styles.prof}>
            <h2>이정윤 교수</h2>
            <h3>시각 정보 디자인</h3>
            <p></p>
            <h3>포장 디자인</h3>
            <p></p>
          </div>
          <div className={styles.prof}>
            <h2>김민정 외래교수</h2>
            <h3>광고 디자인</h3>
            <p>광고디자인 수업은 본질적인 메시지 정보를 창의적인 요소로 시각화시키는 과정을 통해 효율적인 비주얼커뮤니케이션의 표현법을 연구하는 것을 목표로 합니다. 이를 위해 커뮤니케이션이론과 더불어 정보 가공과 통합의 제작과정을 익힙니다.</p>
          </div>
          <div className={styles.prof}>
            <h2>김수희 외래교수</h2>
            <h3>멀티미디어 디자인</h3>
            <p>멀티미디어 디자인 수업은 창의적인 UI / UX 디자인을 하기위해 프로젝트의 목표설정부터 A to Z의 과정중에 맞닥뜨리는 다양한 이슈들을 독창적인 디자인적 해결방안으로 풀어가며 최적의 사용자 경험을 디자인하게 됩니다.</p>
          </div>
          <div className={styles.profdummy}/>
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