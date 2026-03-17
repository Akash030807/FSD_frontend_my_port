import React from 'react';
import './App.css';
import profilePic from './assets/profile.jpg'; // Make sure your photo is here!

const App = () => {
  return (
    <div className="app-wrapper">
      {/* Dynamic Background Elements */}
      <div className="blob-bg blob-1"></div>
      <div className="blob-bg blob-2"></div>

      {/* Navbar */}
      <nav className="glass-nav">
        <div className="nav-content">
          <div className="logo">A<span className="text-accent">K</span>G</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section id="about" className="hero">
          <div className="hero-text-box">
            <p className="mono-subheading">System initialization...</p>
            <h1 className="hero-title">
              Akash Kumar <br />
              <span className="gradient-text">Gupta.</span>
            </h1>
            <h2 className="hero-role">Software & Machine Learning Engineer</h2>
            <p className="hero-description">
              An 18-year-old developer based in Ballia, specializing in deep learning architectures, computer vision, and high-performance C++ algorithms. I build intelligent systems that solve complex, real-world problems.
            </p>
            <div className="btn-group">
              <a href="#projects" className="btn btn-primary">Explore Architecture</a>
              <a href="#contact" className="btn btn-outline">Initialize Contact</a>
            </div>
          </div>
          
          <div className="hero-image-box">
            <div className="image-frame">
              <img src={profilePic} alt="Akash Kumar Gupta" className="profile-img" />
              <div className="frame-border"></div>
            </div>
          </div>
        </section>

        {/* Expertise / Skills Section */}
        <section id="expertise" className="section">
          <h2 className="section-heading">Technical <span className="text-accent">Expertise</span></h2>
          <div className="skills-layout">
            
            <div className="skill-card">
              <div className="skill-icon">🧠</div>
              <h3>AI & Deep Learning</h3>
              <p>Designing Convolutional Neural Networks (CNNs) and Vision Transformers (ViT) for complex image classification and analysis.</p>
              <div className="tech-tags">
                <span>Computer Vision</span><span>Deep Learning</span><span>OpenCV</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Systems & Algorithms</h3>
              <p>Writing optimized C++ code for advanced data structures (like DSU) and algorithmic problem-solving, with a strong grasp of OS concepts and kernel architecture.</p>
              <div className="tech-tags">
                <span>C++</span><span>Algorithms</span><span>OS Architecture</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">📊</div>
              <h3>Data Intelligence</h3>
              <p>Transforming raw datasets into actionable insights through interactive, high-level dashboards and data modeling.</p>
              <div className="tech-tags">
                <span>Power BI</span><span>Tableau</span><span>Data Viz</span>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-heading">Featured <span className="text-accent">Deployments</span></h2>
          <div className="projects-grid">
            
            <article className="project-card">
              <div className="project-content">
                <h3 className="project-title">Brain Tumor Detection Architecture</h3>
                <p className="project-detail">
                  Engineered an advanced medical imaging diagnostic tool. Utilized a hybrid model combining Convolutional Neural Networks (CNN) and Vision Transformers (ViT) to accurately classify brain tumors from MRI scans, optimizing for high precision and recall.
                </p>
                <div className="tech-tags">
                  <span>Python</span><span>CNN</span><span>ViT</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-content">
                <h3 className="project-title">Algorithmic Optimization Suite</h3>
                <p className="project-detail">
                  Developed high-efficiency C++ solutions for complex computational problems. Implementations include Job Sequencing with Deadlines and Kruskal's Minimum Spanning Tree algorithm utilizing Disjoint Set Union (DSU) for optimal time complexity.
                </p>
                <div className="tech-tags">
                  <span>C++</span><span>DSU</span><span>Greedy Algorithms</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-content">
                <h3 className="project-title">Business Intelligence Dashboards</h3>
                <p className="project-detail">
                  Architected dynamic, real-time data visualization interfaces. Leveraged advanced features in Power BI and Tableau Public to create comprehensive reports, enabling data-driven decision-making through intuitive visual analytics.
                </p>
                <div className="tech-tags">
                  <span>Power BI</span><span>Tableau</span><span>Analytics</span>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="elite-footer">
        <div className="footer-content">
          <h2 className="footer-title">Ready to build something <span className="text-accent">extraordinary?</span></h2>
          <p className="footer-text">I am currently open for opportunities, collaborations, and technical discussions.</p>
          <a href="mailto:your-email@example.com" className="email-link">hello@akash.dev</a>
          <p className="location-text">Operating out of Ballia, UP, India</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Akash Kumar Gupta. All systems nominal.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;