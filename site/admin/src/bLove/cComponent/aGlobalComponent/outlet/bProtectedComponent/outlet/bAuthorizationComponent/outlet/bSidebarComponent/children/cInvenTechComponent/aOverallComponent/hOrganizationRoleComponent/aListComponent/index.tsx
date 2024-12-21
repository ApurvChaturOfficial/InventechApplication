import React from "react"
import { Link } from "react-router-dom";

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";

import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";
import { DownloadCloudIcon, PlusIcon, RefreshCwIcon } from "lucide-react";


const OrganizationRoleListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* OrganizationRoleListComponent */}

      <>
      <div className="h-full flex-1 flex-col space-y-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Roles</h2>
            {/* <p className="text-muted-foreground">
              Sample List Details
            </p> */}
          </div>
          <div className="flex items-center space-x-2">
            <Button asChild variant="blue" >
              <Link to={"/"} ><PlusIcon /> Create</Link>
            </Button>
            <Button asChild variant="blue" >
              <Link to={"/"} ><DownloadCloudIcon /> Export</Link>
            </Button>
          </div>
        </div>

        <DataTable data={tasks} columns={columns as any} />
      </div>
    </>
    </React.Fragment>
  )
}

export default OrganizationRoleListComponent;
