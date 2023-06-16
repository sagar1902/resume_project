

import React, { useState, useRef } from 'react';
import "./ImageUpload.styles.css";
import { useResume } from "../../../context";

import 'rsuite/dist/rsuite.min.css';
import { Modal, Button } from 'rsuite';

import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';

import ImageCropper from "./ImageCropper";

function ImageUpload() {

  const { about, setAbout } = useResume();
  const [picture, setPicture] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    // const file = URL.createObjectURL(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      readFileContents(file);
    }
    // setPicture(file);
  };

  const handleClose = () => {
    setPicture(null);
    fileInputRef.current.value = null;
  }

  const handleSubmit = () => {
    setAbout({ ...about, picture: croppedImage });
    setPicture(null)
  }

  ////////// crop from gpt
  const [crop, setCrop] = useState({ aspect: 1 });

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    // `croppedArea` contains the coordinates and dimensions of the cropped area
    // `croppedAreaPixels` contains the pixel values of the cropped area
    console.log('Cropped Area:', croppedArea);
    console.log('Cropped Area (Pixels):', croppedAreaPixels);
  
    // Perform further actions with the cropped image data
  };

  function convertBlobToBase64(blobUrl) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = function (error) {
        reject(error);
      };
      xhr.open('GET', blobUrl);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }

  const readFileContents = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileContents = reader.result;
      // Convert to base64 data URL
      const base64DataUrl = `data:image/jpeg;base64,${btoa(fileContents)}`;
      // Do something with the base64 data URL
      
      setPicture(base64DataUrl);
    };
    reader.onerror = () => {
      console.error('Error reading file.');
    };
    reader.readAsBinaryString(file);
  };



  const onImageLoaded = image => {
    this.imageRef = image;
  };

  const onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  const onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };
  

  return (
    <>
    <div>
      <input id="profile_pic_uploader" ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} />
    </div>
    <Modal
                open={picture?true:false}
                onClose={handleClose}
                backdrop="static"
            >
                <Modal.Header>
                    <h2>Profile Pic</h2>
                </Modal.Header>
                <Modal.Body>
                    <div>
                      <ImageCropper
                        imageToCrop={picture}
                        onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
                        // about={about}
                        // setAbout={setAbout}
                      />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit} 
                        appearance="primary">
                        Save
                    </Button>
                    <Button onClick={handleClose} 
                        appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  );
}

export default ImageUpload;






// import React from "react";
// import "./ImageUpload.styles.css";
// import Files from "react-files";
// import { useResume } from "../../../context";
// import { 
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure } from '@chakra-ui/react'



// function ImageUpload() {

//   const { isOpen, onOpen, onClose } = useDisclosure()

//   const { about, setAbout } = useResume();

//   const onFilesChange = (files) => {
//     onOpen();
//     console.log(files[0].preview.url);
//     // setAbout({ ...about, picture: files[0].preview.url });
//   };

//   const onFilesError = (error, file) => {
//     console.log("error code " + error.code + ": " + error.message);
//   };
  
//   return (
//     <>
//     <Files
//       className="files-dropzone"
//       // onClick={() => {
//       //   onOpen()
//       // }}
//       onChange={onFilesChange}
//       onError={onFilesError}
//       accepts={["image/png", "image/jpeg"]}
//       maxFileSize={10000000}
//       minFileSize={0}
//       clickable
//     >
//       Upload Image
//     </Files>
//     <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             {/* <Lorem count={2} /> */}
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default ImageUpload;
