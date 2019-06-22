import styled from 'styled-components/native';
import { TouchableContentStyles, TitleStyles } from '~/styles';

export const Touchable = styled.TouchableNativeFeedback``;

export const Content = styled.View`
  background-color: #7a7a7a;
  ${() => TouchableContentStyles};
`;

export const Title = styled.Text`
  ${() => TitleStyles};
`;
