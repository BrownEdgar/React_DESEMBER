import axios from 'axios'

export const fetchUsersData = async (quantity) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
    params: { _limit: quantity }
  })

  return response.data
}