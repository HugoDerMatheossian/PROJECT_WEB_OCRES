import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function Chart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    bottom: 39,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Pourcentage" fill="#82ca9d" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
