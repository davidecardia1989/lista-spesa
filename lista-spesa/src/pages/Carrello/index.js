import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { buyItems } from "../../actions/Carrello";
import ChartList from "../../components/ChartList";
import NavHeader from "../../components/NavHeader";

export default function Carrello() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { itemsList, loading } = useSelector((state) => state.shoppingChart);

  const onDelete = (id) => {
    // dispatch(deleteProduct(id));
  };

  const handleSubmit = () => {
    dispatch(buyItems());
    history.push("/homepage");
  };

  return (
    <div>
      <NavHeader items={itemsList.length} />
      <div style={{ margin: "2em" }}>
        <h3>Carrello</h3>
        {loading && <CircularProgress />}
        <ChartList itemsList={itemsList} onDelete={onDelete} />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => handleSubmit()}
            style={{
              backgroundColor: "green",
              color: "white",
              marginTop: "2em",
              width: "100px",
            }}
            variant="contained"
          >
            BUY
          </Button>
        </div>
      </div>
    </div>
  );
}
