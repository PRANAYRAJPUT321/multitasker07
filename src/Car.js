import "./Car.css"
function Car({title,description,imgUrl}){
    return(
        <div className="container">
        <div className="car-card">
            <img src={imgUrl} alt="car"className="img"/>
            <h2 className="title">{title}</h2>
            <h3 className="discription">{description}</h3>
        </div>
        </div>
    )
}
export default Car;