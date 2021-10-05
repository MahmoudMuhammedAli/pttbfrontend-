import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import DataTable from "react-data-table-component";
import { MapPin, Calendar, Package, ChevronUp } from "react-feather";
import D from "./customDT.module.css";
import "./global.css";

function DataTablePagination() {
  const [show, setShow] = useState(false);
  const [columns, setColumns] = useState(
    window.innerWidth > 560
      ? [
          {
            name: "Date",
            selector: "date",

            sortable: true,
          },
          {
            name: "Current Location",
            selector: "location",

            sortable: true,
          },
          {
            name: "Qty",
            selector: "qty",

            sortable: true,
          },
        ]
      : [
          {
            name: "Info",
            id: "info",
            sortable: true,
            cell: (row) => (
              <div className="d-flex my-3 w-10 flex-wrap flex-column">
                <div className={D.col}>
                  <span className={`${D.Title} ${D.locationSVG}`}>
                    <MapPin size={20} />
                  </span>
                  <span className={D.location}>{row.location}</span>
                </div>
                <div className={D.col}>
                  <span className={D.Title}>
                    <Calendar size={20} />
                  </span>

                  <span className={D.date}>{row.date}</span>
                </div>
                <div className={D.colQty}>
                  <span className={D.Title}>
                    <Package size={20} />
                  </span>
                  <span className={D.qty}>{row.qty}</span>
                </div>
              </div>
            ),
          },
        ]
  );
  const [data, setData] = useState([
    {
      date: "11/7/2020",
      location: "Dashev",
      qty: 1,
    },
    {
      date: "5/25/2021",
      location: "cairo",
      qty: 2,
    },
    {
      date: "9/3/2021",
      location: "Ostrov",
      qty: 3,
    },
    {
      date: "7/29/2021",
      location: "Quva",
      qty: 4,
    },
    {
      date: "9/5/2021",
      location: "San Julian",
      qty: 5,
    },
    {
      date: "9/25/2021",
      location: "Oslo",
      qty: 6,
    },
    {
      date: "5/14/2021",
      location: "Purwasari",
      qty: 7,
    },
    {
      date: "2/19/2021",
      location: "Santo Domingo",
      qty: 8,
    },
    {
      date: "5/29/2021",
      location: "Warungsugan",
      qty: 9,
    },
    {
      date: "10/25/2020",
      location: "Město Libavá",
      qty: 10,
    },
    {
      date: "3/3/2021",
      location: "Galitsy",
      qty: 11,
    },
    {
      date: "5/3/2021",
      location: "Paris 09",
      qty: 12,
    },
    {
      date: "1/15/2021",
      location: "Haikou",
      qty: 13,
    },
    {
      date: "11/15/2020",
      location: "Seroa",
      qty: 14,
    },
    {
      date: "10/5/2020",
      location: "Jinghong",
      qty: 15,
    },
    {
      date: "4/29/2021",
      location: "Moba",
      qty: 16,
    },
    {
      date: "10/22/2020",
      location: "Pécs",
      qty: 17,
    },
    {
      date: "2/27/2021",
      location: "Roshnik",
      qty: 18,
    },
    {
      date: "12/11/2020",
      location: "Bella Vista",
      qty: 19,
    },
    {
      date: "1/22/2021",
      location: "Vallehermoso",
      qty: 20,
    },
    {
      date: "10/8/2020",
      location: "Chaoyang",
      qty: 21,
    },
    {
      date: "4/28/2021",
      location: "Pruchnik",
      qty: 22,
    },
    {
      date: "9/23/2021",
      location: "South Tangerang",
      qty: 23,
    },
    {
      date: "5/23/2021",
      location: "Pradera",
      qty: 24,
    },
    {
      date: "12/31/2020",
      location: "Laju Kidul",
      qty: 25,
    },
    {
      date: "5/15/2021",
      location: "Stalís",
      qty: 26,
    },
    {
      date: "3/31/2021",
      location: "Pangnirtung",
      qty: 27,
    },
    {
      date: "8/3/2021",
      location: "Vitrolles",
      qty: 28,
    },
    {
      date: "4/17/2021",
      location: "Néos Skopós",
      qty: 29,
    },
    {
      date: "3/12/2021",
      location: "Sinajana Village",
      qty: 30,
    },
    {
      date: "1/7/2021",
      location: "Cartagena",
      qty: 31,
    },
    {
      date: "10/23/2020",
      location: "Kabankalan",
      qty: 32,
    },
    {
      date: "6/21/2021",
      location: "Iraquara",
      qty: 33,
    },
    {
      date: "4/11/2021",
      location: "Xia’ertai",
      qty: 34,
    },
    {
      date: "6/14/2021",
      location: "Dukoh",
      qty: 35,
    },
    {
      date: "12/17/2020",
      location: "Nizhniy Kurkuzhin",
      qty: 36,
    },
    {
      date: "10/18/2020",
      location: "Wailolong",
      qty: 37,
    },
    {
      date: "12/25/2020",
      location: "Powidz",
      qty: 38,
    },
    {
      date: "2/6/2021",
      location: "Plaza de Caisán",
      qty: 39,
    },
    {
      date: "11/15/2020",
      location: "Bintuni",
      qty: 40,
    },
    {
      date: "4/14/2021",
      location: "Binawara",
      qty: 41,
    },
    {
      date: "6/16/2021",
      location: "Myrnyy",
      qty: 42,
    },
    {
      date: "12/15/2020",
      location: "Babao",
      qty: 43,
    },
    {
      date: "2/13/2021",
      location: "Starý Bohumín",
      qty: 44,
    },
    {
      date: "6/4/2021",
      location: "Acul du Nord",
      qty: 45,
    },
    {
      date: "2/6/2021",
      location: "Chervonopartyzans’k",
      qty: 46,
    },
    {
      date: "11/6/2020",
      location: "Xinzhaiping",
      qty: 47,
    },
    {
      date: "9/18/2021",
      location: "Nouna",
      qty: 48,
    },
    {
      date: "12/2/2020",
      location: "Serra de Água",
      qty: 49,
    },
    {
      date: "6/2/2021",
      location: "Tsumeb",
      qty: 50,
    },
    {
      date: "10/27/2020",
      location: "Huangliang",
      qty: 51,
    },
    {
      date: "7/21/2021",
      location: "Matingain",
      qty: 52,
    },
    {
      date: "1/4/2021",
      location: "Bengubelan",
      qty: 53,
    },
    {
      date: "4/27/2021",
      location: "Caála",
      qty: 54,
    },
    {
      date: "1/22/2021",
      location: "Camangcamang",
      qty: 55,
    },
    {
      date: "10/19/2020",
      location: "Vellinge",
      qty: 56,
    },
    {
      date: "9/21/2021",
      location: "José Bonifácio",
      qty: 57,
    },
    {
      date: "1/13/2021",
      location: "Kurchaloy",
      qty: 58,
    },
    {
      date: "12/14/2020",
      location: "Talisay",
      qty: 59,
    },
    {
      date: "7/21/2021",
      location: "Lukavec",
      qty: 60,
    },
    {
      date: "10/31/2020",
      location: "Riachos",
      qty: 61,
    },
    {
      date: "4/27/2021",
      location: "La Oroya",
      qty: 62,
    },
    {
      date: "4/26/2021",
      location: "Ridder",
      qty: 63,
    },
    {
      date: "11/18/2020",
      location: "Plereyan",
      qty: 64,
    },
    {
      date: "1/13/2021",
      location: "Katyr-Yurt",
      qty: 65,
    },
    {
      date: "10/1/2021",
      location: "Selínia",
      qty: 66,
    },
    {
      date: "5/5/2021",
      location: "Springfield",
      qty: 67,
    },
    {
      date: "9/5/2021",
      location: "Mashava",
      qty: 68,
    },
    {
      date: "6/22/2021",
      location: "Frederiksberg",
      qty: 69,
    },
    {
      date: "8/21/2021",
      location: "Cocieri",
      qty: 70,
    },
    {
      date: "11/24/2020",
      location: "Viçosa",
      qty: 71,
    },
    {
      date: "8/6/2021",
      location: "Batan",
      qty: 72,
    },
    {
      date: "2/1/2021",
      location: "Simpang",
      qty: 73,
    },
    {
      date: "7/13/2021",
      location: "Lages",
      qty: 74,
    },
    {
      date: "11/27/2020",
      location: "Sarlat-la-Canéda",
      qty: 75,
    },
    {
      date: "4/13/2021",
      location: "Iţsā",
      qty: 76,
    },
    {
      date: "10/29/2020",
      location: "Rumphi",
      qty: 77,
    },
    {
      date: "10/5/2020",
      location: "Gérakas",
      qty: 78,
    },
    {
      date: "4/28/2021",
      location: "Jinshan",
      qty: 79,
    },
    {
      date: "3/14/2021",
      location: "Diaowei",
      qty: 80,
    },
    {
      date: "12/24/2020",
      location: "Antang",
      qty: 81,
    },
    {
      date: "10/2/2020",
      location: "Tovačov",
      qty: 82,
    },
    {
      date: "12/31/2020",
      location: "Las Higueras",
      qty: 83,
    },
    {
      date: "3/20/2021",
      location: "Manukaka",
      qty: 84,
    },
    {
      date: "11/27/2020",
      location: "Qiaosi",
      qty: 85,
    },
    {
      date: "7/21/2021",
      location: "Inanwatan",
      qty: 86,
    },
    {
      date: "4/19/2021",
      location: "Saratov",
      qty: 87,
    },
    {
      date: "5/24/2021",
      location: "Masape",
      qty: 88,
    },
    {
      date: "11/8/2020",
      location: "Bergen",
      qty: 89,
    },
    {
      date: "2/20/2021",
      location: "Gjinkar",
      qty: 90,
    },
    {
      date: "6/10/2021",
      location: "Węgorzyno",
      qty: 91,
    },
    {
      date: "3/27/2021",
      location: "Tallahassee",
      qty: 92,
    },
    {
      date: "5/11/2021",
      location: "Jianghua",
      qty: 93,
    },
    {
      date: "8/2/2021",
      location: "Širvintos",
      qty: 94,
    },
    {
      date: "9/14/2021",
      location: "Qandala",
      qty: 95,
    },
    {
      date: "8/24/2021",
      location: "Chencai",
      qty: 96,
    },
    {
      date: "4/26/2021",
      location: "Andrushivka",
      qty: 97,
    },
    {
      date: "1/19/2021",
      location: "Bizana",
      qty: 98,
    },
    {
      date: "8/26/2021",
      location: "Linköping",
      qty: 99,
    },
    {
      date: "4/21/2021",
      location: "Lindong",
      qty: 100,
    },
  ]);
  return (
    <Card>
      <div
        className="d-flex flex-row gap-3 cursor-pointer  ml-2 bg-transparent"
        onClick={() => {
          setShow(!show);
        }}
      >
        <ChevronUp
          style={{
            transition: ".15s",
            transform: show ? "rotate(180deg)" : "rotate(90deg)",
          }}
        />
        <p className="text-capitalize text-bold-600 ml-2">inbounds</p>
      </div>
      <CardBody>
        {show && (
          <React.Fragment>
            <DataTable
              data={data}
              columns={columns}
              noHeader
              responsive
              striped={window.innerWidth < 560}
              highlightOnHover
              pagination={data.length > 10}
            />
          </React.Fragment>
        )}
      </CardBody>
    </Card>
  );
}

export default DataTablePagination;
