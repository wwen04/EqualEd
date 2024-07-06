import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Chip } from "@mui/material";

const TeacherCard = ({ name, subject, description, link, image }: any) => {
  return (
    <Card className="rounded-xl h-[22rem] hover:scale-105 hover:bg-gray-50 transition-all">
      <Link href={link}>
        <CardMedia component="img" sx={{ height: 200 }} image={image} />
        <CardContent>
          <h1 className="line-clamp-1 text-xl font-bold text-black">{name}</h1>
          <Chip className="mt-2 mb-2" variant="filled" label={subject} />
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp-3"
          >
            {description}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default TeacherCard;
