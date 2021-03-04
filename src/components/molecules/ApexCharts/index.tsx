import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

interface GraphProps {
  width?: number | string;
  type?: "bubble" | "heatmap" | "candlestick" | "radar";
}

interface ICharts {
  options?: any;
  series?: any;
}

const Wrapper = styled.div`
  height: auto;
  width: 100% !important;
  & .apexcharts-yaxis {
    & .apexcharts-text:last-child {
      display: none !important;
    }
  }
`;

const ApexChart: React.FC<GraphProps> = () => {
  const [featureLabels, setFeatureLabels] = useState<any>([]);
  const [featureValues, setFeatureValues] = useState<any>([]);
  useEffect(() => {
    setTimeout(() => {
      setFeatureLabels(["tas", "aus", "us", "np", "ja", "ta", "hel", "pas "]);
      setFeatureValues([4, 4, 3, 3, 4, 5, 4, 3]);
    }, 2000);
  }, []);
  const [chartOptions, setChartOptions] = useState<ICharts>({
    options: {
      chart: {
        id: "pet-feature",
        toolbar: {
          show: false,
        },
        width: "100%",
      },
      colors: ["#008ffb"],
      fill: {
        opacity: 0.8,
        colors: ["#008ffb"],
      },
      markers: {
        size: 0,
      },
      stroke: {
        show: false,
      },

      xaxis: {
        categories: [],
        axisTicks: {
          show: true,
          borderType: "solid",
        },
        labels: {
          style: {
            colors: ["#000"],
            fontWeight: 500,
          },
        },
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            xaxis: {
              labels: {
                style: {
                  fontSize: 12,
                  fontWeight: 400,
                },
              },
            },
          },
        },
      ],
    },
    series: [
      {
        name: "feature-rating",
        data: [],
      },
    ],
  });

  useEffect(() => {
    setChartOptions({
      options: {
        xaxis: {
          categories: featureLabels ? featureLabels : "",
        },
        yaxis: {
          show: true,
          min: 0,
          max: 5,
          tickAmount: 5,
        },
      },
      series: [
        {
          name: "feature-rating",
          data: featureValues,
        },
      ],
    });
  }, [featureValues, featureLabels]);

  return (
    <Wrapper>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="radar"
        width={500}
      />
    </Wrapper>
  );
};

export default ApexChart;
