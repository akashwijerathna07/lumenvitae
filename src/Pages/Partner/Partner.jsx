import React from 'react'
import { Helmet } from "react-helmet-async";

import PartnerHero from '../../components/PartnerComponents/PartnerHero/PartnerHero.jsx'
import PartnerOfferings from '../../components/PartnerComponents/PartnerOfferings/PartnerOfferings.jsx'
import PartnerCTA from '../../components/PartnerComponents/PartnerCTA/PartnerCTA.jsx'

const Partner = () => {
  return (
    <div>

      <Helmet>
        <title>Partner With Us - Lumen Vitae Exporters</title>

        <meta
          name="description"
          content="Partner with Lumen Vitae for premium Sri Lankan spices, reliable sourcing and supply solutions tailored for international buyers and businesses."
        />
      </Helmet>

      <PartnerHero />
      <PartnerOfferings />
      <PartnerCTA />

    </div>
  )
}

export default Partner