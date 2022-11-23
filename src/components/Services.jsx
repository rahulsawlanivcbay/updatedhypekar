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
import pm from "../file/images/pm.png";
import ac from "../file/images/ac.png";
import bt from "../file/images/bt.png";
import dc from "../file/images/dc.png";

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
        <Center mt="200px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <Box mt={"8"} className="hypekar_service_root">
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
              <Heading
                size="sm"
                color="RGBA(0, 0, 0, 0.64)"
                mt={"5"}
                fontFamily={"Oswald"}
              >
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
              lg: "repeat(2, 2fr)",
            }}
            gap={8}
            padding={8}
          >
            <GridItem
              _hover={{
                transform: "scale(1.05)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="100%"
              padding="5"
              bg="#E2E8F0"
              borderRadius="8px"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
                fontFamily={"Audiowide"}
              >
                PERIODIC MAINTAINANCE
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image mt="20px" w="35%" src={pm}></Image>
                <UnorderedList padding="5" w="100%" fontFamily={"Oswald"}>
                  <ListItem>Engine oil change</ListItem>
                  <ListItem>Air filter replacement/ cleaning</ListItem>
                  <ListItem>Oil filter replacement</ListItem>
                  <ListItem>Cabin filter cleaning/ replacement</ListItem>
                  <ListItem>Spark plugs checking</ListItem>
                  <ListItem>Coolant top up </ListItem>
                  <ListItem>Break pad/ break shoes inspection</ListItem>
                  <ListItem>Wiper fluid top up</ListItem>
                  <ListItem>Dashboard polishing</ListItem>
                  <ListItem> Interior cleaning</ListItem>
                  <ListItem> Interior vacuuming</ListItem>
                  <ListItem> Eco car wash</ListItem>
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
                transform: "scale(1.05)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="100%"
              padding="5"
              // h="340"
              bg="#E2E8F0"
              borderRadius="8px"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
                fontFamily={"Audiowide"}
              >
                AIR CONDITION MAINTAINANCE
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image mt="15px" w="35%" src={ac}></Image>
                <UnorderedList
                  mt="15px"
                  padding="5"
                  w="100%"
                  fontFamily={"Oswald"}
                >
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

            {/* <GridItem
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
                fontFamily={'Audiowdse'}
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
            </GridItem> */}

            <GridItem
              _hover={{
                transform: "scale(1.05)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="100%"
              padding="5"
              // h="340"
              bg="#E2E8F0"
              borderRadius="8px"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
                fontFamily={"Audiowide"}
              >
                BATTERY MAINTAINANCE
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image mt="20px" w="35%" src={bt}></Image>
                <UnorderedList
                  mt="15px"
                  padding="5"
                  w="100%"
                  fontFamily={"Oswald"}
                >
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
                transform: "scale(1.05)",
                bg: "orange",
              }}
              transform="scale(1.0)"
              transition="0.2s ease-in-out"
              w="100%"
              padding="5"
              // h="340"
              bg="#E2E8F0"
              borderRadius="8px"
            >
              <Heading
                size="md"
                textAlign={"center"}
                color="RGBA(0, 0, 0, 0.64)"
                fontFamily={"Audiowide"}
              >
                DRY CLEANING
              </Heading>
              <Flex justifyContent={"space-around"}>
                <Image mt="20px" w="40%" src={dc}></Image>
                <UnorderedList
                  mt="15px"
                  padding="5"
                  w="100%"
                  fontFamily={"Oswald"}
                >
                  <ListItem>Interior Vacuum Cleaning</ListItem>
                  <ListItem>Interior Wet Shampooing and Detailing</ListItem>
                  <ListItem>Dashboard Polishing</ListItem>
                  <ListItem>Pressure Car Wash</ListItem>
                  <ListItem>Rubbing with Compound</ListItem>
                  <ListItem>Machine Rubbing</ListItem>
                  <ListItem>Alloy Polishing</ListItem>
                  <ListItem>Wax Polishing</ListItem>
                  <ListItem>Tyre Dressing</ListItem>
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
            <div className="col-lg-4 col-md-6 col-6 mb-2 text-center">
              <Link to="/login">
                <Button
                  padding={{
                    base: "6",
                    md: "10",
                  }}
                  // size="lg"
                  size={{
                    base: "md",
                    md: "lg",
                  }}
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
            <div className="col-lg-4 col-md-6 col-6 mb-2 text-center">
              <a
                href="https://wa.me/message/K7QX5ET2BGVJD1"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  padding={{
                    base: "6",
                    md: "10",
                  }}
                  size={{
                    base: "md",
                    md: "lg",
                  }}
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
