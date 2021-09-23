import XLSX from "xlsx";
import { users, columns } from "./data";
import { Table } from "antd";

const TableToExcel = () => {
  const downloadExcel = () => {
    console.log(users);
    const workSheet = XLSX.utils.json_to_sheet(users);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "users");
    // BUFFER
    let buff = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //BINARY STRING
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //DOWNLOAD
    XLSX.writeFile(workBook, "users.xlsx");
  };

  return (
    <>
      <h2>Table</h2>
      <Table columns={columns} dataSource={users} rowKey={"id"} />
      <div>
        <button onClick={downloadExcel}>Save Data</button>
      </div>
    </>
  );
};

export default TableToExcel;
