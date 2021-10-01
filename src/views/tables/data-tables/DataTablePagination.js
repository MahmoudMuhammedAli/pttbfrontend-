import React from "react"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import DataTable from "react-data-table-component"

const columns = [
  {
    name: "Date",
    selector: "Date",
    sortable: true
  },
  {
    name: "Current Location",
    selector: "location",
    sortable: true
  },
  {
    name: "Qty",
    selector: "qty",
    sortable: true
  }
]

const data = [
  {
    id: "39-4771822",
    name: "Irv Josselson",
    Job_title: "Product Engineer",
    skill: "Key Account Management",
    salary: "$3723.32"
  },
  {
    id: "49-9001520",
    name: "Herby Buxsy",
    Job_title: "Web Designer IV",
    skill: "VSAM",
    salary: "$9690.39"
  },
  {
    id: "63-1420126",
    name: "Erik Capron",
    Job_title: "VP Marketing",
    skill: "EP",
    salary: "$2174.25"
  },
  {
    id: "85-1701479",
    name: "Min Elsmere",
    Job_title: "Help Desk Operator",
    skill: "Rotating Equipment",
    salary: "$9698.06"
  },
  {
    id: "25-6134818",
    name: "Wilmette Beggin",
    Job_title: "Sales Associate",
    skill: "BJT",
    salary: "$8023.20"
  },
  {
    id: "45-1674363",
    name: "Karney Shovelton",
    Job_title: "Actuary",
    skill: "DV",
    salary: "$2954.95"
  },
  {
    id: "82-5283205",
    name: "Anya Tumbelty",
    Job_title: "Project Manager",
    skill: "DFS",
    salary: "$4586.59"
  },
  {
    id: "20-7192766",
    name: "Gates Conradie",
    Job_title: "Cost Accountant",
    skill: "Ultrasonics",
    salary: "$8205.23"
  },
  {
    id: "56-5503064",
    name: "Derron Dahlback",
    Job_title: "Dental Hygienist",
    skill: "VBAC",
    salary: "$6907.90"
  },
  {
    id: "88-5128610",
    name: "Bernarr Tydeman",
    Job_title: "Senior Cost Accountant",
    skill: "Image Manipulation",
    salary: "$7593.62"
  },
  {
    id: "51-7471492",
    name: "Sibyl Amthor",
    Job_title: "Nurse",
    skill: "LMS Test.Lab",
    salary: "$6507.97"
  },
  {
    id: "50-6598195",
    name: "Quincy Founds",
    Job_title: "Tax Accountant",
    skill: "WSE",
    salary: "$4039.51"
  },
  {
    id: "46-4885608",
    name: "Richmond McKitterick",
    Job_title: "Technical Writer",
    skill: "mLearning",
    salary: "$5264.54"
  },
  {
    id: "17-3568868",
    name: "Joyous Cundey",
    Job_title: "Assistant Media Planner",
    skill: "MP3",
    salary: "$2591.20"
  },
  {
    id: "34-1010373",
    name: "Ruttger Heatly",
    Job_title: "Database Administrator II",
    skill: "FPA",
    salary: "$2755.98"
  },
  {
    id: "02-0334091",
    name: "Emmet Snadden",
    Job_title: "Sales Associate",
    skill: "UL",
    salary: "$7346.24"
  },
  {
    id: "56-6166703",
    name: "Randal Slatter",
    Job_title: "GIS Technical Architect",
    skill: "Channel Partners",
    salary: "$4138.58"
  },
  {
    id: "56-2788303",
    name: "Misty Farrall",
    Job_title: "Biostatistician IV",
    skill: "VPLS",
    salary: "$4309.57"
  },
  {
    id: "62-7041114",
    name: "Leoine Angrick",
    Job_title: "Nurse Practicioner",
    skill: "Web Analytics",
    salary: "$9867.89"
  },
  {
    id: "63-5519247",
    name: "Gusta MacVagh",
    Job_title: "Research Associate",
    skill: "MRPII",
    salary: "$1259.87"
  },
  {
    id: "02-8622207",
    name: "Blakelee Trowler",
    Job_title: "Nurse Practicioner",
    skill: "Improvisation",
    salary: "$5176.55"
  },
  {
    id: "34-9814193",
    name: "Lyndsey Sumption",
    Job_title: "Accountant II",
    skill: "FPC 1",
    salary: "$3615.70"
  },
  {
    id: "53-0772100",
    name: "Cass Rainsdon",
    Job_title: "Analyst Programmer",
    skill: "Snow Leopard",
    salary: "$2275.19"
  },
  {
    id: "68-6136006",
    name: "Hussein Peatt",
    Job_title: "Administrative Officer",
    skill: "TWiki",
    salary: "$2202.65"
  },
  {
    id: "52-8655965",
    name: "Stanislas Weathey",
    Job_title: "Physical Therapy Assistant",
    skill: "NICU",
    salary: "$1285.65"
  },
  {
    id: "98-1533931",
    name: "Sean Nurden",
    Job_title: "Media Manager III",
    skill: "Veterinary Medicine",
    salary: "$2355.09"
  },
  {
    id: "80-6843020",
    name: "Robert Burgott",
    Job_title: "Technical Writer",
    skill: "SQL PL",
    salary: "$6181.63"
  },
  {
    id: "05-2939471",
    name: "Tamqrah Gawthorpe",
    Job_title: "Mechanical Systems Engineer",
    skill: "USDA",
    salary: "$8087.90"
  },
  {
    id: "92-2002994",
    name: "Dru O'Farrell",
    Job_title: "Teacher",
    skill: "DFU",
    salary: "$6436.26"
  },
  {
    id: "84-2461596",
    name: "Paulette Coghlan",
    Job_title: "Nuclear Power Engineer",
    skill: "Substance Use Disorders",
    salary: "$8865.40"
  },
  {
    id: "54-0592230",
    name: "Claire Franceschelli",
    Job_title: "Nurse Practicioner",
    skill: "LGBT Rights",
    salary: "$6160.04"
  },
  {
    id: "49-6724516",
    name: "Clareta Dovidaitis",
    Job_title: "Junior Executive",
    skill: "AKTA",
    salary: "$9334.82"
  },
  {
    id: "40-2963802",
    name: "Samuel D'Angeli",
    Job_title: "Editor",
    skill: "Teaching Writing",
    salary: "$9448.99"
  },
  {
    id: "30-2534196",
    name: "Kaia Gully",
    Job_title: "Clinical Specialist",
    skill: "Olefins",
    salary: "$5114.83"
  },
  {
    id: "04-6909567",
    name: "Iris Tomowicz",
    Job_title: "Payment Adjustment Coordinator",
    skill: "Land Use Planning",
    salary: "$3593.02"
  },
  {
    id: "17-1972776",
    name: "Mable Bowery",
    Job_title: "Computer Systems Analyst IV",
    skill: "IA32",
    salary: "$8772.72"
  },
  {
    id: "58-9315753",
    name: "Corbie Stickings",
    Job_title: "Physical Therapy Assistant",
    skill: "DGA",
    salary: "$7216.57"
  },
  {
    id: "99-2197211",
    name: "Sabrina Ebanks",
    Job_title: "Desktop Support Technician",
    skill: "TBS",
    salary: "$4153.62"
  },
  {
    id: "24-8358111",
    name: "Benedetta Ripley",
    Job_title: "Account Coordinator",
    skill: "Air Compressors",
    salary: "$4181.38"
  },
  {
    id: "95-2063564",
    name: "Clovis Lenthall",
    Job_title: "Marketing Assistant",
    skill: "RSA Security",
    salary: "$4109.87"
  }
]

class DataTablePagination extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <DataTable data={data} columns={columns} noHeader pagination />
        </CardBody>
      </Card>
    )
  }
}

export default DataTablePagination
