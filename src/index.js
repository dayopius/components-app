import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Dayo"
          date="Yesterday 7:00pm"
          text="This is beautiful, you inspire me"
          img={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Folu"
          date="Yesterday 7:40pm"
          text="This is calm"
          img={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Bisola"
          date="Yesterday 11:00pm"
          text="Wow! nice"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

reportWebVitals();

//npm install faker@5.5.3
//<img alt="avatar" src={faker.image.image()} />

//npm install @faker-js/faker
//import faker from '@faker-js/faker';
