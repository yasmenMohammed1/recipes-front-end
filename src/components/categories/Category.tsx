import { Box, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "../categoryCard/CategoryCard";

export default function Category() {
  const [categories, setCategories] = useState<Array<any>>([{ ee: "fefe" }]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/recipe")
      .then((data: any) => {
        setCategories(data.data.data);
        console.log(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Button
        onClick={() => {
          console.log(categories);
        }}
      >
        catefories
      </Button>
      <Flex wrap={"wrap"} justifyContent="center">
        {categories?.map((category) => {
          return (
            <>
              <Box padding={2}>
                <CategoryCard />
              </Box>
            </>
          );
        })}
      </Flex>
    </>
  );
}
