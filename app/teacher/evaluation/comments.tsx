"use client";
import { useState } from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import Collapse from "@mui/material/Collapse";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";

const Comments = ({ title, author, subject, content, comment }: any) => {
  const [openComment, setOpenComment] = useState(false);

  return (
    <>
      <Card variant="outlined" className="mt-3">
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {author}
          </Typography>
          <Chip className="mb-3" label={subject} />
          <br />
          <Typography variant="body2">{content}</Typography>
          <div className="mt-2">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setOpenComment(!openComment);
              }}
            >
              <CommentIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
      <Collapse in={openComment} timeout="auto" unmountOnExit>
        <Card>
          {comment.map((comment: any) => {
            return (
              <CardContent>
                <Typography variant="h5">{comment.name} says:</Typography>
                <Typography variant="body1">"{comment.body}"</Typography>
              </CardContent>
            );
          })}
          <FormControl
            className="ml-4 mb-4"
            sx={{ m: 1, width: "90vh" }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-password">Reply</InputLabel>
            <Input
              id="standard-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Card>
      </Collapse>
    </>
  );
};

export default Comments;
