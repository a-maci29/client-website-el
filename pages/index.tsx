import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

        <h1 className="pageTitle">Realder Agency</h1>

        <p className="pageContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam quisquam perspiciatis repellendus esse! Assumenda nesciunt perferendis alias culpa voluptatibus minima exercitationem eius fuga facilis velit a, ipsam tempora quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, eveniet, maiores error eum vel modi veniam voluptatibus dolorum tempore architecto id natus dolor rem aut explicabo ipsum itaque velit ut.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit iste culpa hic eligendi aut itaque velit dolore? Quia sequi nisi perspiciatis aperiam provident rerum alias. Qui asperiores dolor fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, animi nulla? Quam nam similique omnis praesentium culpa provident ab autem voluptas nemo laudantium. Ex, in id! Velit distinctio ipsam sapiente?
        </p>


      {/* <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}

export default Home
