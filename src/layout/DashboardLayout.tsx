import { Outlet } from "react-router"; // changed from react-router
import { Container, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import React from "react";
export default function DashboardLayout() {
  return (
    <Provider>
      <div className='min-h-screen bg-gray-900'>
        <Container
          maxW='container.xl'
          className='py-10'>
          <Flex
            gap={6}
            align='flex-start'>
            <DashboardSideBar>
              <Outlet />
            </DashboardSideBar>
          </Flex>
        </Container>
      </div>
    </Provider>
  );
}

function DashboardSideBar({ children }: { children: React.ReactNode }) {
  // fixed signature
  return (
    <Flex
      direction='column'
      bg='gray.800'
      color='white'
      w='250px'
      minH='70vh'
      p={4}
      borderRadius='md'
      boxShadow='md'>
      {children}
    </Flex>
  );
}
