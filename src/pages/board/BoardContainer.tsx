// BoardContainer.tsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface BoardContainerProps {
  boards: Board[]; // Board 타입 배열
}

interface Board {
  id: number;
  title: string;
  content: string;
}

const BoardContainer: React.FC<BoardContainerProps> = ({ boards }) => {
  const { id } = useParams<{ id: string }>();
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    // boards 배열에서 id에 해당하는 게시물 찾기
    const selectedBoard = boards.find((b) => b.id === Number(id));
    setBoard(selectedBoard || null);
  }, [boards, id]);

  return (
    <div>
      {board ? (
        <div>
          <h2>{board.title}</h2>
          <p>{board.content}</p>
        </div>
      ) : (
        <p>게시물을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default BoardContainer;
