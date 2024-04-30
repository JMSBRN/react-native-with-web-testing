import React from 'react';
import {View, ViewStyle} from 'react-native';
import root from '../styles/styles';

function Section({
  children,
  styleForChildren,
}: {
  children: React.JSX.Element;
  styleForChildren?: ViewStyle;
}): React.JSX.Element {
  return (
    <View style={root.container}>
      <View style={styleForChildren}>{children}</View>
    </View>
  );
}

export default Section;
