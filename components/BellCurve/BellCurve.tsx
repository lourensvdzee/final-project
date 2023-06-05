// components/BellCurve/BellCurve.tsx

import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { select } from "d3-selection";
import "d3-transition";

interface DataPoint {
  q: number;
  p: number;
}

interface Props {
  durabilityData: {
    _id: string;
    start: Date;
    end: Date;
    months: number;
  }[];
}

const BellCurve = ({ durabilityData }: Props) => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Extract the months values from your data
    const months = durabilityData.map((item) => item.months);

    // Generate the bell curve data using the months values
    setData(getData(months));
  }, [durabilityData]);

  useEffect(() => {
    if (data.length === 0) return;

    // Set up the chart dimensions and margins
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 300 - margin.left - margin.right;
    const height = 160 - margin.top - margin.bottom;

    // Set up the x and y scales
    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);
    x.domain(
      data.length > 0
        ? (d3.extent(data, (d) => d.q) as [number, number])
        : [0, 1]
    );
    y.domain(
      data.length > 0
        ? (d3.extent(data, (d) => d.p) as [number, number])
        : [0, 1]
    );

    // Set up the x and y axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    // Set up the line generator
    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.q))
      .y((d) => y(d.p));

    // Select the chart container and create an SVG element
    const svg = select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add the x axis to the chart
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    svg
      .append("text")
      .attr("x", width)
      .attr("y", height - -30)
      .style("text-anchor", "end")
      .style("font-style", "italic")
      .style("fill", "lightgrey")
      .text("(in months)");

    // Add the y axis to the chart
    svg.append("g").attr("class", "y axis").call(yAxis);

    // Add the line path to the chart
    svg.append("path").datum(data).attr("class", "line").attr("d", line);
  }, [data]);

  return <div id="chart"></div>;
};

function getData(durabilityData) {
  // Calculate the mean and standard deviation of your durability data
  const mean = d3.mean(durabilityData);
  const sigma = d3.deviation(durabilityData);

  // Generate probability-quantile pairs based on the mean and standard deviation
  let data: DataPoint[] = [];
  for (let i = 0; i < 100000; i++) {
    const q = normal(mean, sigma);
    const p = gaussian(q, mean, sigma);
    const el = { q: q, p: p };
    data.push(el);
  }

  // Sort the data for plotting
  data.sort(function (x, y) {
    return x.q - y.q;
  });

  return data;
}

function normal(mean, sigma) {
  let x = 0,
    y = 0,
    rds,
    c;
  do {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    rds = x * x + y * y;
  } while (rds == 0 || rds > 1);
  c = Math.sqrt((-2 * Math.log(rds)) / rds); // Box-Muller transform
  return x * c * sigma + mean; // throw away extra sample y * c
}

function gaussian(x, mean, sigma) {
  const gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
  x = (x - mean) / sigma;
  return (gaussianConstant * Math.exp(-0.5 * x * x)) / sigma;
}

export default BellCurve;
