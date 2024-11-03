const { mongoDBConnection } = require("@/database/mongoDBConnection");
const { dirayModel } = require("@/models/diary-model");

const getDirais = async () => {
  try {
    await mongoDBConnection();
    const diray = await dirayModel.find({}).sort({ date: -1 });
    return diray;
  } catch (err) {
    console.log(err.message);
  }
};

const createDiray = async (newDiray) => {
  try {
    await mongoDBConnection();
    const diray = await dirayModel.create(newDiray);
    return diray;
  } catch (err) {
    console.log(err.message);
  }
};

export { createDiray, getDirais };
