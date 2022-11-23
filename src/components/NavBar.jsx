import { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { GameStateContext } from "./context/Context";
import { useContext } from "react";
import { ProfileModel } from "./ProfileModel";
import { MdRadioButtonUnchecked } from "react-icons/md";
import logo from "../file/images/logo.svg";
import axios from "axios";
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
// import {Link} from "react-router-dom"
export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // In below line I imported the state from gamestatecontext.
  const { email, setEmail } = useContext(GameStateContext);

  // console.log("navbar email is", email)

  // This is the logout function
  const getLogout = async () => {
    await axios
      .get("https://hypekarapi.herokuapp.com/logout/")
      .then((Response) => alert(Response.data.massage));
    setEmail("");
  };

  //  console.log("email after login", email)

  return (
    <>
      {/* This is the designing code */}
      <Box bg="#cccccc" px={4} fontFamily={"Oswald"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link to="/">
              <Box>
                <Image borderRadius={10} w="80px" src={logo}></Image>
              </Box>
            </Link>
            {/* <Heading size="md" color="white">HypeKar</Heading> */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                _hover={{
                  // transform: "scale(1.2)",
                  bg: "orange",
                }}
              >
                <Link
                  to="/"
                  style={{ color: "#000", fontWeight: 600, padding: "5px" }}
                >
                  {/* <Butto backgroundColor="#212529;" color="white">HOME</Butto> */}
                  HOME
                </Link>
              </Box>
              {email.length > 0 ? (
                <Box
                  _hover={{
                    // transform: "scale(1.2)",
                    bg: "orange",
                  }}
                >
                  <Link
                    to="/myvehicle"
                    style={{ color: "#000", fontWeight: 600, padding: "5px" }}
                  >
                    MY VEHICLE
                    {/* <Button backgroundColor="#808080;" color="white">MY VEHICLE</Button> */}
                  </Link>
                </Box>
              ) : (
                ""
              )}
              <Box
                _hover={{
                  // transform: "scale(1.2)",
                  bg: "orange",
                }}
              >
                <Link
                  to="/services"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    padding: "5px",
                  }}
                >
                  SERVICES
                  {/* <Button backgroundColor="#808080;" color="white">SERVICES</Button> */}
                </Link>
              </Box>
              <Box
                _hover={{
                  // transform: "scale(1.2)",
                  bg: "orange",
                }}
              >
                <Link
                  to="/spares-accessories"
                  style={{ color: "#000", fontWeight: 600, padding: "5px" }}
                >
                  SPARES & ACCESSORIES
                  {/* <Button backgroundColor="#808080;" color="white">SERVICES</Button> */}
                </Link>
              </Box>
              <Box
                _hover={{
                  // transform: "scale(1.2)",
                  bg: "orange",
                }}
              >
                <Link
                  to="/about"
                  style={{ color: "#000", fontWeight: 600, padding: "5px" }}
                >
                  ABOUT US
                  {/* <Button backgroundColor="#808080;" color="white">ABOUT US</Button> */}
                </Link>
              </Box>
              <Box
                _hover={{
                  // transform: "scale(1.2)",
                  bg: "orange",
                }}
              >
                <Link
                  to="/contact"
                  style={{ color: "#000", fontWeight: 600, padding: "5px" }}
                >
                  CONTACT US
                  {/* <Button backgroundColor="#808080;" color="white">CONTACT US</Button> */}
                </Link>
              </Box>

              {email.length > 0 ? (
                <Box
                  _hover={{
                    // transform: "scale(1.2)",
                    bg: "orange",
                  }}
                >
                  <Link
                    to="/feedback"
                    style={{ color: "#000", fontWeight: 600, padding: "5px" }}
                  >
                    FEEDBACK
                    {/* <Button backgroundColor="#808080;" color="white"> FEEDBACK</Button> */}
                  </Link>
                </Box>
              ) : (
                // <Link to="/feedback"  >

                // <Button backgroundColor="#808080;" color="white" >FEEDBACK</Button>
                // </Link>

                console.log(null)
              )}
            </HStack>
          </HStack>

          {
            email.length == 0 ? (
              <Link to="/login">
                {/* SIGNUP/SIGNIN */}
                <Button
                  backgroundColor="orange;"
                  color="white"
                  _hover={{
                    transform: "scale(1.1)",
                    bg: "orange",
                  }}
                >
                  SIGNUP/SIGNIN
                </Button>
              </Link>
            ) : (
              <Link to="/">
                <Button onClick={getLogout} backgroundColor="red">
                  Logout
                </Button>
              </Link>
            )
            // <Button backgroundColor="#FFFAF0">PROFILE</Button>
          }
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/">
                <Button backgroundColor="#808080;" color="white">
                  HOME
                </Button>
              </Link>
              <Link to="/services">
                <Button backgroundColor="#808080;" color="white">
                  SERVICES
                </Button>
              </Link>
              <Link to="/about">
                <Button backgroundColor="#808080;" color="white">
                  ABOUT US
                </Button>
              </Link>
              <Link to="/contact">
                <Button backgroundColor="#808080;" color="white">
                  CONTACT US
                </Button>
              </Link>

              {email.length > 0 ? (
                <Link to="/myvehicle">
                  <Button backgroundColor="#808080;" color="white">
                    MY VEHICLE
                  </Button>
                </Link>
              ) : (
                console.log(null)
              )}

              {email.length > 0 ? (
                <Link to="/feedback">
                  <Button backgroundColor="#808080;" color="white">
                    FEEDBACK
                  </Button>
                </Link>
              ) : (
                console.log(null)
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
