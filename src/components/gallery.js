import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '720px',
  maxWidth: '90vw',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  padding: "0"
};

export default function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState("");

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} pt={5}>
        <h2>갤러리</h2>
        <p>화살표를 눌러 더 많은 사진을 확인해보세요.</p>
      </Grid>
      <Grid item xs={12} pt={1}>
        <AutoplaySlider
          play={true}
          bullets={false}
          mobileTouch={false}
          style={{
            "--slider-height-percentage": "100%",
            "--organic-arrow-thickness": "5px",
            "--organic-arrow-border-radius": "0px",
            "--organic-arrow-height": "20px",
            "--organic-arrow-color": "#1d2130",
            "--control-button-width": "20%",
            "--loader-bar-color": "#1d2130",

          }}
          interval={1500}
        >
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/1.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/1.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/2.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/2.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/3.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/3.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/4.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/4.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/5.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/5.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/6.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/6.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/7.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/7.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/8.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/8.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/9.jpg"  onClick={() => { setOpen(true); setModalImg('./img/gallery/9.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/10.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/10.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/11.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/11.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/12.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/12.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/13.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/13.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/14.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/14.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/15.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/15.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/16.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/16.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/17.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/17.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/18.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/18.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/19.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/19.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/20.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/20.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/21.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/21.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/22.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/22.jpg'); }}/>
          <div style={{height: "100%", borderRadius: "15px"}} data-src="./img/gallery/23.jpg" onClick={() => { setOpen(true); setModalImg('./img/gallery/23.jpg'); }}/>
        </AutoplaySlider>
          <Modal
            open={open}
            onClose={() => { setOpen(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Grid container justifyContent="center">
              <Box sx={style}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                  src={`${modalImg}`}
                  srcSet={`${modalImg} 2x`}
                  alt="alt"
                  loading="lazy"
                />
              </Box>
              <div style={{
                position: "fixed",
                right: "10px",
                top: "10px",
              }}>
                <Grid container justifyContent="center">
                  <IconButton
                    component="span"
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <DisabledByDefaultIcon />
                  </IconButton>
                </Grid>
              </div>
            </Grid>
          </Modal>
      </Grid>
    </Grid>
  )
}