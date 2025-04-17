import { useEffect, useState } from 'react'
import { Box, Typography, Button, CircularProgress, Grid } from '@mui/material'
import EmployeeCard from './EmployeeCard'
import EmployeeForm from './EmployeeForm'
import { 
  getEmployees, 
  createEmployee, 
  updateEmployee, 
  deleteEmployee 
} from '../services/api'

export default function EmployeeList() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const fetchEmployees = async () => {
    try {
      setLoading(true)
      const data = await getEmployees()
      setEmployees(data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  const handleCreate = async (employee) => {
    try {
      await createEmployee(employee)
      fetchEmployees()
      setShowForm(false)
    } catch (error) {
      console.error('Error creating employee:', error)
    }
  }

  const handleUpdate = async (id, employee) => {
    try {
      await updateEmployee(id, employee)
      fetchEmployees()
      setEditingId(null)
    } catch (error) {
      console.error('Error updating employee:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id)
      fetchEmployees()
    } catch (error) {
      console.error('Error deleting employee:', error)
    }
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Hospital Staff
      </Typography>
      
      {!showForm && (
        <Button 
          variant="contained" 
          onClick={() => setShowForm(true)}
          sx={{ mb: 3 }}
        >
          Add New Employee
        </Button>
      )}

      {showForm && (
        <EmployeeForm 
          onSubmit={handleCreate} 
          onCancel={() => setShowForm(false)} 
        />
      )}

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {employees.map((employee) => (
            <Grid item xs={12} sm={6} md={4} key={employee.id}>
              {editingId === employee.id ? (
                <EmployeeForm
                  employee={employee}
                  onSubmit={(data) => handleUpdate(employee.id, data)}
                  onCancel={() => setEditingId(null)}
                />
              ) : (
                <EmployeeCard
                  employee={employee}
                  onEdit={() => setEditingId(employee.id)}
                  onDelete={() => handleDelete(employee.id)}
                />
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}