// components/BellCurve/BellCurveStyles.js

import styled from 'styled-components';

export const StyledBellCurve = styled.div`
  font: 10px sans-serif;

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

