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
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const ChartList = ({ itemsList, onDelete }) => {
  return (
    <div>
      <List>
        {isEmpty(itemsList)
          ? itemsList.map(() => (
              <Skeleton width={410} height={58} animation="wave" />
            ))
          : itemsList.map((item) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <Link
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none", color: "none" }}
                >
                  <ListItemText
                    primary={item.title}
                    secondary={item.category}
                  />
                </Link>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="add"
                    onClick={() => onDelete(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
      </List>
    </div>
  );
};

export default ChartList;
