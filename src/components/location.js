/* global kakao */
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
                const coords = new kakao.maps.LatLng(data[0].y, data[0].x);
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                const infowindow = new kakao.maps.InfoWindow({
                    content: '<div onclick="window.open(\'https://map.kakao.com/?itemId=12976773\', \'_blank\');" style="width:150px;text-align:center;padding:6px 0; cursor: pointer">스타시티아트웨딩홀</div>'
                });

                infowindow.open(map, marker);
                kakao.maps.event.addListener(marker, 'click', function() {
                    window.open(
                        'https://map.kakao.com/?itemId=12976773',
                        '_blank'
                    );
                });

                marker.setMap(map);
            }
        }

    }, []);

    return (
        <div
            id='map'
            className='map'
            style={{
                width: "80%",
                height: "40vh",
                borderRadius: "15px"
            }}
        ></div>
    )
}