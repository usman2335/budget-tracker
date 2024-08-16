import { Stack, Typography } from '@mui/material'
import { DatePicker, Input, message, Modal } from 'antd'
import React, { useState } from 'react'
import { updateExpense } from "../../Services/expensesServices";




  interface EditExpenseModalProps {
    showEditModal: boolean;
    onClose: () => void;
    fetchExpenses: () => void;
    expenseToEdit: { id: string; title: string; price: number; date: any } | null; // Add this line
}
const EditExpenseModal = ({ showEditModal, onClose, fetchExpenses, expenseToEdit }: EditExpenseModalProps) => {
     const [title, setTitle] = useState(expenseToEdit ? expenseToEdit.title : "");
    const [price, setPrice] = useState(expenseToEdit ? expenseToEdit.price : null);
    const [date, setDate] = useState(expenseToEdit ? expenseToEdit.date : null);

    const handleSave = async () => {
        if (!title || !price || !date) {
            message.error("Please fill in all fields.");
            return;
        }

        try {
            console.log(expenseToEdit!.id);

            await updateExpense(expenseToEdit!.id, { title, price, date });
            message.success("Expense updated successfully");
            onClose();
            fetchExpenses(); 
        } catch (error) {
            message.error("Failed to update expense");
        }
    };


  return (
   
        <>
          <Modal open={showEditModal} onCancel={onClose} onOk={handleSave} title="Edit Expense">
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
  )
}

export default EditExpenseModal