import React from "react";
import { Link } from "react-router-dom";

interface BoardPageProps {
  boards: Board[]; // Board 타입 배열
}

interface Board {
  id: number;
  title: string;
  content: string;
}

const BoardPage: React.FC<BoardPageProps> = (props: BoardPageProps) => {
  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {props.boards.map((board) => (
          <li key={board.id}>
            <span></span>
            <Link to={`/boards/${board.id}`}>
              {board.id} : {board.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardPage;
