import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";

const BillbroadsPage =  async ({
    params
}:{
    params: { billboardId: string },
}) => {
    const billboards = await prismadb.billboard.findUnique({
        where: { 
            id: params.billboardId,
        }
    })
    return (  
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 " >
                <BillboardForm
                    initialData={billboards}
                />
            </div>
        </div>
    );
}
 
export default BillbroadsPage;