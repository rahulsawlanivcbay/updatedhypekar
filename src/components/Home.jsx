import {
  Heading,
  Center,
  Spinner,
  useColorModeValue,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Select,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import vdo from "../file/Videos/video.mp4";
import "./Testimonals";
import React, { useState, useEffect, useRef } from "react";
import "./css-files/Home.css";
import { useTransition, animated } from "react-spring";
import axios from "axios";
import CaptionCarousel from "./CaptionCarousel";
import Footer from "./Footer";
import HomeSlider2 from "./HomeSlider2";
import { GameStateContext } from "./context/Context";
import { useContext } from "react";
import useGeoLocation from "./UserLocation";
import { Link } from "react-router-dom";
import ContactUsForm from "./ContactUsForm";
import HomeSlider from "./HomeSlider";
import ContactUs from "./ContactUs";
import vision from "../file/images/vision.jpg";
import Testimonals from "./Testimonals";

import { extendTheme } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

const Home = () => {
  const [loading, setLoading] = useState(false);

  const { email, setEmail, cityName } = useContext(GameStateContext);

  // Below line is the location of the user.
  const location = useGeoLocation();

  // Below I declared initialState as an object
  const initialState = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    type: "",
  };

  // I declared initialState to this text state
  const [text, setText] = useState(initialState);

  // Below function is for storing all the fileds for the input.
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (e.target == mobileNumber) {
      setText({ ...text, [id]: +value });
    } else {
      setText({ ...text, [id]: value });
    }
  };

  const isNullish = Object.values(text).every((value) => {
    if (value === "") {
      return true;
    }
    return false;
  });

  // Below function is for posting data to the backend using API.
  const submitDetails = async () => {
    if (isNullish == true) {
      alert("please enter the data");
    } else {
      await axios
        .post("https://hypekar-backend.herokuapp.com/contact/", text)
        .then(alert("Registered succesfully"));
      setText({
        firstName: "",
        name: "",
        lastName: "",
        mobileNumber: "",
        type: "",
      });
    }
  };

  //console.log("text is", text)

  // console.log("home email is", email)

  useEffect(() => {
    setLoading(true); // After entering the application loading should be true
    setTimeout(() => {
      setLoading(false); // After 4 seconds loading should be false
    }, 1000); // Loading indicator will be appeared in UI for 4 seconds.
  }, []);

  // Below code is for video autoplay
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  var isTab = useMediaQuery("max-width: 625px");

  return (
    <Box width={"100%"}>
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
        <>
          <Box>
            {/* Below line is, I imported from CaptionCarousel component. */}
            <CaptionCarousel />

            {/* whole below code is designing */}
            {isTab ? null : <br />}
            <div className="imagecontainer no_bg_mob">
              <Center>
                {email.length > 0 ? (
                  <Link to="/services">
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
                      BOOK OUR SERVICES
                    </Button>
                  </Link>
                ) : (
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
                )}
              </Center>

              <Grid
                mt="30px"
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
                alignItems="center"
                gap={7}
              >
                <Box padding="3" w="100%">
                  <video
                    style={{
                      width: "100%",
                      height: "auto",
                      margin: "0 auto",
                    }}
                    playsInline
                    loop
                    muted
                    controls
                    autoPlay
                    alt="All the devices"
                    src={vdo}
                    ref={videoEl}
                  />
                </Box>
                <Box borderRadius={10} w="100%" h="500" marginTop="20px">
                  <Flex minH={"30vh"} align={"center"} justify={"center"}>
                    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={10} px={6}>
                      <Box
                        rounded={"lg"}
                        boxShadow={"lg"}
                        p={8}
                        bg={"orange.100"}
                      >
                        <Stack spacing={4}>
                          <Heading size="md" fontFamily={"AUDIOWIDE"}>
                            Experience the best car services at your doorstep at
                            fastest speed.
                          </Heading>
                          <HStack>
                            <Box>
                              <FormControl id="firstName" isRequired>
                                <FormLabel fontFamily="Oswald">
                                  First Name
                                </FormLabel>
                                <Input
                                  value={text.firstName}
                                  onChange={handleChange}
                                  bg="white"
                                  id="firstName"
                                  type="text"
                                />
                              </FormControl>
                            </Box>
                            <Box>
                              <FormControl id="lastName">
                                <FormLabel fontFamily="Oswald">
                                  Last Name
                                </FormLabel>
                                <Input
                                  value={text.lastName}
                                  onChange={handleChange}
                                  bg="white"
                                  id="lastName"
                                  type="text"
                                />
                              </FormControl>
                            </Box>
                          </HStack>
                          <FormControl id="lastName">
                            <FormLabel fontFamily="Oswald">
                              Enter your query
                            </FormLabel>
                            <Input
                              value={text.type}
                              onChange={handleChange}
                              bg="white"
                              id="type"
                              type="text"
                            />
                          </FormControl>
                          <FormControl id="email" isRequired>
                            <FormLabel fontFamily="Oswald">
                              Mobile Number
                            </FormLabel>
                            <Input
                              value={text.mobileNumber}
                              onChange={handleChange}
                              bg="white"
                              id="mobileNumber"
                              type="number"
                              max="10"
                            />
                          </FormControl>
                          <Stack spacing={10} pt={2}>
                            <Button
                              onClick={submitDetails}
                              loadingText="Submitting"
                              size={{
                                base: "md",
                                md: "lg",
                              }}
                              bg={"orange.400"}
                              color={"white"}
                              _hover={{
                                bg: "orange.500",
                              }}
                            >
                              SUBMIT
                            </Button>
                          </Stack>
                        </Stack>
                      </Box>
                    </Stack>
                  </Flex>
                </Box>
              </Grid>
              <br />
              {isTab ? null : (
                <>
                  <br />
                  <br />
                  <br />
                </>
              )}
            </div>
            {/* <Heading textAlign="center" fontFamily={"AUDIOWIDE"}>
              Our Serivces in {cityName}
            </Heading>
            <Box>
              <HomeSlider />
            </Box> */}
          </Box>
          <br />
          <br />

          <Grid
            padding="5"
            templateColumns={{
              base: "repeat (1,1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(1, 1fr)",
            }}
            gap={6}
          >
            <GridItem
              bgColor={"#FFB94A"}
              borderRadius="10"
              w="100%"
              // h="300px"
              color={"white"}
            >
              <br />
              <Heading fontFamily={"AUDIOWIDE"} textAlign="center">
                About HypeKar
              </Heading>
              <br />
              <Text
                padding="5"
                fontSize={"28px"}
                fontFamily="Oswald"
                textAlign={"center"}
              >
                Hypekar is an initiative taken to organise the automobile
                industry and provide a unique vehicle ownership experience.
                Hypekar aims at providing one stop solution to all issues
                relating automobile at your door-step
              </Text>
              <br />
            </GridItem>

            <GridItem
              bgColor={"#c7c7c7"}
              borderRadius="10"
              w="100%"
              // h="300px"
              color={"white"}
            >
              <br />
              <Heading
                fontFamily={"AUDIOWIDE"}
                textAlign="center"
                color={"black"}
              >
                Why HypeKar ?
              </Heading>
              <br />

              <div className="row justify-content-center">
                <div className="  col-lg-2 col-md-4 col-sm-4 col-12 text-center">
                  <div className="why_hype_box">
                    0% compromise in service quality
                  </div>
                </div>
                <div className="  col-lg-2 col-md-4 col-sm-4 col-12 text-center">
                  <div className="why_hype_box">
                    0% compromise in product quality
                  </div>
                </div>

                <div className="  col-lg-2 col-md-4 col-sm-4 col-12 text-center">
                  <div className="why_hype_box">
                    100%
                    <br />
                    transparency
                  </div>
                </div>
                <div className="  col-lg-2 col-md-4 col-sm-4 col-12 text-center">
                  <div className="why_hype_box">30 days service gurantee</div>
                </div>
                {/* <OrderedList padding="5" fontSize={"large"}>
                <ListItem fontFamily="Oswald">
                  {" "}
                  0% compromise in service quality
                </ListItem>
                <ListItem fontFamily="Oswald">
                  {" "}
                  0% compromise in product quality
                </ListItem>
                <ListItem fontFamily="Oswald">
                  Integer molestie lorem at massa
                </ListItem>
                <ListItem fontFamily="Oswald">
                  100% transparency
                </ListItem>
                <ListItem fontFamily="Oswald">
                  30 days service gurantee
                </ListItem>
              </OrderedList> */}
              </div>
              <div className="row justify-content-center mt-4">
                <p
                  className="text-center mb-3"
                  style={{
                    fontSize: "22px",
                    color: "black",
                    fontFamily: "Oswald",
                  }}
                >
                  Get all these at your door step
                </p>
              </div>
            </GridItem>

            <GridItem
              bgColor={"#FFB94A"}
              borderRadius="10"
              w="100%"
              // h="300px"
              color={"white"}
            >
              <br />
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mb-2 text-center">
                  <Heading fontFamily={"AUDIOWIDE"} textAlign="center">
                    Mission
                  </Heading>
                  <br />
                  <Text padding="5" fontSize={"26px"} fontFamily="Oswald">
                    To create a transparent and trustable ecosystem of
                    automobile after-sales market
                  </Text>
                </div>
                {isTab ? (
                  <div className="col-12 only_mobile">
                    <br />
                    <br />
                  </div>
                ) : null}
                <div className="col-6 col-lg-6 col-md-6 col-12 mb-2 text-center">
                  <Heading fontFamily={"AUDIOWIDE"} textAlign="center">
                    Vision
                  </Heading>
                  <br />
                  <Text padding="5" fontSize={"26px"} fontFamily="Oswald">
                    Righteous vehicle ownership experience.
                  </Text>
                </div>
              </div>
            </GridItem>

            <GridItem
              bgColor={"#c7c7c7"}
              borderRadius="10"
              w="100%"
              // h="300px"
              color={"black"}
            >
              <br />
              <Heading fontFamily={"AUDIOWIDE"} textAlign="center">
                How HypeKar Works ?
              </Heading>
              <div
                style={{ fontFamily: "Oswald", padding: "20px" }}
                fontSize={"large"}
                className="text-center my-2"
              >
                <p> Book your service</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-down-short m-auto"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
                <p>Hypekar will diagnose your vehicle</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-down-short m-auto"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
                <p>
                  {" "}
                  A brief quote and report of issues will be discussed with you
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-down-short m-auto"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
                <p>Vehicle service begins with regular updates and videos</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-down-short m-auto"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
                <p>Your keys will be handed to you for final inspection</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-down-short m-auto"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
                <p>Payment will be collected with your valuable feedback</p>
              </div>
            </GridItem>
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

            <GridItem
              bgColor={"#FFB94A"}
              // overflow="scroll"
              borderRadius="10"
              w="100%"
              // h="300px"
              color={"white"}
            >
              <Accordion allowToggle>
                <br />
                <Heading textAlign={"center"} fontFamily={"AUDIOWIDE"}>
                  FAQ’S
                </Heading>
                <br />

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontFamily="Oswald"
                        fontSize={"22px"}
                      >
                        Why should we choose HypeKar ?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontFamily="Oswald">
                    Every month, or every few petrol fill-ups and especially
                    before any long road trips, it’s a good idea to get under
                    the hood of your car and inspect both the oil and coolant
                    levels while the engine is cool. Low levels of either can
                    lead to engine problems if left unchecked. Refer to your
                    owner’s manual to locate both on your specific vehicle.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontFamily="Oswald"
                        fontSize={"22px"}
                      >
                        What are the features of the HypeKar ?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontFamily="Oswald">
                    To maximise the life and performance of your vehicle, here i
                    s a list of items you should check depending on the time and
                    season.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontFamily="Oswald"
                        fontSize={"22px"}
                      >
                        What are the discount of Multiple services ?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontFamily="Oswald">
                    Caring for your car and keeping it in proper running order
                    takes a little bit of effort, but you definitely don’t have
                    to be a mechanical whiz to keep your vehicle running well.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontFamily="Oswald"
                        fontSize={"22px"}
                      >
                        Why HypeKar is need for us ?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontFamily="Oswald">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontFamily="Oswald"
                        fontSize={"22px"}
                      >
                        What extra features HypeKar has ?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontFamily="Oswald">
                    The biggest hurdle is being aware of what needs to be
                    done—and how often—for optimal vehicle upkeep. By knowing
                    the basics about what your car needs, and when you should
                    perform routine car maintenance, you’ll ensure that your car
                    is in top-running condition.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontFamily="Oswald"
                        fontSize={"22px"}
                      >
                        Who is the Director of the HypeKar ?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontFamily="Oswald">
                    To make it easy to keep track of your car maintenance
                    schedule, we’ve created a simple, downloadable car
                    maintenance checklist to help you keep on top of your
                    automotive maintenance.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
          </Grid>
          <br />
          <br />
          <div className="imagecontainer bg_cover">
            <Heading
              textAlign={"center"}
              fontFamily={"AUDIOWIDE"}
              fontSize={"22px"}
            >
              Our valuable feedback from {cityName ? cityName : "Dehradun"}
            </Heading>
            <br />
            <Testimonals />
            <br />
            <br /> <br />
            <br />
          </div>

          <Footer />
        </>
      )}
    </Box>
  );
};

