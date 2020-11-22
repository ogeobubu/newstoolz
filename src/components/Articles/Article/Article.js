import React, { useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";

function Article({
  article: {
    content,
    description,
    publishedAt,
    title,
    url,
    image,
    source: { id, name },
  },
}) {
  const classes = useStyles();
  return (
    <div key={id}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            image === null
              ? "https://businessafrica-emp.org/BusinessAfrica/images/no_image_news.png"
              : image
          }
          title={title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{moment(publishedAt).fromNow()}</Typography>
        </div>

        <CardContent>
          <Typography className={classes.title} variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            component="p"
            gutterBottom
          >
            {description === null && content === null ? (
              <Typography
                variant="body2"
                component="p"
                gutterBottom
                style={{ color: "red" }}
              >
                We are sorry, we cannot currently get the data now. Bear with
                us!
              </Typography>
            ) : (
              description
            )}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button target="_blank" href={url} size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Article;
