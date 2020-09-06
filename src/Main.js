import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllContact from './AllContact'
import ContactForm from './ContactForm'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={AllContact}/>
      <Route path='/edit/:id' component={ContactForm}/>
      <Route path='/add' component={ContactForm}/>
    </Switch>
  </main>
)

export default Main
