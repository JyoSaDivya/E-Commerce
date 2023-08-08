import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <ul>
          <li>product1</li>
          <li>product2</li>
          <li>product3</li>
        </ul>
      </div>
    </Layout>
  );
}
