import {
  DayRange,
  DayValue,
} from "@hassanmojab/react-modern-calendar-datepicker";
import { Col, Row } from "antd";
import React, { FC } from "react";
import ChartDashboard from "./ChartDashboard";
import styles from "./DashboardLayout.module.scss";
import Summary from "./Summary";

interface IDashboardLayout {
  date: DayValue;
  setDate: React.Dispatch<React.SetStateAction<DayValue>>;
}

const DashboardLayout: FC<IDashboardLayout> = (props) => {
  return (
    <Row className={styles.section}>
      <Col flex="auto">
        <ChartDashboard />
      </Col>
      <Col flex="400px">
        <Summary setDate={props.setDate} date={props.date} />
      </Col>
    </Row>
  );
};

export default DashboardLayout;
