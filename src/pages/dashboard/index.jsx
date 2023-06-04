import { useEffect, useState } from "react";
import { postData } from "../../utils/post";
import toast, { Toaster } from "react-hot-toast";
import { handleDelete } from "../../utils/delate";

function Dashboard() {
  // get token from localStorage
  const token = localStorage.getItem("token");
  const { id } = JSON.parse(token);
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    userId: id,
    description: "",
    bills: "",
    name: "",
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
  }, [id, token]);

  // get total bills
  const total = data
    ?.map((item) => parseInt(item.bills))
    .reduce((a, b) => a + b, 0);

  // post data to api
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postData(formData);
    toast.success("Success add data");
    setData([...data, response]);
    setFormData({
      userId: id,
      description: "",
      bills: "",
      name: "",
    });
  };
  //delete data from api
  const handleDeleteData = async (_id) => {
    const response = await handleDelete(_id);
    if(response.message === "Delete success"){
      const newData = data.filter((item) => item._id !== _id);
      setData(newData);
      toast.success("Success delete data");
    } else {
      toast.error("Failed delete data");
    }
  }


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
        <form className="w-full flex gap-4 flex-col" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              className="w-1/2 bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none placeholder:text-[#525252] placeholder:font-semibold px-5"
              placeholder="Name of transaction"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              className="w-1/2 bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none px-10"
              type="date"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none placeholder:text-[#525252] placeholder:font-semibold px-5"
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="number"
              className="w-full bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none placeholder:text-[#525252] placeholder:font-semibold px-5"
              placeholder="Price $%"
              value={formData.bills}
              onChange={(e) =>
                setFormData({ ...formData, bills: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ffffff] h-10 rounded-md border-2 border-white/20 outline-none text-black font-semibold"
          >
            Add new transaction
          </button>
        </form>

        <section className="h-96 overflow-auto">
          {data?.map((item) => {
            return (
              <>
                <div className="flex items-center" >
                  <div className="w-full border-b-2">
                    <div className="flex justify-between">
                      <h5 className="text-2xl">{item.name}</h5>
                      <span
                        className={
                          item.bills < 0
                            ? "text-2xl text-red-700"
                            : "text-2xl text-green-600"
                        }
                      >
                        ${item.bills}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-base text-white/50">
                        {item.description}
                      </p>
                      <span className="text-base text-white/50">
                        {item.dateCreate}
                      </span>
                    </div>
                  </div>
                    <button className="bg-white text-black" onClick={()=>handleDeleteData(item._id)}>D</button>
                </div>
              </>
            );
          })}
        </section>
      </main>
    </div>
  );
}
export default Dashboard;
