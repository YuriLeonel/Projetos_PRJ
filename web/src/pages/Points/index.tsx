import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { Container } from 'reactstrap';
import './styles.css';

import logo from '../../assets/logo.svg';


const Points = () => {
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude]);
        })
    }, []);


    function handleMapCLick(event: LeafletMouseEvent) {
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng
        ])
        console.log("funcionando")
    };

    return (
        <Container className="bg-light border">
            <div id="page-create-point">
                <header>
                    <img src={logo} alt="logo ecoleta" />

                    <Link to="/" >
                        <FiArrowLeft />
                        Voltar para home
                    </Link>
                </header>

                <form>
                    <fieldset>
                        <legend>
                            <h2>Pontos de Coleta</h2>
                            <span>Selecione um ponto de coleta no mapa</span>
                        </legend>
                        <MapContainer center={initialPosition} zoom={15} onCLick={handleMapCLick} >
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={selectedPosition} />
                        </MapContainer>
                    </fieldset>
                </form>
            </div>
        </Container>
    );
}

export default Points