const { mongoDBConnection } = require("@/database/mongoDBConnection");
const { hedayetunnahuModel } = require("@/models/hedayetunnahu-model");

const getHedayetunnahuQuestion = async () => {
  try {
    await mongoDBConnection();

    const questions = await hedayetunnahuModel.find({});
    return questions;
  } catch (err) {
    console.log(err.message);
  }
};

export { getHedayetunnahuQuestion };
