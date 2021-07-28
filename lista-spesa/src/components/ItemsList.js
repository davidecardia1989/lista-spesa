import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Skeleton from "@material-ui/lab/Skeleton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { isEmpty } from "lodash";

const ItemsList = ({ list, onClick }) => {
  const defaultList = Array.from(Array(10).keys());
  console.log(defaultList);

  return (
    <div>
      <List>
        {isEmpty(list)
          ? defaultList.map(() => (
              <Skeleton width={410} height={58} animation="wave" />
            ))
          : list.map((el) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary="Secondary text"
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="add"
                    onClick={() => onClick(el)}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
      </List>
    </div>
  );
};

export default ItemsList;
