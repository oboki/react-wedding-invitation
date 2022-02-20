import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import TouchAppIcon from '@mui/icons-material/TouchApp';

export default function ScrollGuide() {
  const [scrollGuide, setScrollGuide] = React.useState(false);
  const [posToScroll, setPosToScroll] = React.useState(document.documentElement.clientHeight);

  setTimeout(() => {
    if (window.pageYOffset === 0){
      setScrollGuide(true);

      setTimeout(() => {
        if (window.pageYOffset === 0) {
          window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: 'smooth'
          })
        }
      }, 2000)

    };
  }, 700)

  const handleScroll = () => {
    setScrollGuide(false);
    const offset = document.getElementById("date").offsetTop - document.documentElement.clientHeight + 200;
    const pres = document.getElementsByClassName('presenter');

    let posToScrollValue = 0;

    for(var i=0; i<pres.length; i++){
      if (i < pres.length - 1 && window.pageYOffset < pres[i+1].offsetTop) {
        posToScrollValue = pres[i+1].offsetTop;
        break;
      } else {
        posToScrollValue = window.scrollY + document.documentElement.clientHeight;
      }
      setPosToScroll(posToScrollValue);
    }

    const baseScroll = window.pageYOffset;

    if (window.pageYOffset <= offset) {
      setTimeout(() => {
        let currentScroll = window.pageYOffset;

        if (currentScroll === baseScroll) {
          setScrollGuide(true);

          let remainder = Number(3);
          // document.getElementById("countdown").innerHTML = remainder;

          const i = setInterval(() => {
            remainder -= Number(1);
            currentScroll = window.pageYOffset;

            if (currentScroll === baseScroll) {
              // document.getElementById("countdown").innerHTML = remainder;
            } else {
              clearInterval(i);
            }
          }, 1000)

          setTimeout(() => {
            currentScroll = window.pageYOffset;

            if (currentScroll === baseScroll) {
              window.scrollTo({
                top: posToScrollValue,
                behavior: 'smooth'
              })
            }
          }, 1500)
        }
      }, 700)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        visibility: scrollGuide ? 'visible': 'hidden',
        position: "fixed",
        right: "0px",
        bottom: "90px",
        left: "10px",
        width: "calc(100% - 20px)",
        zIndex: 9999,
        color: "rgba(0, 0, 0, 0.9)",
        textShadow: "rgb(0 0 0 / 10%) 0px 0px 1px",
        cursor: "pointer"
      }}
      onClick={() => window.scrollTo({
        top: posToScroll,
        behavior: 'smooth'
      })}
    >
      {/* <div id="countdown" /> */}
      <div>
        <IconButton
          component="span"
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => {}}
        >
          <TouchAppIcon />
          </IconButton>
      </div>
      <div>
        화면을 아래로 내려주세요
      </div>
    </div>
  )
}