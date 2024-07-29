import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Definição do estilo do contêiner do mapa
const containerStyle = {
    width: '100%',
    height: '100%'
};

// Coordenadas fornecidas
const coordinates: google.maps.LatLngLiteral = {
    lat: -22.180227406381483,
    lng: -47.39529326201308
};

// Componente do mapa que recebe as coordenadas como centro
const Map: React.FC<{ center: google.maps.LatLngLiteral }> = ({ center }) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        return <div>Erro: A chave da API do Google Maps não está definida.</div>;
    }

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16} // Ajuste o nível de zoom para uma visualização mais próxima
            >
                <Marker position={center} /> {/* Adiciona um marcador no centro */}
            </GoogleMap>
        </LoadScript>
    );
};

// Componente principal que exibe o mapa com base nas coordenadas fornecidas
const MapWithCoordinates: React.FC = () => {
    return <Map center={coordinates} />;
};

export default MapWithCoordinates;
