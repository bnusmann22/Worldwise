import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>
        This IS the Home page
      </h2>

      <Link to="/About"> to About</Link>
    </div>
  )
}

export default Home