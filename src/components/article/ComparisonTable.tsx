import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  option1: boolean | string;
  option2: boolean | string;
}

interface ComparisonTableProps {
  title1: string;
  title2: string;
  rows: ComparisonRow[];
}

export const ComparisonTable = ({ title1, title2, rows }: ComparisonTableProps) => {
  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span>{value}</span>;
  };

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/20">
              <th className="px-6 py-4 text-left font-semibold">Característica</th>
              <th className="px-6 py-4 text-center font-semibold">{title1}</th>
              <th className="px-6 py-4 text-center font-semibold">{title2}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-border last:border-0 hover:bg-accent/5 transition-colors"
              >
                <td className="px-6 py-4 font-medium">{row.feature}</td>
                <td className="px-6 py-4 text-center">{renderCell(row.option1)}</td>
                <td className="px-6 py-4 text-center">{renderCell(row.option2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
