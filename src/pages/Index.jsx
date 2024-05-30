import { Container, Text, VStack, Heading, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Job Listings
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover your next career opportunity. Browse through job listings or post a new job.
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaBriefcase />} colorScheme="teal" variant="solid" size="lg">
            Browse Jobs
          </Button>
          <Button leftIcon={<FaPlus />} colorScheme="blue" variant="outline" size="lg">
            Post a Job
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;