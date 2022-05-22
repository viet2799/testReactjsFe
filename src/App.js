import React from 'react';
import './App.css';
import Header from './components/header';
import {Row, Col} from 'antd';
import ProductDetail from "./components/ProductDetail";


function App() {
    return (
        <div className="App">
            <Row gutter={15} style={{margin: 'auto'}}>
                <Col lg={20}>
                    <Header/>
                </Col>
            </Row>
        </div>
    );
}


export default App;
