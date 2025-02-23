import { useEffect, useState } from 'react'
import { useAuth } from '../Context/authcontext';
import { Link } from 'react-router';




const OrderHistoryPage = () => {

  const {logout} = useAuth();
  const {token } = useAuth();

  const [orders, setOrders] = useState([]);
 


    useEffect(() => {
      const getOrders = async () => {
        if (!token) {
          console.log('Not logged in')
        }

      try{

         const res = await fetch ('https://js2-ecommerce-api.vercel.app/api/orders', {
             headers: {
               'Content Type': 'appllication/json',
               'Autorization': `Bearer ${token}`
             },
         });

        const data =  await res.json();
         setOrders(data)

      }catch(err){
        console.log(err);
      }
    };
      
        getOrders();    

  }, [token]);

  const getOrderById = async (orderId) => {
    try {
      const response = await fetch(`https://js2-ecommerce-api.vercel.app/api/orders/${orderId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });


      const orderData = await response.json();
  
      setSelectedOrder(orderData);
    } catch (error) {
      console.log(error);
    }
    getOrderById()
  };



  return (
    <div className='order-history'>
        <div className='history-header'>
              <h2 className='orders'> My Account</h2>
              <button onClick={logout} className='logout-history'>Logout</button>
             
         </div>
         <hr/>

      <div className="order-body">
        <ul className='orders-list'>
          {orders.map((order) => (
            <li key={order._id}>
              <p className='order-id'>Order ID: {order._id}</p>
              <p className='order-num'> Total orders: {order.items.length}</p>
              <p className='total-orders'>Total price: {order.total}</p>
              
            </li>
          ))}
        </ul> 

        <ul>
            {selectedOrder.items.map((item) => (
                <li key={item.productId}>
                  <p>Product ID: {item.productId}</p>
                  <p>Quantity: {item.quantity}</p>
                </li>
              ))}
            </ul>


      </div>
        
        
    </div>
  )
}

export default OrderHistoryPage