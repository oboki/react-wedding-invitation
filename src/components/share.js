import React, { Component } from 'react';

class KakaoShare extends Component {
    componentDidMount() {
        const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;
        window.Kakao.init(kakaoApiKey);

        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '영주❤동일 결혼합니다. 2022. 04. 02. (토)',
                description: '#스타시티아트홀 #건대입구역',
                imageUrl: 'https://oboki.net/invitations/2022/04/02/img/1.jpg',
                link: {
                    mobileWebUrl: 'https://oboki.net/invitations/2022/04/02/',
                    webUrl: 'https://oboki.net/invitations/2022/04/02/'
                }
            },
            buttons: [{
                title: '청첩장 보기',
                link: {
                    mobileWebUrl: 'https://oboki.net/invitations/2022/04/02/',
                    webUrl: 'https://oboki.net/invitations/2022/04/02/'
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