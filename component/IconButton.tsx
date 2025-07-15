import { Image, StyleSheet, TouchableOpacity } from "react-native";

type IconButtonProps = {
  type: any; // 필요한 경우 images 타입으로 명확히 지정 가능
  onPressOut: (id: any) => void;
  id?: any;
};

const IconButton = ({ type, onPressOut, id }: IconButtonProps) => {
  const _onPressOut = () => {
    if (onPressOut) {
      onPressOut(id);
    }
  };

  return (
    <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut}>
      <Image source={type} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
});

export default IconButton;
