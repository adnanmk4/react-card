import profile from './assets/imgg.jpeg';

function Card () {
  return (
    <div className="card">

        <img className="cardImg" src={profile} alt="Profile Picture" />
        <h2 className='cardTittle' >web Matrix</h2>
        <p className='cardParagraph' >i will make Youtube videos and play video games</p>

    </div>
  )
}

export default Card;