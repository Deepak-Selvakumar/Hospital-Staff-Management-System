import { Snackbar, Alert } from '@mui/material'
import { useState } from 'react'

export default function Notification() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState('success')

  // For demo purposes - in a real app you would connect this to your state management
  const showNotification = (msg, type = 'success') => {
    setMessage(msg)
    setSeverity(type)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}