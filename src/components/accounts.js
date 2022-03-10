import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function Accounts() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <h2>마음 전하실 곳</h2>
      코로나로 인해 직접 만나지 못해도<br/>
      축하 해주고싶은 마음을 위해<br/>
      계좌번호를 기재합니다.<br/><br/>
      어려운 시기에 축복해주셔서<br/>
      감사합니다.<br/>
      <Box pt={3}>
        <Button variant="outlined" color="primary"
        onClick={handleOpen}>계좌번호 확인하기</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container justifyContent="center">
            <Grid xs={12}>
              <Grid container justifyContent="center">
                <Box pb={0}>
                  <h3>계좌번호 확인하기</h3>
                </Box>
              </Grid>
            </Grid>
            <Grid md={6} xs={12}>
              <Grid container justifyContent="center">
                <h4>신랑측</h4>
                <Grid xs={12}>
                  <Box pb={3}>
                    <Grid container justifyContent="center">
                      <Grid xs={12}>
                        <Grid container justifyContent="center">
                          <CopyToClipboard text=
                            "농협 801054-52-051784 (김영진)" onCopy={() => alert(
                            "농협 801054-52-051784 (김영진)\n계좌번호가 복사되었습니다.")}><Button color="primary">
                             농협 801054-52-051784 (김영진)</Button>
                          </CopyToClipboard>
                        </Grid>
                      </Grid>
                      <Grid xs={12}>
                        <Grid container justifyContent="center">
                          <CopyToClipboard text=
                            "카카오뱅크 3333-12-5331152 (김동일)" onCopy={() => alert(
                            "카카오뱅크 3333-12-5331152 (김동일)\n계좌번호가 복사되었습니다.")}><Button color="primary">
                             카카오뱅크 3333-12-5331152 (김동일)</Button>
                          </CopyToClipboard>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={6} xs={12}>
              <Grid container justifyContent="center">
                <h4>신부측</h4>
                <Grid xs={12}>
                  <Box pb={3}>
                    <Grid container justifyContent="center">
                      <Grid xs={12}>
                        <Grid container justifyContent="center">
                          <CopyToClipboard text=
                            "우리은행 1002-536-987552 (이제임)" onCopy={() => alert(
                            "우리은행 1002-536-987552 (이제임)\n계좌번호가 복사되었습니다.")}><Button color="primary">
                             우리은행 1002-536-987552 (이제임)</Button>
                          </CopyToClipboard>
                        </Grid>
                      </Grid>
                      <Grid xs={12}>
                        <Grid container justifyContent="center">
                          <CopyToClipboard text=
                            "카카오뱅크 3333-07-6943900 (김영주)" onCopy={() => alert(
                            "카카오뱅크 3333-07-6943900 (김영주)\n계좌번호가 복사되었습니다.")}><Button color="primary">
                             카카오뱅크 3333-07-6943900 (김영주)</Button>
                          </CopyToClipboard>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Grid container justifyContent="center">
                <Box pt={4} style={{ textAlign: "center"}}>
                  <Button variant="outlined" color="primary"
                  onClick={handleClose}>닫기</Button>
                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Box>
      </Modal>
    </div>
  );
}