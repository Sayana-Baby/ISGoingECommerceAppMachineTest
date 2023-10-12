import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import "./Cart.css";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
        <div id="excelbutton">
        <ReactHTMLTableToExcel id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="CartProducts"
        sheet="tablexls"
        buttonText="Submit"
        
        ></ReactHTMLTableToExcel>
        </div>
       

      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <table id="table-to-xls">
               
             
                {/* <th>image</th> */}
                {/* <th></th> */}
                <th>Title</th>
                <th>Price</th>
                
                <tr>

               
             
               
           
                <td>    <p>{item.title}</p></td> 
                <td>    <p>{item.quantity * item.price}</p></td> 
                </tr>
              </table>
                  <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </button>
                 <p>{item.quantity}</p>
             
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}>
                -
              </button>
            </div>
            <h2  id="jj"onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              X
            </h2>
           
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2 style={{marginLeft:"800px"}}>Total : {total}</h2>
        </div>
      )}
 
    </div>
  );
};

export default Cart;