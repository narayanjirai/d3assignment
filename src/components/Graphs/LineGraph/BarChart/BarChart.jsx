import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
function BarChart() {

    const svgRef = useRef();


    const data = [10, 20, 30, 40, 50, 50, 60, 63];
    const w = 500;
    const h = 400;

    const xScale = d3.scaleBand()
        .domain(data.map((d, i) => i))
        .range([0, w])
        .padding(0.1);

    const xAxis = d3.axisBottom(xScale);



    useEffect(() => {

        const draw = d3.select(svgRef.current)
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            .style("background-color", "green")
            .style("padding", 10)
            .style("margin-left", 50)

        draw.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 50)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 20)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "rgb(60, 196, 60)")


        draw.append('g')
            .attr('transform', `translate(0, ${h})`)
            .call(xAxis);

            draw.selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-45)');

    }, [data, w, h, xScale, xAxis]);

    return (
        <svg ref={svgRef} style={{ width: "100%" }}></svg>
    );
};

export default BarChart;
