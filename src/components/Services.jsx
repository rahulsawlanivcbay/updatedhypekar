import {
  Grid,
  GridItem,
  Skeleton,
  Heading,
  Spinner,
  Center,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  OrderedList,
  ScaleFade,
  Flex,
  useColorModeValue,
  UnorderedList,
  Box,
  transition,
} from "@chakra-ui/react";
import { transform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Link } from "react-router-dom";
import { GameStateContext } from "./context/Context";
import { useContext } from "react";
import useGeoLocation from "./UserLocation";
import axios from "axios";
import Footer from "./Footer";

const Services = () => {
  const { email, cityName, setCityName } = useContext(GameStateContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // After entering the application loading should be true
    setTimeout(() => {
      setLoading(false); // After 4 seconds loading should be false
    }, 1000); // Loading indicator will be appeared in UI for 4 seconds.
  }, []);

  console.log("email of service is", email.length);

  const location = useGeoLocation();

  // console.log("location is", location.coordinates.lat)

  //console.log("items", items)

  // this city function is for getting city of the user.
  const city = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=953d0a41d973f5ef36e25750b927381f`
    );
    setCityName(res.data.name);
    //console.log("city details",res.data)
  };
  city();

  //console.log("city name", cityName)

  return (
    <Box>
      {loading == true ? (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.35s"
            emptyColor="#E2E8F0"
            // color='blue.500'
            size="xl"
          />
        </Center>
      ) : (
        <Box mt={"0"}>
          <Heading
            textAlign={"center"}
            fontFamily={"AUDIOWIDE"}
            mt={"3"}
            color={"orange"}
          >
            OUR SERVICES
          </Heading>
          <br />
          <Heading
            size="lg"
            padding="5"
            textAlign={"center"}
            fontFamily={"AUDIOWIDE"}
          >
            Car Services In - {cityName}
            <br />
            <span>
              <Heading size="sm" color="RGBA(0, 0, 0, 0.64)" mt={"5"}>
                {" "}
                Get discounted periodic car service and repair, wheel care,
                cashless insurance.
              </Heading>
            </span>
          </Heading>

          <Grid
            fontFamily={"AUDIOWIDE"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 2fr)",
            }}
            gap={6}
          >
            <GridItem
              _hover={{
                transform: "scale(1.2)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="100%"
              padding="5"
              h="340"
              bg="#E2E8F0"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
              >
                BASIC SERVICES
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image
                  mt="20px"
                  w="35%"
                  src="https://cdn-icons-png.flaticon.com/512/4669/4669436.png"
                ></Image>
                <UnorderedList padding="5" w="100%">
                  <ListItem>Every 5000km or 3 months</ListItem>
                  <ListItem>Oil filter replacement</ListItem>
                  <ListItem>Air filter cleaning</ListItem>
                  <ListItem>Coolant top up</ListItem>
                  <ListItem>Wiper fluid replacement</ListItem>
                  <ListItem>Battery water top-up</ListItem>
                </UnorderedList>
              </Flex>
              <Center>
                {email.length == 0 ? (
                  <Link to="/login">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                ) : (
                  <Link to="/booking">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                )}
              </Center>
            </GridItem>

            <GridItem
              _hover={{
                transform: "scale(1.2)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="100%"
              padding="5"
              h="340"
              bg="#E2E8F0"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
              >
                REGULAR AIR CONDITION SERVICE
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image
                  mt="15px"
                  w="35%"
                  src="https://cdn-icons-png.flaticon.com/512/803/803913.png"
                ></Image>
                <UnorderedList mt="15px" padding="5" w="100%">
                  <ListItem>Every 5000km or 3 months </ListItem>
                  <ListItem>A/C filter cleaning</ListItem>
                  <ListItem>A/C vent cleaning</ListItem>
                  <ListItem>A/C inspection</ListItem>
                  <ListItem>Cabin filter / AC filter cleaning</ListItem>
                </UnorderedList>
              </Flex>
              <Center>
                {email.length == 0 ? (
                  <Link to="/login">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                ) : (
                  <Link to="/booking">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                )}
              </Center>
            </GridItem>

            <GridItem
              _hover={{
                transform: "scale(1.2)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="90%"
              padding="5"
              h="340"
              bg="#E2E8F0"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
              >
                COMPREHENSIVE SERVICE
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image
                  mt="15px"
                  w="35%"
                  src="https://cdn-icons-png.flaticon.com/512/3233/3233875.png"
                ></Image>
                <UnorderedList mt="15px" padding="5" w="100%">
                  <ListItem>Every 20,000km or 12 months </ListItem>
                  <ListItem>Engine oil replacements</ListItem>
                  <ListItem>Oil filter replacement</ListItem>
                  <ListItem>Air filter cleaning</ListItem>
                  <ListItem>Coolant top up</ListItem>
                  <ListItem>Wiper fluid replacement</ListItem>
                </UnorderedList>
              </Flex>
              <Center>
                {email.length == 0 ? (
                  <Link to="/login">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                ) : (
                  <Link to="/booking">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                )}
              </Center>
            </GridItem>

            <GridItem
              _hover={{
                transform: "scale(1.2)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="100%"
              padding="5"
              h="340"
              bg="#E2E8F0"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
              >
                STANDARD SERVICE
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image
                  mt="15px"
                  w="35%"
                  src="https://cdn-icons-png.flaticon.com/512/1743/1743705.png"
                ></Image>
                <UnorderedList mt="15px" padding="5" w="100%">
                  <ListItem>Every 10,000km or 6 months</ListItem>
                  <ListItem>Engine oil replacements</ListItem>
                  <ListItem>Oil filter replacement</ListItem>
                  <ListItem>Air filter cleanin</ListItem>
                  <ListItem>Oil filter replacement</ListItem>
                </UnorderedList>
              </Flex>
              <br />
              <Center>
                {email.length == 0 ? (
                  <Link to="/login">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                ) : (
                  <Link to="/booking">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                )}
              </Center>
            </GridItem>

            <GridItem
              _hover={{
                transform: "scale(1.2)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="100%"
              padding="5"
              h="340"
              bg="#E2E8F0"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
              >
                BATTERY SERVICES
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image
                  mt="20px"
                  w="35%"
                  src="https://cdn-icons-png.flaticon.com/512/2084/2084219.png"
                ></Image>
                <UnorderedList mt="15px" padding="5" w="100%">
                  <ListItem>Battery Jmp Start</ListItem>
                  <ListItem>Battery Water Topup</ListItem>
                  <ListItem>Battery Replacement</ListItem>
                  {/* <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
                </UnorderedList>
              </Flex>
              <Center>
                {email.length == 0 ? (
                  <Link to="/login">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                ) : (
                  <Link to="/booking">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                )}
              </Center>
            </GridItem>

            <GridItem
              _hover={{
                transform: "scale(1.2)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="90%"
              padding="5"
              h="340"
              bg="#E2E8F0"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
              >
                ACCESSORIES AND SPARES
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image
                  mt="20px"
                  w="35%"
                  src="https://cdn-icons-png.flaticon.com/512/3825/3825672.png"
                ></Image>
                <UnorderedList mt="15px" padding="5" w="100%">
                  <ListItem>OEM Manufacturer Spares & Accesories</ListItem>
                  <ListItem>Doorstep Delivery And Installation</ListItem>
                  {/* <ListItem>Integer molestie lorem at massa</ListItem> */}
                  {/* <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
                </UnorderedList>
              </Flex>
              <Center>
                {email.length == 0 ? (
                  <Link to="/login">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                ) : (
                  <Link to="/booking">
                    <Button bg="#CBD5E0" mt="20px">
                      Book Now
                    </Button>
                  </Link>
                )}
              </Center>
            </GridItem>

            {/* <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">PREMIUM SERVICES</Heading>
                        <Flex  justifyContent={"space-around"} >
                        <Image mt="20px" w="35%" src="https://cdn-icons-png.flaticon.com/512/4833/4833735.png"></Image>   
                        <UnorderedList mt="15px" padding="5" w="100%">
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        
                        </Center>   
                    </GridItem> */}

            {/* <GridItem
                    overflow={"scroll"}
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">PERIODIC SERVICES</Heading>
                        <Flex  justifyContent={"space-around"} >
                        <Image mt="20px" w="35%" src="https://imechanic.co.in/wp-content/uploads/2021/09/Icon_Imechanic-01.png"></Image>   
                        <UnorderedList  mt="15px" padding="5" w="100%">
                            <ListItem> Engine oil change</ListItem>
                            <ListItem> Air filter replacement/ cleaning</ListItem>
                            <ListItem> Spark plugs checking</ListItem>
                            <ListItem>Coolant top up</ListItem>
                            <ListItem> Spark plugs checking</ListItem>
                        </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        
                        </Center>   
                    </GridItem> */}
          </Grid>
          <br />
          <div className="row justify-content-around">
            <div className="col-4 text-center">
              <Link to="/login">
                <Button
                  padding="10"
                  size="lg"
                  bg={"orange.400"}
                  color={"white"}
                  _hover={{
                    bg: "orange.500",
                  }}
                  fontSize={"large"}
                >
                  BOOK OUR SERVICES
                </Button>
              </Link>
            </div>
            <div className="col-4 text-center">
              <a
                href="https://wa.me/message/K7QX5ET2BGVJD1"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  padding="10"
                  size="lg"
                  bg={"orange.400"}
                  color={"white"}
                  _hover={{
                    bg: "orange.500",
                  }}
                  fontSize={"large"}
                >
                  GET A QUOTE
                </Button>
              </a>
            </div>
          </div>
          <br />
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default Services;
