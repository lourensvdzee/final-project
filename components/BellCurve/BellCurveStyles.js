// components/BellCurve/BellCurveStyles.js

import styled from 'styled-components';

const StyledBellCurve = styled.div`
  font: 10px sans-serif;
  height: 320px;
  width: 320px;

  .axis path,
  .axis line {
    fill: none;
    stroke: red;
    shape-rendering: crispEdges;
  }

  .line {
    fill: none;
    stroke: steelblue;
    stroke-width: 1.5px;
  }
`;

