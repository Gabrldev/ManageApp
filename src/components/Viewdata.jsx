/* eslint-disable react/prop-types */
import { handleDelete } from "../utils/delate";
import toast from "react-hot-toast";
function Viewdata(props) {
  const { data, setData } = props;
  const handleDeleteData = async (_id) => {
    const response = await handleDelete(_id);
    if (response.message === "Delete success") {
      const newData = data.filter((item) => item._id !== _id);
      setData(newData);
      toast.success("Success delete data");
    } else {
      toast.error("Failed delete data");
    }
  };
  return (
    <section className="h-96 overflow-auto">
      {data?.map((item) => {
        return (
          <>
            <div className="flex items-center">
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
                  <p className="text-base text-white/50">{item.description}</p>
                  <span className="text-base text-white/50">
                    {item.dateCreate}
                  </span>
                </div>
              </div>
              <button
                className="bg-white text-black"
                onClick={() => handleDeleteData(item._id)}
              >
                D
              </button>
            </div>
          </>
        );
      })}
    </section>
  );
}
export default Viewdata;
