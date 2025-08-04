import Chip from "@mui/material/Chip";

export default function Chips({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Chip
          key={index}
          label={item}
          sx={{
            marginRight: {
              xs: "5px",
              md: "10px",
            },
            backgroundColor: "#C69749",
            color: "#171616",
            fontWeight: {
              xs: "700",
              md: "bold",
            },
            fontSize: {
              xs: "0.7rem",
              sm: "0.8rem",
              md: "0.9rem",
            },
            padding: {
              xs: "6px",
              md: "10px",
            },
            height: "24px",
            marginBottom: "10px",
            "& .MuiChip-label": {
              padding: 0, // override label padding
            },
          }}
        />
      ))}
    </>
  );
}
