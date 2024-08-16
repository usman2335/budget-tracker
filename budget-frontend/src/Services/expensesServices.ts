const BASE_URL = "http://localhost:4000";

interface expenseDataProps{
    expenseName: string,
    expensePrice: number,
    expenseDate: Date,
}
const token = localStorage.getItem('auth-token');
console.log("token is: ", token);
export const createExpense = async (expenseData : expenseDataProps) => {
    const response = await fetch(`${BASE_URL}/api/expense`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(expenseData),

    })
    const data = response.json();
    if(data)
    {
        return data;
    }
}

export const getAllExpenses = async () =>
{
    const response = await fetch(`${BASE_URL}/get-expenses`,{
        method: 'GET',
        headers:{
            'Content-Type' : 'application/json',
        },
    });
    return response.json();
}

export const deleteExpense = async(expenseId : string) => {
    const response = await fetch(`${BASE_URL}/delete-expense/${expenseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    
      return await response.json();

}

export const updateExpense = async (expenseId : string, updatedData: any) => {
    try {
      const response = await fetch(`${BASE_URL}/update-expense/${expenseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      console.log("updated data" ,expenseId, updatedData)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred while updating the expense');
      }
  
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error updating expense:', error);
      return { error};
    }
  };