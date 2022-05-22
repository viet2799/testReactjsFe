import React from "react";
import Home from "./Home";
import Inventory from "./Inventory";
import Product from "./Product";
import {Routes, Route, Link} from "react-router-dom";
import {Row, Col} from "antd";

const Header = () => {
    return (
        <div className="container">
            <div className="">
                <Row style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Col span={8} style={{padding: '20px 0px', fontSize: '20px', fontWeight: 'bold'}}>
                        <Link to='/' style={{color: '#262626',}}>Home</Link>
                    </Col>
                    <Col span={8} style={{padding: '20px 0px', fontSize: '20px', fontWeight: 'bold'}}>
                        <Link to='/inventory' style={{color: '#262626',}}>Inventory</Link>
                    </Col>
                    <Col span={8} style={{padding: '20px 0px', fontSize: '20px', fontWeight: 'bold'}}>
                        <Link to='/product' style={{color: '#262626',}}>Product</Link>
                    </Col>
                </Row>
            </div>

            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/inventory" element={<Inventory/>}/>
                <Route path="/product" element={<Product/>}/>
            </Routes>
        </div>
    )
}

export default Header;