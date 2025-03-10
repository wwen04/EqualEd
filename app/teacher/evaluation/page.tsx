import React from "react";
import Comments from "./comments";

const page = () => {
  const posts: any = [
    {
      title: "Rate my teaching material",
      author: "Arnav Krishnan",
      content: "Please rate my presentation slides that I made out of 10.",
      subject: "English",
      comment: [
        {
          name: "Lee Chong Wei",
          body: "Very cool",
        },
        {
          name: "Nicole David",
          body: "I think you very cool",
        },
      ],
    },
    {
      title: "What do I need to do to improve my teaching skills",
      author: "Fan Bing Bing",
      content:
        "Im bouta teach some little kids mandarin, how do I interact with them better?",
      subject: "Mandarin",
      comment: [
        {
          name: "Mark Zuckerberg",
          body: "Try using Metaverse",
        },
        {
          name: "Dwayne 'The Rock' Johnson ",
          body: "Watch my new movie and learn",
        },
        {
          name: "Kevin Hart",
          body: "I can teach you",
        },
      ],
    },
    {
      title: "I am having trouble solving this problem",
      author: "Beetlejuice",
      content: "What is 10 + 9?",
      subject: "Mathematics",
      comment: [
        {
          name: "Isaac Newton",
          body: "19",
        },
        {
          name: "Barack Obama",
          body: "21",
        },
      ],
    },
  ];
  return (
    <>
      <main className="p-6">
        {posts.map((post: any) => {
          return (
            <Comments
              author={post.author}
              title={post.title}
              content={post.content}
              subject={post.subject}
              comment={post.comment}
            />
          );
        })}
      </main>
    </>
  );
};

export default page;