export default Home;

// import { Heading, Center, Spinner, useColorModeValue, Box, Grid, GridItem, Image, Text, Flex, FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Accordion,
// AccordionItem,
// AccordionButton,
// AccordionPanel,
// AccordionIcon,
// List,
// ListItem,
// ListIcon,
// OrderedList,
// UnorderedList,
//   Select, } from '@chakra-ui/react';
// import React, {useState, useEffect, useRef} from 'react';
// // import "./css-files/Text.css"
// import { useTransition, animated } from 'react-spring'
// import axios from 'axios';
// import CaptionCarousel from './CaptionCarousel';
// import Footer from './Footer';
// import { GameStateContext } from "./context/Context";
// import { useContext } from 'react'
// import useGeoLocation from './UserLocation'
// import { Link } from 'react-router-dom';
// import ContactUsForm from './ContactUsForm';
// import HomeSlider from './HomeSlider';
// import ContactUs from './ContactUs';

// const Home = () => {
//   const [loading, setLoading] = useState(false);

//   const {email, setEmail} = useContext(GameStateContext)

//   const location = useGeoLocation()

//   const initialState = {
//       firstName : "",
//       lastName : "",
//       mobileNumber : "",
//       type : ""
//   }
//   const [text, setText] = useState(initialState)

//   let config = {
//       headers: {
//         "Content-Type": "application/json",
//         'Access-Control-Allow-Origin': '*',
//         }
//       }

