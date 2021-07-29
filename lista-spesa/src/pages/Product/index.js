import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import Skeleton from "@material-ui/lab/Skeleton";
import { fetchData } from "../../actions/Homepage";
import { addingProduct } from "../../actions/Carrello";
import NavHeader from "../../components/NavHeader";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [product, setProduct] = useState(null);

  const { list } = useSelector((state) => state.home);
  const { itemsList, loading } = useSelector((state) => state.shoppingChart);

  useEffect(() => {
    if (!isEmpty(list)) {
      setProduct(list.find((el) => el.id === parseInt(id)));
    } else {
      dispatch(fetchData());
    }
  }, [list, id, dispatch]);

  const onAddToChart = (product) => {
    dispatch(addingProduct(product));
    history.push("/carrello");
  };

  return (
    <div>
      <NavHeader items={itemsList.length} />
      <div style={{ padding: "2em" }}>
        <h3>Dettaglio prodotto</h3>
        <Link to="/homepage">
          <h5 style={{ margin: "2em 0" }}>Back to homepage</h5>
        </Link>
        {isEmpty(product) ? (
          <Skeleton variant="rect" width={410} height={118} />
        ) : (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={product?.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onAddToChart(product)}
              >
                Add to Shopping Chart
              </Button>
            </CardActions>
          </Card>
        )}
      </div>
    </div>
  );
}
