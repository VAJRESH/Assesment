const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
const Data = require("../models/data.model");

exports.uploadData = (req, res) => {
  loadAndSaveData(res);
};

function loadAndSaveData(responseObject) {
  const csvFilePath = path.join(
    __dirname,
    "../",
    "resources",
    "MedicineDataSet.csv"
  );

  let documentsSaved = 0;
  // https://stackoverflow.com/questions/23080413/parsing-a-csv-file-using-nodejs
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", function (data) {
      try {
        responseObject.status(202);

        const newDataDocument = new Data({ ...segregateDataBasedOnType(data) });

        newDataDocument.save((error) => {
          console.log(++documentsSaved);
          if (error) {
            console.log(data);
            throw error;
          }
        });
      } catch (err) {
        console.log(err);
      }
    })
    .on("end", () => {
      console.log("CSV Data loaded");
      responseObject.json("Uploaded Data Successfully");
    });
}

function segregateDataBasedOnType(data) {
  const c_name = data.c_name;
  const c_batch_no = data.c_batch_no;
  const d_expiry_date = new Date(data.d_expiry_date);
  const n_balance_qty = Number(data.n_balance_qty);
  const c_packaging = data.c_packaging;
  const c_unique_code = data.c_unique_code;
  const c_schemes = data.c_schemes;
  const n_mrp = Number(data.n_mrp);
  const c_manufacturer = data.c_manufacturer;
  const hsn_code = Number(data.hsn_code);

  return {
    c_name,
    c_batch_no,
    d_expiry_date,
    n_balance_qty,
    c_packaging,
    c_unique_code,
    c_schemes,
    n_mrp,
    c_manufacturer,
    hsn_code,
  };
}
