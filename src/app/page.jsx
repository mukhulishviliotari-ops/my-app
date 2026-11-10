import styles from "./page.module.css";


export default function Home() {

  const name ="ana";
  const isloaded = true;
  const headerVisible = false;
  return (
    <>
    
      <main className={styles.main}>
        {/* <h1 className={styles.title}>gamarjon {name || "unknow"}</h1> */}
        {/* <h2>{isloaded && "mtavari gverdi chaitvirta"}</h2> */}
        {/* <h2>{isloaded === true ? "mtavari gverdi chaitvirta" : "gverdi ar chaitvirta"}</h2> */}
        
      </main>
    </>
  );
}

