import React, { useState } from "react";
import { Table, Select } from "antd";
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
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
      title: "Birth At",
      dataIndex: "birthAt",
      key: "birthAt",
    },
  ];
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

  const [selectedItems, setSelectedItems] = useState("");
  const handleChange = (selectedItems: string) => {
    setSelectedItems(selectedItems);
    console.log(selectedItems);
  };

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <>
      <Table columns={columns} dataSource={users} rowKey={"id"} />
      <Select
        mode='multiple'
        placeholder='Inserted are removed'
        value={selectedItems}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        {filteredOptions.map((item) => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export default CustomSearch;
