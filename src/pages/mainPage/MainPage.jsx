import { Button, Form, Input } from "antd";
import { Alert } from "antd";
import { useState } from "react";
import style from "./mainPage.module.css"

const MainPage = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [result, setResult] = useState(false);

  const changeState = (e) => {
    const { value, name } = e.target;
    setResult(false);

    setUser({
      ...user,
      [name]: value,
    });
    console.log(result);
  };

  const post = async () => {
    const postReq = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });

    console.log(postReq.status);
    if (postReq.status === 201) setResult(true);
    console.log(result);
  };


  return (
    <div className={style.wrapper}>
      <h1>MAIN PAGE</h1>
      {
        result && 
        <div className={style.alert}>
          <Alert
          message="Succesful request"
          type="info"
          showIcon
          />
        </div>
      }

      <Form
        layout={"horizontal"}
        form={form}
        style={{
          maxWidth: 600,
          marginLeft: 300,
        }}
        onChange={changeState}
      >
        <Form.Item label="Username">
          <Input placeholder="input username" name="username" />
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder="input password" name="password" />
        </Form.Item>
        <Form.Item>
          <Button onClick={post} type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MainPage;
