import { Container, Grid } from '@mui/material';
import ResponsiveAppBar from '../components/appbar';
import Presenter from '../components/presenter';
import Location from '../components/location';
import DatePicker from '../components/date';
import Gallery from '../components/gallery';
import Accounts from '../components/accounts';
import ScrollGuide from '../components/scroll';
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SmsIcon from '@mui/icons-material/Sms';
import { Parallax } from 'react-parallax';

function MainPage() {
  return (
    <div className="App">
      <ScrollGuide />
      <ResponsiveAppBar />
      <Container maxWidth="sm"
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Presenter />
          </Grid>
          <Grid item xs={12}>
            <h2 id="date">초대합니다.</h2>
            <h3>2022년 4월 2일 (토)</h3>
            <h3>오후 4시</h3>
            <p>&nbsp;</p>
            <p>
              평생을 같이하고 싶은 사람을 만났습니다.<br/><br/>
              서로 아껴주고 이해하며<br/>
              사랑하며 살고 싶습니다.<br/><br/>
              함께 축복해주시면<br/>
              더없는 기쁨으로 간직하겠습니다
            </p>
            <p>&nbsp;</p>
          </Grid>
          <Grid item xs={12}>
            <DatePicker />
          </Grid>
          <Grid item xs={12}>
            <h2 id="location">오시는 길</h2>
            <h3>스타시티아트웨딩홀</h3>
            <h5>서울 광진구 능동로 110 스타시티 영존 5층<br/>(02-430-8000)</h5>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Location />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h4 style={{marginBottom: "10px"}}>지하철</h4>
            <h6 style={{margin      : 0     }}>2, 3호선 건대입구역</h6>
            <h4 style={{marginBottom: 0     }}>버스</h4>
            <h6 style={{margin      : "10px"}}>240번, 721번</h6>
            <h6 style={{margin      : "10px"}}>2016번, 3217번, 3220번, 4212번</h6>
            <h6 style={{margin      : "10px"}}>102번, 3500번</h6>
          </Grid>
          <Grid item xs={12} pt={5}>
            <Gallery />
          </Grid>
          <Grid item xs={12} pt={5}>
            <h2 id="contact">연락처</h2>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <h3>신랑</h3>
              <h4 style={{display: "inline"}}>김영진 • 조미숙</h4><p style={{display: "inline"}}>&nbsp;의 아들</p>
              <h4>동일</h4>
            </Grid>
            <Grid item xs={12}>
              <IconButton href="tel:010-1234-5678" size="large" >
                <LocalPhoneIcon fontSize="inherit" color="primary"/>
              </IconButton>
              <IconButton href="sms:010-1234-5678" size="large" >
                <SmsIcon fontSize="inherit" color="primary"/>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <h3>신부</h3>
              <h4 style={{display: "inline"}}>김용배 • 이제임</h4><p style={{display: "inline"}}>&nbsp;의 딸</p>
              <h4>영주</h4>
            </Grid>
            <Grid item xs={12}>
              <IconButton href="tel:010-1234-5678" size="large">
                <LocalPhoneIcon fontSize="inherit" color="primary"/>
              </IconButton>
              <IconButton href="sms:010-1234-5678" size="large" >
                <SmsIcon fontSize="inherit" color="primary"/>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12} pt={7}>
            <Accounts />
          </Grid>
          <Grid item xs={12}>
            &nbsp;<br/>
            &nbsp;<br/>
            &nbsp;<br/>
            &nbsp;<br/>
            &nbsp;<br/>
            &nbsp;<br/>
            &nbsp;<br/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainPage;