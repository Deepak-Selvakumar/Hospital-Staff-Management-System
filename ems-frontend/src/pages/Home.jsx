import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ p: 3, textAlign: 'center', mt: 10 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Hospital Management System
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Manage your hospital staff efficiently
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          component={Link} 
          to="/dashboard"
        >
          Go to Dashboard
        </Button>
      </Box>
    </>
  )
}