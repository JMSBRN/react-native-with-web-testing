import React from 'react';
import {View, ViewStyle} from 'react-native';
import {mainStyle} from '../styles/styles';

function Section({
  children,
  styleForChildren,
}: {
  children: React.JSX.Element;
  styleForChildren?: ViewStyle;
}): React.JSX.Element {
  const {container} = mainStyle();
  return (
    <View style={container}>
      <View style={styleForChildren}>{children}</View>
    </View>
  );
}

export default Section;
