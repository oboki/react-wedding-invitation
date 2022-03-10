import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import './gallery.scss'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const images = [
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/00.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/00.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/00.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/01.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/01.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/01.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/02.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/02.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/02.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/03.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/03.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/03.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/04.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/04.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/04.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/05.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/05.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/05.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/06.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/06.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/06.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/07.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/07.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/07.jpg',
  },
  // {
  //   original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/08.jpg',
  //   thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/08.jpg',
  //   fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/08.jpg',
  // },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/09.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/09.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/09.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/10.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/10.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/10.jpg',
  },
  // {
  //   original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/11.jpg',
  //   thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/11.jpg',
  //   fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/11.jpg',
  // },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/12.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/12.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/12.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/13.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/13.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/13.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/14.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/14.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/14.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/15.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/15.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/15.jpg',
  },
  // {
  //   original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/16.jpg',
  //   thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/16.jpg',
  //   fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/16.jpg',
  // },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/17.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/17.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/17.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/18.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/18.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/18.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/19.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/19.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/19.jpg',
  },
  // {
  //   original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/20.jpg',
  //   thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/20.jpg',
  //   fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/20.jpg',
  // },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/21.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/21.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/21.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/22.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/22.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/22.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/23.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/23.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/23.jpg',
  },
  {
    original:   'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/24.jpg',
    thumbnail:  'https://d186qanv6cd5k8.cloudfront.net/img/gallery/square/24.jpg',
    fullscreen:        'https://d186qanv6cd5k8.cloudfront.net/img/gallery/24.jpg',
  },
]

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

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideImage: '',
      open: false
    }

    this.setCurrentSlideImage = this.setCurrentSlideImage.bind(this);
    this.onSlideClick = this.onSlideClick.bind(this);
  }

  setOpen(val) {
    this.setState(() => {
      return {open: val}
    })
  }

  setCurrentSlideImage() {
    this.setState(() => {
      return {
        currentSlideImage: document.getElementsByClassName(
          "image-gallery-slide center"
        )[0].firstChild.src.replace(
          "/square", ""
        )
      }
    })
  }

  onSlideClick() {
    this.setCurrentSlideImage();
    this.setOpen(true);
  }

  render() {
    return (
      <div>
        <ImageGallery
          showNav={false}
          showPlayButton={false}
          showFullscreenButton={false}
          autoPlay={true}
          items={images}
          lazyLoad={true}
          onClick={this.onSlideClick}
        />

        <Modal
          open={this.state.open}
          onClose={() => { this.setOpen(false) }}
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
                src={`${this.state.currentSlideImage}`}
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
                    this.setOpen(false);
                  }}
                >
                  <DisabledByDefaultIcon />
                </IconButton>
              </Grid>
            </div>
          </Grid>
        </Modal>

      </div>
    )
  }
}

export default Gallery;