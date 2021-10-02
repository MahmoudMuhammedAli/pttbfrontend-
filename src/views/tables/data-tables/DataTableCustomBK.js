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
import DataTableInbouds from "./DataTableInbounds";
import { Star, Search, MapPin ,Calendar ,Package , ShoppingCart, HelpCircle} from "react-feather";
import D from "./customDT.module.css";
const res = [
  {
    masterSKU: "mst-moft-laptop-stand-dark-grey",
    inventory_details: {
      inbounds: [{ date: "2015-10-2", currentLocation: "Cairo", qty: "5" }],
      sales: [
        {
          storename: "interstellargoods.myshopify.com",
          qty: 9,
        },
      ],
      other_use: [
        {
          reason: "damaged",
          qty: 9,
        },
      ],
    },
    balance_stock_left: -9,
  },
];

class DataTableCustomBK extends React.Component {
  state = {
    columns: [
      // {
      //   name: "Inbounds",
      //   selector: "name",
      //   sortable: true,
      //   minWidth: "200px",
      //   minHeight: "200px",
      //   cell: (row) => (
      //     <div className={D.inbounds}>
      //       <div className={D.col}>
      //         <span className={`${D.Title} ${D.locationSVG}`}><MapPin size={20}/></span>
      //         <span className={D.location}>{row.currentLocation}</span>
      //       </div>
      //       <div className={D.col}>
      //         <span className={D.Title}><Calendar size={20}/></span>

      //         <span className={D.date}>{row.date}</span>
      //       </div>
      //       <div className={D.colQty}>
      //         <span className={D.Title}><Package size={20} /></span>
      //         <span className={D.qty}>{row.qty}</span>
      //       </div>
      //     </div>
      //   ),
      // },
      {
        name: "Sales",
        selector: "sales",
        id: "sales",
        sortable: true,
      
        cell: (row) => (
          <div className={D.SalesHolder}>
            <div className={D.col}>
              <span className={D.Title}><ShoppingCart size={20}/> </span>

              <span className={D.reason}>{row.storename}</span>
            </div>
            <div className={D.colQty}>
              <span className={D.Title}><Package size={20} /></span>
              <span className={D.otherQty}>{row.saleQty}</span>
            </div>
          </div>
        ),
      },
      {
        name: "Other reasons",
        selector: "others",
        id : "others", 
       
        sortable: true,
        cell: (row) => (
          <div className={D.otherHolder}>
            <div className={D.col}>
              <span className={D.Title}><HelpCircle size={20} /></span>

              <span className={D.reason}>{row.reason}</span>
            </div>
            <div className={D.colQty}>
              <span className={D.Title}><Package size={20}/></span>
              <span className={D.otherQty}>{row.otherQty}</span>
            </div>
          </div>
        ),
      },
    ],

    data: [
      {
        date: "2015-10-2",
        currentLocation: "Cairo",
        qty: "5",
        storename: "interstellargoods.myshopify.com",
        saleQty: 9,
        reason: "damaged",
        otherQty: 9,
      },
      {
        date: "2015-10-2",
        currentLocation: "Cairo",
        qty: "5",
        storename: "interstellargoods.myshopify.com",
        saleQty: 9,
        reason: "damaged",
        otherQty: 9,
      },
      {
        date: "2015-10-2",
        currentLocation: "Cairo",
        qty: "5",
        storename: "interstellargoods.myshopify.com",
        saleQty: 9,
        reason: "damaged",
        otherQty: 9,
      }
    ],
    filteredData: [],
    value: "",
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
            striped
            responsive
            highlightOnHover
            fixedHeader
            noHeader
          />
        </CardBody>
      </Card>
    );
  }
}

export default DataTableCustomBK;

/* search mechanism 
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



*/
