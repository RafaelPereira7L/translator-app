import React from 'react';

type Props = {
  target: string;
};

export default function Options({ target }: Props) {
  return (
    <>
      {target === 'source' ? <option value="auto">Auto Detect</option> : ''}
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="zh">Chinese</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="hi">Hindi</option>
      <option value="id">Indonesian</option>
      <option value="ga">Irish</option>
      <option value="it">Italian</option>
      <option value="ja">Japanese</option>
      <option value="ko">Korean</option>
      <option value="pl">Polish</option>
      <option value="pt">Portuguese</option>
      <option value="ru">Russian</option>
      <option value="es">Spanish</option>
      <option value="tr">Turkish</option>
      <option value="vi">Vietnamese</option>
    </>
  );
}
