import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Alert, AlertTitle } from "@material-ui/lab";
import NavHeader from "../../components/NavHeader";
import ItemsList from "../../components/ItemsList";

import { fetchData } from "../../actions/Homepage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function Homepage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { home, shoppingChart } = useSelector((state) => state);
  const { list } = home;
  const { itemsList, boughtItems } = shoppingChart;
  console.log(boughtItems);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <NavHeader items={itemsList.length} />
      {boughtItems && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Items bought
        </Alert>
      )}
      <div style={{ padding: "2em" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className={classes.title}>
            Shopping List
          </Typography>
          <div className={classes.paper}>
            <ItemsList list={list} />
          </div>
        </Grid>
      </div>
    </div>
  );
}
