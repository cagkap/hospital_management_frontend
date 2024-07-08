import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Space, Tag } from "antd";
const { Column, ColumnGroup } = Table;

const CriteriaPanel = ({ criteriaPanelComponent, defaultQueryInfo }) => {
  const [queryInfo, setQueryInfo] = useState({
    page: 0,
    size: 2,
    searchCriteria: {},
  });
  const [results, setResults] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQueryInfoChange = ({ path, value }) => {
    console.log(value);
    setQueryInfo((prevState) => ({
      ...prevState,
      searchCriteria: {
        ...prevState.searchCriteria,
        [path]: value,
      },
    }));
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "//localhost:8080/patient/sorgula",
        queryInfo
      );
      setResults(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePaginationChange = (page, pageSize) => {
    console.log(page);
    setQueryInfo((prevState) => ({
      ...prevState,
      page: page - 1,
    }));
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [queryInfo.page]);

  return (
    <div>
      {criteriaPanelComponent({
        queryInfo,
        handleQueryInfoChange,
        getTargetPathValue: (path) => queryInfo[path],
        handleChildErrorChange: setError,
      })}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <Button type="primary" onClick={fetchData}>
        Submit
      </Button>
      <Table
        dataSource={results.content}
        pagination={{
          onChange: handlePaginationChange,
          total: 500,
        }}
      >
        <Column title="First Name" dataIndex="name" key="name" />
        <Column title="Surname" dataIndex="surname" key="name" />
        <Column title="Age" dataIndex="age" key="name" />
        <Column title="Identity Number" dataIndex="identityNum" key="name" />
      </Table>
    </div>
  );
};

export default CriteriaPanel;
