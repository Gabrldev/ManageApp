import { useState } from "react";
import { postData } from "../utils/post";
import { toast } from "react-hot-toast";

function FormBill(props) {
  // eslint-disable-next-line react/prop-types
  const { data, setData, id } = props;
  const [formData, setFormData] = useState({
    userId: id,
    description: "",
    bills: "",
    name: "",
  });

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
  return (
    <form className="w-full flex gap-4 flex-col" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <input
          className="w-1/2 bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none placeholder:text-[#525252] placeholder:font-semibold px-5"
          placeholder="Name of transaction"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, bills: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#ffffff] h-10 rounded-md border-2 border-white/20 outline-none text-black font-semibold"
      >
        Add new transaction
      </button>
    </form>
  );
}
export default FormBill;
