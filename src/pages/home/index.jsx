import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getProfile } from "../../utils/Crud";
import FormBill from "../../components/FormBill";
import Viewdata from "../../components/Viewdata";
import Header from "../../components/Header";

function Dashboard() {
  // get token from localStorage
  const tokenUser = localStorage.getItem("token");
  const { id, token } = JSON.parse(tokenUser);
  const [data, setData] = useState();
  // get data from api
  useEffect(() => {
    getProfile(id, token).then((res) => setData(res));
  }, [id, token]);

  // get total bills
  const total =
    data?.map((item) => parseInt(item.bills)).reduce((a, b) => a + b, 0) || 0;

  const BG_TOTAL = `${
    total >= 0 ? "bg-green-500 shadow-green-500 " : "bg-red-500 shadow-red-500 "
  } w-[550px] max-sm:w-[360px] h-20 flex justify-center items-center rounded-md text-white  font-semibold text-center  mb-10 shadow-lg`;
  return (
    <div className=" h-screen flex flex-col justify-center items-center bg bg2 max max-sm:mt-14">
      <Header />
      <Toaster />
      <main className="w-[550px] max-sm:w-[360px]">
        <section className={BG_TOTAL}>
          <h2 className={"text-white text-2xl font-semibold"}>$ {total}</h2>
        </section>
        <FormBill data={data} setData={setData} id={id} token={token} />
        <Viewdata data={data} setData={setData} token={token} />
      </main>
    </div>
  );
}
export default Dashboard;
