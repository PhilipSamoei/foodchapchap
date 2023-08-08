import React from "react"
import CreateBeverages from "./AddBeverageForm";
import TableBeverages from "./BeverageTable";


function BeveragesTableForm(){
    return (
        <div>
            <CreateBeverages/>
            <TableBeverages/>
        </div>
    )
}
export default BeveragesTableForm;