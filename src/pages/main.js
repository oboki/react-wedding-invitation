import { Container, Grid, Card } from '@mui/material';
import ResponsiveAppBar from '../components/appbar';
import Presenter from '../components/presenter';
import Location from '../components/location'
import DatePicker from '../components/date'
import Gallery from '../components/gallery'

function MainPage() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container maxWidth="sm"
      >
        <Grid container justifyContent="center">
          <Presenter />
          <Grid item xs={12}>
            <h2 id="date">2022년 4월 2일</h2>
            <h4>자리를 빛내주시길 바라는 문구</h4>
          </Grid>
          <Grid item xs={12}>
            <DatePicker />
          </Grid>
          <Grid item xs={12}>
            <h2 id="location">오시는 길</h2>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Location />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h3>스타시티 아트웨딩홀</h3>
            <h5>서울 광진구 능동로 110 스타시티 영존 5층 (02-430-8000)</h5>
            <h4>지하철</h4>
            <h5>2, 3호선 건대입구역</h5>
            <h4>버스</h4>
            <h5>간선: 240번, 721번</h5>
            <h5>지선: 2016번, 3217번, 3220번, 4212번</h5>
            <h5>직행: 102번, 3500번</h5>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Gallery />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h2 id="contact">연락처</h2>
          </Grid>
          <Grid item xs={12}>
            <h2>마음 전하실 곳</h2>
          </Grid>
          <Grid item xs={12}>
            <Card>
              &nbsp;<br/>
              &nbsp;<br/>
              &nbsp;<br/>
              &nbsp;<br/>
              &nbsp;<br/>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


export default MainPage;