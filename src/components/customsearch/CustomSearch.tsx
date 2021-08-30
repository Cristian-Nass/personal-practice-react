import React, { useState } from "react";
import { Table, Select } from "antd";
import { users } from "../data";
import SelectedSearchItem from "./SelectedSearchItem";

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
  // const keys = Object.keys(users[0]);

  const usersKey = users
    .reduce((initialized: string[], next) => {
      const keys = Object.keys(next);
      return initialized.concat(keys);
    }, [])
    .reduce((initialized: string[], next) => {
      if (!initialized.includes(next)) {
        initialized.push(next);
      }
      return initialized;
    }, []);

  const OPTIONS = usersKey;

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const handleChange = (list: string[]) => {
    setSelectedItems(list);
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
      {selectedItems.length >= 1 && (
        <SelectedSearchItem selectedItems={selectedItems} />
      )}
    </>
  );
};

export default CustomSearch;
