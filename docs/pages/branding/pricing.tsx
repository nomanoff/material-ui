import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import ThemeProvider from 'docs/src/modules/ThemeContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import AppHeader from 'docs/src/layouts/AppHeader';
import HeroPricing from 'docs/src/components/pricing/HeroPricing';
import PricingTable from 'docs/src/components/pricing/PricingTable';
import PricingList from 'docs/src/components/pricing/PricingList';
import EarlyBird from 'docs/src/components/pricing/EarlyBird';
import Testimonials from 'docs/src/components/home/Testimonials';
import WhatToExpect from 'docs/src/components/pricing/WhatToExpect';
import FAQ from 'docs/src/components/pricing/FAQ';
import HeroEnd from 'docs/src/components/home/HeroEnd';
import AppFooter from 'docs/src/layouts/AppFooter';

export default function Pricing() {
  return (
    <ThemeProvider>
      <Head
        title="Pricing - MUI"
        description="The community edition lets you get going right away. Switch to a commercial plan for more components & premium support."
      />
      <CssBaseline />
      <AppHeader />
      <HeroPricing />
      <PricingList /> {/* Mobile, Tablet */}
      <Container sx={{ display: { xs: 'none', md: 'block' } }}>
        <PricingTable /> {/* Desktop */}
      </Container>
      <EarlyBird />
      <Testimonials />
      <WhatToExpect />
      <Divider sx={{ mx: 'auto', maxWidth: 1200 }} />
      <FAQ />
      <HeroEnd />
      <Divider />
      <AppFooter />
    </ThemeProvider>
  );
}
