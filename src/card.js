function Card({product ,addToCard,carditem}){
    return <div className="col-lg-4">
    <div className="row" style={{ padding: "15px", margin: "10px" }}>
      <div className="col-lg-12">
        <img className="img-fluid" src={product.img} />
         </div>
         <div className="col-lg-12">
         <h4>{product.name}</h4>
         <h4>{product.price}</h4>
          <button disabled={carditem.some(obj=>obj.id==product.id)} className="btn btn-sm btn-primary" onClick={()=>{
            addToCard(product)
          }}>
          {carditem.some(obj=>obj.id==product.id)?"added to card":"add to card"}
        </button>
      </div>
    </div>
  </div>
}
export default Card