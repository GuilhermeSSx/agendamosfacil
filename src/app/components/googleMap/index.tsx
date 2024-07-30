import React, { useEffect } from 'react';

export const Map = () => {
    useEffect(() => {
        const loadMapScript = () => {
            return new Promise<void>((resolve, reject) => {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,marker`;
                script.async = true;
                script.defer = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error('Failed to load Google Maps script'));
                document.head.appendChild(script);
            });
        };

        async function initMap(): Promise<void> {
            try {
                await loadMapScript();

                const position = { lat: -22.18032765730777, lng: -47.39527198489192 };

                const map = new google.maps.Map(
                    document.getElementById("map") as HTMLElement,
                    {
                        zoom: 16,
                        center: position,
                        mapId: "DEMO_MAP_ID", // Map ID is required for advanced markers.
                    }
                );

                const marker = new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: position,
                    title: "Barbearia Old Guard",
                });

                // Adiciona um evento de clique para redirecionar para o Google Maps
                map.addListener('click', () => {
                    const url = `https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`;
                    window.open(url, '_blank');
                });

            } catch (error) {
                console.error('Error initializing map:', error);
            }
        };

        initMap();
    }, []);

    return <div id="map" style={{ height: '60vh', width: '100%' }}></div>;
};

export default Map;
