import { Typography } from "@mui/material";
import "../CSS/ExpensesPage.css";
import LoginSignupBtn from "../../Components/LoginSignupBtn/LoginSignupBtn";
import {
  DatePicker,
  Input,
  message,
  Progress,
  Select,
  Space,
  Table,
} from "antd";
import { ColumnsType } from "antd/es/table";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import AddExpenseModal from "../../Components/Modals/AddExpenseModal";
import {
  getAllExpenses,
  deleteExpense,
} from "../../Services/expensesServices";
import EditExpenseModal from "../../Components/Modals/EditExpenseModal";
import DeleteExpenseModal from "../../Components/Modals/DeleteExpenseModal";

interface DataType {
  key: string;
  expense: string;
  expenditure: number;
  price: number;
  date: string;
  user: string;
}

const ExpensesPage = () => {
  const [showAddModal, setshowAddModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [selectedExpenseId, setselectedExpenseId] = useState<string>(""
  );
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [date, setDate] = useState<string | null>(null);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });
  const [expenses, setExpenses] = useState([]);
  const handleClick = () => {
    setshowAddModal(true);
  };
  const handleClose = () => {
    setshowAddModal(false);
    setshowEditModal(false);
    setshowDeleteModal(false);
  };

  const handleDeleteClick = (id: string) => {
    setselectedExpenseId(id);
    setshowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedExpenseId) {
      try {
        await deleteExpense(selectedExpenseId);
        message.success("Expense deleted successfully");
        setshowDeleteModal(false);
        fetchExpenses();
      } catch (error) {
        message.success("Expense deleted successfully");
        setshowDeleteModal(false);
      }
    }
  };

  const handleEditClick = ( id: string) => {
    setselectedExpenseId(id);
    console.log(selectedExpenseId);
    setshowEditModal(true);
  };

  const handleTableChange = (pagination: any) => {
    setPagination({
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

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
      render: (_, record) => (
        <Space size="middle">
          <DeleteOutlined
            className="delete-btn"
            onClick={() => handleDeleteClick(record.key)}
          />
          <EditOutlined className="edit-btn" onClick={()=> handleEditClick(record.key)} />
        </Space>
      ),
    },
  ];

  const fetchExpenses = async () => {
    try {
      const data = await getAllExpenses();
      console.log(data);
      const formattedData = data.map((expense: any) => ({
        key: expense._id,
        expense: expense.expenseName,
        expenditure: expense.expensePrice,
        price: expense.expensePrice,
        date: new Date(expense.expenseDate).toLocaleDateString(),
        user: expense.userId.email,
      }));
      setExpenses(formattedData);
      // console.log(formattedData);

    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <div className="expenses-top">
        <Typography variant="h3">Expenses</Typography>
        <div className="btn-container">
          <LoginSignupBtn onClick={handleClick}>Add Expenses</LoginSignupBtn>
          <AddExpenseModal
            showAddModal={showAddModal}
            onClose={handleClose}
            fetchExpenses={fetchExpenses}
          ></AddExpenseModal>
          <EditExpenseModal
            showEditModal={showEditModal}
            onClose={handleClose}
            fetchExpenses={fetchExpenses}
            expenseToEdit={{
              id: selectedExpenseId,
              title,
              price,
              date,
            }}
          ></EditExpenseModal>
          <DeleteExpenseModal
            showDeleteModal={showDeleteModal}
            onClose={handleClose}
            onConfirm={handleConfirmDelete}
            fetchExpenses={fetchExpenses}
          ></DeleteExpenseModal>
        </div>
      </div>
      <div className="table-div">
        <Table
          columns={columns}
          dataSource={expenses}
          rowKey="id"
          title={() => (
            <div className="custom-header">
              <div className="header-left">Expenses</div>
              <div className="header-right">
                <Select
                  placeholder="Sort by"
                  style={{ width: "180px" }}
                ></Select>
                <DatePicker></DatePicker>
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
          footer={(currentPageData) => (
            <div className="custom-footer">
              Showing {currentPageData.length} / {expenses.length}{" "}
            </div>
          )}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default ExpensesPage;
