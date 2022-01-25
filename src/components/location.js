/* global kakao */
/**https://velog.io/@yeum0523/React%EB%A1%9C-Kakao-Map-%EB%9D%84%EC%9A%B0%EA%B8%B0 */
import React, { useEffect, useRef } from 'react';

const { kakao } = window;

export default function Location() {
    // const mapContainer = useRef(null);

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
            center: new kakao.maps.LatLng(
                37.5403819, 127.0704904
            ),
            level: 3
        };  
        const map = new kakao.maps.Map(mapContainer, mapOption); 

        const ps = new kakao.maps.services.Places();
        ps.keywordSearch('스타시티아트홀', placesSearchCB);
        //https://map.kakao.com/?itemId=12976773

        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                // 코드 작성
                console.log(data)
                const coords = new kakao.maps.LatLng(data[0].y, data[0].x);
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                const infowindow = new kakao.maps.InfoWindow({
                    content: '<div onclick="window.open(\'https://map.kakao.com/?itemId=12976773\', \'_blank\');" style="width:170px;text-align:center;padding:6px 0;">스타시티아트홀 예식장</div>'
                });

                infowindow.open(map, marker);
                marker.setMap(map);
            }
        }

    }, []);

    return (
        <div
            id='map'
            className='map'
            style={{
                width: "70%",
                height: "30vh",
                borderRadius: "15px"
            }}
            // ref={mapContainer}
        ></div>
    )
}