import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Accounts() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 570,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <h2>마음 전하실 곳</h2>
      코로나로 인해 직접 만나지 못해도<br/>
      축하 해주고싶은 마음을 위해 계좌번호를 기재합니다.<br/>
      어려운 시기에 축복해주셔서 감사합니다.<br/>
      <Box pt={3}>
        <Button variant="contained" color="secondary"
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
            <Grid xs={6}>
              <Grid container justifyContent="center">
                <h4>신랑측</h4>
                <Grid xs={12}>
                  <Box pr={2} pb={3}>
                    카카오뱅크 0000-00-0000000 (ㅇㅇㅇ)<br/>
                    카카오뱅크 0000-00-0000000 (ㅇㅇㅇ)
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={6}>
              <Grid container justifyContent="center">
                <h4>신부측</h4>
                <Grid xs={12}>
                  <Box pl={2} pb={3}>
                    카카오뱅크 0000-00-0000000 (ㅇㅇㅇ)<br/>
                    카카오뱅크 0000-00-0000000 (ㅇㅇㅇ)
                  </Box>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Box>
      </Modal>
    </div>
  );
}