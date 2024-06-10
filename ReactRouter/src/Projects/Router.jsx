/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PageNotFound from '../ReactRouting/SimpleRouting/PageNotFound'
import ProductDisplay from '../Projects/ProductDisplay'
import SingleProductDisplay from '../Projects/SingleProductDisplay'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Example using link */}
            {/* <Route path='/' element={<HomePage1/>}></Route> */}
            {/* <Route path='/About' element ={<AboutPage1/>}></Route> */}
            {/* <Route path='/Contact' element ={<ContactPage1/>}></Route> */}

          {/* Example with useNavigate */}
            {/* <Route path='/' element={<HomePage2/>}></Route> */}
            {/* <Route path='/ContactPage' element={<ContactPage2/>}></Route> */}
            {/* <Route path='/AboutPage' element={<AboutPage2/>}></Route> */}

          {/* Example with useNavigate and backward & forward */}
            {/* <Route path='/' element={<HomePage3/>}></Route> */}
            {/* <Route path='/ContactPage3' element={<ContactPage3/>}></Route> */}
            {/* <Route path='/AboutPage3' element={<AboutPage3/>}></Route> */}

          {/* Example for replace a page   */}
            {/* <Route path='/' element={<Login/>}></Route> */}
            {/* <Route path='/home' element={<Home/>}></Route> */}

          {/* Example of useLocation   */}
            {/* <Route path='/' element={<Home/>}></Route> */}
            {/* <Route path='/useLocation' element={<UseLocationExample/>}></Route> */}

          {/* Send data using state and uselocation  */}
            {/* <Route path='/' element={<InputPage/>}></Route>
            <Route path='/Output' element={<OutPutPage/>}></Route> */}

          {/* useParams (set Parameter) Example */}
            {/* <Route path='/' element={<Page01/>}></Route>
            <Route path='/Page/:id' element={<Page02/>}></Route>
            <Route path='/Page/:id/:name' element={<Page02/>}></Route> */}


          <Route path='/' element={<ProductDisplay/>}></Route>
          <Route path='/product/:id' element={<SingleProductDisplay/>}></Route>
          {/* /:image/:/:description/:/:rating */}


            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
