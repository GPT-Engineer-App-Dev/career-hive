import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "Develop and maintain web applications.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    description: "Lead product development teams.",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    description: "Create user-friendly interfaces.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} w="full">
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
          {jobListings.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading size="md">{job.title}</Heading>
                <Text fontSize="sm" color="gray.500">{job.company} - {job.location}</Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;