//   const handleChange = (e) =>{
//       const {id, value} = e.target;
//       if(e.target == mobileNumber) {
//           setText({...text, [id] : +value})
//       }
//       else{
//           setText({...text, [id] : value})
//       }
//     }

//     const isNullish = Object.values(text).every(value => {
//       if (value === "") {
//         return true;
//       }
//       return false;
//     });

//     const submitDetails = async() =>{
//       if(isNullish==true){
//         alert("please enter the data")
//       }
//       else{
//          await axios.post("https://apihypekar.herokuapp.com/contact/", text)
//         .then(alert("Registered succesfully"))
//         setText({firstName : "", name : "", lastName : "", mobileNumber : "", type : ""})

//      }
//     }

//     console.log("text is", text)

//   console.log("home email is", email)
//   useEffect(()=>{
//     setLoading(true) // After entering the application loading should be true
//         setTimeout(()=>{
//             setLoading(false) // After 4 seconds loading should be false
//     },1000) // Loading indicator will be appeared in UI for 4 seconds.
//   },[])

//   useEffect(()=>{

//           getCar()

//   },[])

//   //axios.defaults.withCredentials = true;

//       const getCar = async() =>{
//           const res = await axios.get(`https://2bbe-103-148-62-156.in.ngrok.io/mycardata?email=${email}`)
//            console.log("res is", res)
//       }

