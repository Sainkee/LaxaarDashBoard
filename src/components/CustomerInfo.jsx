import React, { useState } from "react";
import { Table, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    title: "Customer Name",
    dataIndex: "customerName",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Job Number",
    dataIndex: "jobNumber",
  },
  {
    title: "Mobile Number",
    dataIndex: "mobileNumber",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => {
      const statusClass =
        text === "Completed"
          ? "status-completed"
          : text === "progress"
          ? "status-progress"
          : "status-uncompleted";

      return <span className={statusClass}>{text}</span>;
    },
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (actions, record) => (
      <div>
        {/* Edit button with Font Awesome edit icon */}
        {actions.includes("Edit") && (
          <Button
            
            icon={<FontAwesomeIcon icon={faEdit} />}
            className="fa-icon"
            onClick={() => handleEdit(record)}
          />
        )}
        {/* Delete button with Font Awesome trash icon */}
        {actions.includes("Delete") && (
          <Button
            className="fa-icon"
            icon={<FontAwesomeIcon icon={faTrash} />}
            onClick={() => handleDelete(record)}
          />
        )}
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    customerName: "Rida Talbi",
    date: "04/10/2021 ; 02:10 PM",
    jobNumber: "ABC000006",
    mobileNumber: "0661425689",
    status: "Completed",
    actions: ["Edit", "Delete"],
  },
  {
    key: "2",
    customerName: "Rida Talbi",
    date: "04/10/2021 ; 02:10 PM",
    jobNumber: "ABC000006",
    mobileNumber: "0661425689",
    status: "Completed",
    actions: ["Edit", "Delete"],
  },
  {
    key: "7",
    customerName: "Rida Talbi",
    date: "04/10/2021 ; 02:10 PM",
    jobNumber: "ABC000006",
    mobileNumber: "0661425689",
    status: "uncompleted",
    actions: ["Edit", "Delete"],
  },
  {
    key: "6",
    customerName: "Rida Talbi",
    date: "04/10/2021 ; 02:10 PM",
    jobNumber: "ABC000006",
    mobileNumber: "0661425689",
    status: "Completed",
    actions: ["Edit", "Delete"],
  },
  {
    key: "3",
    customerName: "Rida Talbi",
    date: "04/10/2021 ; 02:10 PM",
    jobNumber: "ABC000006",
    mobileNumber: "0661425689",
    status: "uncompleted",
    actions: ["Edit", "Delete"],
  },
  {
    key: "4",
    customerName: "Rida Talbi",
    date: "04/10/2021 ; 02:10 PM",
    jobNumber: "ABC000006",
    mobileNumber: "0661425689",
    status: "progress",
    actions: ["Edit", "Delete"],
  },
  {
    key: "5",
    customerName: "Rida Talbi",
    date: "04/10/2021 ; 02:10 PM",
    jobNumber: "ABC000006",
    mobileNumber: "0661425689",
    status: "progress",
    actions: ["Edit", "Delete"],
  },
];

const CustomerInfo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <Table
        className="TableOfdata"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 6,
          showQuickJumper: true, // Optional: allow quick jumping between pages
        }}
      />
    </div>
  );
};
export default CustomerInfo;
