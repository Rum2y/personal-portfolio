import Chip from "@mui/material/Chip";

export default function Chips({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Chip
          key={index}
          label={item}
          sx={{
            marginRight: "10px",
            backgroundColor: "#C69749",
            color: "#171616",
            fontWeight: "bold",
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        />
      ))}
    </>
  );
}
