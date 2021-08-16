const TableRowData = ({ item, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.c_name}</td>
      <td>{item.c_batch_no}</td>
      <td>{item.d_expiry_date}</td>
      <td>{item.n_balance_qty}</td>
      <td>{item.c_packaging}</td>
      <td>{item.c_unique_code}</td>
      <td>{item.c_schemes}</td>
      <td>{item.n_mrp}</td>
      <td>{item.c_manufacturer}</td>
      <td>{item.hsn_code}</td>
    </tr>
  );
};

export default TableRowData;
