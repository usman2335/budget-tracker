import { Typography } from "@mui/material";
import "../CSS/ExpensesPage.css";
import LoginSignupBtn from "../../Components/LoginSignupBtn/LoginSignupBtn";
import {  DatePicker, Input, Progress, Select, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";

interface DataType {
  key: string;
  expense: string;
  expenditure: number;
  price: number;
  date: string;
  user: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Expense",
    dataIndex: "expense",
    key: "expense",
  },
  {
    title: "Total Expenditure",
    dataIndex: "expenditure",
    key: "expenditure",
    render: (expenditure) => <Progress percent={expenditure} />,
  },
  {
    title: "Price(PKR)",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Date",
    key: "date",
    dataIndex: "date",
  },
  {
    title: "User",
    key: "user",
    dataIndex: "user",
  },
  {
    title: "Actions",
    key: "action",
    render: () => (
      <Space size="middle">
        <DeleteOutlined className="delete-btn" />
        <EditOutlined className="edit-btn" />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    expense: "Prestigious Clientele",
    expenditure: 30,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "2",
    expense: "Prestigious Clientele",
    expenditure: 30,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "3",
    expense: "Prestigious Clientele",
    expenditure: 10,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "4",
    expense: "Prestigious Clientele",
    expenditure: 50,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "6",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "6",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "7",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "8",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "9",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "10",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "11",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "12",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
  {
    key: "13",
    expense: "Prestigious Clientele",
    expenditure: 100,
    price: 25000,
    date: "20-02-24",
    user: "guy-hawkins",
  },
];

const ExpensesPage = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5
  });

  const handleTableChange = (pagination: any) => {
    setPagination({
      current: pagination.current,
      pageSize: pagination.pageSize
    });
  };
  
  return (
    <div>
      <div className="expenses-top">
        <Typography variant="h3">Expenses</Typography>
        <div className="btn-container">
          <LoginSignupBtn>Add Expenses</LoginSignupBtn>
        </div>
      </div>
      <div className="table-div">
        <Table
          columns={columns}
          dataSource={data}
          title={() => (
            <div className="custom-header">
              <div className="header-left">Expenses</div>
              <div className="header-right">
                  <Select
                    placeholder = "Sort by"
                    style = {{width: "180px"}}
                  ></Select>
                  <DatePicker
                  ></DatePicker>
                <Input
                  placeholder="Search"
                  style={{ width: 200 }}
                  suffix={<SearchOutlined />}
                />
              </div>
            </div>
          )}
          className="table"
          rowClassName="rows"
          footer={(currentPageData) => <div className = "custom-footer">Showing {currentPageData.length} / {data.length} </div>}
          pagination = {pagination
          }
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default ExpensesPage;
