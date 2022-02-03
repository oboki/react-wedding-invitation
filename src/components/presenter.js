import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollContainerContext,
  ScrollPageContext,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import useScrollSnap from 'react-use-scroll-snap';

const FlexCenterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

const Presenter = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());

  const scrollRef = React.useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 70, delay: 20 });

  return (
    <ScrollContainer snap="mandatory">
      <section ref={scrollRef}>

      <ScrollPage page={0}>
        <div style={FlexCenterStyle} id="home">
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>영주 그리고 동일</Animator>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>우리 결혼합니다.</Animator>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>👰🏻‍♀🤵🏽‍♂</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={1}>
        <div style={FlexCenterStyle}>
          <Animator animation={batch(FadeIn(), ZoomIn())}>
            <img style={{ width: "980px", maxWidth: "90%", borderRadius: "15px" }} src="./img/1.jpg" />
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={2}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "20px" }}>
            <Animator animation={MoveIn(-2000, 0)}>"</Animator>
            <Animator animation={MoveIn(-1500, 0)}>10년 전 회기역 1번출구에서</Animator>
            <Animator animation={MoveIn(-1000, 0)}>그녀를 처음 본 순간 깨달았죠.</Animator>
            <Animator animation={MoveIn(-500, 0)}>이 여자와 결혼하겠구나.</Animator>
            <Animator animation={MoveIn(0, 0)}>"</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={3}>
        <div style={FlexCenterStyle}>
          <Animator animation={batch(FadeIn(), ZoomIn())}>
            <img style={{ width: "980px", maxWidth: "90%", borderRadius: "15px" }} src="./img/2.jpg" />
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={4}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "20px" }}>
            <Animator animation={MoveIn(1500, 0)}>신랑를</Animator>
            <Animator animation={MoveIn(1000, 0)}>소개하는</Animator>
            <Animator animation={MoveIn(500, 0)}>문구</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={5}>
        <div style={FlexCenterStyle}>
          <Animator animation={batch(FadeIn(), ZoomIn())}>
            <img style={{ width: "980px", maxWidth: "90%", borderRadius: "15px" }} src="./img/3.jpg" />
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={6}>
        <div style={FlexCenterStyle}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "15px" }}>봄에 처음 만났고</span><br/>
            <span style={{ fontSize: "15px" }}>다가오는 봄에</span><br/>
            <span style={{ fontSize: "15px" }}>앞으로를 약속 하는</span><br/>
            <span style={{ fontSize: "15px" }}>문구</span><br/>
          </Animator>
        </div>
      </ScrollPage>

     <ScrollPage page={7}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(FadeIn())}>
                <img style={{ width: "980px", maxWidth: "90%", borderRadius: "15px" }} src="./img/4.jpg" />
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={8}>
        <div style={FlexCenterStyle}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "15px" }}>남은 봄을 계속 함께 맞이하자는 표현 (봄-봄-봄)</span><br/>
          <span style={{ fontSize: "15px" }}>추웠던 겨울, 햇살 가득 선물처럼 찾아온 소중한 사람과 함께 하루하루 최선을 다해 행복하게 살겠습니다.</span>
        </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={9}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), Sticky())}>
                <img style={{ width: "980px", maxWidth: "90%", borderRadius: "15px" }} src="./img/5.jpg" />
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={10}>
        <div style={FlexCenterStyle}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "15px" }}>아름다운 꽃들과</span><br/>
          <span style={{ fontSize: "15px" }}>아늑한 향기가</span><br/>
          <span style={{ fontSize: "15px" }}>반겨주는 계절입니다.</span><br/><br/>
          <span style={{ fontSize: "15px" }}>어수선한 상황에 걱정이 많으시겠지만</span><br/>
          <span style={{ fontSize: "15px" }}>저희를 축복해주시는 마음은 모두 같으니</span><br/>
          <span style={{ fontSize: "15px" }}>참석에 대한 부담은 갖지 않으시길 바랍니다.</span><br/><br/>
          <span style={{ fontSize: "15px" }}>저희 결혼을 축하해 주시는</span><br/>
          <span style={{ fontSize: "15px" }}>모든 분들께 감사드리며</span><br/>
          <span style={{ fontSize: "15px" }}>예쁘게 잘 살겠습니다.</span><br/>
        </Animator>
        </div>
      </ScrollPage>

      {/* <ScrollPage page={11}>
        <div style={FlexCenterStyle}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "30px" }}>
            &nbsp;<br/>
          </span>
        </Animator>
        </div>
      </ScrollPage> */}

      </section>
    </ScrollContainer>
  );
};

export default Presenter;