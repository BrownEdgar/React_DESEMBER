export const checkUserbyEmail = (data, email) => {
  return data.some((user) => user.email.toLowerCase() === email.toLowerCase())
}



