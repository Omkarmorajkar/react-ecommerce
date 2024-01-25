import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewProduct from "./component/Products/ViewProduct";
import Products from "./component/Products/Products";
import Error from "./component/ui/Error";
import AppLayout from "./component/ui/AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import Cart from "./component/cart/Cart";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Products />,
        // loader: productLoader, (Removed as React Query handles data fetching)
        errorElement: <Error />,
      },
      {
        path: "/viewProduct/:id",
        element: <ViewProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

// Wrap the app with QueryClientProvider
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
