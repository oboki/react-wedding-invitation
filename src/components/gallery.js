import * as React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState("");

  return (
    <Grid container justifyContent="center">
      <ImageList sx={{ width: "90%" }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                setOpen(true)
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
        <Box sx={style}>
          <img
            width="100%"
            src={`${modalImg}?&auto=format`}
            srcSet={`${modalImg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="alt"
            loading="lazy"
          />
        </Box>
      </Modal>
    </Grid>
  );
}

const itemData = [
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/1.jpg',
    title: 'Breakfast',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/2.jpg',
    title: 'Burger',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/3.jpg',
    title: 'Camera',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/4.jpg',
    title: 'Coffee',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/13.jpg',
    title: 'Hats',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/6.jpg',
    title: 'Honey',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/7.jpg',
    title: 'Basketball',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/8.jpg',
    title: 'Fern',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/9.jpg',
    title: 'Mushrooms',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/10.jpg',
    title: 'Tomato basil',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/11.jpg',
    title: 'Sea star',
  },
  {
    img: '	https://oboki.net/invitations/2022/04/02/img/12.jpg',
    title: 'Bike',
  },
];