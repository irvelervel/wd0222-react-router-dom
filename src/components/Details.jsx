import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import pastas from '../data/menu.json'
import PastaComments from './PastaComments'

const Details = () => {
  // I'm loading this Details component on every route looking like
  // /details/0
  // /details/1
  // /details/4
  // but the number at the end, which I called :pastaId, is crucial for this component!
  // it's telling him which details I should load & present
  // ...so I need this component to KNOW which is the value of :pastaId
  // I need to grab from Details the value of that parameter!

  const [pasta, setPasta] = useState(null)

  const params = useParams() // params is always an object, will have inside all the route parameters and their values
  console.log('PARAMS', params)
  let pastaId = params.pastaId // this is the id of the pasta I'm loading this details page with!
  // pastaId it's going to be a string!
  // now I have to use pastaId to select the right dish from the array

  useEffect(() => {
    // this is like componentDidMount
    // I'll fetch here the right pasta to show!
    // pastaId is the id of the pasta I need to grab from the json file
    // let's find the right pasta details!
    let rightPasta = pastas.find((pasta) => pasta.id.toString() === pastaId)
    console.log('RIGHTPASTA', rightPasta)
    // next step: save it into a state variable to render it in the component JSX! :)
    setPasta(rightPasta)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="text-center">
      {!pasta && <Spinner variant="info" animation="border" />}
      {pasta && (
        <>
          <h3>{pasta.name}</h3>
          <img src={pasta.image} alt="pasta pic" />
          <p>{pasta.description}</p>
          <PastaComments selectedPasta={pasta} />
        </>
      )}
    </div>
  )
}

export default Details
