import { Avatar, Breadcrumb, Button, Image, Typography } from "antd";
import { Notification } from "iconsax-react";
import React, { Fragment, useMemo } from "react";
import styles from "./HeaderContent.module.scss";
import avatar from "../Assets/avatar.svg";
import { Link, useLocation } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const { Text } = Typography;

const HeaderContent = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbNameMap: Record<string, string> = {
    F: "dashboard",
    "/devicesF": "Thiết bị",
    "/devices": "Danh sách thiết bị",
    "/devices/add": "Thêm thiết bị",
    "/devices/:id": `Chi tiết thiết bị`,
    "/devices/update/:id": "Cập nhật thiết bị",
    "/servicesF": "Dịch vụ",
    "/services": "Danh sách dịch vụ",
    "/providerF": "Cấp số",
    "/provider": "Danh sách cấp số",
  };

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;

    if (breadcrumbNameMap[url]) {
      return (
        <Fragment key={index}>
          {index === 0 && (
            <Breadcrumb.Item key={url + "F"}>
              {breadcrumbNameMap[url + "F"]}
            </Breadcrumb.Item>
          )}
          <Breadcrumb.Item key={index}>
            <Link to={url}>{breadcrumbNameMap[url]}</Link>
          </Breadcrumb.Item>
        </Fragment>
      );
    }
  });

  const breadcrumbItems = useMemo(
    () =>
      location.pathname === "/"
        ? [
            <Breadcrumb.Item key="home">
              <Link to="/">Dashboard</Link>
            </Breadcrumb.Item>,
          ]
        : extraBreadcrumbItems,
    [location, extraBreadcrumbItems]
  );

  return (
    <div className={styles.headerWrapper}>
      <div>
        <Breadcrumb separator={<RightOutlined />}>{breadcrumbItems}</Breadcrumb>
      </div>

      <div className={styles.avatarContainer}>
        <Button
          type="primary"
          className={styles.notificationButton}
          shape="circle"
          icon={<Notification variant="Bold" size="20" />}
        />
        <Link to="/info" className={styles.infoContainer}>
          <Avatar size={40} src={<Image src={avatar} preview={false} />} />
          <div className={styles.nameContainer}>
            <Text className={styles.hello}>Xin chào</Text>
            <Text className={styles.name}>Phùng Duy Khang</Text>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderContent;
