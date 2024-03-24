import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
        {/* Add the new imageLink class for additional positioning */}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
          fontFamily: "'Lobster, cursive'" ,
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

    </main>
  );
}
