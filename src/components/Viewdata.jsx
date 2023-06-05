/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { dateForm } from "../utils/Dateformt";
import { handleDelete } from "../utils/Crud";
function Viewdata(props) {
  const { data, setData,token } = props;

  const handleDeleteData = async (_id,) => {
    const response = await handleDelete(_id,token);
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
      {data ? data.map((item) => {
        return (
          <>
            <div className="flex items-center border-b-2">
              <div className="w-full ">
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
                    {dateForm(item.dateCreate)}
                  </span>
                </div>
              </div>
              <button
                className=" px-3 text-slate-950"
                onClick={() => handleDeleteData(item._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash-filled hover:rotate-12 duration-200 "
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z"
                    strokeWidth={0}
                    fill="#a1a1a1"
                  ></path>
                  <path
                    d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
                    strokeWidth={0}
                    fill="#a1a1a1"
                  ></path>
                </svg>
              </button>
            </div>
          </>
        );
      }): <h1 className="text-2xl text-center">No data</h1>}
    </section>
  );
}
export default Viewdata;
