import * as React from 'react';

export default function ScrollGuide() {
  const [scrollGuide, setScrollGuide] = React.useState(false);
  // const showOffset = document.getElementById("date") - 1000;

  setTimeout(() => {
    if (window.pageYOffset === 0){
      setScrollGuide(true);
    };
  }, 2000)

  window.addEventListener("scroll", () => {
    setScrollGuide(false);
    const baseScroll = window.pageYOffset;

    if (window.pageYOffset <= 6400) {
      setTimeout(() => {
        const currentScroll = window.pageYOffset;
        if (currentScroll === baseScroll) {
          setScrollGuide(true);
        }
      }, 1000)
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
          width: "calc(100% - 20px)"
        }}
      >스크롤을 아래로 내려주세요</div>
  )
}