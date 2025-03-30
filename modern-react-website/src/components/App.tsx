import React from 'react';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Modern React Website</h1>
                <p>This is a simple React application built with TypeScript.</p>
            </header>
            <main>
                <section>
                    <h2>About</h2>
                    <p>This website showcases the capabilities of React and TypeScript.</p>
                </section>
                <section>
                    <h2>Features</h2>
                    <ul>
                        <li>Component-based architecture</li>
                        <li>Type safety with TypeScript</li>
                        <li>Responsive design</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} My Modern React Website</p>
            </footer>
        </div>
    );
};

export default App;