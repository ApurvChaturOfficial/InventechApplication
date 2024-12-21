import React from "react"

import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";

import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";


const SampleMiniList2Component = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SampleMiniList2Component */}

      <div className="overflow-hidden">
        <DataTable data={tasks} columns={columns} />
      </div>
    </React.Fragment>
  )
}

export default SampleMiniList2Component;
