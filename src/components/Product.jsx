import React, {useEffect, useState} from "react";
import TableProduct from "./tableProduct";
import {DeleteOutlined, FormOutlined} from "@ant-design/icons";
import axios from "axios";

const Product = () => {
    const API_URL = "/api/tda/ims-be/products?";
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState();

    useEffect(() => {
        callData();
    }, [page, pageSize]);
    const callData = () => {
        axios.get(API_URL + 'page=' + page + '&' + 'pageSize=' + pageSize).then((reponse) => {
            setData(reponse.data?.data);
            setTotal(reponse.data?.meta?.total)
        })
    }
    // console.log(data);

    return (
        <div className="Product">
            <TableProduct data={data} total={total} loadData={() => callData()} onPageChangee={(page1) => {
                setPage(page1);
            }}
                          onPageSizeChangee={(pageSize1) => {
                              setPageSize(pageSize1);
                          }}
            />
        </div>
    )
}

export default Product;