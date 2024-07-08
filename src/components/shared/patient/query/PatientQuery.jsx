import React from "react";
import PatientCriteria from "./PatientCriteria";
import CriteriaPanel from "./CriteriaPanel";

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
          />
        )}
      />
    </div>
  );
};

export default PatientQuery;
