import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LoginSignupBtn from "../../Components/LoginSignupBtn/LoginSignupBtn";
import {Input, Space, Table, Select, message, Modal, Button} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import "../CSS/UsersPage.css";
import { deleteUser, getAllUsers } from "../../Services/userServices";

interface DataType {
  key: string;
  fName: string;
  lName: string;
  email: string;
  number: string;
  role: string;
}


const UsersPage = () => {
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const [users, setUsers] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const handleTableChange = (pagination: any) => {
    setPagination({
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };
  const handleDeleteClick = (id: string) => {
    setSelectedUserId(id);
    setShowDeleteModal(true);
};

const handleConfirmDelete = async () => {
  try {
      await deleteUser(selectedUserId);
      message.success('User deleted successfully');
      fetchUsers(); // Refresh the user list
  } catch (error) {
      message.error('Failed to delete user');
  }
  setShowDeleteModal(false);
};
const fetchUsers = async () => {
  try {
      const data = await getAllUsers();
      const formattedData = data.map((user: any) => ({
          key: user._id,
          fName: user.firstName,
          lName: user.lastName,
          email: user.email,
          number: user.number,
          role: user.role,
      }));
      setUsers(formattedData);
  } catch (error) {
      message.error('Failed to fetch users');
  } finally {
      setLoading(false);
  }
};

useEffect(() => {
  fetchUsers();
}, []);

  
const columns: ColumnsType<DataType> = [
  {
    title: "First Name",
    dataIndex: "fName",
    key: "fName",
  },
  {
    title: "Last Name",
    dataIndex: "lName",
    key: "lName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Number",
    key: "number",
    dataIndex: "number",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
  },
  {
    title: "Actions",
    key: "action",
    render: (_,record) => (
      <Space size="middle">
        <DeleteOutlined className="delete-btn" onClick={() => handleDeleteClick(record.key)}  />
        <EditOutlined className="edit-btn" />
      </Space>
    ),
  },
];


  return (
    <div>
      <div className="users-top">
        <Typography variant="h3">Users</Typography>
        <div className="btn-container">
        </div>
      </div>
      <div className="table-div">
        <Table
          columns={columns}
          dataSource={users}
          title={() => (
            <div className="custom-header">
              <div className="header-left">Users</div>
              <div className="header-right">
                <Select
                  placeholder="Sort by"
                  style={{ width: "180px" }}
                ></Select>
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
              Showing {currentPageData.length} / {users.length}{" "}
            </div>
          )}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
       {/* Delete Confirmation Modal */}
       <Modal
                title="Confirm Deletion"
                open={showDeleteModal}
                onCancel={() => setShowDeleteModal(false)}
                footer={[
                    <Button key="cancel" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>,
                    <Button key="confirm" type="primary" danger onClick={handleConfirmDelete}>
                        Delete
                    </Button>,
                ]}
            >
                <p>Are you sure you want to delete this user?</p>
            </Modal>
    </div>
  );
};

export default UsersPage;
