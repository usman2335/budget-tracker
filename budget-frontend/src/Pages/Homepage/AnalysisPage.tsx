import { Typography } from "@mui/material";
import "../CSS/AnalysisPage.css";
import { Card } from "antd";
import { Line } from "react-chartjs-2";
import Chart from "../../Components/Chart/Chart";



const AnalysisPage = () => {

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Package Downloads Comparison',
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Downloads',
        },
        beginAtZero: true,
        ticks: {
          maxTicksLimit: 3,
        },
      },
    },
  };
  
  const data = {
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  return (
    <div>
      <div className="analysis-top">
        <Typography variant="h3">Analysis</Typography>
      </div>
      <div className = "graph-div">
        <Card title = {"Analysis"} className="card">
        <Chart></Chart>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisPage;
