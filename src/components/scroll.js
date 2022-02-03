import * as React from 'react';

export default function ScrollGuide() {
  const [scrollGuide, setScrollGuide] = React.useState(false);

  setTimeout(() => {
    if (window.pageYOffset === 0){
      setScrollGuide(true);
    };
  }, 3000)

  window.addEventListener("scroll", () => {
    setScrollGuide(false);
    const baseScroll = window.pageYOffset;
    const offset = document.getElementById("date").offsetTop - document.documentElement.clientHeight;

    if (window.pageYOffset <= offset) {
      setTimeout(() => {
        const currentScroll = window.pageYOffset;

        if (currentScroll === baseScroll) {
          setScrollGuide(true);
        }
      }, 2000)
    }
  }, []);

  return (
    <div
      style={{
        visibility: scrollGuide ? 'visible': 'hidden',
        position: "fixed",
        right: "0px",
        bottom: "100px",
        left: "10px",
        width: "calc(100% - 20px)",
        zIndex: 9999,
        color: "rgba(0, 0, 0, 0.9)",
        textShadow: "rgb(0 0 0 / 10%) 0px 0px 1px"
      }}
    >화면을 아래로 내려주세요</div>
  )
}