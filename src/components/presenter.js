import * as React from "react";
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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollSnap from 'react-use-scroll-snap';

const FlexCenterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

const Presenter = () => {
  const theme = useTheme();
  const lessThanSM = useMediaQuery(theme.breakpoints.down('sm'));

  const FadeUp = batch(Fade(), Move(), Sticky());

  // const scrollRef = React.useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });

  return (
    <ScrollContainer>
      {/* <section ref={scrollRef}> */}

      {/* page 0 부터 시작해야하는데 첫 화면을 flex 로 설정하면서부터 문제가 생김
      불가피하게 page 1 부터 시작 */}
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
          <Animator animation={batch(Fade())}>
            <span style={{ fontSize: "17px" }}>
              <img style={{
                width: "980px",
                maxWidth: lessThanSM ? 'calc(100vw - 40px)': '90%',
                borderRadius: "15px"
              }} src="./img/4.jpg" />
              <Animator animation={MoveIn(40, -20)}><br/>10년 전 봄, 새싹이었던 우리는</Animator>
              <Animator animation={MoveIn(20, -10)}>다가오는 봄날 새로운 인생을 시작합니다.</Animator>
              <Animator animation={MoveIn(-20, 20)}>서로에게 기쁨을 주는 꽃이 되고</Animator>
              <Animator animation={MoveIn(-40, 10)}>힘들때는 의지할 수 있는 나무가 되겠습니다.</Animator>
            </span>
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={7}>
        <div style={FlexCenterStyle}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "17px" }}>
              <img style={{
                width: "980px",
                maxWidth: lessThanSM ? 'calc(100vw - 40px)': '90%',
                borderRadius: "15px"
              }} src="./img/5.jpg" />
              <Animator animation={MoveIn(-20, 20)}><br/>늘 봄 햇살처럼</Animator>
              <Animator animation={MoveIn(-15, 15)}>밝고 행복하게 살도록 노력하겠습니다.</Animator>
            </span>
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={8}>
        <div style={FlexCenterStyle}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "17px" }}>
              <div style={{
                width: "980px",
                maxWidth: lessThanSM ? 'calc(100vw - 40px)': '90%',
                borderRadius: "15px"
              }} />
              <Animator animation={MoveIn(0, 20)}>아름다운 꽃들과 아늑한 향기가</Animator>
              <Animator animation={MoveIn(0, 20)}>반겨주는 계절입니다.<br/><br/></Animator>
              <Animator animation={MoveIn(0, 20)}>어수선한 상황에 걱정이 많으시겠지만</Animator>
              <Animator animation={MoveIn(0, 20)}>저희를 축복해주시는 마음은 모두 같으니</Animator>
              <Animator animation={MoveIn(0, 20)}>참석에 대한 부담은 갖지 않으시길 바랍니다.<br/><br/></Animator>
              <Animator animation={MoveIn(0, 20)}>저희 결혼을 축하해 주시는</Animator>
              <Animator animation={MoveIn(0, 20)}>모든 분들께 감사드리며</Animator>
              <Animator animation={MoveIn(0, 20)}>예쁘게 잘 살겠습니다.</Animator>
            </span>
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

      {/* </section> */}
    </ScrollContainer>
  );
};

export default Presenter;