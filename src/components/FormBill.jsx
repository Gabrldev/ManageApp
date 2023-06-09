import { useState } from "react";
import { toast } from "react-hot-toast";
import { postData } from "../utils/Crud";

function FormBill(props) {
  // eslint-disable-next-line react/prop-types
  const { data, setData, id, token } = props;
  const [formData, setFormData] = useState({
    userId: id,
    description: "",
    bills: "",
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postData(formData, token);
    toast.success("Success add data");
    setData([...data, response]);
    setFormData({
      userId: id,
      description: "",
      bills: "",
      name: "",
      date: "",
    });
  };
  return (
    <form className="w-full flex gap-4 flex-col" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <input
          className="w-1/2 bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none placeholder:text-[#525252] placeholder:font-semibold max-sm:placeholder:text-xs px-5"
          placeholder="Name of transaction"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          className="w-1/2 bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none px-10 max-sm:text-xs"
          type="date"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          className="w-full bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none placeholder:text-[#525252] placeholder:font-semibold px-5 max-sm:placeholder:text-xs"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
      </div>
      <div>
        <input
          type="number"
          className="w-full bg-[#0E0C14] h-10 rounded-md border-2 border-white/20 outline-none placeholder:text-[#525252] placeholder:font-semibold px-5 max-sm:placeholder:text-xs"
          placeholder="Price $"
          value={formData.bills}
          onChange={(e) => setFormData({ ...formData, bills: e.target.value })}
          required
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
