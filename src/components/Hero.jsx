export default function Hero() {
    return (
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f4f4f4',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Hello!<br />I’m Yashika Jain</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px', color: '#555' }}>
          I'm a second-year Computer Science student at the University of Toronto with a passion for solving challenges through technology. I specialize in AI, Machine Learning, and hands-on projects, blending innovation with creativity.
        </p>
        <a href="#" style={{
          marginTop: '20px',
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px'
        }}>View Resume</a>
      </section>
    );
  }
  

    //refactor for tailwind implementation