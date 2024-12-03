import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Building a Simple React Web Page</h1>
      </header>
      <main>
        <section>
          <h2>Installation</h2>
          <p>
            To create this page, I used the React framework. 
            <br></br>
            <br></br>
            Here are the installation steps:
          </p>
          <ol>
            <li>Install Node.js from <a href="https://nodejs.org/">nodejs.org</a>.</li>
            <li>Create a new React app using the command <code>npx create-react-app lab10</code>.</li>
            <li>Navigate to the project folder and run <code>npm start</code> to launch the development server.</li>
          </ol>
        </section>

        <section>
          <h2>Process</h2>
          <p>
            The page was built by modifying the default <code>App.js</code> and <code>App.css</code> files. After making the changes, I pushed the code to a new GitHub repository and deployed the app to GitHub Pages. 
            <br></br>
            <br></br>
            Here's the process:
          </p>
          <ol>
            <li>Initialize a new Git repository in the project folder using <code>git init</code>.</li>
            <li>Create a new repository on GitHub and copy the repository URL.</li>
            <li>Link the local repository to the GitHub repository using <code>git remote add origin https://github.com/grcng/lab10</code>.</li>
            <li>Push the code to GitHub with <code>git push -u origin master</code>.</li>
            <li>For deployment, I ran <code>npm run build</code> to create a production-ready build of the app.</li>
            <li>Then, I followed the instructions for deploying on GitHub Pages by modifying the <code>package.json</code> file (adding the <code>homepage</code> field and adjusting the <code>scripts</code> section).</li>
            <li>Finally, I deployed the page using <code>npm run deploy</code>.</li>
          </ol>
        </section>

        <section>
          <h2>Challenges and Solutions</h2>
          <ul>
            <li>
              <strong>Challenge:</strong> I encountered issues where the changes wouldn't show up after pushing on the GitHub generated web page.
            </li>
            <li>
              <strong>Solution:</strong> To solve this, I ensured that the production build was up-to-date by running <code>npm run build</code> and redeploying the app. Additionally, I verified the deployment process on GitHub Pages and cleared the browser cache to ensure the latest version was being served.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
