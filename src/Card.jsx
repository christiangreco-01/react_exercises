import profilePic from './assets/foto_profilo.JPG'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" height={200} width={200}></img>
            <h2 className='card-title'>Christian Greco</h2>
            <p className='card-text'>Sono un Developer, mi occupo principalmente di front-end</p>
        </div>
    );
}

export default Card