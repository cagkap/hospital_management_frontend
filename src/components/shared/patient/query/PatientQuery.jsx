import React from "react";
import PatientCriteria from "./PatientCriteria";
import CriteriaPanel from "./CriteriaPanel";
import { Button, Table, Space, Tag } from "antd";
const { Column, ColumnGroup } = Table;

const PatientQuery = () => {
  const getTargetPathValue = "http://localhost:8080/patient/sorgula";
  return (
    <div>
      <CriteriaPanel
        criteriaPanelComponent={({
          queryInfo,
          handleQueryInfoChange,
          getTargetPathValue,
          handleChildErrorChange,
        }) => (
          <PatientCriteria
            queryInfo={queryInfo}
            handleQueryInfoChange={handleQueryInfoChange}
            getTargetPathValue={getTargetPathValue}
            handleChildErrorChange={handleChildErrorChange}
          ></PatientCriteria>
        )}
      >
        <Column title="First Name" dataIndex="name" key="name" />
        <Column title="Surname" dataIndex="surname" key="name" />
        <Column title="Age" dataIndex="age" key="name" />
        <Column title="Identity Number" dataIndex="identityNum" key="name" />
      </CriteriaPanel>
    </div>
  );
};

export default PatientQuery;
