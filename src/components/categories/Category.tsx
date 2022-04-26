import { Box, Button, Flex, HStack, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
interface Category {
  name: string;
  file: {
    name: string;
  };
}
export default function Category() {
  const [categories, setCategories]: any = useState();
  const [newCategory, setNewCategory]: any = useState({
    name: "ee",
    image: "ll",
  });
  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((data: any) => {
        console.log(categories);
        console.log(data.data);
        setCategories([...data.data]);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  const [selectedFile, setSelectedFile]: any = useState("");

  const handleSubmit: any = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", newCategory.name);
    formData.append("image", newCategory.image);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/categories",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
    console.log(categories);
  };

  useEffect(() => {
    console.log("e");
  }, [categories]);
  return (
    <>
      <HStack>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            value={newCategory.name}
            onChange={(e: any) => {
              setNewCategory({ ...newCategory, name: e.target.value });
            }}
          ></Input>{" "}
          <Input
            type={"file"}
            onChange={(e: any) => {
              console.log(e.target.files[0].name);
              setSelectedFile(e.target?.files[0]);
              setNewCategory({
                ...newCategory,
                image: e.target.files[0].name,
              });
              console.log(newCategory);
            }}
          ></Input>{" "}
          <Button type={"submit"}>catefories</Button>
        </form>
      </HStack>

      <Flex wrap={"wrap"} justifyContent="center">
        {categories?.map((category: any) => {
          return (
            <>
              <Box padding={2}>
                <CategoryCard category={category} />
              </Box>
            </>
          );
        })}
      </Flex>
    </>
  );
}
