import { Image, Menu, MenuProps } from "antd";
import React from "react";
import styles from "./SiderContent.module.scss";
import logo from "../Assets/logo.svg";

const items: MenuProps["items"] = [
  {
    label: "DashBoard",
    key: "1",
  },
  {
    label: "DashBoard",
    key: "2",
  },
  {
    label: "DashBoard",
    key: "3",
  },
  {
    label: "DashBoard",
    key: "4",
  },
  {
    label: "DashBoard",
    key: "5",
  },
  {
    label: "DashBoard",
    key: "sub1",
    children: [
      {
        label: "DashBoard",
        key: "sub1:1",
      },
      {
        label: "DashBoard",
        key: "sub1:2",
      },
      {
        label: "DashBoard",
        key: "sub1:3",
      },
    ],
  },
];

const SiderContent = () => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <Image src={logo} />
      </div>
      <Menu items={items} />
    </div>
  );
};

export default SiderContent;
