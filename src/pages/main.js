import { Container, Grid } from '@mui/material';
import ResponsiveAppBar from '../components/appbar';
import Presenter from '../components/presenter';
import Location from '../components/location';
import DatePicker from '../components/date';
import Gallery from '../components/gallery';
import Accounts from '../components/accounts';
import ScrollGuide from '../components/scroll';

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
            <h3>2022년 4월 2일 (토요일)</h3>
            <h3>오후 4시</h3>
            <p>&nbsp;</p>
            <p>
              함께하는 10번째 봄입니다.<br/><br/>
              이제 연인이 아닌 부부로<br/>
              새로운 봄날을 맞이하려고 합니다.<br/><br/>
              매일 아름다울 순 없겠지만<br/>
              그마저 사랑으로 안으며 나아가겠습니다.<br/><br/>
              4월의 어느 멋진 날,<br/><br/>
              저희가 시작하는 자리에<br/>
              함께해주시면 감사하겠습니다.
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
            <h4>지하철</h4>
            <h5>2, 3호선 건대입구역</h5>
            <h4>버스</h4>
            <h5>간선</h5>
            <h6>240번, 721번</h6>
            <h5>지선</h5>
            <h6>2016번, 3217번, 3220번, 4212번</h6>
            <h5>직행</h5>
            <h6>102번, 3500번</h6>
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
              <h4>김동일</h4>
            </Grid>
            <Grid item xs={12}>
              010-0000-0000
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <h3>신부</h3>
              <h4>김영주</h4>
            </Grid>
            <Grid item xs={12}>
              010-0000-0000
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