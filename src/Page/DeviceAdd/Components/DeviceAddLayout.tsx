import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Select, Typography } from "antd";
import React, { FC } from "react";
import { DeviceTypeType } from "../../../State/ActionTypes/DeviceTypesActionTypes";
import styles from "./DeviceAddLayout.module.scss";

interface IDeviceAddLayout {
  deviceTypeloading: boolean;
  deviceTypeData: DeviceTypeType[];
}

const { Option } = Select;

const DeviceAddLayout: FC<IDeviceAddLayout> = (props) => {
  return (
    <Form layout="vertical" className={styles.section}>
      <Row>
        <Col>
          <Typography.Title className={styles.title} level={2}>
            Quản lý thiết bị
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <Card>
            <Row>
              <Col>
                <Typography.Title className={styles.title} level={3}>
                  Thông tin thiết bị
                </Typography.Title>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label={<Typography.Text strong>Mã thiết bị:</Typography.Text>}
                >
                  <Input size="large" placeholder="Nhập mã thiết bị" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={
                    <Typography.Text strong>Loại thiết bị:</Typography.Text>
                  }
                >
                  <Select
                    size="large"
                    placeholder="Chọn loại thiết bị"
                    loading={props.deviceTypeloading}
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ fontSize: "20px", color: "#FF7506" }}
                      />
                    }
                  >
                    {props.deviceTypeData.map((value, index) => (
                      <Option key={index} value={value.id}>
                        {value.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col flex={1}>
                <Form.Item
                  label={
                    <Typography.Text strong>Tên thiết bị:</Typography.Text>
                  }
                >
                  <Input size="large" placeholder="Nhập tên thiết bị" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item
                  label={
                    <Typography.Text strong>Tên đăng nhập:</Typography.Text>
                  }
                >
                  <Input size="large" placeholder="Nhập tài khoản" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col flex={1}>
                <Form.Item
                  label={<Typography.Text strong>Địa chỉ IP:</Typography.Text>}
                >
                  <Input size="large" placeholder="Nhập địa chỉ IP" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item
                  label={<Typography.Text strong>Mật khẩu:</Typography.Text>}
                >
                  <Input size="large" placeholder="Nhập mật khẩu" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col flex={1}>
                <Form.Item
                  label={
                    <Typography.Text strong>Dịch vụ sử dụng:</Typography.Text>
                  }
                >
                  <Select
                    mode="multiple"
                    allowClear
                    size="large"
                    placeholder="Nhập dịch vụ sử dụng"
                  >
                    <Option key={1} value={"Khám tim mạch"}>
                      Khám tim mạch
                    </Option>
                    <Option key={2} value={"Khám sản phụ khoa"}>
                      Khám sản phụ khoa
                    </Option>
                    <Option key={3} value={"Khám răng hàm mặt "}>
                      Khám răng hàm mặt
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={32} justify="center" className={styles.buttonContainer}>
        <Col>
          <Button type="primary" ghost size="large" className={styles.button}>
            Hủy bỏ
          </Button>
        </Col>
        <Col>
          <Button size="large" type="primary" className={styles.button}>
            Cập nhật
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DeviceAddLayout;
