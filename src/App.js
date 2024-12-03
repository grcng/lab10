import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Building a Simple React Web Page</h1>
      </header>
      <main>
        <section>
          <h2>Installation Steps</h2>
          <p>
            To create this page, I used the React framework. Here are the installation steps:
          </p>
          <ol>
            <li>Install Node.js from <a href="https://nodejs.org/">nodejs.org</a>.</li>
            <li>Create a new React app using the command <code>npx create-react-app my-react-app</code>.</li>
            <li>Navigate to the project folder and run <code>npm start</code> to launch the development server.</li>
          </ol>
        </section>

        <section>
          <h2>Building the Page</h2>
          <p>
            The page was built by modifying the default <code>App.js</code> file. The following steps were taken:
          </p>
          <ul>
            <li>Created a basic header with a title and description.</li>
            <li>Added custom styles in <code>App.css</code>.</li>
            <li>Used React's JSX to structure the page content dynamically.</li>
          </ul>
        </section>

        <section>
          <h2>Challenges and Solutions</h2>
          <p>While building this page, I encountered a few challenges:</p>
          <ul>
            <li>
              <strong>Challenge:</strong> Understanding JSX syntax and how it differs from traditional HTML.
              <br />
              <strong>Solution:</strong> I referred to the React documentation, especially the section on JSX, to understand the differences and best practices.
            </li>
            <li>
              <strong>Challenge:</strong> Configuring the project for deployment on GitHub Pages.
              <br />
              <strong>Solution:</strong> I followed the deployment instructions on the React documentation for deploying on GitHub Pages, adding a <code>homepage</code> field to the <code>package.json</code> file.
            </li>
            <li>
              <strong>Challenge:</strong> Learning how to use React hooks for managing state and effects.
              <br />
              <strong>Solution:</strong> I experimented with basic hooks like <code>useState</code> and <code>useEffect</code>, and referred to tutorials on the React website to get a better understanding.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
