import * as React from "react";
import { Grid } from '@mui/material';
import { Parallax } from 'react-parallax';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const Presenter = () => {
  const theme = useTheme();
  const lessThanSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [currPres, setCurrPres] = React.useState(0);
  const [nextPres, setNextPres] = React.useState(1);
  const [heightNorm, setHeightNorm] = React.useState(0);
  const [viewHeight, setViewHeight] = React.useState(
    document.documentElement.clientHeight
  );
  const [basePresStyle, setBasePresStyle] = React.useState({
    fontSize: "17px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: document.documentElement.clientHeight,
  });


  const calcAnimation = () => {
    const pres = document.getElementsByClassName('presenter');

    let curr = 0;
    let next = 1;

    for(var i=0; i<pres.length; i++){
      if (
        i < pres.length - 1 &&
        window.pageYOffset < pres[i+1].offsetTop
      ) {
        curr = i;
        next = i + 1;
        break;
      } else {
        curr = pres.length - 1;
        next = pres.length;
      }
    }

    setCurrPres(curr);
    setNextPres(next);

    const normCondition = (window.pageYOffset - pres[curr].offsetTop) / viewHeight;
    const norm = normCondition >= 1 ? 1 : normCondition

    setHeightNorm(norm);

    // console.log(norm);
    // console.log(curr);
    // console.log(next);

    const basePresStyle = {
      fontSize: "20px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: viewHeight,
    };
    setBasePresStyle(basePresStyle)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", calcAnimation, { passive: true});

    return () => {
      window.removeEventListener('scroll', calcAnimation);
    };
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Grid container justifyContent="center">
        <div style={basePresStyle} id="home" className="presenter"
        >
          <Parallax
            bgImage="./img/caricature.png" strength={90}
            style={{
              width:"80%",
              paddingBottom: "35%",
              paddingTop: "35%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              borderRadius: "50px"
            }}
          >
          <div style={{
            width: "50%",
            paddingBottom: "35%",
            paddingTop: "35%",
          }}></div></Parallax>
          <p style={{
            fontSize: "35px",
          }}>
            영주 그리고 동일<br/>
            우리 결혼합니다.
          </p>

        </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <div style={basePresStyle} className="presenter"
          >
            <img style={{
              width: "480px",
              maxWidth: "90%",
              borderRadius: "15px",
              visibility: currPres === 1 | nextPres === 1 ? 'visible': 'hidden',
              opacity: nextPres === 1 ? heightNorm : 1,
              transform: nextPres === 1 ? `perspective(500px) translate3d(0, 0, ${(1-heightNorm)*200}px)` : "none",
            }} src="./img/intro/1.jpg" />
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <div style={basePresStyle} className="presenter"
          >
            <div style={{
              opacity: nextPres === 2 ? heightNorm : 1,
              transform: nextPres === 2 ? `translate(${(1-heightNorm)*200}px)` : "none",
              visibility: currPres === 2 | nextPres === 2 ? 'visible': 'hidden',
            }}>"</div>
            <div style={{
              opacity: nextPres === 2 ? heightNorm : 1,
              transform: nextPres === 2 ? `translate(${(1-heightNorm)*200}px)` : "none",
              visibility: currPres === 2 | nextPres === 2 ? 'visible': 'hidden',
            }}>회기역 1번출구에서</div>
            <div style={{
              opacity: nextPres === 2 ? heightNorm : 1,
              transform: nextPres === 2 ? `translate(${(1-heightNorm)*300}px)` : "none",
              visibility: currPres === 2 | nextPres === 2 ? 'visible': 'hidden',
            }}>그녀를 처음 본 순간 깨달았죠.</div>
            <div style={{
              opacity: nextPres === 2 ? heightNorm : 1,
              transform: nextPres === 2 ? `translate(${(1-heightNorm)*400}px)` : "none",
              visibility: currPres === 2 | nextPres === 2 ? 'visible': 'hidden',
            }}>이 여자와 결혼하겠구나.</div>
            <div style={{
              opacity: nextPres === 2 ? heightNorm : 1,
              transform: nextPres === 2 ? `translate(${(1-heightNorm)*400}px)` : "none",
              visibility: currPres === 2 | nextPres === 2 ? 'visible': 'hidden',
            }}>"</div>
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <div style={basePresStyle} className="presenter"
          >
            <img style={{
              width: "480px",
              maxWidth: "90%",
              borderRadius: "15px",
              visibility: currPres === 3 | nextPres === 3 ? 'visible': 'hidden',
              opacity: nextPres === 3 ? heightNorm : 1,
              transform: nextPres === 3 ? `perspective(500px) translate3d(0, 0, ${(1-heightNorm)*200}px)` : "none",
            }} src="./img/intro/2.jpg" />
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <div style={basePresStyle} className="presenter"
          >
            <div style={{
              opacity: nextPres === 4 ? heightNorm : 1,
              transform: nextPres === 4 ? `translate(${(1-heightNorm)*-200}px)` : "none",
              visibility: currPres === 4 | nextPres === 4 ? 'visible': 'hidden',
            }}>"</div>
            <div style={{
              opacity: nextPres === 4 ? heightNorm : 1,
              transform: nextPres === 4 ? `translate(${(1-heightNorm)*-200}px)` : "none",
              visibility: currPres === 4 | nextPres === 4 ? 'visible': 'hidden',
            }}>요근래 새치가 더 많아지더라구요.</div>
            <div style={{
              opacity: nextPres === 4 ? heightNorm : 1,
              transform: nextPres === 4 ? `translate(${(1-heightNorm)*-300}px)` : "none",
              visibility: currPres === 4 | nextPres === 4 ? 'visible': 'hidden',
            }}>내 남자가 더 늙기 전에</div>
            <div style={{
              opacity: nextPres === 4 ? heightNorm : 1,
              transform: nextPres === 4 ? `translate(${(1-heightNorm)*-400}px)` : "none",
              visibility: currPres === 4 | nextPres === 4 ? 'visible': 'hidden',
            }}>결혼해야겠다 싶었습니다.</div>
            <div style={{
              opacity: nextPres === 4 ? heightNorm : 1,
              transform: nextPres === 4 ? `translate(${(1-heightNorm)*-400}px)` : "none",
              visibility: currPres === 4 | nextPres === 4 ? 'visible': 'hidden',
            }}>"</div>
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <div style={basePresStyle} className="presenter"
          >
            <img style={{
              width: "480px",
              maxWidth: "90%",
              borderRadius: "15px",
              visibility: currPres === 5 | nextPres === 5 ? 'visible': 'hidden',
              opacity: nextPres === 5 ? heightNorm : 1,
              transform: nextPres === 5 ? `perspective(500px) translate3d(0, 0, ${(1-heightNorm)*200}px)` : "none",
            }} src="./img/intro/3.jpg" />
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <div style={basePresStyle} className="presenter"
          >
            <img style={{
              width: "480px",
              maxWidth: "90%",
              borderRadius: "15px",
              visibility: currPres === 6 | nextPres === 6 ? 'visible': 'hidden',
              opacity: nextPres === 6? heightNorm : 1,
            }} src="./img/intro/4.jpg" />
            <div style={{
              opacity: nextPres === 6 ? heightNorm : 1,
              transform: nextPres === 6 ? `translate(${(1-heightNorm)*-50}px, ${(1-heightNorm)*100}px)` : "none",
              visibility: currPres === 6 | nextPres === 6 ? 'visible': 'hidden',
            }}><br/>9년 전 봄, 새싹이었던 우리는</div>
            <div style={{
              opacity: nextPres === 6 ? heightNorm : 1,
              transform: nextPres === 6 ? `translate(${(1-heightNorm)*-50}px, ${(1-heightNorm)*70}px)` : "none",
              visibility: currPres === 6 | nextPres === 6 ? 'visible': 'hidden',
            }}>다가오는 봄날 새로운 인생을 시작합니다.</div>
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <div style={basePresStyle} className="presenter"
          >
            <img style={{
              width: "480px",
              maxWidth: "90%",
              borderRadius: "15px",
              visibility: currPres === 7 | nextPres === 7 ? 'visible': 'hidden',
              opacity: nextPres === 7 ? heightNorm : 1,
            }} src="./img/intro/5.jpg" />
            <div style={{
              opacity: nextPres === 7 ? heightNorm : 1,
              transform: nextPres === 7 ? `translate(${(1-heightNorm)*-50}px, ${(1-heightNorm)*100}px)` : "none",
              visibility: currPres === 7 | nextPres === 7 ? 'visible': 'hidden',
            }}><br/>서로에게 기쁨을 주는 꽃이 되고</div>
            <div style={{
              opacity: nextPres === 7 ? heightNorm : 1,
              transform: nextPres === 7 ? `translate(${(1-heightNorm)*-50}px, ${(1-heightNorm)*70}px)` : "none",
              visibility: currPres === 7 | nextPres === 7 ? 'visible': 'hidden',
            }}>힘들때는 의지할 수 있는 나무가 되겠습니다.</div>
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <div style={basePresStyle} className="presenter"
          >
            <img style={{
              width: "480px",
              maxWidth: "90%",
              borderRadius: "15px",
              visibility: currPres === 8 | nextPres === 8 ? 'visible': 'hidden',
              opacity: nextPres === 8 ? heightNorm : 1,
            }} src="./img/intro/6.jpg" />
            <div style={{
              opacity: nextPres === 8 ? heightNorm : 1,
              transform: nextPres === 8 ? `translate(${(1-heightNorm)*-50}px, ${(1-heightNorm)*100}px)` : "none",
              visibility: currPres === 8 | nextPres === 8 ? 'visible': 'hidden',
            }}><br/>늘 봄 햇살처럼</div>
            <div style={{
              opacity: nextPres === 8 ? heightNorm : 1,
              transform: nextPres === 8 ? `translate(${(1-heightNorm)*-50}px, ${(1-heightNorm)*70}px)` : "none",
              visibility: currPres === 8 | nextPres === 8 ? 'visible': 'hidden',
            }}>밝고 행복하게 살도록 노력하겠습니다.</div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Presenter;