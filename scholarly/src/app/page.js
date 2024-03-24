import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
        {/* Add the new imageLink class for additional positioning */}
        <a
          href="/company.html"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageLink}  // Apply the new class for positioning adjustments
          
        >
          <img
            src="/tslate.png"
            alt="Translation Logo"
            style={{ width: "150px", height: "150px" }}

          />
        </a>
      </div>
      
      {/* This container now offers flexibility to position the pencil image */}
      <div className={styles.pencildescription} style={{ top: '40%', left: '70%' }}> {/* Example positioning */}
        <a
          href="/2page.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/pencil.png"
            alt="Pencil Logo"
            style={{ width: "200px", height: "200px" }}  
          />
        </a>
        <p style={{ 
          color: '#000000', 
          fontSize: '35px',
          fontFamily: 'Bradley Hand, cursive',
          textAlign: 'center',
          position: 'absolute', 
          fontWeight: 'bold',
          top: '150px', 
          left: '-90px', 
        }}>
          Click the Pen
            to START
        </p>
      </div>
      <img
            src="/cross2.png"
            alt="Crossimage"
            style={{ 
              width: "800px",
              height: "325px",
              position: 'absolute',
              bottom: '5px',
              right: '0px' }}  
          />
          <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'relative',
              width: '100%',
              bottom: '5px',
              boxSizing: 'border-box',
              paddingRight: '20px',
                      }}>
          <p style={{ 
              color: '#000000',
              fontSize: '35px',
              fontFamily: 'Bradley Hand, cursive',
              fontWeight: 'bold',
              margin: '0',
                      }}>
          EDUCATION. MADE. EASY.
  </p>
  </div>
  </main>
  );
  }

