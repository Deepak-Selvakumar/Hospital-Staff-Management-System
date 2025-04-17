import axios from 'axios'

const API_URL = 'http://localhost:8080/api/employees'

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const createEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const updateEmployee = async (id, employee) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, employee)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`)
  } catch (error) {
    throw error.response.data
  }
}