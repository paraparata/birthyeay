import Data from "./models.js";

const MSG_S = "Successful";
const MSG_E = "No Data Founded";

export const getAllData = async (_, res) => {
  try {
    const data = await Data.find();
    res.status(200).json({ data });
  } catch (error) {
    throw error;
  }
};

export const getData = async (req, res) => {
  try {
    const {
      params: { from, to },
    } = req;
    const data = await Data.find({ from: from }).where({ to: to });

    if (data.length !== 0) {
      res.status(200).json({ status: true, msg: MSG_S, data });
    } else {
      res.status(400).json({ status: false, msg: MSG_E });
    }
  } catch (error) {
    throw error;
  }
};

export const addData = async (req, res) => {
  const url = req.protocol + "://" + req.get("host") + "/img/";
  try {
    const body = req.body;
    const data = new Data({
      from: body.from,
      to: body.to,
      img: url + req.file.filename,
    });

    const newData = await data.save();

    res.status(201).json(newData);
  } catch (error) {
    throw error;
  }
};
