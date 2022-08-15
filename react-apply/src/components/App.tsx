import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";

export const App: FC = () => {
  // テキストボックスState
  const [text, setText] = useState<string>("");
  // メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);
  // テキストボックスの入力内容をStateに設定
  const onChangeText = ( e: ChangeEvent<HTMLInputElement> ) => setText(e.target.value);

  
  const onClickAdd = () => {
    // State検知する為の新しい配列
    const newMemos = [ ...memos ];
    // 入力内容をメモに追加
    newMemos.push( text );
    setMemos( newMemos );
    // テキストボックスを空にする
    setText("");
  };

  // 削除クリック時何番目が押されたか引数で受け取る
  const onClickDelete = useCallback(
    ( index: number ) => {
    const newMemos = [ ...memos ];
    // メモから該当の要素削除
    newMemos.splice( index, 1 );
    setMemos( newMemos );
  }, [memos]);


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
