import { Stack, Typography } from '@mui/material'
import { DatePicker, Input, Modal } from 'antd'
import { useState } from 'react'

interface DeleteExpenseModalProps {
    showDeleteModal: boolean;
    onClose: () => void;
    onConfirm: () => void;
    fetchExpenses: () => void; 
  }

const DeleteExpenseModal = ({showDeleteModal, onClose, onConfirm, fetchExpenses} : DeleteExpenseModalProps) => {
    const handleConfirm = () => {
        onConfirm();
        fetchExpenses(); 
      };
  return (
   
        <>
          <Modal open={showDeleteModal} onCancel={onClose} onOk = {handleConfirm} title="Delete Expense">
            <div  className="modal-upper">
            <Typography variant="subtitle2" fontWeight={500}>
              Title
            </Typography>
            </div>
            <div className="modal-lower">
                <Stack>
              <Typography variant="subtitle2" fontWeight={500}>
                Price(PKR)
              </Typography>
              </Stack>
              <Stack>
              <Typography variant="subtitle2" fontWeight={500}>
                Date
              </Typography>
              </Stack>
            </div>
          </Modal>
        </>
  )
}

export default DeleteExpenseModal