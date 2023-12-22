import React, { useEffect } from "react";
import { useState } from "react";
import ApexCharts from "apexcharts"; // Adjust for your library

interface ChartData {
  labels: string[];
  values: number[];
}

const MyChart = () => {
  const [data, setData] = useState<ChartData>({ labels: [], values: [] });

  useEffect(() => {
    // Update data here - e.g., fetch from API or mock data
    setData({ labels: ["Label 1", "Label 2"], values: [10, 20] });
  }, []);

  useEffect(() => {
    const chart = new ApexCharts(document.getElementById("myChart"), {
      // Chart configuration options
      type: "bar",
      series: [
        {
          name: "My Series",
          data: data.values,
        },
      ],
      xaxis: {
        labels: {
          rotate: -45,
        },
      },
    });
    chart.render();
    return () => chart.destroy();
  }, [data]);

  return (
    <div>
      <div id="myChart"></div>
    </div>
  );
};

export default MyChart;
