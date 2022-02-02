import { Container, Grid } from '@mui/material';
import ResponsiveAppBar from '../components/appbar';
import Presenter from '../components/presenter';
import Location from '../components/location'
import DatePicker from '../components/date'
import Gallery from '../components/gallery'
import Accounts from '../components/accounts'
import ScrollGuide from '../components/scroll'

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
            <h2 id="date">2022년 4월 2일</h2>
            <p>&nbsp;</p>
            <p>아름다운 꽃들과 아늑한 향기가 반겨주는 계절입니다.</p>
            <p>&nbsp;</p>
            <p>어수선한 상황에 걱정이 많으시겠지만</p>
            <p>저희를 축하해주시는 마음은 모두 같으니</p>
            <p>참석에 대한 부담은 갖지 않으시길 바랍니다.</p>
            <p>저희 결혼을 축하해주시는 모든 분들께 감사드리며</p>
            <p>예쁘게 잘 살겠습니다.</p>
            <p>&nbsp;</p>
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
            <h3>스타시티아트웨딩홀</h3>
            <h5>서울 광진구 능동로 110 스타시티 영존 5층 (02-430-8000)</h5>
            <h4>지하철</h4>
            <h5>2, 3호선 건대입구역</h5>
            <h4>버스</h4>
            <h5>간선: 240번, 721번</h5>
            <h5>지선: 2016번, 3217번, 3220번, 4212번</h5>
            <h5>직행: 102번, 3500번</h5>
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
            </Grid>
            <Grid item xs={12}>
              000-0000-0000
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <h3>신부</h3>
            </Grid>
            <Grid item xs={12}>
              000-0000-0000
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