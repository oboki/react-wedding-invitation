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
        const geocoder = new kakao.maps.services.Geocoder();
        const map = new kakao.maps.Map(mapContainer, mapOption); 

        geocoder.addressSearch('서울 광진구 능동로 110 스타시티영존 5층 아트홀', function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                const infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">스타시티아트홀예식장</div>'
                });

                infowindow.open(map, marker);
                marker.setMap(map);
            }
        }, []);
    }, []);

    return (
        <div
            id='map'
            className='map'
            style={{
                width: "70%",
                height: "30vh"
            }}
            // ref={mapContainer}
        ></div>
    )
}