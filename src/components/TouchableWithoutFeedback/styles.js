import styled from 'styled-components/native';
import { TouchableContentStyles, TitleStyles } from '~/styles';

export const Touchable = styled.TouchableWithoutFeedback``;

export const Content = styled.View`
  ${() => TouchableContentStyles};
  background-color: red;
`;

export const Title = styled.Text`
  ${() => TitleStyles};
`;
