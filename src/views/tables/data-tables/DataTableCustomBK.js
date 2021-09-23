import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  Button,
} from "reactstrap";
import DataTable from "react-data-table-component";
import DataTableBasic from "./DataTableBasic";
import DataTableSale from "./DataTableSale";
import DataTableOthers from "./DataTableOthers";
import DataTableInbouds from "./DataTableInbouds";
import { Star, Search } from "react-feather";
import D from "./customDT.module.css"
const res = [
  {
    masterSKU: "mst-moft-laptop-stand-dark-grey",
    inventory_details: {
      inbounds: [],
      sales: [
        {
          storename: "interstellargoods.myshopify.com",
          qty: 9,
        },
      ],
      other_use: [],
    },
    balance_stock_left: -9,
  },
  {
    masterSKU: "mst-skinners-M-black-blue",
    inventory_details: {
      inbounds: [],
      sales: [],
      other_use: [],
    },
    balance_stock_left: 0,
  },
  {
    masterSKU: "mst-determinant-face-mask-white",
    inventory_details: {
      inbounds: [],
      sales: [
        {
          storename: "interstellargoods.myshopify.com",
          qty: 231,
        },
      ],
      other_use: [],
    },
    balance_stock_left: -231,
  },
  {
    masterSKU: "mst-det-all-occasion-smart-shirt-pblue-reg-39",
    inventory_details: {
      inbounds: [],
      sales: [],
      other_use: [],
    },
    balance_stock_left: 0,
  },
];
const CustomHeader = (props) => {
  return <></>;
};

class DataTableCustomBK extends React.Component {
  state = {
    columns: [
      {
        name: "Name",
        selector: "name",
        sortable: true,
        minWidth: "200px",
        cell: (row) => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid rounded-circle"
                height="36"
                width="36"
                src={row.image}
                alt={row.name}
              />
            </div>
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.name}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row.name}
              </span>
              <small title={row.email}>{row.email}</small>
            </div>
          </div>
        ),
      },
      {
        name: "Date Created",
        selector: "date",
        sortable: true,
        cell: (row) => (
          <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
        ),
      },
      {
        name: "Status",
        selector: "status",
        sortable: true,
        cell: (row) => (
          <Badge
            color={row.status === "inactive" ? "light-danger" : "light-success"}
            pill
          >
            {row.status}
          </Badge>
        ),
      }
    ],

    data: [
      {
        image: require("../../../assets/img/portrait/small/avatar-s-2.jpg"),
        name: "Alyss Lillecrop",
        email: "alillecrop0@twitpic.com",
        date: "May 13, 2018",
        status: "active",
        revenue: "$32,000",
        ratings: "good"
      },
      {
        image: require("../../../assets/img/portrait/small/avatar-s-1.jpg"),
        name: "Shep Pentlow",
        email: "spentlow1@home.pl",
        date: "June 5, 2019",
        status: "active",
        revenue: "$50,000",
        ratings: "good"
      },
    ],
    filteredData: [],
    value: "",
  };

  handleFilter = (e) => {
    let value = e.target.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value });

    if (value.length) {
      filteredData = data.filter((item) => {
        let startsWithCondition =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.revenue.toLowerCase().startsWith(value.toLowerCase()) ||
          item.status.toLowerCase().startsWith(value.toLowerCase());
        let includesCondition =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.date.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.revenue.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase());

        if (startsWithCondition) {
          return startsWithCondition;
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };

  render() {
    let { data, columns, value, filteredData } = this.state;
    return (
      <Card>
        <CardBody className="rdt_Wrapper">
          <DataTable
            className="dataTable-custom"
            data={value.length ? filteredData : data}
            columns={columns}
            noHeader
            subHeader
            subHeaderComponent={
              <CustomHeader value={value} handleFilter={this.handleFilter} />
            }
          />
        </CardBody>
      </Card>
    );
  }
}

export default DataTableCustomBK;
