import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Space, Tag, Flex } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Column, ColumnGroup } = Table;

const CriteriaPanel = ({
  criteriaPanelComponent,
  addButtonActive,
  defaultQueryInfo,
  children,
}) => {
  const [queryInfo, setQueryInfo] = useState({
    page: 0,
    size: 2,
    searchCriteria: {},
  });
  const [results, setResults] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      <Flex justify="space-between" align="flex-end">
        <Button
          type="primary"
          icon={<SearchOutlined />}
          className="bg-blue-400"
          onClick={fetchData}
        >
          Query
        </Button>

        {addButtonActive && (
          <Button
            type="primary"
            className="bg-blue-400"
            icon={<PlusOutlined />}
            onClick={() => navigate("/patient/add")}
          >
            Add
          </Button>
        )}
      </Flex>
      <Table
        className="mt-2 "
        dataSource={results.content}
        pagination={{
          onChange: handlePaginationChange,
          total: 500,
        }}
      >
        {children}
      </Table>
    </div>
  );
};

export default CriteriaPanel;
