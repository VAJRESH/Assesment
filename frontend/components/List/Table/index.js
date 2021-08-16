import { Fragment } from "react";
import LoadingMessageRow from "./LoadingMessageRow";
import styles from "./Table.module.scss";
import TableHead from "./TableHead";
import TableRowData from "./TableRowData";

const Table = ({ data, reference, isDataAvailable }) => {
  return (
    <>
      <table className={`${styles.table}`}>
        <TableHead />
        <tbody>
          {data.length === 0 ? (
            <LoadingMessageRow />
          ) : (
            data.map((item, index) => {
              console.log(index === data.length - 1, isDataAvailable);
              return (
                <Fragment key={item._id}>
                  <TableRowData item={item} index={index} />

                  {index === data.length - 1 && isDataAvailable && (
                    <tr>
                      <td colSpan={11}>
                        <h3 ref={reference}>Loading More Data...</h3>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
