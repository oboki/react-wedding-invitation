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
          <span style={{ fontSize: "50px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>오복 그리고 행복</Animator>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>우리 결혼합니다.</Animator>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>👏</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={1}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), Sticky())}>
                <div><img style={{ width: "980px", maxWidth: "90%" }} src="./img/1.jpg" /></div>
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={2}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "30px" }}>
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
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), Sticky())}>
                <div><img style={{ width: "980px", maxWidth: "90%" }} src="./img/2.jpg" /></div>
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={4}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "30px" }}>
            너와 함께한 시간 모두 눈부셨다. 👋🏻
            <Animator animation={MoveIn(2000, 0)}>날이 좋아서 🙋🏻‍♀️</Animator>
            <Animator animation={MoveIn(1000, 0)}>날이 좋지 않아서 ✋🏻</Animator>
            <Animator animation={MoveIn(-1000, 0)}>날이 적당해서 💛</Animator>
            <Animator animation={MoveIn(-2000, 0)}>모든 날이 좋았다. 💛</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={5}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), Sticky())}>
                <div><img style={{ width: "980px", maxWidth: "90%" }} src="./img/3.jpg" /></div>
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={6}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "20px" }}>서로의 이름을 부르는 것만으로도</span><br/>
          <span style={{ fontSize: "20px" }}>사랑의 깊이를 확인할 수 있는 두 사람이</span><br/>
          <span style={{ fontSize: "20px" }}>꽃과 나무처럼 걸어와서</span><br/>
          <span style={{ fontSize: "20px" }}>서로의 모든 것이 되기 위해</span><br/>
          <span style={{ fontSize: "20px" }}>오랜 기다림 끝에 혼례식을 치르는 날</span><br/>
          <span style={{ fontSize: "20px" }}>세상은 더욱 아름다워라.</span><br/>
        </Animator>
      </ScrollPage>

      <ScrollPage page={7}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), Sticky())}>
                <div><img style={{ width: "980px", maxWidth: "90%" }} src="./img/4.jpg" /></div>
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={8}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "30px" }}>
            추웠던 겨울, 햇살 가득 선물처럼 찾아온 소중한 사람과 함께 하루하루 최선을 다해 행복하게 살겠습니다.
          </span>
        </Animator>
      </ScrollPage>

      <ScrollPage page={9}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "40px", "textAlign": "center" }}>
            <Animator animation={batch(Fade(), Sticky())}>
                <div><img style={{ width: "980px", maxWidth: "90%" }} src="./img/5.jpg" /></div>
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={10}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "40px" }}>초대합니다.</span><br/>
          <span style={{ fontSize: "30px" }}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </span>
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