import { Stack, Typography } from "@mui/material";
import { DatePicker, Input, Modal, message } from "antd";
import "./AddExpenseModal.css"
import { useState } from "react";
import { createExpense } from "../../Services/expensesServices";

interface AddExpenseModalProps {
    showAddModal: boolean;
    onClose: () => void;
    fetchExpenses: () => void; 
  }

  
const AddExpenseModal = ({showAddModal, onClose, fetchExpenses} : AddExpenseModalProps) => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [date, setDate] = useState<any>(null); 

  const handleOk = async () => {
    if (!title || !price || !date) {
      message.error("Please fill in all fields.");
      return;
    }

    
    try{
      await createExpense({expenseName: title, expensePrice: Number(price), expenseDate: date});
      message.success("Expense created successfully");
      onClose();
      fetchExpenses();
    }
    catch(error){
      console.log("error");
      message.error("Failed to create expense.");
    }

  }
  
  return (
    <>
      <Modal open={showAddModal} onCancel={onClose} onOk={handleOk} title="Add Expense">
        <div  className="modal-upper">
        <Typography variant="subtitle2" fontWeight={500}>
          Title
        </Typography>
        <Input placeholder="Title"  onChange={(e) => setTitle(e.target.value)} ></Input>
        </div>
        <div className="modal-lower">
            <Stack>
          <Typography variant="subtitle2" fontWeight={500}>
            Price(PKR)
          </Typography>
          <Input placeholder="Price"  onChange={(e) => setPrice(Number(e.target.value))} ></Input>
          </Stack>
          <Stack>
          <Typography variant="subtitle2" fontWeight={500}>
            Date
          </Typography>
          <DatePicker placeholder="Select Date" onChange={(date) => setDate(date)} ></DatePicker>
          </Stack>
        </div>
      </Modal>
    </>
  );
};

export default AddExpenseModal;
