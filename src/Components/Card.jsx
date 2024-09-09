import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Cards(props) {
  return (
    <>
      {props.arr.map((el, index) => {
        return (
          <Card
            key={index + 1}
            variant="outlined"
            sx={{
              width: { lg: props.width },
              backgroundImage: "linear-gradient(to right, #171616, #1a1a1a)",
            }}
          >
            <CardContent sx={{ padding: 5 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: 2, color: "#B0B0B0" }}
              >
                {el.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#E0E0E0", fontSize: "1.125rem" }}
              >
                {el.description}
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  color: "#C69749",
                  fontSize: "1.125rem",
                  marginTop: "5px",
                }}
              >
                <a href={el?.link}>{el?.disp}</a>
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
