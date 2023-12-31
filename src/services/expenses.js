import { ActionCreators } from '../app/expensesReducer';

export const GetExpenses = async (dispatch) => {
    try {
        // api call
        const expenses = [
            {id: 1, description: 'Groceries', amount: 23.16},
            {id: 2, description: 'Rent', amount: 345.00},
            {id: 3, description: 'Gas', amount: 32.76},
            {id: 4, description: 'Loan', amount: 120.37},
        ];

        dispatch(ActionCreators.setExpenses(expenses));
    } catch {
        console.log("Error");
        // dispatch(setExpensesError());
    }
}
