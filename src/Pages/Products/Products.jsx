import React from 'react'
import { Helmet } from "react-helmet-async";

import ProductsHero from '../../components/ProductsComponents/ProductsHero/ProductsHero.jsx'
import ProductsGrid from '../../components/ProductsComponents/ProductsGrid/ProductsGrid.jsx'

const Products = () => {
  return (
    <div>

      <Helmet>
        <title>Products - Lumen Vitae Exporters</title>

        <meta
          name="description"
          content="Explore premium Sri Lankan spices from Lumen Vitae, including Ceylon cinnamon, black pepper, cardamom, cloves and other authentic island-grown spices."
        />
      </Helmet>

      <ProductsHero />
      <ProductsGrid />

    </div>
  )
}

export default Products