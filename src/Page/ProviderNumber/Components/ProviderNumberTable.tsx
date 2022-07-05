import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";

interface DataType {
  key: string;
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  active: boolean;
}

const columns: ColumnsType<DataType> = [
  { title: "STT", key: "ordinalNumbers", dataIndex: "ordinalNumbers" },
  {
    title: "Tên đăng nhập",
    key: "username",
    dataIndex: "username",
  },

  {
    title: "Tên khách hàng",
    key: "name",
    dataIndex: "name",
  },

  {
    title: "Tên dịch vụ",
    key: "servicesName",
    dataIndex: "servicesName",
  },
  { title: "Thời gian cấp" },
  { title: "Hạn sử dụng" },

  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },

  { title: "Nguồn cấp", key: "sourceProvider", dataIndex: "sourceProvider" },
];

const data: DataType[] = [
  {
    key: "1",
    username: "duykhangpdk0701",
    name: "John Brown",
    phoneNumber: "0123030401",
    email: "duykhangpdk0701@gmail.com",
    active: true,
  },
  {
    key: "2",
    username: "duykhangpdk0701",
    name: "Jim Green",
    phoneNumber: "0123030401",
    email: "duykhangpdk0701@gmail.com",
    active: true,
  },
  {
    key: "3",
    username: "duykhangpdk0701",
    name: "Joe Black",
    phoneNumber: "0123030401",
    email: "duykhangpdk0701@gmail.com",
    active: true,
  },
];

const ProviderNumberTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      size="middle"
      pagination={{ position: ["bottomRight"] }}
    />
  );
};

export default ProviderNumberTable;
