import { Table } from "antd";
import { useState, useEffect } from "react";
import { getUsersAPI } from "../util/api";
const UserPage = () => {

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await getUsersAPI();

            //check response co data hay khong
            if (response) {
                setDataSource(response)
            }
        }
        fetchUser();
    }, [])
    console.log("check data", dataSource)
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
    ];


    return (
        <div style={{ padding: 50 }}>
            <Table bordered dataSource={dataSource} columns={columns}
                rowKey={"id"} />
        </div>
    )
}

export default UserPage