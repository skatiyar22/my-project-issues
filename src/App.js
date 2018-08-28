import React, { Component } from "react";
import issueList from "./data/IssueList";
import "./App.css";

class App extends Component {
  render() {
    console.log(issueList);
    return (
      <div className="App">
        <h1>List of Issues</h1>
        <div className="issue-header">
          <span className="issue-open-count">
            {issueList.filter(issue => issue.state == "open").length} Open
          </span>
          <span className="issue-closed-count">
            {issueList.filter(issue => issue.state == "closed").length} Closed
          </span>
          <select className="sortBy-selector" name="" id="">
            <option value="">Newest</option>
            <option value="">Oldest</option>
            <option value="">Most Commented</option>
            <option value="">Least Commented</option>
          </select>
        </div>
        <ul className="issue-list">
          {issueList.map((issue, i) => (
            <li key={i}>
              <div className="issue-status">{issue.state}</div>
              <div className="issue-description">
                <div className="top-row">{issue.title}</div>
                <div className="bottom-row">
                  <div>#{issue.number}</div>
                  <div>{issue.comments} comments</div>
                  <div>
                    <b>Last updated at </b>
                    {issue.updated_at}
                  </div>
                  <div>
                    <b>Created By </b>
                    {issue.user.login}{" "}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
