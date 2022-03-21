import { DeleteFilled, SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Row, Select, Table } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import fetchData, { deleteData, editData } from "../api/index";
import "./index.css";

export default function TableContent() {
  const [datas, setDatas] = useState<any[]>([]);

  const [obj, setObj] = useState<any>({});
  const [reRender, setReRender] = useState<boolean>(false);

  const selectionType = "checkbox";

  useEffect(() => {
    axios.get("https://tablemanage.herokuapp.com/table").then((response) => {
      setDatas(response.data);
    });
  }, [reRender]);

  const SelectRef = useRef<HTMLDivElement>(null);

  const columns = [
    {
      title: () => {
        return (
          <div style={{ textAlign: "center", height: "54px" }}>Quote ID</div>
        );
      },
      dataIndex: "key",
      key: "key",
      render(text: string) {
        return {
          props: {
            style: { color: "#008DFF" },
          },
          children: <span>{text}</span>,
        };
      },
      //Xử lý search theo ID
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }: any) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Search ID"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value: any, record: any) => {
        return record.key.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              width: "150px",
              textAlign: "center",
              height: "54px",
            }}
          >
            Care Recipient Name
          </div>
        );
      },
      dataIndex: "care_recipient_name",
      key: "care_recipient_name",
      //Xử lý search theo Name
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }: any) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Search Name"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value: any, record: any) => {
        return record.care_recipient_name
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              width: "150px",
              textAlign: "center",
            }}
          >
            Care Recipient DOB
            <DatePicker />
          </div>
        );
      },
      dataIndex: "care_recipient_dob",
      key: "care_recipient_dob",
      render(text: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <span>{text}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              width: "80px",
              textAlign: "center",
              height: "54px",
            }}
          >
            Hour Rate
          </div>
        );
      },
      dataIndex: "rate",
      key: "rate",
      render(text: number) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <span>{text}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80px",
              textAlign: "center",
            }}
            ref={SelectRef}
          >
            Short Term
            <Select onChange={handleChangeShortTerm}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "short_temp",
      key: "short_temp",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80px",
              textAlign: "center",
            }}
          >
            Contagion
            <Select onChange={handleChangeContagion}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "contagion",
      key: "contagion",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80px",
              textAlign: "center",
            }}
          >
            Emergency
            <Select onChange={handleChangeEmergency}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "emergency",
      key: "emergency",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "130px",
              textAlign: "center",
            }}
          >
            Mileage Surcharge
            <Select onChange={handleChangeMileageSurcharge}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "mileage_surcharge",
      key: "mileage_surcharge",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "105px",
              textAlign: "center",
            }}
          >
            Primary Quote
            <Select onChange={handleChangePrimaryQuote}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "primary_quote",
      key: "primary_quote",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              width: "150px",
              textAlign: "center",
            }}
          >
            Start Date
            <DatePicker />
          </div>
        );
      },
      dataIndex: "start_date",
      key: "start_date",
      render(text: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <span>{text}</span>,
        };
      },
    },
    {
      title: () => {
        return <div className="title-created">Created Date</div>;
      },
      dataIndex: "created_date",
      key: "created_date",
      sorter: (a: IDataType, b: IDataType) => {
        return (
          new Date(a.created_date).getTime() -
          new Date(b.created_date).getTime()
        );
      },
      render(text: IDataType) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <span>{text}</span>,
        };
      },
    },
    {
      title: () => {
        return <div className="title-created">Created By</div>;
      },
      dataIndex: "created_by",
      key: "created_by",
      sorter: (a: IDataType, b: IDataType) => {
        return a.created_by.length - b.created_by.length;
      },
    },
    {
      title: () => {
        return <div className="title-created">Updated Date</div>;
      },
      dataIndex: "updated_date",
      key: "updated_date",
      sorter: (a: IDataType, b: IDataType) => {
        return (
          new Date(a.updated_date).getTime() -
          new Date(b.updated_date).getTime()
        );
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "105px",
              textAlign: "center",
            }}
          >
            Status
            <Select
              showSearch
              placeholder="Select a status"
              onChange={handleChangeStatus}
            >
              <Option value="new">new</Option>
              <Option value="approved">approved</Option>
              <Option value="rejected">rejected</Option>
              <Option value="closed">closed</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "status",
      key: "status",
      render(text: any) {
        return {
          props: {
            style: { textAlign: "center" },
          },
          children: <div className="status">{text}</div>,
        };
      },
    },
    {
      title: "...",
      render: () => <DeleteFilled style={{ color: "orange" }} />,
    },
  ];

  //Call lại Api sau khi obj thay đổi.
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetchData(obj);
      setDatas(response.data);
    }
    fetchMyAPI();
  }, [obj]);

  //Xử lý thay đổi select cột short term
  const handleChangeShortTerm = async (e: string) => {
    if (e === "yes") {
      setObj({
        ...obj,
        short_temp: true,
      });
    } else {
      setObj({
        ...obj,
        short_temp: false,
      });
    }
  };

  //Xử lý thay đổi select cột Contagion
  const handleChangeContagion = async (e: string) => {
    if (e === "yes") {
      setObj({
        ...obj,
        contagion: true,
      });
    } else {
      setObj({
        ...obj,
        contagion: false,
      });
    }
  };

  //Xử lý thay đổi select cột Emergency
  const handleChangeEmergency = async (e: string) => {
    if (e === "yes") {
      setObj({
        ...obj,
        emergency: true,
      });
    } else {
      setObj({
        ...obj,
        emergency: false,
      });
    }
  };

  //Xử lý thay đổi select cột Mileage Surcharge
  const handleChangeMileageSurcharge = async (e: string) => {
    if (e === "yes") {
      setObj({
        ...obj,
        mileage_surcharge: true,
      });
    } else {
      setObj({
        ...obj,
        mileage_surcharge: false,
      });
    }
  };

  //Xử lý thay đổi select cột Primary Quote
  const handleChangePrimaryQuote = async (e: string) => {
    if (e === "yes") {
      setObj({
        ...obj,
        primary_quote: true,
      });
    } else {
      setObj({
        ...obj,
        primary_quote: false,
      });
    }
  };

  //Xử lý thay đổi select cột Status
  const handleChangeStatus = async (e: string) => {
    if (e === "new") {
      setObj({
        ...obj,
        status: e,
      });
    }

    if (e === "approved") {
      setObj({
        ...obj,
        status: e,
      });
    }

    if (e === "rejected") {
      setObj({
        ...obj,
        status: e,
      });
    }

    if (e === "closed") {
      setObj({
        ...obj,
        status: e,
      });
    }
  };

  const [valueOption, setValueOption] = useState<string>();
  const [key, setKey] = useState<React.Key[]>([]);

  const { Option } = Select;
  function handleChange(value: string) {
    console.log(`selected ${value}`);
    setValueOption(value);
  }

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setKey(selectedRowKeys);
    },
  };

  const handleCheckboxChangeData = async () => {
    if (valueOption === "delete") {
      await deleteData(key);
      setReRender(!reRender);
    }

    if (valueOption === "new") {
      await editData(key, valueOption);
      setReRender(!reRender);
    }

    if (valueOption === "approved") {
      await editData(key, valueOption);
      setReRender(!reRender);
    }

    if (valueOption === "rejected") {
      await editData(key, valueOption);
      setReRender(!reRender);
    }

    if (valueOption === "closed") {
      await editData(key, valueOption);
      setReRender(!reRender);
    }
  };

  return (
    <div>
      <Row>
        <Col span="8">
          {" "}
          <Select
            defaultValue="Change Status"
            style={{ width: "68%", textAlign: "left" }}
            onChange={handleChange}
          >
            <Option value="delete">Delete</Option>
            <Option value="new">new</Option>
            <Option value="approved">approved</Option>
            <Option value="rejected">rejected</Option>
            <Option value="closed">closed</Option>
          </Select>
          <Button onClick={handleCheckboxChangeData}>Apply</Button>
        </Col>
      </Row>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        dataSource={datas}
        columns={columns}
      />
    </div>
  );
}
