import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  FormInstance,
  Input,
  Row,
  Typography,
} from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { valuesSubmitRoleAddType } from "..";
import styles from "./ManageRoleAddLayout.module.scss";

interface IManageRoleAddLayout {
  onFinish: (values: valuesSubmitRoleAddType) => void;
  loading: boolean;
  form: FormInstance;

  checkAllA: boolean;
  onChangeAllA: (e: CheckboxChangeEvent) => void;
  onChangeACell: () => void;

  checkAllB: boolean;
  onChangeAllB: (e: CheckboxChangeEvent) => void;
  onChangeBCell: () => void;

  checkAllC: boolean;
  onChangeAllC: (e: CheckboxChangeEvent) => void;
  onChangeCCell: () => void;
}

const { Text, Title } = Typography;

const ManageRoleAddLayout: FC<IManageRoleAddLayout> = (props) => {
  return (
    <Form
      onFinish={props.onFinish}
      layout="vertical"
      name="role-add"
      className={styles.section}
      form={props.form}
    >
      <Title level={2} className={styles.title}>
        Danh sách vai trò
      </Title>

      <Row>
        <Col flex="auto">
          <Card bordered={false}>
            <Row gutter={24}>
              <Col span={24} style={{ marginBottom: "20px" }}>
                <Title level={4} className={styles.title}>
                  Thông tin vai trò
                </Title>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="name"
                  label={
                    <Text strong>
                      Tên vai trò <span style={{ color: "#FF4747" }}>*</span>
                    </Text>
                  }
                  required={false}
                  rules={[
                    { required: true, message: "Vui lòng điền tên vai trò" },
                  ]}
                >
                  <Input size="large" placeholder="Nhập tên vai trò" />
                </Form.Item>
                <Form.Item
                  name="description"
                  label={<Text strong>Mô tả:</Text>}
                  required={false}
                  rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
                >
                  <Input.TextArea
                    size="large"
                    placeholder="Nhập mô tả"
                    style={{ height: "160px" }}
                  />
                </Form.Item>

                <div>
                  <Typography.Text type="secondary">
                    <span style={{ color: "#FF4747" }}>*</span> là trường thông
                    tin bắt buộc
                  </Typography.Text>
                </div>
              </Col>

              <Col span={12}>
                <Form.Item
                  label={
                    <Text strong>
                      Phân quyền chức năng{" "}
                      <span style={{ color: "#FF4747" }}>*</span>
                    </Text>
                  }
                >
                  <Card className={styles.cardCheckBox} bordered={false}>
                    <div>
                      <Title level={4} className={styles.title}>
                        Nhóm chức nắng A
                      </Title>
                      <Checkbox
                        className={styles.checkbox}
                        checked={props.checkAllA}
                        onChange={props.onChangeAllA}
                      >
                        <Text className={styles.checkBoxLabel}>Tất cả</Text>
                      </Checkbox>
                      <br />
                      <Form.Item name="authorityA">
                        <Checkbox.Group onChange={props.onChangeACell}>
                          <Checkbox value="ax" className={styles.checkbox}>
                            <Text className={styles.checkBoxLabel}>
                              Chức năng x
                            </Text>
                          </Checkbox>
                          <br />
                          <Checkbox value="ay" className={styles.checkbox}>
                            <Text className={styles.checkBoxLabel}>
                              Chức năng y
                            </Text>
                          </Checkbox>
                          <br />
                          <Checkbox value="az">
                            <Text className={styles.checkBoxLabel}>
                              Chức năng z
                            </Text>
                          </Checkbox>
                        </Checkbox.Group>
                      </Form.Item>
                    </div>

                    <div>
                      <Title level={4} className={styles.title}>
                        Nhóm chức nắng B
                      </Title>
                      <Checkbox
                        className={styles.checkbox}
                        checked={props.checkAllB}
                        onChange={props.onChangeAllB}
                      >
                        <Text className={styles.checkBoxLabel}>Tất cả</Text>
                      </Checkbox>
                      <br />
                      <Form.Item name="authorityB">
                        <Checkbox.Group onChange={props.onChangeBCell}>
                          <Checkbox value="bx" className={styles.checkbox}>
                            <Text className={styles.checkBoxLabel}>
                              Chức năng x
                            </Text>
                          </Checkbox>
                          <br />
                          <Checkbox value="by" className={styles.checkbox}>
                            <Text className={styles.checkBoxLabel}>
                              Chức năng y
                            </Text>
                          </Checkbox>
                          <br />
                          <Checkbox value="bz" className={styles.checkbox}>
                            <Text className={styles.checkBoxLabel}>
                              Chức năng z
                            </Text>
                          </Checkbox>
                        </Checkbox.Group>
                      </Form.Item>
                    </div>

                    <div>
                      <Title level={4} className={styles.title}>
                        Nhóm chức nắng C
                      </Title>
                      <Checkbox
                        className={styles.checkbox}
                        checked={props.checkAllC}
                        onChange={props.onChangeAllC}
                      >
                        <Text className={styles.checkBoxLabel}>Tất cả</Text>
                      </Checkbox>
                      <br />
                      <Form.Item name="authorityC">
                        <Checkbox.Group onChange={props.onChangeCCell}>
                          <Checkbox value="cx" className={styles.checkbox}>
                            <Text className={styles.checkBoxLabel}>
                              Chức năng x
                            </Text>
                          </Checkbox>
                          <br />
                          <Checkbox value="cy" className={styles.checkbox}>
                            <Text className={styles.checkBoxLabel}>
                              Chức năng y
                            </Text>
                          </Checkbox>
                          <br />
                          <Checkbox value="cz">
                            <Text className={styles.checkBoxLabel}>
                              Chức năng z
                            </Text>
                          </Checkbox>
                        </Checkbox.Group>
                      </Form.Item>
                    </div>
                  </Card>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={32} justify="center" className={styles.buttonContainer}>
        <Col>
          <Link to="/setting/manage-roles">
            <Button
              size="large"
              type="primary"
              ghost
              className={styles.button}
              disabled={props.loading}
            >
              Hủy bỏ
            </Button>
          </Link>
        </Col>
        <Col>
          <Button
            loading={props.loading}
            size="large"
            type="primary"
            className={styles.button}
            htmlType="submit"
          >
            Thêm
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ManageRoleAddLayout;
