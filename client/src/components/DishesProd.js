import React from "react"
import CreateDishes from "./AddDishesForm"
import TableDishes from "./TableDishes"

function DishesTableForm(){
    return (
        <div>
            <CreateDishes/>
            <TableDishes/>
        </div>
    )
}
export default DishesTableForm;