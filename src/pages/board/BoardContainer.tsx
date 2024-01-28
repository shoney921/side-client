// BoardContainer.tsx

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "./BoardPage";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080",
// });

interface Post {
  postId: number;
  title: string;
  content: string;
}

const BoardContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get<Post>(`/posts/${id}`);
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>게시물을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default BoardContainer;
