const { getClientesQuery } = require("../models/clienteModel");

const getClientes = async (req, res) => {
  try {
    const query = await getClientesQuery();
    if (query == null) {
      return "NAO ACHOU";
    } else {
      console.log("ois");
      res.send (query);
    }
  } catch (error) {
    console.error(
      "Sorry, something went wrong on our end. Please try again later.",
      error
    );
  }
};

module.exports = { getClientes };
