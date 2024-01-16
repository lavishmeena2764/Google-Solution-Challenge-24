import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Cards(props) {
  return (
    <Card className="h-[200px] w-[180px] shadow-slate-700">
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${props.img}`}
          className="w-[50px] h-[100px]"
        />
        <CardContent>
          <Typography className="text-xl text-center" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex flex-col mt-[0.1px] items-center">
        <Button size="small" color="primary">
          Consult
        </Button>
      </CardActions>
    </Card>
  );
}
