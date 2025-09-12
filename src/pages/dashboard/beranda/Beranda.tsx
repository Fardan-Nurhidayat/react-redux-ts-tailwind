import { Button } from "@chakra-ui/react";

export default function Beranda() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Beranda Dashboard</h1>
      <Button
        bg='teal.400'
        _hover={{ bg: "teal.500" }}
        variant='solid'
        size='md'>
        Chakra UI Button
      </Button>
    </div>
  );
}
