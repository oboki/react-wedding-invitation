import * as React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
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
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <ImageList sx={{ width: "90%" }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}.164`}
                  srcSet={`${item.img}.164`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => {
                    setOpen(true);
                    setModalImg(item.img);
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>

          <Modal
            open={open}
            onClose={() => { setOpen(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Grid container justifyContent="center">
              <Box sx={style}>
                <img
                  width="100%"
                  src={`${modalImg}`}
                  srcSet={`${modalImg} 2x`}
                  alt="alt"
                  loading="lazy"
                  style={{
                    display: "block"
                  }}
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
                    color="primary"
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
    </Grid>
  );
}

const itemData = [
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/6.jpg',
    title: 'Breakfast',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/7.jpg',
    title: 'Burger',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/8.jpg',
    title: 'Camera',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/8.jpg',
    title: 'Coffee',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/10.jpg',
    title: 'Hats',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/11.jpg',
    title: 'Honey',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/12.jpg',
    title: 'Basketball',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/13.jpg',
    title: 'Fern',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/14.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/15.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/16.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/17.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/18.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/19.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/20.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/21.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/22.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/23.jpg',
    title: 'Mushrooms',
  },
];