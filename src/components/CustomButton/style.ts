import { Dimensions, StyleSheet } from "react-native";

const { width,height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    btnContainer:{
        width: width * 0.84,
        height:height * 0.070,
        borderRadius:10,
        backgroundColor:"#D9D9D9",
        alignItems:'center',
        justifyContent:'center',
    },
    btnText:{
        fontSize:19,
        color:'black',
        fontWeight:'900',
    },
});
export default styles