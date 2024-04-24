import React from 'react';
import ExpenseTable from "@/components/expense-table";
import ExpenseFilters from "@/components/expense-filters";
import {columns, Expense} from "@/app/expenses/columns";
import {DataTable} from "@/app/expenses/data-table";

async function getData(): Promise<Expense[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ]
}

const Expenses = async() => {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-center">Expenses</h1>

            <DataTable columns={columns} data={data}/>
        </div>
    )
};

export default Expenses;