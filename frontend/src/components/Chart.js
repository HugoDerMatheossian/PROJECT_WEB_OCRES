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
                    bottom: 30,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Titre" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Pourcentage" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}
