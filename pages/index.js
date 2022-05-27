import { Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Handmade By Design</title>
        <meta
          name="description"
          content="sanity-amazonclone for handmadebydesign"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Handmade By Design
      </Typography>
    </div>
  );
}
