

import React, { useState, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCropper = ({ imageToCrop, onImageCropped, about, setAbout }) => {
  const [crop, setCrop] = useState({ aspect: 1 });
  const [croppedImageUrl, setCroppedImageUrl] = useState('');

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    // Perform any additional processing or actions with the cropped image data
    // You can pass the cropped area and cropped area pixels to onImageCropped function
    console.log(crop)
    // onImageCropped(croppedArea, croppedAreaPixels);
    onImageCropped(croppedImageUrl)
  };

  useEffect(() => {
    if (crop.width && crop.height && imageToCrop) {
      getCroppedImage();
    }
  }, [crop, imageToCrop]);

  const getCroppedImage = () => {
    const image = new Image();
    image.src = imageToCrop;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    image.onload = () => {
      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      const croppedImage = canvas.toDataURL('image/jpeg');
      setCroppedImageUrl(croppedImage);
    };
  };

  return (
    <div 
    // style={{display: 'flex'}}
    >
      <ReactCrop
        src={imageToCrop}
        crop={crop}
        onChange={handleCropChange}
        onComplete={handleCropComplete}
      />
      {croppedImageUrl && (
        <div 
        style={{padding: '0px 40px'}}
        >
          Preview:
          <img src={croppedImageUrl} alt="Cropped" style={{ width: "115px", height: "115px", margin: "15px", borderRadius: "50%"}}/>
        </div>
      )}
    </div>
  );
};

export default ImageCropper;


// import { useState } from 'react';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';

// function ImageCropper({ imageToCrop, onImageCropped }) {
//   // const [src, setSrc] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 16 / 9 });
//   const [image, setImage] = useState(imageToCrop);
//   const [output, setOutput] = useState(null);

//   const selectImage = (file) => {
//     setSrc(URL.createObjectURL(file));
//   };

//   const cropImageNow = () => {
//     const canvas = document.createElement('canvas');
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     canvas.width = crop.width;
//     canvas.height = crop.height;
//     const ctx = canvas.getContext('2d');

//     const pixelRatio = window.devicePixelRatio;
//     canvas.width = crop.width * pixelRatio;
//     canvas.height = crop.height * pixelRatio;
//     ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
//     ctx.imageSmoothingQuality = 'high';

//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height,
//     );

//     // Converting to base64
//     const base64Image = canvas.toDataURL('image/jpeg');
//     setOutput(base64Image);
//   };

//   return (
//     <div className="App">
//       <center>
//         {/* <input
// 					type="file"
// 					accept="image/*"
// 					onChange={(e) => {
// 						selectImage(e.target.files[0]);
// 					}}
// 				/>
// 				<br />
// 				<br /> */}
//         <div>
//           {imageToCrop && (
//             <div>
//               <ReactCrop src={imageToCrop}
//                 onImageLoaded={setImage}
//                 crop={crop}
//                 onChange={setCrop}
//               />
//               <br />
//               <button onClick={cropImageNow}>Crop</button>
//               <br />
//               <br />
//             </div>
//           )}
//         </div>
//         <div>{output && <img src={output} />}</div>
//       </center>
//     </div>
//   );
// }

// export default ImageCropper;









// import React, { useState } from "react";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
// // import demoImage from "./demo-image.jpg";

// function ImageCropper({ imageToCrop, onImageCropped }) {
//   console.log(imageToCrop)
//   // const { imageToCrop, onImageCropped } = props;

//   const [cropConfig, setCropConfig] = useState(
//     // default crop config
//     {
//       unit: "%",
//       width: 30,
//       aspect: 1/1
//     }
//   );

//   const [imageRef, setImageRef] = useState();

//   async function cropImage(crop) {
//     if (imageRef && crop.width && crop.height) {
//       const croppedImage = await getCroppedImage(
//         imageRef,
//         crop,
//         "croppedImage.jpeg" // destination filename
//       );

//       // calling the props function to expose
//       // croppedImage to the parent component
//       onImageCropped(croppedImage);
//     }
//   }

//   function getCroppedImage(sourceImage, cropConfig, fileName) {
//     // creating the cropped image from the source image
//     const canvas = document.createElement("canvas");
//     const scaleX = sourceImage.naturalWidth / sourceImage.width;
//     const scaleY = sourceImage.naturalHeight / sourceImage.height;
//     canvas.width = cropConfig.width;
//     canvas.height = cropConfig.height;
//     const ctx = canvas.getContext("2d");

//     ctx.drawImage(
//       sourceImage,
//       cropConfig.x * scaleX,
//       cropConfig.y * scaleY,
//       cropConfig.width * scaleX,
//       cropConfig.height * scaleY,
//       0,
//       0,
//       cropConfig.width,
//       cropConfig.height
//     );

//     return new Promise((resolve, reject) => {
//       canvas.toBlob((blob) => {
//         // returning an error
//         if (!blob) {
//           reject(new Error("Canvas is empty"));
//           return;
//         }

//         blob.name = fileName;
//         // creating a Object URL representing the Blob object given
//         const croppedImageUrl = window.URL.createObjectURL(blob);

//         resolve(croppedImageUrl);
//       }, "image/jpeg");
//     });
//   }

//   return (
//     <ReactCrop
//       src={imageToCrop}
//       crop={cropConfig}
//       ruleOfThirds
//       onImageLoaded={(imageRef) => setImageRef(imageRef)}
//       onComplete={(cropConfig) => cropImage(cropConfig)}
//       onChange={(cropConfig) => setCropConfig(cropConfig)}
//       crossorigin="anonymous" // to avoid CORS-related problems
//     />
//   );
// }

// ImageCropper.defaultProps = {
//   onImageCropped: () => {}
// };

// export default ImageCropper;
