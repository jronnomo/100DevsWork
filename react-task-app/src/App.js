import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.svg'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Coupons from './components/Coupons';
import AddCoupon from './components/AddCoupon';
import About from './components/About'

function App() {
  //States
  const [coupons, setCoupons] = useState([])
  const [showAddCoupon, setShowAddCoupon] = useState(false)
  
  //Effects
  useEffect(() => {
    const getCoupons = async() => {
      const couponsFromServer = await fetchCoupons()
      setCoupons(couponsFromServer)
    }
    getCoupons()
  }, [])

  //Fetch our coupons
  const fetchCoupons = async() => {
    const res = await fetch('http://localhost:5000/coupons')
    const data = await res.json()
    
    return data
  }

    //Fetch one coupon
    const fetchCoupon = async(id) => {
      const res = await fetch(`http://localhost:5000/coupons/${id}`)
      const data = await res.json()
      
      return data
    }
  

  //Delete Coupon
  const deleteCoupon = async(id) => {
    await fetch(`http://localhost:5000/coupons/${id}`, {
      method: 'DELETE',
    })
    setCoupons(coupons.filter(coupon => coupon.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async(id) => {
    const coupToToggle = await fetchCoupon(id)
    const updCoupon = {...coupToToggle,
    reminder: !coupToToggle.reminder}

    const res = await fetch(`http://localhost:5000/coupons/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updCoupon)
    })
    const data = await res.json()

    setCoupons(coupons.map(coupon => {
      if(coupon.id === id){
        return {
          ...coupon,
          reminder: data.reminder,
        }
      }
      else{
        return coupon
      }
    }))
  }

  //Add Coupon
  const addCoupon = async(nextCoupon) => {
    const res = await fetch('http://localhost:5000/coupons', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(nextCoupon)
    })
    const data = await res.json()
    setCoupons([...coupons, data])
  }
  
  return (
    <Router>
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <Header onAdd={() => setShowAddCoupon(!showAddCoupon)}
        showAdd={showAddCoupon}/>
        <Routes>
          <Route path='/' element={
            <>
              {showAddCoupon && <AddCoupon onAdd={addCoupon}/>}
              {coupons.length > 0 ? (
              <Coupons 
                coupons={coupons} 
                onToggle={toggleReminder} 
                onDelete={deleteCoupon}
              /> 
              )
                : ( 'No Coupons Left!')}
            </>
          }/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
