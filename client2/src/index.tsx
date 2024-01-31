import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/app/layout/App";
import "../src/app/layout/index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";

import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../src/features/home/HomePage"; // Import your HomePage component
import AboutPage from "../src/features/about/AboutPage"; // Import your AboutPage component
import ContactPage from "../src/features/contact/ContactPage";
import ServerError from "../src/app/errors/ServerError";
import NotFound from "../src/app/errors/NotFound";
import BasketPage from "../src/features/basket/BasketPage";
import CheckoutPage from "../src/features/checkout/CheckoutPage";
import Catalog from "../src/features/catalog/Catalog";
import ProductDetails from "../src/features/catalog/ProductDetails";
import Login from "./features/account/Login";
import Register from "../../client2/src/features/account/Register";
import RequireAuth from "./app/router/RequireAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [{ path: "/checkout", element: <CheckoutPage /> }],
      },
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "/server-error", element: <ServerError /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "/basket", element: <BasketPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "", element: <CheckoutPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <StoreProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </StoreProvider>
//   </React.StrictMode>
// );
