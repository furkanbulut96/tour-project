


const Card = ({title,desc,img}) => {
  return (
    <div className="card text-bg-dark" style={{width: '32rem'}}>
        <div className="card-header">{title}</div>
        <div className="card-body">
          <img className="img" src={img} alt="img" style={{width:"100%", height:"360px"}}/>
          <p className="desc">{desc}</p>
        </div>
      </div>
  )
}

export default Card