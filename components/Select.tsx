import React from 'react';
import { Select } from '@chakra-ui/react';

type Props = {
  placeholder: string;
  target?: boolean;
};

export default function Selector({ placeholder, target }: Props) {
  return (
    <Select
      variant="filled"
      placeholder={placeholder}
      size="sm"
      borderRadius="md"
      defaultValue={target ? 'en' : 'auto'}
    >
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="az">Azerbaijani</option>
      <option value="zh">Chinese</option>
      <option value="cs">Czech</option>
      <option value="da">Danish</option>
      <option value="nl">Dutch</option>
      <option value="eo">Esperanto</option>
      <option value="fi">Finnish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="el">Greek</option>
      <option value="he">Hebrew</option>
      <option value="hi">Hindi</option>
      <option value="hu">Hungarian</option>
      <option value="id">Indonesian</option>
      <option value="ga">Irish</option>
      <option value="it">Italian</option>
      <option value="ja">Japanese</option>
      <option value="ko">Korean</option>
      <option value="fa">Persian</option>
      <option value="pl">Polish</option>
      <option value="pt">Portuguese</option>
      <option value="ru">Russian</option>
      <option value="sk">Slovak</option>
      <option value="es">Spanish</option>
      <option value="sv">Swedish</option>
      <option value="tr">Turkish</option>
      <option value="uk">Ukranian</option>
      {target ? '' : <option value="auto">Auto Detect</option>}
    </Select>
  );
}
