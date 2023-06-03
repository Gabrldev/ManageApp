import { useEffect, useState } from "react";
import { postData } from "../../utils/post";

function Dashboard() {
  // get token from localStorage
  const token = localStorage.getItem("token");
  const { id } = JSON.parse(token);
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    userId: id,
    description: "",
    bills: "",
  });

  // get data from api
  useEffect(() => {
    async function getProfile() {
      const response = await fetch(`http://localhost:4001/bills/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setData(result);
    }
    getProfile();
  }, [id]);

  // get total bills
  const total = data
    ?.map((item) => parseInt(item.bills))
    .reduce((a, b) => a + b, 0);

  // post data to api
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postData(formData)
    setData([...data, response])
  };

 
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <header>
        <h2 className="text-white/80 text-2xl font-bold text-center mb-8">
          Total:{total}
        </h2>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          className="bg-[#0b0a0e] text-white/80 rounded-md px-4 py-2"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          type="text"
          className="bg-[#0b0a0e] text-white/80 rounded-md px-4 py-2"
          placeholder="Description..."
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          type="number"
          className="bg-[#0b0a0e] text-white/80 rounded-md px-4 py-2"
          placeholder="Bills..."
          onChange={(e) => setFormData({ ...formData, bills: e.target.value })}
        />
        <button
          type="submit"
          className="bg-[#0b0a0e] text-white/80 rounded-md px-4 py-2"
        >
          Submit
        </button>
      </form>
      <main className="w-72 flex gap-3 flex-col">
        <div className="w-full h-96 gap-4 flex flex-col overflow-auto">
          {data?.map((item) => {
            return (
              <div key={item._id} className="flex bg-slate-500 flex-col px-9">
                <h4 className={item.bills > 0 ? "text-white" : "text-red-400"}>
                  {item.bills}
                </h4>
                <span>{item.description}</span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
export default Dashboard;
