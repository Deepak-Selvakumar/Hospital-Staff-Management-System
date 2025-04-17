import { Card, CardContent, Typography, Button, Stack } from '@mui/material'

export default function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {employee.firstName} {employee.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {employee.email}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button 
            size="small" 
            variant="outlined" 
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button 
            size="small" 
            variant="outlined" 
            color="error"
            onClick={onDelete}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}