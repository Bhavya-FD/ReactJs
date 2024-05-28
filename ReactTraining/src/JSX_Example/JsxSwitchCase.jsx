/* eslint-disable no-unused-vars */
import React from 'react'
import AdminPage from '../ExtraComponents/AdminPage';
import SupplierPage from '../ExtraComponents/SupplierPage';
import CustomerPage from '../ExtraComponents/CustomerPage';

export default function JsxSwitchCase() {
    const userRole = "Admin";
    switch (userRole) {       
      case "Admin":
          return <AdminPage/>;
      case "Supplier":
          return <SupplierPage/>;
      case "Customer":
          return <CustomerPage/>;
    }
}