//   const videoEl = useRef(null);

//       const attemptPlay = () => {
//           videoEl &&
//           videoEl.current &&
//           videoEl.current.play().catch(error => {
//               console.error("Error attempting to play", error);
//           });
//       };

//           useEffect(() => {
//               attemptPlay();
//           }, []);

//       return (
//       <Box >
//           {
//           loading == true  ?
//               <Center mt="200px">
//               <Spinner
//               thickness='4px'
//               speed='0.65s'
//               emptyColor='gray.200'
//               color='blue.500'
//               size='xl'
//               />
//               </Center>
//           :

//           <>

//           <Box>

//               <CaptionCarousel/>
//               <Grid mt="30px"
//               templateColumns={{base:'repeat(1, 1fr)',
//               md:'repeat(2, 1fr)',
//               lg:'repeat(2, 1fr)'
//               }} gap={7}>
//               <Box borderRadius={10} w='100%' h='500'>
//               <Flex
//                   minH={'30vh'}
//                   align={'center'}
//                   justify={'center'}
//               >
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={6}>
//         <Box
//           rounded={'lg'}
//           boxShadow={'lg'}
//           p={8}>
//           <Stack spacing={4}>
//             <Heading fontFamily="monospace" size="md">EXPERIENCE THE BEST CAR SERVICES AT YOUR DOORSTEP</Heading>
//             <HStack>
//               <Box>
//                 <FormControl id="firstName" isRequired>
//                   <FormLabel fontFamily="monospace">First Name</FormLabel>
//                   <Input value={text.firstName} onChange={handleChange} bg="white" id="firstName"  type="text" />
//                 </FormControl>
//               </Box>
//               <Box>
//                 <FormControl id="lastName">
//                   <FormLabel fontFamily="monospace">Last Name</FormLabel>
//                   <Input value={text.lastName} onChange={handleChange} bg="white" id="lastName"  type="text" />
//                 </FormControl>

