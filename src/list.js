function List({carditem,removeFromCard}){
    return( <>
   {
    carditem ==0?<div>No Item in card</div>:<> <ol class="list-group list-group-numbered">
    {
      carditem.map((item)=>{
        return(<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{item.name}</div>
        Rs.{item.price }
        </div>
        <button onClick={()=>{
          removeFromCard(item)
        }} class="badge bg-primary rounded-pill">X</button>
      </li>)
      })
    }
   
  </ol>
  <h4 style={{margin:"20px"}}>total :Rs{
    carditem.reduce((prev,curr)=>{
      return prev=prev+curr.price
    },0)
  }</h4></>
   }
    </>
)}
export default List;