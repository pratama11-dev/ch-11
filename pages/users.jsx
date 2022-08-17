import React from 'react'
import styles from "../styles/Home.module.css";
import Users from "../components/Users";

export default function users() {
  return (
    <>
      <main className={styles.main}>
        < Users />
      </main>
    </>
  )
}
