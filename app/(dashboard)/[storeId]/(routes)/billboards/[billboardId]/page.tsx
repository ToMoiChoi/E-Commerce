import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";

const BillbroadsPage =  async ({
    params
}:{
    params: { billbroadId: string },
}) => {
    const billbroads = await prismadb.billboard.findUnique({
        where: { 
            id: params.billbroadId,
        }
    })
    return (  
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 " >
                <BillboardForm
                    initialData={billbroads}
                />
            </div>
        </div>
    );
}
 
export default BillbroadsPage;