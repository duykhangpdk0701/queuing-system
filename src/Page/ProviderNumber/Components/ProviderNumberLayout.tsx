import { CaretDownOutlined } from "@ant-design/icons";
import { Col, Form, FormInstance, Row, Select, Space, Typography } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSide from "../../../Components/ButtonSide";
import SearchInput from "../../../Components/SearchInput";
import {
  ProviderFilterType,
  ProviderType,
} from "../../../State/ActionTypes/ProvidersActionTypes";
import styles from "./ProviderNumberLayout.module.scss";
import ProviderNumberTable from "./ProviderNumberTable";
import { ReactComponent as addSvg } from "../../../Assets/AddSquare.svg";
import { ServiceType } from "../../../State/ActionTypes/ServicesActionTypes";
import { SourceProviderType } from "../../../State/ActionTypes/SourceProvidesActionTypes";
import DatePickerRange from "../../../Components/DatePickerRange";

interface IProviderNumberLayout {
  loading: boolean;
  data: ProviderType[];
  serviceLoading: boolean;
  serviceData: ServiceType[];
  sourceProvidersData: SourceProviderType[];
  sourceProvidersLoading: boolean;
  onFinish: (values: ProviderFilterType) => void;
  form: FormInstance;
}

const { Option } = Select;

const ProviderNumberLayout: FC<IProviderNumberLayout> = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.section}>
      <Row>
        <Col>
          <Typography.Title level={2} className={styles.title}>
            Quản lý cấp số
          </Typography.Title>
        </Col>
      </Row>
      <Form
        layout="vertical"
        name="filter-provider"
        onFinish={props.onFinish}
        form={props.form}
      >
        <Row justify="space-between" className={styles.inputContainer}>
          <Col>
            <Space size={24}>
              <Form.Item
                label={<Typography.Text strong>Tên dịch vụ</Typography.Text>}
                className={styles.selectContianer}
                name="service"
                initialValue={null}
              >
                <Select
                  size="large"
                  loading={props.serviceLoading}
                  suffixIcon={
                    <CaretDownOutlined
                      style={{ fontSize: "20px", color: "#FF7506" }}
                    />
                  }
                  onChange={() => props.form.submit()}
                >
                  <Option value={null}>Tất cả</Option>
                  {props.serviceData.map((value, index) => (
                    <Option key={index} value={value.id}>
                      {value.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label={<Typography.Text strong>Tình trạng</Typography.Text>}
                className={styles.selectContianer}
                name="status"
                initialValue={null}
              >
                <Select
                  size="large"
                  suffixIcon={
                    <CaretDownOutlined
                      style={{ fontSize: "20px", color: "#FF7506" }}
                    />
                  }
                  onChange={() => props.form.submit()}
                >
                  <Option value={null}>Tất cả</Option>
                  <Option value={0}>Bỏ qua</Option>
                  <Option value={1}>Đang chờ</Option>
                  <Option value={2}>Đã sử dụng</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={<Typography.Text strong>Nguồn cấp</Typography.Text>}
                className={styles.selectContianer}
                name="sourceProvider"
                initialValue={null}
              >
                <Select
                  size="large"
                  suffixIcon={
                    <CaretDownOutlined
                      style={{ fontSize: "20px", color: "#FF7506" }}
                    />
                  }
                  onChange={() => props.form.submit()}
                >
                  <Option value={null}>Tất cả</Option>
                  {props.sourceProvidersData.map((value, index) => (
                    <Option key={index} value={value.id}>
                      {value.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label={<Typography.Text strong>Chọn thời gian</Typography.Text>}
                name="dateRange"
              >
                <DatePickerRange onChange={() => props.form.submit()} />
              </Form.Item>
            </Space>
          </Col>
          <Col flex="240px">
            <Form.Item
              label={<Typography.Text strong>Từ khóa</Typography.Text>}
              name="search"
            >
              <SearchInput
                size="large"
                placeholder="Nhập từ khóa"
                onSearch={() => props.form.submit()}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col flex="auto">
          <ProviderNumberTable data={props.data} loading={props.loading} />
        </Col>
        <Col flex="100px">
          <ButtonSide
            content={[
              {
                label: "Cấp số mới",
                icon: addSvg,
                onClick: () => {
                  navigate("/provider/add");
                },
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProviderNumberLayout;
