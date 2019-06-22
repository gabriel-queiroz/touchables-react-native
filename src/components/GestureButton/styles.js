import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { TouchableContentStyles, TitleStyles } from '~/styles';

export const Container = styled(BorderlessButton)`
  background-color: #f53;
  ${() => TouchableContentStyles};
`;

export const Title = styled.Text`
  ${() => TitleStyles};
`;
