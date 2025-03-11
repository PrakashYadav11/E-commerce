import { Dimensions, StyleSheet } from "react-native";
import Search from ".";
import { heightPixel, widthPixel } from "../../Utils/ResponsiveDimensions";

const {width, height} = Dimensions.get('window');

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        // marginBottom: 60,
    },
    search:{
        marginTop: height * 0.02,
    },
    totalProduct:{
        height:heightPixel(48),
        width:widthPixel(375),
        margin:20,
        
    },
    txt:{
        fontSize:20,
        color:'black',
        fontFamily:'Roboto',
        fontWeight:'600'
    },
    resultBox:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    filter:{
        justifyContent:'center',
        backgroundColor:'#F3F0F0',
        height:heightPixel(48),
        width:widthPixel(118),
        alignItems:'center',
        flexDirection:'row'
    },
    filterTxt:{
        color:'black',
        fontSize:16,
        fontWeight:'600',
        marginLeft:widthPixel(10)
    },
    buttons:{
        flexDirection:'row',
        height:heightPixel(70),
        justifyContent:'center',
        alignItems:'center'
    },
    cartbtn:{
        justifyContent:'center',
        alignItems:'center',
        height:heightPixel(54),
        width:widthPixel(182),
        backgroundColor:'black',
        flexDirection:'row',
        borderRadius:heightPixel(10),
        marginRight:widthPixel(10)
    },
    cartIcon:{
        color:'white',
        alignSelf:'center',
        marginRight:widthPixel(10)
    },
    cartTxt:{
        alignSelf:'center',
        color:'white',
        fontFamily:'600'
    },
    chackOutbtn:{
        justifyContent:'center',
        alignItems:'center',
        height:heightPixel(54),
        width:widthPixel(182),
        backgroundColor:'black',
        flexDirection:'row',
        borderRadius:heightPixel(10)
    },
    chackOuttext:{
        alignSelf:'center',
        color:'white',
        fontFamily:'600',
        marginRight:widthPixel(10)
    },
    chackOuticon:{
        color:'white',
        alignSelf:'center',
    }  
})