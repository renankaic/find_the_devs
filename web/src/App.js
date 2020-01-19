import React, { useState, useEffect } from 'react';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() { 

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {

        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)

      },
      (err) => {
        console.error(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  async function handleAddDev(e) {

    e.preventDefault()

    

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}  
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required  
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/26421325?s=400&u=7fd8f43279c50741ef0d6b2a8a7f151c28b72d4b&v=4" alt="Renan Kaic" className=""/>
              <div className="user-info">
                <strong>Renan Kaic Lopes</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>System Analyst at Hyundai AutoEver Brazil. In love with programming</p>
            <a href="https://github.com/renankaic">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/26421325?s=400&u=7fd8f43279c50741ef0d6b2a8a7f151c28b72d4b&v=4" alt="Renan Kaic" className="" />
              <div className="user-info">
                <strong>Renan Kaic Lopes</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>System Analyst at Hyundai AutoEver Brazil. In love with programming</p>
            <a href="https://github.com/renankaic">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/26421325?s=400&u=7fd8f43279c50741ef0d6b2a8a7f151c28b72d4b&v=4" alt="Renan Kaic" className="" />
              <div className="user-info">
                <strong>Renan Kaic Lopes</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>System Analyst at Hyundai AutoEver Brazil. In love with programming</p>
            <a href="https://github.com/renankaic">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/26421325?s=400&u=7fd8f43279c50741ef0d6b2a8a7f151c28b72d4b&v=4" alt="Renan Kaic" className="" />
              <div className="user-info">
                <strong>Renan Kaic Lopes</strong>
                <span>ReactJS, NodeJS</span>
              </div>
            </header>
            <p>System Analyst at Hyundai AutoEver Brazil. In love with programming</p>
            <a href="https://github.com/renankaic">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
