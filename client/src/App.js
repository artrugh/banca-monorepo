import React, { useState, useEffect } from 'react';

// components
import Cookie from './components/Cookie';
import Form from './components/Form';
import Cart from './components/Cart';
import Home from './components/Home';
import Nav from './components/Nav';
import ProductsDesk from './components/ProductsDesk';
import ProductsMobile from './components/ProductsMobile';
import Testimonies from './components/Testimonies';
import Video from './components/Video';
import Footer from './components/Footer';
import AccountControllers from './components/AccountControllers'

// import Form Uidata
import { signFormData, loginFormData, updateFormData, contactFormData } from './data'
// custom hooks
import { useWindowDimensions } from './helpers/customHooks';
//import actions
import { signUser, logUser, sendMessage, cleanData } from './fetchHelpers/actions';


const App = props => {

  // props
  const { user, isError, alarm, contact, message, isLogged, products, testimonies, order } = props.props.state
  const { setAction } = props.props

  // get window width 
  const { width } = useWindowDimensions();

  // UI CONTROLLERS

  // setContainer
  const [container, setContainer] = useState("home")
  // set the ui
  const [ui, setUi] = useState("home");
  // set the display of the Home
  const [showHome, setShowHome] = useState(true);

  // -------------- // ----------------- //

  useEffect(function checkUser() {

    // fetch-init
    setAction(cleanData)
    setShowHome(true)
    // each tyme the user is updated set the home/ if not user clean the alarm
    // don't display the alarm in the contact form
    isLogged? setUi("home") : setTimeout(() => setContainer("cookies"), 4000)
  }, [user, isLogged, setAction]);

  // display cookies
  if (container === "cookies") return <Cookie setUi={setContainer} />
  if (container === "home") return <>
    {/* display navbar */}
    <Nav
      setUi={setUi}
      user={user}
      isLogged={isLogged}
      setAction={setAction}
      setShowHome={setShowHome}
      cleanData={cleanData}
    />
    {/* display sign form */}
    {ui === "sign" && < Form
      formData={signFormData}
      isError={isError}
      setAction={setAction}
      action={signUser}
      alarm={alarm} />}

    {/* display login form */}
    {ui === "login" && < Form
      formData={loginFormData}
      isError={isError}
      setAction={setAction}
      action={logUser}
      alarm={alarm} />}

    {/* display account form */}
    {(ui === "account" || ui === "account update") && <AccountControllers
      formData={updateFormData}
      setUi={setUi}
      isError={isError}
      setAction={setAction}
      alarm={alarm}
      user={user}
      isLogged={isLogged}
      message={message}
      setShowHome={setShowHome} />}

    {/* display home */}
    {ui === "home" &&
      <>
        {/* display home */}
        {showHome &&
          <Home
            name={user}
            showHome={showHome}
            setShowHome={setShowHome}
          />}
        {width > 899 ? <ProductsDesk
          setUi={setUi}
          setAction={setAction}
          products={products} />
          : <ProductsMobile
            setUi={setUi}
            setAction={setAction}
            products={products} />}
        <Testimonies
          testimonies={testimonies}
        />
        <Video />
        <Form
          formData={contactFormData}
          setAction={setAction}
          isError={isError}
          action={sendMessage}
          alarm={alarm} />
        {contact && <div
          id="contact">{contact}</div>}
      </>
    }
    {/* display Cart */}
    {ui === "cart" && <Cart
      order={order}
      setShowHome={setShowHome}
      isLogged={isLogged}
      setAction={setAction}
      products={products}
      setUi={setUi} />}
    <Footer
      position={ui}
    />
  </>
}

export default App;
