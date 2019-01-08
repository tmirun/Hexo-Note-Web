import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

import './product-download-section.scss';

export const ProductDownloadSection = () => (
  <section className='product-download-section'>
    <Container>
      <Row>
        <Col md={{size: 4, offset: 8}}>
          <div> Hexo Note </div>
          <div> Version </div>
          <div> <Button> DOWNLOAD </Button> </div>
        </Col>
      </Row>
    </Container>
  </section>
);
