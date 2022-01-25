import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KakaoShare from './share';

import './appbar.scss'


const ResponsiveAppBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{top:'auto', bottom:0}}
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
  );
};

export default ResponsiveAppBar;