import React, { useReducer } from "react";
import styled from "styled-components";
import DateSelect from "./DateSelect";

const HistoryInfoViewer = ({ historyObj }) => {
  return (
    <div className="info-wrapper">
      <section id="title">
        <h5
          style={{ marginTop: "5px", marginBottom: "10px", fontWeight: "bold" }}
        >
          {historyObj.history.title}
        </h5>
        <Info className="info">
          {/* {historyObj.history.studio_id}  */}
          {historyObj.history.history_date}
        </Info>
      </section>
    </div>
  );
};

export default HistoryInfoViewer;

const Info = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;