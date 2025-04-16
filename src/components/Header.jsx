export default function Header() {
    return (
      <header style={{
        backgroundColor: '#fff',
        padding: '20px 40px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>
          Portfolio
        </a>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
            <li><a href="#skills" style={{ textDecoration: 'none', color: '#333' }}>Skills</a></li>
            <li><a href="#projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</a></li>
            <li><a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  

  //refactor for tailwind implementation