import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  // カスタムフックから取得
  const { memos, addTodo, deleteTodo } = useMemoList();
  // テキストボックスState
  const [text, setText] = useState<string>("");
  // テキストボックスの入力内容をStateに設定
  const onChangeText = ( e: ChangeEvent<HTMLInputElement> ) => setText(e.target.value);

  const onClickAdd = () => {
    // カスタムフックのメモ追加実行
    addTodo(text);
    // テキストボックスを空にする
    setText("");
  };

  // 削除クリック時何番目が押されたか引数で受け取る
  const onClickDelete = useCallback(
    ( index: number ) => {
  // カスタムフックのメモ削除実行
  deleteTodo(index);
  },[deleteTodo]);


  return (
    <div>
      <h1>簡易メモ</h1>
      <input type="text" value={ text } onChange={ onChangeText} />
      <SButton onClick= {onClickAdd }>追加</SButton>
      <MemoList memos={ memos } onClickDelete= { onClickDelete } />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
  `;
