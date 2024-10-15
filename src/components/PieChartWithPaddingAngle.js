import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box"; 
import useTheme from '../contexts/themeContext'; // Ensure this hook exists

export default function PieChartWithIndividualBorderRadius() {
  const { theme } = useTheme();
  const currentTheme = theme === "light";
  
  const data = [
    { label: "Direct", value: 20, color: currentTheme ? "#95A4FC" : "#95A4FC", num: "$300.56" },
    { label: "Affilliate", value: 35, color: currentTheme ? "#1C1C1C" : "#C6C7F8", num: "$135.18" },
    { label: "Sponsored", value: 35, color: currentTheme ? "#BAEDBD" : "#BAEDBD", num: "$154.02" },
    { label: "E-mail", value: 10, color: currentTheme ? "#B1E3FF" : "#B1E3FF", num: "$48.96" },
  ];

  return (
    <div className="pieBlock p-4">
        <p className='text-left text-[0.972vw] font-semibold'>Total Sales</p>
        <Stack direction="row">
      <Box
        sx={{
          borderRadius: "16px 4px 20px 8px", // Different border radius for each corner
          overflow: "hidden",
          border: "1px solid #ccc", // Adding border for visibility
          padding: "10px", // Optional: adding some padding inside the Box
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional: Adding a shadow effect
        }}
      >
        <PieChart
          series={[
            {
              paddingAngle: 2,
              innerRadius: 50,
              outerRadius: 80,
              cornerRadius:10,
              data,
            },
          ]}
          margin={{ top: 2, bottom: 2, left: 2, right: 2 }}
          width={200}
          height={200}
          legend={{ hidden: true }}
        />
      </Box>
    </Stack>

    <ul className="pieLabelList">
        {
            data.map((el, i) => (
                <li key = {i} className={`flex justify-between lab-${i+1}`}><span>{el.label}</span>{el.num}</li>
            ))
        }
    </ul>
    </div>
  );
}
