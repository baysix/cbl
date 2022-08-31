import React, { useState, useEffect } from "react";
import "./style.css";
import { newsDetail } from "../../lib/api/news";
import MediaMidleware from "../media";

import { ToastContainer, toast } from "react-toastify";

const SubContents = (props) => {
  const { itemId } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  console.log("subContents", itemId);

  const [itemProps, setItemProps] = useState({
    newsId: "중앙일보-사회-2022.08.17.11:34",
    title: "[속보] 검찰, '피살 공무원 월북 번복' 해경청 압수수색",
    post: '<div class="article_body fs3" id="article_body" itemprop="articleBody"> \n <div class="ab_photo photo_center " style="width: 480px;">\n  <div class="image">\n   <img width="480" data-src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202208/30/c2da20b5-e539-4c0d-8bbf-c158d5356c9c.jpg" src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202208/30/c2da20b5-e539-4c0d-8bbf-c158d5356c9c.jpg/_ir50_/" alt="그래픽=김주원 기자 zoom@joongang.co.kr" data-type="article" />\n   <span class="mask"></span>\n  </div>\n  <p class="caption">그래픽=김주원 기자 zoom@joongang.co.kr</p>\n </div> \n <p> 아파트 16층에서 떨어져 죽은 고양이가 학대를 당한 것으로 인정돼 주인에게 벌금 300만원이 선고됐다.</p> \n <p> 30일 법원에 따르면 서울중앙지법 형사4단독 신혁재 부장판사는 A씨(42&middot;여)의 동물보호법 위반, 폭행 혐의를 유죄로 인정해 벌금 300만원을 선고했다고 밝혔다.</p> \n <p> A씨는 2020년 7월 14일 오후 7시쯤 서울 관악구의 아파트 16층 복도에서 난간 밖으로 고양이를 던졌다. 한 초등학생이 이를 지적하자 폭행까지 저질러 벌금 100만원의 약식명령이 청구됐다.</p> \n <p> 16층에서 떨어진 고양이는 그대로 숨졌다.&nbsp;A씨는 사건이 일어나기 불과 5시간 전인 당일 오후 2시 이 고양이를 분양받은 것으로 드러났다.</p> \n <p> 약식 재판부는 A씨의 혐의를 유죄로 인정해 검찰이 청구한 것보다 더 높은 벌금 300만원의 약식명령을 내렸다. A씨는 이에 불복해 정식 재판을 청구했다.</p> \n <p> 재판에서 A씨는 고양이가 아파트 복도 난간에 올라가 자신이 잡으려고 손을 뻗은 순간 고양이가 뛰어내렸다며 무죄를 주장했다.</p> \n <p> 그러나 목격자들은 사건 당시 고양이의 머리가 A씨 쪽을 향하고 있어 스스로 뛰어내리는 것으로 보이지 않았고, 고양이가 직선이 아닌 포물선을 그리며 떨어졌다고 진술했다.</p> \n <p> 한 목격자는 고양이가 떨어진 직후 A씨가 소리도 지르지 않았고 곧장 뒤돌아 사라졌다고 말했다.</p> \n <p> 재판부는 &quot;피고인이 난간 밖으로 고양이를 던진 것으로 보는 것이 맞고 각 범행에 발령한 약식명령 벌금액이 과하다고 보이지 않는다&quot;고 판단했다.</p> \n <p> A씨는 수사 과정에서 자신이 정신 질환을 앓는다고 말했으나 재판부는 &quot;이 사건 범행 당시 피고인의 행동, 범행 전후 정황에 비춰보면 심신 미약 상태에 있었다고 보기 어렵다&quot;고 밝혔다.</p> \n <div class="ab_related_article">\n  <div class="hd">\n   <h2><strong>이 기사 어때요</strong></h2>\n  </div>\n  <div class="bd">\n   <ul class="text_type">\n    <li><h2 class="headline"><a href="https://www.joongang.co.kr/article/25098093" target="_self" data-evnt-ctg="area:중앙|아티클" data-evnt-act="move:관련기사_텍스트" data-evnt-lbl="2718590_1">“난 촉법소년” 난동부리며 편의점 점주 폭행 10대 남학생 송치</a></h2></li>\n    <li><h2 class="headline"><a href="https://www.joongang.co.kr/article/25098067" target="_self" data-evnt-ctg="area:중앙|아티클" data-evnt-act="move:관련기사_텍스트" data-evnt-lbl="2718590_2">음주 걸린 여성 &quot;안취했다&quot; 혼신의 발레…그걸 본 경찰 한마디</a></h2></li>\n   </ul>\n  </div>\n </div> \n <div class="ab_byline">\n  현예슬 기자 hyeon.yeseul@joongang.co.kr\n </div> \n</div>',
    source: "중앙일보",
    category: "사회",
    newsDate: "2022.08.17 11:34",
    link: "https://www.joongang.co.kr/article/25098093",
    imgUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202208/30/971fb860-d308-47f9-bdc9-de5d5a665b2f.jpg/_ir_205x115_/",
    regDate: "2022-08-30",
  });

  /**
   * @param itemId
   * news 데이터 받아오는 api 함수
   */
  const fetchNewsItem = async () => {
    setIsLoaded(true);
    await newsDetail(itemId)
      .then((response) => {
        const { data } = response.data;
        setItemProps(data);
      })
      .catch((error) => {
        // setTotalStatus('error');
        // error 코드 작성
        toast.error("news Api 에러입니다.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
      })
      .finally(() => {});
    setIsLoaded(false);
  };

  useEffect(() => {
    fetchNewsItem();
  }, []);

  return (
    <div id="subContent">
      <section id="subContent_inner">
        <article className="contentsBox">
          <div className="leftBox">
            <MediaMidleware setItemProps={itemProps} />
          </div>
          <div className="rightBox"></div>
        </article>
      </section>
    </div>
  );
};

export default SubContents;
