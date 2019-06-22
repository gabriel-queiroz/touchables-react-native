import styled from 'styled-components/native';
import { TouchableContentStyles, TitleStyles } from '~/styles';

export const Touchable = styled.TouchableOpacity``;

export const Content = styled.View`
  ${() => TouchableContentStyles};
  background-color: green;
`;

export const Title = styled.Text`
  ${() => TitleStyles};
`;
