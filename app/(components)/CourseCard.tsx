import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const CourseCard = ({
  courseTitle,
  teacher,
  thumbnail,
  description,
  link,
}: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={link}>
        <CardActionArea>
          <CardMedia component="img" sx={{ height: 340 }} image={thumbnail} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {courseTitle}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {teacher}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CourseCard;
