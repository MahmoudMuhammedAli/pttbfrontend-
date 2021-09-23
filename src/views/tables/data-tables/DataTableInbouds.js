import React from "react"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import DataTable from "react-data-table-component"
import SimpleTable from "../react-tables/SimpleTable"
const res = [
  {
    "masterSKU": "mst-moft-laptop-stand-dark-grey",
    "inventory_details": {
      "inbounds": [],
      "sales": [
        {
          "storename": "interstellargoods.myshopify.com",
          "qty": 9
        }
      ],
      "other_use": []
    },
    "balance_stock_left": -9
  },
  {
    "masterSKU": "mst-skinners-M-black-blue",
    "inventory_details": {
      "inbounds": [],
      "sales": [],
      "other_use": []
    },
    "balance_stock_left": 0
  },
  {
    "masterSKU": "mst-determinant-face-mask-white",
    "inventory_details": {
      "inbounds": [],
      "sales": [
        {
          "storename": "interstellargoods.myshopify.com",
          "qty": 231
        }
      ],
      "other_use": []
    },
    "balance_stock_left": -231
  },
  {
    "masterSKU": "mst-det-all-occasion-smart-shirt-pblue-reg-39",
    "inventory_details": {
      "inbounds": [],
      "sales": [],
      "other_use": []
    },
    "balance_stock_left": 0
  }
]
const columns = [
  {
    name: "Date",
    selector: "id",
    sortable: true
  },
  {
    name: "Current Location",
    selector: "first_name",
    sortable: true
  },
  {
    name: "Qty",
    selector: "first_name",
    sortable: true
  }
]

const data = [
  {
    id: 1,
    first_name: "Alyss",
    last_name: "Lillecrop",
    email: "alillecrop0@twitpic.com",
    gender: "Female"
  }
]

class DataTableInbounds extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
        </CardHeader>
        <CardBody>
          <DataTable data={data} columns={columns} noHeader />
        </CardBody>
      </Card>
    )
  }
}

export default DataTableInbounds
