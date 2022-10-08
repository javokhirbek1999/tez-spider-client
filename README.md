Tez Spider Client
============
<!-- [![GitHub Stars](https://img.shields.io/github/stars/IgorAntun/node-chat.svg)](https://github.com/IgorAntun/node-chat/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/IgorAntun/node-chat.svg)](https://github.com/IgorAntun/node-chat/issues) [![Current Version](https://img.shields.io/badge/version-1.0.7-green.svg)](https://github.com/IgorAntun/node-chat) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://igorantun.com/chat) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/IgorAntun/node-chat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) -->

<a href="http://kiska-url.herokuapp.com/" target="_blank">Tez Spider</a> is a distributed music crawler that crawls 5 different music websites in paralel. <br/>
This is a <i>ReactJS</i> client running on NodeJS server, if you want to check out the server-side API, you can explore it <a href="https://tezspiderserver.herokuapp.com/" target="_blank">here</a>. <br/>
Check out the repo of server-side application <a href="https://github.com/javokhirbek1999/tez-spider" target="_blank">here</a> 


![Chat Preview](https://i.imgur.com/rqAQPZN.png)

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#kiskaurl-client">About The Project</a>
      <ul>
        <li><a href="#technologies">Built With</a></li>
        <li><a href="#request-flow-for-shortening-the-url">How URLs are hashed</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#distributed">Distributed</a></li>
        <li><a href="#paralelism">Paralelism</a></li>
        <li><a href="#concurrency">Concurrency</a></li>
        <li><a href="#consistency">Strong consistency</a></li>       
      </ul>
    </li>
    <li>
      <a href="#technologies">Technologies</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#setup">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

---
## Workflow of how spiders crawl in paralel
![Chat Preview](https://i.imgur.com/5mUbTPr.jpeg)

Checkout the server-side repo for better explaination for how Spiders basically crawl 5 different websites in paralel <a href="https://github.com/javokhirbek1999/tez-spider#workflow" target="_blank">here</a>
---
## Live Running App

<h6><a href="https://tezspider.herokuapp.com/" target="_blank">Here</a> you can explore the live web application</h6>

---

## Features
- <h3>Distributed</h3>
![Chat Preview](https://i.imgur.com/DaDruql.png)


- <h3>Paralelism</h3>
<img src="https://hpc.llnl.gov/sites/default/files/styles/with_sidebar_1_up/public/parallelProblem.gif?itok=u4OKbOB5" />

- <h3>Concurrency</h3>
<img src="https://www.loginradius.com/blog/static/985e45ca5bbc05c69e2adbd7e98b5f00/d26aa/concurrent-diagram.png" />

- <h3>Consistency</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Rsz_selection_055.png" />


---
## Technologies
- Javascript
- ReactJS 17.0.2
- Material UI 4.12.3
- Axios 0.24.0
</ul>
---

## Setup
To run the app in your own local machine, first of all, clone this repo to your local machine and install all of the dependecies using `npm` by going to its root directory and on the terminal run the command below:
```bash
$ npm install
```
---

## Usage
Once the dependencies are installed, you can start the application by running the command below : 
```bash 
$ npm start
``` 
You will then be able to access it at `localhost:3000`

---

## License
>You can check out the full license [here](https://github.com/javokhirbek1999/kiska-url-server-side/blob/main/LICENSE)

This project is licensed under the terms of the **MIT** license.
