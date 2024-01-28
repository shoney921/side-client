import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";
import "./BoardPage.scss";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

interface Post {
  postId: number;
  memberId: string;
  title: string;
  content: string;
  createDate: string;
  updateDate: string;
}

const BoardPage: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get<Post[]>("/posts");
        console.log(response);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePostOnClick = () => {
    // navigate();
  };

  return (
    <div>
      <h1>게시판</h1>
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item
            action
            href={`/boards/${post.postId}`}
            key={post.postId}
          >
            {post.postId} : {post.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="button-wrapper">
        <Button variant="light" onClick={handleCreatePostOnClick}>
          게시물 등록
        </Button>
      </div>
    </div>
  );
};

export default BoardPage;
