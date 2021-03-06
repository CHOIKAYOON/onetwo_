import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import { GenderT } from '../enum';

import Image from 'next/image';
import { Flex, Box } from "@chakra-ui/react";

import { StepHeading, StepItem, NextButton } from '../styled';

import Union from 'asset/union/Union.png';

// toolkit
import { useAppDispatch } from 'toolkit/hooks';
import { changeSteps, changeChoiceInfo } from 'features/choice';

function GenderStepComponent() {
  // toolkit
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState('');

  const toggle = (code: string) => {
    if (selected === code) {
      setSelected('')
    } else {
      setSelected(code);
    } 
  }

  const onClickNextStep = () => {
    if (isEmpty(selected)) {
      return; 
    } else {
      dispatch(changeChoiceInfo({ gender: selected }));
      dispatch(changeSteps(2));
    }
  }
  
  return (
    <>
      <StepHeading>성별을 알려주세요</StepHeading>
      <Flex mt="32px" flexDirection="column">
        {GenderT.map((item, idx) => {
          const { code, name } = item;

          let correct = selected === code;
          let isLast = GenderT.length - 1  === idx;

          return (
            <StepItem 
              key={code} 
              mb={isLast? '0' : '18px'} 
              height={selected === '' ? '136px' : correct ? '208px' : '100px'}
              color={correct ? '#fff' : 'dGray.900'}
              backgroundColor={correct ? 'dGray.900' : '#fff'}
              onClick={() => toggle(code)}
            >
              <Box>
                {correct && <Image src={Union} alt="초이스 셀렉트 로고이미지" width="14px" height="8px" />}
              </Box>
              {name}
            </StepItem>
          )
        })}
      </Flex>
      <NextButton color={selected !== '' ? 'dPrimary' : 'dGray.500'} onClick={onClickNextStep}>다음</NextButton>
    </>
  )
}
export default GenderStepComponent
