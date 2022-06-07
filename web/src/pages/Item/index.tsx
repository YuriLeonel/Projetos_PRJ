
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Container, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';
import Swal from 'sweetalert2'

import { Link, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';



import './style.css';
import icon1 from '../../assets/pilha-seca.png';
import icon2 from '../../assets/oil.png';
import icon3 from '../../assets/seringa.png';
import icon4 from '../../assets/radioactive.png';
import icon5 from '../../assets/gabinete.png';
import icon6 from '../../assets/lampada.png';
import logo from '../../assets/logo.svg';


interface Item {
  id: number;
  title: string;
  image_url: string;
}



const Item = () => {

  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  
  useEffect(() => {
    api.get('items').then(response => {
        setItems(response.data);
    })
  }, []);
  
  
  // Quando clicar, buscar para consultar a descrição
  function clickItem(id: number){

    api.get('getDescItem/' + id).then(response => {
      
//      console.log(JSON.stringify(response.data));

      Swal.fire(response.data.desc.desc);
    })


    
  }

  
  return (
    <Container className="page-items bg-light border">




      <header>

      <img src={logo} alt="logo ecoleta" />

        <Link to="/" >
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      <CardTitle tag="h3" className="text-center" color="success">
        O que são itens de coleta?
      </CardTitle>







      <ul className="items-grid">
                            {items.map(item => (
                                <li
                                    key={item.id}
                                     onClick={() => clickItem(item.id)}
                                    className={selectedItems.includes(item.id) ? 'selected' : ''}
                                >
                                    <img src={item.image_url} alt={item.title} />
                                    <span>{item.title}</span>
                                </li>
                            ))}

                        </ul>

    </Container>
  )
}

export default Item;