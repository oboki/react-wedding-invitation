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

const FlexCenterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>

      <ScrollPage page={0}>
        <div style={FlexCenterStyle} id="home">
          <span style={{ fontSize: "45px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>오복 그리고 행복</Animator>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>우리 결혼합니다.</Animator>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>👰🤵</Animator>
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
            <Animator animation={MoveIn(2000, 0)}>서로의 이름을 부르는 것만으로도</Animator>
            <Animator animation={MoveIn(1500, 0)}>사랑의 깊이를 확인할 수 있는 두 사람이</Animator>
            <Animator animation={MoveIn(500, 0)}>꽃과 나무처럼 걸어와서</Animator>
            <Animator animation={MoveIn(-500, 0)}>서로의 모든 것이 되기 위해</Animator>
            <Animator animation={MoveIn(-1500, 0)}>오랜 기다림 끝에 혼례식을 치르는 날</Animator>
            <Animator animation={MoveIn(-2000, 0)}>세상은 더욱 아름다워라.</Animator>
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
          <span style={{ fontSize: "25px" }}>
            너와 함께한 시간 모두 눈부셨다.
            <Animator animation={MoveIn(1000, 0)}>날이 좋아서</Animator>
            <Animator animation={MoveIn(500, 0)}>날이 좋지 않아서</Animator>
            <Animator animation={MoveIn(-500, 0)}>날이 적당해서</Animator>
            <Animator animation={MoveIn(-1000, 0)}>모든 날이 좋았다.</Animator>
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
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "15px" }}>서로의 이름을 부르는 것만으로도</span><br/>
          <span style={{ fontSize: "15px" }}>사랑의 깊이를 확인할 수 있는 두 사람이</span><br/>
          <span style={{ fontSize: "15px" }}>꽃과 나무처럼 걸어와서</span><br/>
          <span style={{ fontSize: "15px" }}>서로의 모든 것이 되기 위해</span><br/>
          <span style={{ fontSize: "15px" }}>오랜 기다림 끝에 혼례식을 치르는 날</span><br/>
          <span style={{ fontSize: "15px" }}>세상은 더욱 아름다워라.</span><br/>
        </Animator>
      </ScrollPage>

      <ScrollPage page={7}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), Sticky())}>
                <img style={{ width: "980px", maxWidth: "90%", borderRadius: "15px" }} src="./img/4.jpg" />
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={8}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "20px" }}>
            추웠던 겨울, 햇살 가득 선물처럼 찾아온 소중한 사람과 함께 하루하루 최선을 다해 행복하게 살겠습니다.
          </span>
        </Animator>
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
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "15px" }}>살랑이는 바람결에</span><br/>
          <span style={{ fontSize: "15px" }}>사랑이 묻어나는 계절입니다.</span><br/><br/>
          <span style={{ fontSize: "15px" }}>어수선한 상황에 걱정이 많으시겠지만</span><br/>
          <span style={{ fontSize: "15px" }}>저희를 축복해주시는 마음은 모두 같으니</span><br/>
          <span style={{ fontSize: "15px" }}>참석에 대한 부담은 갖지 않으시길 바랍니다.</span><br/>
          <span style={{ fontSize: "15px" }}>저희 결혼을 축하해 주시는</span><br/>
          <span style={{ fontSize: "15px" }}>모든 분들께 감사드리며</span><br/>
          <span style={{ fontSize: "15px" }}>예쁘게 잘 살겠습니다.</span><br/>
        </Animator>
      </ScrollPage>

      <ScrollPage page={11}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "30px" }}>
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Presenter;