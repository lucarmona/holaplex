import {useState} from 'react';
import FeatherIcon from 'feather-icons-react'
import sv from '../../constants/Styles';
import FontPicker from "font-picker-react";
import styled from 'styled-components';
import {Label, Text} from '../../constants/StyleComponents';

////// STYLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const Container = styled.div`
  ${sv.inputField};
  position: relative;
  #font-picker {
    position: absolute;
    background: none;
    box-shadow: none;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .dropdown-button {
      height: 100%;
      opacity: 0;
    }
  }
`;

const FontName = styled.div`
  margin-left: auto;
`;

const DropdownIcon = styled(FeatherIcon)`
  margin-left: ${sv.grid*2}px;
  color: ${sv.colors.subtleText};
`;

////// COMPONENT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const googleApiKey = 'AIzaSyC1Bti2pgemOewDX-95SkcgEvyWixFffbA';

type Props = {
  onChange: () => void,
  font: string,
  label: string,
  pickerId: string
}

const FontPickerField = ({ onChange, font, label, pickerId }: Props) => {

  const [fontFamily, setFontFamily] = useState('Work Sans')

  const handleChange = (newFont) => {
    console.log(newFont)
  }

  return (
    <Container>
      <Label noMargin>{label}</Label>
      <FontName>{fontFamily}</FontName>
      <DropdownIcon size={20} icon="chevron-down" />
      <FontPicker
				apiKey={googleApiKey}
        // pickerId={pickerId}
				activeFontFamily={fontFamily}
				onChange={handleChange}
			/>
    </Container>
  )
}

export default FontPickerField;