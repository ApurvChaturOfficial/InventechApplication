import React from "react"

import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";

import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";


const SampleMiniListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SampleMiniListComponent */}

      <div className="">
        <DataTable data={tasks} columns={columns} />
      </div>
    </React.Fragment>
  )
}

export default SampleMiniListComponent;
