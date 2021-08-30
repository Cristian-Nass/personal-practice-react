import React from "react";
import { Table } from "antd";
import { users } from "./data";

const CustomSearch = () => {
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "firstName",
    },
    {
      title: "Birth",
      dataIndex: "birthAt",
      key: "birthAt",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Adress",
      dataIndex: "adress",
      key: "adress",
    },
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
    },
  ];

  return <Table columns={columns} dataSource={users} />;
};

export default CustomSearch;
