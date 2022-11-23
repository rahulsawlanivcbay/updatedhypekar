import { Button, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function SparesAccessories() {
  return (
    <div>
      <Center mt="200px">
        <br />
        <div className="text-center">
          <h2
            style={{
              fontSize: "32px",
              fontFamily: "AUDIOWIDE",
              fontWeight: "600",
              width: "100%",
            }}
          >
            will be available soon
          </h2>
          <br />
          <br />

          <Link to="/contact">
            <Button
              padding="8"
              size="lg"
              bg={"orange.400"}
              color={"white"}
              _hover={{
                bg: "orange.500",
              }}
              fontSize={"large"}
            >
              CONTACT US
            </Button>
          </Link>
        </div>
      </Center>
    </div>
  );
}
