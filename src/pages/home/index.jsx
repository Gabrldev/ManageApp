import { useEffect, useState } from "react";
import  { Toaster } from "react-hot-toast";
import { getProfile } from "../../utils/getPostuser";
import FormBill from "../../components/FormBill";
import Viewdata from "../../components/Viewdata";

function Dashboard() {
  // get token from localStorage
  const token = localStorage.getItem("token");
  const { id } = JSON.parse(token);
  const [data, setData] = useState();
  // get data from api
  useEffect(() => {
    getProfile(id).then((res) => setData(res));
  }, [id, token]);

  // get total bills
  const total = data
    ?.map((item) => parseInt(item.bills))
    .reduce((a, b) => a + b, 0);

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center bg">
      <Toaster />
      <header>
        <h2
          className={
            total > 0
              ? "text-white text-xl font-semibold"
              : "text-red-800 text-xl font-semibold"
          }
        >
          $ {total}
        </h2>
      </header>
      <main className="w-[550px]">
        <FormBill data={data} setData={setData} id={id} />
        <Viewdata data={data} setData={setData}/>
      </main>
    </div>
  );
}
export default Dashboard;
