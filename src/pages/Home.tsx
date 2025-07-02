import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero1">
        <div className="left-side">
          <h1 className="name">Afagh Izadi Dakhrabadi</h1>
          <h2 className="role">Frontend Developer</h2>
          <p className="description">
            I’m a computer engineering student interested in building responsive, accessible, and visually comprehensive web experiences.
          </p>
        </div>

        <div className="right-side">
          <section className="about" id="about">
           <h2>About Me</h2>
              <p className= "aboutp">
                I’m an aspiring frontend developer passionate about building efficient and accessible full stack applications that balance clean UI design. My work focuses on creating smooth user experiences with well-structured, maintainable code.
                Currently, I’m a Computer Engineering student actively exploring opportunities to grow as a developer. <br>

                </br>I’ve worked on projects using React + TypeScript for the frontend and Spring Boot for the backend, including an inventory management system website, a playdate application, and several university course projects.
                I enjoy frontend, and I'm especially interested in projects that involve real-world problem solving, UI/UX, and performance optimization. I'm always eager to learn and improve, whether it's by experimenting with new frameworks, contributing to team projects, or refining my skills through hands-on experience.
                When I’m not coding, I’m usually hiking, editing, trying new things or learning about AI and its applications in the real world..
            </p>
          </section>

        <section className="projects" id="projects">
              <h2>Some Things I’ve Built</h2>
              <div className="project-card">
                <h3>Inventory Management App</h3>
                <p>A full-stack web app to manage product stock and reports, built with React and Spring Boot.</p>
              </div>
              <div className="project-card">
                <h3>Oynasınlar – Playdate App</h3>
                <p>Built a mobile app prototype using React Native to support children’s right to play, fostering safer and more inclusive community spaces. Collaborated in a team setting, contributing to both frontend and UI/UX.</p>
              </div>
              {/* TODO: add more projects/all projects */}
        </section>
            </div>
      </section>

      <section className="contact" id="contact">
        <h2>Get In Touch</h2>
        <p>If you’re interested in collaborating or just want to say hi, feel free to reach out!</p>
        <a href="mailto:afaghizadi1@gmail.com" className="cta-button">Say Hello!</a>
      </section>
    </main>
  )
}

export default Home
