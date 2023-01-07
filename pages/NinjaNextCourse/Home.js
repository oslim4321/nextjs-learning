import Link from 'next/link'
import Footer from './Footer'
import Navbar from './Navbar'
import Style from './Style.module.css'

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data   = await res.json()
  
  return {
    props:{Ninjas: data}
  }
}
function Home({Ninjas}) {
  console.log(Ninjas)
  return (
      <div>
          <Navbar/>
          <h1>HomePage</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, distinctio nulla. Velit itaque suscipit rem? Suscipit adipisci numquam iste aliquid.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis adipisci neque molestias eveniet provident. Assumenda, excepturi! Quos, eligendi distinctio.</p>
          
      <h3>List of ninjas</h3>
      <div>
          {Ninjas &&
          Ninjas.map((ninja) => (
            <Link href={`/NinjaNextCourse/NinjaDetail/${ninja.id}`} key={ninja.id} className={Style.list}>
              <h3>{ ninja.name}</h3>
            </Link>
           
           ))

          }
      </div>

      <Footer/>
    </div>
  )
}

export default Home