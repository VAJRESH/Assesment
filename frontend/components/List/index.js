import { useEffect, useState } from "react";
import { getList, searchByName } from "../../service/api";
import { useElementInView } from "../../helper/hooks";
import Table from "./Table";
import styles from "./List.module.scss";

const List = () => {
  const { list, callbackRef, total, isDataAvailable } = useHandleData();

  return (
    <div className={`${styles.list}`}>
      <section className={`${styles.metaSection}`}>
        <div>Documents Loaded {list.length}</div>
        <div>Total Documents {total}</div>
      </section>
      <Table
        data={list}
        reference={callbackRef}
        isDataAvailable={isDataAvailable}
      />
    </div>
  );
};

// custom hook to handle list data
function useHandleData() {
  const [list, setList] = useState([]);
  const [params, setParams] = useState({
    limit: 50,
    skip: 0,
    total: 0,
    isDataAvailable: true,
  });
  const [loadMoreData, setLoadMoreData] = useState(true);

  const [callbackRef] = useElementInView((e) => {
    // updates the state to true or false
    // if the 10th last item in table is visible in screen to load more data
    setLoadMoreData(e[0].isIntersecting);
  });

  useEffect(() => {
    // list is loaded
    if (!loadMoreData) return;

    let { limit, skip } = params;
    loadList(limit, skip);
  }, [loadMoreData]);

  function loadList(limit, skip) {
    getList(limit, skip)
      .then((res) => {
        console.log(
          res,
          res.data.total > params.limit + res.skip,
          res.data.total,
          params.limit,
          res.skip
        );
        setList([...list, ...res.data.list]);

        setParams((prevState) => {
          return {
            ...prevState,
            skip: prevState.limit + res.skip,
            total: res.data.total,
            isDataAvailable: res.data.total > params.limit + res.skip,
          };
        });
      })
      .catch((err) => console.log(err));
  }

  return {
    list,
    callbackRef,
    isDataAvailable: params.isDataAvailable,
    total: params.total,
  };
}

export default List;
