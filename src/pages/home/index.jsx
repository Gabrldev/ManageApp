import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getProfile } from "../../utils/Crud";
import FormBill from "../../components/FormBill";
import Viewdata from "../../components/Viewdata";
import Header from "../../components/Header";

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
    .reduce((a, b) => a + b, 0) || 0;

  const BG_TOTAL = `${
    total >= 0 ? "bg-green-500" : "bg-red-500"
  } w-[550px] max-sm:w-[360px] h-20 flex justify-center items-center rounded-md text-white text-2xl font-semibold text-center  mb-10`;
  return (
    <div className=" h-screen flex flex-col justify-center items-center bg bg2">
      <Header />
      <Toaster />
      <main className="w-[550px] max-sm:w-[360px]">
      <section className={BG_TOTAL}>
        <h2 className={"text-white text-xl font-semibold"}>$ {total}</h2>
      </section>
        <FormBill data={data} setData={setData} id={id} />
        <Viewdata data={data} setData={setData} />
      </main>
    </div>
  );
}
export default Dashboard;
