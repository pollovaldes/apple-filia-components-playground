import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Platform,
} from "react-native";
import React, { Children } from "react";

interface GroupedListProps {
  header?: string;
  footer?: string;
  children: React.ReactNode;
}

const GroupedList = ({ children, header, footer }: GroupedListProps) => {
  const rows = Children.toArray(children);
  const rowsCount = rows.length;

  const getRowStyleFromIndex = (index: number): StyleProp<ViewStyle> => {
    //Single item style
    if (rowsCount === 1) return styles.single;

    //Two items style
    if (rowsCount === 2) {
      if (index != 0) return styles.last;
      return styles.first;
    }

    //Whatever number of items style
    if (index === 0) return styles.first;
    if (index === rowsCount - 1) return styles.last;
    return styles.middle;
  };

  return (
    <View style={styles.containerRounded}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{header?.toUpperCase()}</Text>
      </View>

      {rows.map((row, i) => {
        if (rowsCount === 1) {
          return <View style={getRowStyleFromIndex(i)}>{row}</View>;
        }

        if (rowsCount === 2) {
          return <View style={getRowStyleFromIndex(i)}>{row}</View>;
        }

        return <View style={getRowStyleFromIndex(i)}>{row}</View>;
      })}

      <View style={styles.footer}>
        <Text style={styles.headerText}>{footer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRounded: {
    userSelect: "none",
    paddingHorizontal: 16,
    marginBottom: 50, //TODO: esto no debe de estar hardcodeado
    ...Platform.select({
      web: {
        maxWidth: 400, // Restricts to max 400 points on web
        minWidth: 250,
      },
    }),
  },
  first: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 0.35,
    borderColor: "#b9b9bb",
  },
  middle: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 0.35,
    borderColor: "#b9b9bb",
  },
  last: {
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  single: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  header: {
    marginLeft: 20,
    marginBottom: 10,
  },
  footer: {
    marginLeft: 20,
    marginTop: 10,
  },
  headerText: {
    fontSize: 13,
    color: "#85858a",
  },
});

export default GroupedList;