//               </Box>
//             </HStack>
//             <FormControl id="lastName">
//                   <FormLabel fontFamily="monospace">Type</FormLabel>
//                   <Input value={text.type} onChange={handleChange} bg="white" id="type"  type="text" />
//                 </FormControl>
//             <FormControl id="email" isRequired>
//               <FormLabel fontFamily="monospace">Mobile Number</FormLabel>
//               <Input value={text.mobileNumber} onChange={handleChange} bg="white" id="mobileNumber"  type="number" max="10" />
//             </FormControl>
//             <Stack spacing={10} pt={2}>
//               <Button
//                 onClick={submitDetails}
//                 loadingText="Submitting"
//                 size="lg"
//                 bg={'blue.400'}
//                 color={'white'}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}>
//                 SUBMIT
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//               {/* <ContactUs/> */}

//               </Box>
//                   <Box w="100%" h="500">

//                       <video
//                       style={{ width: "800px", height: "500px", margin: "0 auto"}}
//                       playsInline
//                       loop
//                       muted
//                       controls
//                       autoPlay
//                       alt="All the devices"
//                       src="https://cdn.kapwing.com/final_6339d1c5f81a340f1b84512f_525224.mp4"
//                       ref={videoEl}
//                        />
//                   </Box>
//               </Grid>

//               <br />
//               <Heading textAlign="center">Our Serivces</Heading>
//               <br />
//               <HomeSlider/>
//           </Box>

//           <br />

//           <br />

