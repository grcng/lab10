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
            <li>Create a new React app using the command <code>npx create-react-app lab10</code>.</li>
            <li>Navigate to the project folder and run <code>npm start</code> to launch the development server.</li>
          </ol>
        </section>

        <section>
          <h2>Building the Page</h2>
          <p>
            The page was built by modifying the default <code>App.js</code> and <code>App.css</code> files.
          </p>
        </section>

        <section>
          <h2>Challenges and Solutions</h2>
          <ul>
            <li>
              <strong>Challenge:</strong> Configuring the project for deployment on GitHub Pages.
              <br />
              <strong>Solution:</strong> I followed the deployment instructions on the React documentation for deploying on GitHub Pages, adding a <code>homepage</code> field and modified the <code>scripts</code> field in the <code>package.json</code> file.
            </li>
            <br></br>
            <li>
              <strong>Challenge:</strong> Deploying the page after pushing any changes.
              <br />
              <strong>Solution:</strong> I encountered issues where the changes wouldn't show up after pushing. To solve this, I ensured that the production build was up-to-date by running <code>npm run build</code> and redeploying the app. Additionally, I verified the deployment process on GitHub Pages and cleared the browser cache to ensure the latest version was being served.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
