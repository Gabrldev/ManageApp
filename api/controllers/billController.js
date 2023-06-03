import ModelBill from "../models/billsModel.js";

export const getBills = async (req, res) => {
  const { id } = req.params;
  try {
    const getBills = await ModelBill.find({ userId: id });
    res.send(getBills);
  } catch (error) {
    console.log(error.message);
  }
};
export const postBills = async (req, res) => {
  const { userId, bills,description } = req.body;
  try {
    const createBills = await ModelBill.create({
      userId,
      bills: bills,
      description: description
    });
    res.send(createBills);
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteBills = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteBills = await ModelBill.findByIdAndDelete(id);
    res.send(deleteBills);
  } catch (error) {
    console.log(error.message);
  }
};
