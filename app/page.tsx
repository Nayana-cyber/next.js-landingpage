import Link from "next/link";
import styles from './styles/Home.module.css';

export default function Home() {
  const links = [
    { href: "/home", text: "HOME" },
    { href: "/aboutus", text: "ABOUT US" },
    { href: "/services", text: "SERVICES" },
    { href: "/contact", text: "CONTACT" },
    { href: "/support", text: "SUPPORT" },
    { href: "/careers", text: "CAREERS" },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>"TURNING VISION INTO REALITY"</h1>
        <p className={styles.subtitle}>Let’s transform your ideas into reality.</p>
        <button className={styles.button}>Get Started</button>
      </section>

      <div className={styles.cardContainer}>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className={styles.card}>
            <h2>{link.text}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}