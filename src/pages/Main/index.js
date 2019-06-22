import React from 'react';

import { Container, StatusBar } from './styles';
import GestureButton from '~/components/GestureButton';
import TouchableNativeFeedback from '~/components/TouchableNativeFeedback';
import TouchableOpacity from '~/components/TouchableOpacity';
import TouchableWithoutFeedback from '~/components/TouchableWithoutFeedback';

const Main = () => (
  <Container>
    <StatusBar />
    <GestureButton />
    <TouchableNativeFeedback />
    <TouchableOpacity />
    <TouchableWithoutFeedback />
  </Container>
);

export default Main;
