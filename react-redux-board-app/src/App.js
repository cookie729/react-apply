import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from './features/Posts';
import { useState } from "react"
import styled from "styled-components"

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();


  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );

    setName("");
    setContent("");
  };



  return (
  <StyledDivApp className="App">
    <div>
      <SH1>掲示板</SH1>
    </div>
    <div className="addPost">
      <SInput type="text" placeholder="お名前" onChange={(e) => setName(e.target.value)} value = {name} />
      <SInput type="text" placeholder="投稿" onChange={(e) => setContent(e.target.value)} value = {content} />
      <SButton onClick={() => handleClick()}>投稿する</SButton>
      <SHr />
    </div>
    <div className="displayPosts">
      {postList.map(( post ) => (
        <SDisplayPost key={ post.id } className="post">
          <SH1PostName>{post.name}</SH1PostName>
          <SH1PostContent>{post.content}</SH1PostContent>
          <SButton onClick={() => dispatch(deletePost({id: post.id}))}>削除</SButton>
        </SDisplayPost>
      ))}
    </div>
  </StyledDivApp>
  );
}

const SH1 = styled.h1`
  font-size: 2.5rem;
`;

const SInput = styled.input`
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(123, 123, 123, 0.8),
    0 6px 20px 0 rgba(118, 118, 118, 0.3);
  outline: none;
`;

const SButton = styled.button`
  padding: 7px 30px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(123, 123, 123, 0.1),
    0 6px 20px 0 rgba(55, 55, 55, 0.19);
  background-color: #925603;
  color: white;
  cursor: pointer;
`;

const SHr = styled.hr`
  margin-top: 20px;
  margin-bottom: 0;
`;

const StyledDivApp = styled.div`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  height: 100vh;
`;

const SH1PostName = styled.h1`
  font-size: 2.5rem;
  font-size: 30px;
  margin-top: 6px;
`

const SH1PostContent = styled.h1`
  margin-top: -10px;
  font-size: 15px;
  font-weight: 400;
`;

const SDisplayPost = styled.div`
  margin-top: 30px;
  box-shadow: 0 4px 8px 0 #4d2c0262, 0 6px 20px 0 rgba(105, 76, 4, 0.19);
  padding: 20px 30px;
  border-radius: 10px;
  min-width: 500px;
  background-color: white;
`;

export default App;
