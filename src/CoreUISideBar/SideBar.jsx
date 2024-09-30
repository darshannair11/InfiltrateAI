import React from "react";
import Divider from "@mui/material/Divider";
import "@coreui/coreui/dist/css/coreui.min.css";
import HomeIcon from "@mui/icons-material/Home";
import WifiFindIcon from "@mui/icons-material/WifiFind";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import {
  CSidebar,
  CSidebarHeader,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CBadge,
  CNavGroup,
  CSidebarBrand,
} from "@coreui/react";
import "./styles.css";

export function SideBar() {
  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      style={{
        height: "100vh",
        position: "fixed",
        backgroundColor: "#062C30",
        color: "#FEFAF6",
        display: "flex",
        flexDirection: "column",
        width: "260px",
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand className="custom-navbar-brand">
          Infiltrate AI
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav style={{ flex: 1 }}>
        <CNavTitle>Dashboard</CNavTitle>
        <CNavItem href="#">
          <HomeIcon
            style={{
              verticalAlign: "top",
              marginRight: "3px",
              marginBottom: "2px",
            }}
          />{" "}
          Home
        </CNavItem>
        <CNavItem href="#">
          <WifiFindIcon
            style={{
              verticalAlign: "top",
              marginRight: "3px",
              marginBottom: "2px",
            }}
          />
          Start a Scan <CBadge color="primary ms-auto">ADD</CBadge>
        </CNavItem>
        <CNavGroup
          toggler={
            <>
              <SafetyCheckIcon
                style={{
                  verticalAlign: "top",
                  marginRight: "3px",
                  marginBottom: "2px",
                }}
              />{" "}
              Previous Scans
            </>
          }
        >
          <CNavItem href="#">
            <span className="nav-icon"></span> Scan 1{" "}
            <CBadge color="primary ms-auto">COMPLETED</CBadge>
          </CNavItem>
          <CNavItem href="#">
            <span className="nav-icon"></span> Scan 2{" "}
            <CBadge color="primary ms-auto">ONGOING</CBadge>
          </CNavItem>
        </CNavGroup>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <CNavItem href="https://coreui.io" className="nav-item-bottom">
          About Infiltrate AI
        </CNavItem>
        <CNavItem href="https://coreui.io/pro/">Profile</CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
}
