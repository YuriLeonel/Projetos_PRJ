import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container, Row, Col, Card, CardTitle, Button, CardText } from 'reactstrap';



import './style.css';
import icon1 from '../../assets/pilha-seca.png';
import icon2 from '../../assets/oil.png';
import icon3 from '../../assets/seringa.png';
import icon4 from '../../assets/radioactive.png';
import icon5 from '../../assets/gabinete.png';
import icon6 from '../../assets/lampada.png';
import logo from '../../assets/logo.svg';


const Item = () => {
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


      <Row className="itemRow" >
        <Col sm="6">
          <Card className="card" body >
            <CardTitle tag="h5">
              <img className='img' src={icon1} alt="Pilhas" />
            </CardTitle>
            <CardText className='text'>
              Pilhas e baterias são sistemas que por meio de reações químicas geram energia elétrica. Embora possam ser compradas em diversos lugares, o seu descarte não pode ser feito da mesma forma. Isso porque contém metais pesados e tóxicos, como chumbo, cádmio e mercúrio
            </CardText>
            <Button color="success" className="btn-bottom">
              Descarte aqui
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="card " body>
            <CardTitle tag="h5">
              <img className='img' src={icon2} alt="Oléo" />
            </CardTitle>
            <CardText className='text'>
              Você sabe a importância do descarte de óleo correto? Por seus efeitos danosos à rede de esgoto e ao meio ambiente, o óleo de cozinha não deve jamais ser jogado na pia ou nos bueiros.
            </CardText>
            <Button color="success" className="btn-bottom">
              Descarte aqui
            </Button>
          </Card>
        </Col>
      </Row>


      <Row className="itemRow" >
        <Col sm="6">
          <Card className="card" body>
            <CardTitle tag="h5">
              <img className='img' src={icon3} alt="Seringa" />
            </CardTitle>
            <CardText className='text'>
              O descarte de agulhas e seringas, quando realizado de forma segura, ajuda a diminuir os impactos ambientais e ainda evita o risco de acidentes e transmissão de doenças para os profissionais de saúde, pacientes e catadores de resíduos.
            </CardText>
            <Button color="success" className="btn-bottom">
              Descarte aqui
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="card" body>
            <CardTitle tag="h5">
              <img className='img' src={icon4} alt="Radioativo" />
            </CardTitle>
            <CardText className='text'>
              Gerenciar materiais radioativos não é uma tarefa fácil. É necessário cuidados especiais, principalmente por se tratar de algo perigoso para a saúde das pessoas e o meio ambiente. E quando diz respeito ao descarte, então é preciso realizar os procedimentos de forma correta e de acordo com a lei.
            </CardText>
            <Button color="success" className="btn-bottom">
              Descarte aqui
            </Button>
          </Card>
        </Col>
      </Row>

      <Row className="itemRow">
        <Col sm="6">
          <Card className="card" body>
            <CardTitle tag="h5">
              <img className='img' src={icon5} alt="Móveis" />
            </CardTitle>
            <CardText className='text'>
              O descarte irregular de móveis usados é considerado crime ambiental, sujeito à multa de R$ 14 mil em caso de flagrante. Destinar móveis sem uso para reuso ou reciclagem é fácil e barato.
            </CardText>
            <Button color="success" className="btn-bottom">
              Descarte aqui
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="card" body>
            <CardTitle tag="h5">
              <img className='img' src={icon6} alt="Lâmpadas" />
            </CardTitle>
            <CardText className='text'>
              Quando quebradas, as lâmpadas liberam mercúrio, substância que pode gerar sérios problemas à saúde e ao meio ambiente. Sem contar, que quando despejado em lugares inapropriados como rios, ele volatiza e passa para a atmosfera, causando prováveis chuvas contaminadas.
            </CardText>
            <Button color="success" className="btn-bottom">
              Descarte aqui
            </Button>
          </Card>
        </Col>
      </Row>





    </Container>
  )
}

export default Item;