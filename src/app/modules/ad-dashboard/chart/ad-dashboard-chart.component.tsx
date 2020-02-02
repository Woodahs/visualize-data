import React from "react";
import AdDashboardChartProps from "./ad-dashboard-chart.props";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

const AdDashboardChartComponent = (props: AdDashboardChartProps) => {
    if (!props.data.length) {
        return null;
    }

    const clicksStrokeColor = "#3480eb";
    const impressionsStrokeColor = "#012252";

    return (
        <div>
            <ResponsiveContainer height={300}>
                <LineChart
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis yAxisId={0} scale="sequential" dataKey="clicks" stroke={clicksStrokeColor} />
                    <YAxis yAxisId={1} dataKey="impressions" orientation="right" stroke={impressionsStrokeColor} />
                    <XAxis dataKey="date" />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="clicks" yAxisId={0} stroke={clicksStrokeColor} />
                    <Line dataKey="impressions" yAxisId={1} stroke={impressionsStrokeColor} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

AdDashboardChartComponent.displayName = "AdDashboardChartComponent";

export default AdDashboardChartComponent;
