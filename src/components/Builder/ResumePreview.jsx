// import {
//   Box,
//   Heading,
//   HStack,
//   Tag,
//   TagLabel,
//   Text,
//   VStack,
//   Wrap,
//   UnorderedList,
//   ListItem,
// } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useResume } from "../../context";
import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from "react-router-dom";


const CV2 = lazy(() => import('../Templates/CV2'));
const CV4 = lazy(() => import('../Templates/CV4'));
const CV5 = lazy(() => import('../Templates/CV5'));

const componentMap = {
  'cv2': CV2,
  'cv4': CV4,
  'cv5': CV5,
}

const ResumePreview = () => {

  const { templateName } = useParams();
  const Component = componentMap[templateName];

  if (!Component) {
    return <div>Invalid component name</div>;
  }

  return (
    <>
      <Suspense
        fallback={
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />}
      >
        {<Component />}
      </Suspense>
    </>
  );
};

export default ResumePreview;
