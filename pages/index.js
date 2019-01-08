import "./styles.scss"
import React from 'react';
import {Header} from '../components/header/header';
import {ProductDownloadSection} from '../components/product-download-section/product-download-section';

const Index = () => (
  <div className="example">
    <Header/>
    <ProductDownloadSection/>
  </div>
);

export default Index
