import fetch from "isomorphic-unfetch" 
const Stars = ({ stars }) =>
  <div>
    Next stars: {stars}
  </div>

Stars.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Stars