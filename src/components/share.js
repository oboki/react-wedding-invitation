import React, { Component } from 'react';

class KakaoShare extends Component {
    componentDidMount() {
        const reactBaseUrl = process.env.REACT_APP_BASE_URL;
        const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;
        window.Kakao.init(kakaoApiKey);

        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '영주❤동일 결혼합니다. 2022. 04. 02. (토) 오후 4시',
                description: ' #건대입구역 #스타시티아트웨딩홀',
                imageUrl: reactBaseUrl + '/share-image.png',
                link: {
                    mobileWebUrl: reactBaseUrl,
                    webUrl: reactBaseUrl
                }
            },
            buttons: [{
                title: '청첩장 보기',
                link: {
                    mobileWebUrl: reactBaseUrl,
                    webUrl: reactBaseUrl
                }
            }]
        });
    }

    onClickKakao = () => {
        window.open('https://sharer.kakao.com/talk/friends/picker/link')
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default KakaoShare;