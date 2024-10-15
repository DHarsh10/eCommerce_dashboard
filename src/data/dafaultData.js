import { Percent } from "@mui/icons-material"
import {
    stonksUp,
    stonksDown,
    stonksUpDark,
    stonksDownDark
} from "../utils/assets/svgs/index"

export const ordersData = [
    {
        name: "Customers",
        numbers: "3,781",
        stonks: "+11.01%",
        img: [stonksUp, stonksUp]
    },
    {
        name: "Orders",
        numbers: "1,219",
        stonks: "-0.03%",
        img: [stonksDown, stonksDownDark]
    },
    {
        name: "Revenue",
        numbers: "$695",
        stonks: "+15.03%",
        img: [stonksUp, stonksUpDark]
    },
    {
        name: "Growth",
        numbers: "30.1%",
        stonks: "+6.08%",
        img: [stonksUp, stonksUp]
    }
]

export const locationRevenueData = [
    {
        city: "New York",
        Percent: "72"
    },
    {
        city: "San Francisco",
        Percent: "39"
    },
    {
        city: "Sydney",
        Percent: "25"
    },
    {
        city: "Singapore",
        Percent: "61"
    }
]