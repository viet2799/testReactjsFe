import React, {useEffect, useState} from "react";
import {
    Table, Button, Modal, Checkbox, Pagination
} from "antd";
import "antd/dist/antd.css";
import {DeleteOutlined, FormOutlined} from "@ant-design/icons";
import {
    Label,
    Input,
} from "reactstrap";
import axios from "axios";


const TableProduct = (props) => {
    const URL_POST = "/api/tda/ims-be/product";
    const URL_PUT = "/api/tda/ims-be/product/update/";
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalEditVisible, setIsModalEditVisible] = useState(false);
    const [name, setName] = useState('');
    const [status, setStatus] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [selectId, setSelectID] = useState();

    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModalEdit = () => {
        setIsModalEditVisible(true);
    };

    const handleOk = () => {
        axios.post(URL_POST, {
            name: name
        }).then(
            () => {
                props.loadData();
                setIsModalVisible(false);
            }
        )
        console.log("onok");
        console.log(name)
    };

    function handleEditOk(id) {
        axios.put(URL_PUT + id, {
            name: name
        }).then(
            () => {
                props.loadData();
                setIsModalEditVisible(false);
                setID(null);
                setName('');
            }
        )
        console.log(id)
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const EditCancel = () => {
        setIsModalEditVisible(false);
    };
    const setID = (id) => {
        console.log(id);
        setSelectID(id);
    }

    useEffect(() => {
        console.log(isModalVisible)
    }, [isModalVisible])
    // const ModalAdd = () => {
    //     return (
    //         <Modal title="Add Product" visible={isModalVisible} onOk={()=>{handleOk()}} onCancel={()=>{setIsModalVisible(false);}} >
    //             <div className={{display: 'flex'}}>
    //                 <Label>Name</Label>
    //                 <Input type="text" name="name" placeholder="Enter user" onChange={(e) => setName(e.target.value)} value={name} defaultValue={name}/>
    //                 <div className={{padding: '20px 0'}}>
    //                     <label>Status</label>
    //                     <Checkbox label='Status' onChange={(e) => setStatus(!status)}/>
    //                 </div>
    //             </div>
    //         </Modal>
    //     )
    // }
    // const ModalEdit = () => {
    //     return (
    //         <Modal title="Prodcut Detail" visible={isModalEditVisible} onOk={handleEditOk()} onCancel={EditCancel}>
    //             <div className={{display: 'flex'}}>
    //                 <Label>Name</Label>
    //                 <Input type="text" name="name" placeholder="Enter user" value={name}
    //                        onChange={(e) => setName(e.target.value)}/>
    //                 <div className={{padding: '20px 0'}}>
    //                     <label>Status</label>
    //                     <Checkbox label='Status' onChange={(e) => setStatus(!status)}/>
    //                 </div>
    //             </div>
    //         </Modal>
    //     )
    // }
    // console.log(name);
    // console.log(props.data)
    return (
        <div style={{height: " calc(100vh- 60px)", padding: '0px 40px'}}>
            <label>
                <h2>
                    Product
                </h2>
            </label>
            <div className="" style={{float: 'left', padding: '20px 0'}}>
                <Button type="primary" onClick={() => {
                    setIsModalVisible(true);
                    setName('')
                }}>Thêm</Button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {props.data?.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item?.id}</td>
                            <td>{item?.name}</td>
                            <td><DeleteOutlined style={{color: 'red', cursor: 'pointer'}}/></td>
                            <td><FormOutlined style={{color: '#096dd9', cursor: 'pointer'}}
                                              onClick={() => {
                                                  setID(item?.id);
                                                  setName(item?.name);
                                                  showModalEdit();
                                              }}/></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Pagination
                total={props.total}
                showTotal={total => `Total ${props.total} items`}
                defaultPageSize={10}
                defaultCurrent={1}
                onChange={(page, pageSize) => {
                    setPage(page);
                    setPageSize(pageSize)
                    props.onPageChangee(page);
                    props.onPageSizeChangee(pageSize);
                    console.log(page, pageSize);
                }}
                showSizeChanger={true}
            />
            {/*<ModalAdd/>*/}
            <Modal title="Add Product" visible={isModalVisible} onOk={() => {
                handleOk()
            }} onCancel={() => {
                setIsModalVisible(false);
            }}>
                <div className={{display: 'flex'}}>
                    <Label>Name</Label>
                    <Input type="text" name="name" placeholder="Enter user" onChange={(e) => setName(e.target.value)}
                           value={name}/>
                    <div className={{padding: '20px 0'}}>
                        <label>Status</label>
                        <Checkbox label='Status' onChange={(e) => setStatus(!status)}/>
                    </div>
                </div>
            </Modal>
            {/*<ModalEdit/>*/}
            <Modal title="Prodcut Detail" visible={isModalEditVisible} onOk={() => {
                handleEditOk(selectId)
            }} onCancel={EditCancel}>
                <div className={{display: 'flex'}}>
                    <Label>Name</Label>
                    <Input type="text" name="name" placeholder="Enter user" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                    <div className={{padding: '20px 0'}}>
                        <label>Status</label>
                        <Checkbox label='Status' onChange={(e) => setStatus(!status)}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default TableProduct;