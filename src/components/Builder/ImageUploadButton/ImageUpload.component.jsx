import React from "react";
import "./ImageUpload.styles.css";
import Files from "react-files";
import { useResume } from "../../../context";
import { 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure } from '@chakra-ui/react'



function ImageUpload() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { about, setAbout } = useResume();

  const onFilesChange = (files) => {
    onOpen();
    console.log(files[0].preview.url);
    // setAbout({ ...about, picture: files[0].preview.url });
  };

  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };
  
  return (
    <>
    <Files
      className="files-dropzone"
      // onClick={() => {
      //   onOpen()
      // }}
      onChange={onFilesChange}
      onError={onFilesError}
      accepts={["image/png", "image/jpeg"]}
      maxFileSize={10000000}
      minFileSize={0}
      clickable
    >
      Upload Image
    </Files>
    <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImageUpload;
