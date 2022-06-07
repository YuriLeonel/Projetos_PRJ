import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Container } from 'reactstrap';
import api from "../../services/api";

import './styles.css';

import logo from '../../assets/logo.svg';
import { json } from "stream/consumers";

interface Item {
    id: number;
    title: string;
    image_url: string;
  }
  
  interface Point {
    id: number;
    name: string;
    image: string;
    latitude: number;
    longitude: number;
    image_url: string;
  }
  
  interface Params {
    uf: string;
    city: string;
  }

  const markerIcon = new L.Icon({
      iconUrl: require("../../assets/lampada.png"),
      iconSize: [30, 40],
  })


const Points = () => {


    const [items, setItems] = useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [points, setPoints] = useState<Point[]>([]);


    useEffect(() => {
        api.get("/items").then((response) => {
            /* console.log("Items:" + JSON.stringify(response.data)); */
          setItems(response.data);
        });
      }, []);

    
      useEffect(() => {
        api
          .get("/points", {
            params: {
              //city: routeParams.city,
              //uf: routeParams.uf,

              city: "São Carlos",
              uf: "SP",

              items: "1,2,3,4,5",
            },
          })
          .then((response) => {
              /* console.log("response" + JSON.stringify(response.data)); */
            setPoints(response.data);
          });
      }, [selectedItems]);



      function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.includes(id);
        if (alreadySelected) {
          setSelectedItems([
            ...selectedItems.filter((idFiltered) => idFiltered !== id),
          ]);
        } else {
          setSelectedItems([...selectedItems, id]);
        }
      }


    const [initialPosition, setInitialPosition] = useState<[number, number]>([-22.017867, -47.890855]);

    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

    function LocationMarker() {
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setInitialPosition([e.latlng.lat, e.latlng.lng])
            setSelectedPosition([e.latlng.lat, e.latlng.lng])
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return selectedPosition === null ? null : (
          <Marker position={selectedPosition}/>
        )
      }

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
                        <MapContainer center={initialPosition} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {points.map((ponto, index) => { 

                            let objteste = Object.values(ponto);

                            let objLatitude = objteste[index].latitude;
                            let objLongitude = objteste[index].longitude;

                            return <Marker position={[objLatitude, objLongitude]} key={index} icon={markerIcon}></Marker>;
                            })
                            }
                                                        
                            {/* <Marker position={[-22.0156149,-47.8995643]}></Marker> */}
                            {/* <LocationMarker /> */}
                        
                            {/* <Marker position={[-22.0156149, -47.8995222]} icon={markerIcon}></Marker>
                            <Marker position={[-26.0157689, -49.8995661]} icon={markerIcon}></Marker>
                            <Marker position={[-22.0153446, -49.8925643]} icon={markerIcon}></Marker> */}


                        </MapContainer>
                    </fieldset>
                </form>
            </div>
        </Container>
    );
}

export default Points