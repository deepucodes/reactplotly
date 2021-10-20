import React from 'react';
import Plot from 'react-plotly.js';

const GraphPlot = ({}) => {
  return (
    <div>
      <Plot
        data={[
          {
            x: ['Bytes','EdgeLocation'],
            y: [1,1,2,4,5,6],
            type: 'Pie',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'Pie', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 1000, height: 800} }
      />
    </div>
  );
};

export default GraphPlot;
