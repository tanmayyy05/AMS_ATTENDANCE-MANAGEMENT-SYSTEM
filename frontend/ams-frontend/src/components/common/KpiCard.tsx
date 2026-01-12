type KpiCardProps = {
  title: string;
  value: string | number;
  color?: "blue" | "green" | "red" | "purple";
};

const colorMap = {
  blue: "#f1f5ff",
  green: "#f1fff7",
  red: "#fff1f1",
  purple: "#faf1ff",
};

const KpiCard = ({
  title,
  value,
  color = "blue",
}: KpiCardProps) => {
  return (
    <div
      style={{
        backgroundColor: colorMap[color],
        padding: "16px",
        width: "180px",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#374151",
          marginBottom: "6px",
          fontWeight: 500,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "#111827",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default KpiCard;
