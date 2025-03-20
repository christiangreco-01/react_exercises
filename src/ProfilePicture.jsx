function ProfilePicture(){
    const imageUrl = "./src/assets/foto_profilo.jpg";

    //gestisco l evento 'e' quindi quando la foto viene cliccata imposto display none quindi non si vedra piu
    const funzioneAlClick = (e) => e.target.style.display = "none"

    return(
        <img onClick={funzioneAlClick} src={imageUrl}></img>
    )
}

export default ProfilePicture