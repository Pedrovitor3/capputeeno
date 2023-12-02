'use client'
import Image from 'next/image'
import { ProductsList } from '@/components/products-list'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FilterBar } from '@/components/filter/filter-bar'
import styled from 'styled-components'


const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media(min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;

  }
`

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>   
    </QueryClientProvider>
   
  )
}
