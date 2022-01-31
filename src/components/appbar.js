import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KakaoShare from './share';
import './appbar.scss'

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="up" in={trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const ResponsiveAppBar = (props) => {
  return (
    <HideOnScroll {...props}>
      <AppBar
        position="fixed"
        sx={{
          top:'auto',
          bottom:0,
          left: "10px",
          width: "calc(100% - 20px)",
          marginBottom: "10px",
          opacity: "0.9"

        }}
        color="secondary"
      >
        <Container maxWidth="sm">
          <Toolbar disableGutters>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'flex' },
              justifyContent: 'center'
            }}>
              <Button
                key={'오복❤행복'}
                href={'#home'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >{'오복❤행복'}</Button>
              <Button
                key={'오시는 길'}
                href={'#location'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >{'오시는 길'}</Button>
              <Button
                key={'연락처'}
                href={'#contact'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >{'연락처'}</Button>
              {/* <Button
                style={{display: typeof navigator.share === "undefined" ? 'none' : 'block'}}
                key={'공유하기'}
                href={''}
                onClick={() => window.navigator.share({
                  title: '영주❤동일 2022. 04. 02. (토) 결혼합니다.',
                  text: '',
                  url: 'https://oboki.net/invitations/2022/04/02/',
                })}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >{'공유하기'}</Button> */}
              <Button
                id="kakao-link-btn"
                key={'공유하기'}
                href={''}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >{'공유하기'}</Button>
              <KakaoShare />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default ResponsiveAppBar;