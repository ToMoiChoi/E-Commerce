'use client'

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { BillboardColumn, columns } from "./columns"

interface BillboardsClientProps {
    data: BillboardColumn[];
}
export const BillboardClient:React.FC<BillboardsClientProps> = ({
    data
}) =>{
    const router = useRouter();
    const params = useParams();
    
    return (
    <>
        <div className="flex items-center justify-between">
            <Heading
                title={`Billbroads (${data.length})`}
                description="Manage"
            />
            <Button onClick={()=> router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add New
            </Button>
        </div>
        <Separator/>
        <DataTable columns={columns} data={data}  searchKey="label"/>
    </>
    )
}