//           <Grid mt="30px"
//               templateColumns={{base:'repeat(1, 1fr)',
//               md:'repeat(2, 1fr)',
//               lg:'repeat(2, 1fr)'
//               }} gap={7} h="500">
//           <Box overflow="scroll">
//           <Accordion allowToggle>
//           <Heading textAlign={"center"}>FAQ’S</Heading>
//           <br />

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                     Why should we choose HypeKar ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Every month, or every few petrol fill-ups and especially before any
//               long road trips, it’s a good idea to get under the hood of your car
//               and inspect both the oil and coolant levels while the engine is cool.
//               Low levels of either can lead to engine problems if left unchecked.
//               Refer to your owner’s manual to locate both on your specific vehicle.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the features of the HypeKar ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               To maximise the life and performance of your vehicle, here i
//               s a list of items you should check depending on the time and season.
//               </AccordionPanel>
//           </AccordionItem>
//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order
//               takes a little bit of effort, but you definitely don’t have
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order
//               takes a little bit of effort, but you definitely don’t have
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order
//               takes a little bit of effort, but you definitely don’t have
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order
//               takes a little bit of effort, but you definitely don’t have
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order
//               takes a little bit of effort, but you definitely don’t have
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order
//               takes a little bit of effort, but you definitely don’t have
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order
//               takes a little bit of effort, but you definitely don’t have
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   Why HypeKar is need for us ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//               commodo consequat.
//               </AccordionPanel>
//           </AccordionItem>
//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                     What extra features HypeKar has ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               The biggest hurdle is being aware of what needs to be done—and
//               how often—for optimal vehicle upkeep. By knowing the basics about
//               what your car needs, and when you should perform routine car
//               maintenance, you’ll ensure that your car is in top-running condition.
//               </AccordionPanel>
//           </AccordionItem>
//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   Who is the Director of the HypeKar ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               To make it easy to keep track of your car maintenance schedule, we’ve
//               created a simple, downloadable car maintenance checklist to help you
//               keep on top of your automotive maintenance.
//               </AccordionPanel>
//           </AccordionItem>
//           </Accordion>
//           </Box>
//           {/* <Image padding="5" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/ccp/capture.webp?la=en&rev=ae498d7679c44db58306ac208eb9f2ff&extension=webp&hash=ED3A7FA546186B11A7DB6FD9A0D90C06"></Image> */}
//           <Box overflow={"scroll"}  borderRadius="10" backgroundColor="#E2E8F0">
//               <Heading padding="5" textAlign="center">Why choose us ?</Heading>
//               <OrderedList  padding="5" fontSize="xl">
//               <ListItem>Regular car service ensures fuel efficiency
//               A car that goes for regular car service and car maintenance gives huge
//               dividends in fuel efficiency too</ListItem>
//               <ListItem> Regular changing of oil, coolants,
//               radiator fluid, and other vital fluids vastly improve fuel efficiency,
//               thus givin g you better mileage and more bang for your fuel buck!</ListItem>
//               <ListItem>Integer molestie lorem at massa</ListItem>
//               <ListItem>Facilisis in pretium nisl aliquet</ListItem>
//               <ListItem>Automotive Services means the repair, rebuilding or
//                   reconditioning of motor vehicles or parts thereof, including
//                   collision service, painting and steam cleaning of vehicles and
//                   commercial carwashes.</ListItem>
//                   <ListItem>Automotive Services means the repair, rebuilding or
//                   reconditioning of motor vehicles or parts thereof, including
//                   collision service, painting and steam cleaning of vehicles and
//                   commercial carwashes.</ListItem>
//                   <ListItem>Automotive Services means the repair, rebuilding or
//                   reconditioning of motor vehicles or parts thereof, including
//                   collision service, painting and steam cleaning of vehicles and
//                   commercial carwashes.</ListItem>
//               </OrderedList>

//           </Box>
//           </Grid>
//           <br />
//           <Footer/>
//           </>
//           }
//           <br />
//           <br />
//           <br />

//       </Box>

//   );
// }

// export default Home;
