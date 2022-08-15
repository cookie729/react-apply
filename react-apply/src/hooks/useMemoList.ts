import { useCallback, useState } from "react";

// メモ一覧のカスタムフック
export const useMemoList = () => {

  // メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);
  
  // メモ追加
  const addTodo = useCallback((text: string) => {
    
    // State変更を検知させる新しい配列
    const newMemos = [ ...memos ];

    // テキストボックスの内容をメモに追加
      newMemos.push( text );
      setMemos( newMemos );
    }, [memos]);

  // メモ削除
  const deleteTodo = useCallback(( index: number ) => {

    // State変更を検知させる配列
    const newMemos =[ ...memos ];

    // メモから要素を削除
    newMemos.splice( index, 1 );
    setMemos(newMemos);
  }, [memos]);

    return { memos, addTodo, deleteTodo };
};

