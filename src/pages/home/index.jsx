import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getProfile } from "../../utils/Crud";
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

  const BASE_HEADER = `${
    total >= 0 ? "bg-green-500" : "bg-red-500"
  } w-[550px] max-sm:w-[360px] h-20 flex justify-center items-center rounded-md text-white text-2xl font-semibold text-center  mb-10`;
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center bg">
      <Toaster />
      <header className={BASE_HEADER}>
        <h2 className={"text-white text-xl font-semibold"}>$ {total}</h2>
      </header>
      <main className="w-[550px] max-sm:w-[360px]">
        <FormBill data={data} setData={setData} id={id} />
        <Viewdata data={data} setData={setData} />
      </main>
    </div>
  );
}
export default Dashboard;
