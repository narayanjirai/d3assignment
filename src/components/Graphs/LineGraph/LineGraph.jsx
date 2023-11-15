import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
function LineGraph() {

    const svgRef = useRef();

    
    const data = [
        { x: 0, y: 2 },
        { x: 5, y: 5 },
        { x: 10, y: 10 },
        { x: 15, y: 15 },
        { x: 20, y: 30 },
        { x: 25, y: 35 },
        { x: 30, y: 35 },
        { x: 35, y: 45 },
        { x: 45, y: 56 },
        { x: 50, y: 78 },
        { x: 55, y: 50 },
        { x: 60, y: 45 },

    ];

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.x)])
        .range([0, 100]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.y)])
        .range([100, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    const line = d3.line()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y));


    useEffect(() => {

        const svg = d3.select(svgRef.current);

        svg.append('path')
            .data([data])
            .attr('d', line)
            .attr('stroke', 'rgb(60, 196, 60)')
            .attr('stroke-width', 1)
            .attr('fill', 'none');

        svg.append('g')
            .attr('transform', `translate(0, ${100})`)
            .call(xAxis);

        // svg.append('g')
        //     .call(yAxis);

        svg.select('.x-axis').selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-25)');

      
    }, [data, line, xAxis, yAxis]);
    return (
        <svg ref={svgRef} style={{width:"100%"}}></svg>
    );
};

export default LineGraph;
