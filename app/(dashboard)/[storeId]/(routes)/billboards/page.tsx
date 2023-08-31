import { BillbroadsClient } from "./components/client";

const BillbroadsPage = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillbroadsClient/>
            </div>
        </div>
      );
}
 
export default BillbroadsPage;