import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Comments = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comment, setComment] = useState([]);
  const avatarBaseUrl = "https://ui-avatars.com/api/?name=";
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setComment(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <List>
          {comment.map((comment) => (
            <div>
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={avatarBaseUrl.concat(comment.email.substring(0, 2))}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={comment.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.email}
                      </Typography>
                      - "{comment.body}"
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </div>
    );
  }
};

export default Comments;
