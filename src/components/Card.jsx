import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <Card className="h-[300px] w-[250px] shadow-slate-700">
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${props.img}`}
          className="w-[50px] h-[200px]"
        />
        <CardContent>
          <Typography
            className="text-xl text-center font-serif"
            component="div"
          >
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex flex-col mt-[0.1px] items-center ">
        <Link to={props.link}>
          <Button size="small" color="primary">
            Consult
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
