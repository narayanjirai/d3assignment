import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../../App.css";

function SideBar() {

    const [select, setSelectmenu] = useState("dashboard")
    const navigate = useNavigate();
    const selectmenu = (menuitem) => {
        setSelectmenu(menuitem);
        navigate("/mainpage");
    }

    return (
        <div className="sidebar_container">
            <div className={select === "dashboard" ? "sidebar_items" : "sidebar_items"}
                onClick={() => selectmenu("dashboard")}>
                dashboard
            </div>
            <div className={select === "dashboard" ? "sidebar_items seleted" : "sidebar_items"}
                onClick={() => selectmenu("dashboard")}>
                dashboard
            </div>
            <div className={select === "Accounts" ? "sidebar_items seleted" : "sidebar_items"}
                onClick={() => selectmenu("Accounts")}>
                Accounts
            </div>
            <div className={select === "Payroll" ? "sidebar_items seleted" : "sidebar_items"}
                onClick={() => selectmenu("Payroll")}>
                Payroll
            </div>
            <div className={select === "Reports" ? "sidebar_items seleted" : "sidebar_items"}
                onClick={() => selectmenu("Reports")}>
                Reports
            </div>
            <div className={select === "Advisor" ? "sidebar_items seleted" : "sidebar_items"}
                onClick={() => selectmenu("Advisor")}>
                Advisor
            </div>
            <div className={select === "Contacts" ? "sidebar_items seleted" : "sidebar_items"}
                onClick={() => selectmenu("Contacts")}>
                Contacts
            </div>
        </div>
    );
}

export default SideBar;
