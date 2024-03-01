import React from "react";
import { StyleSheet, View } from "react-native";


const QuadradoPequeno = (props) => {

    const { cor } = props;

    return( 
        <View style={{...styles.pequeno, 
            width: undefined,//anotação em js chamada explode ...styles.
            backgroundColor: `${cor}`}} />
    );
}

const QuadradoMedio = (props) => {
    const { cor } = props;
    return( 
        <View style={{...styles.pequeno, 
            backgroundColor: `${cor}`}} ></View>
    );
}

const QuadradoGrande = (props) => {
    const { cor } = props;
    return( 
        <View style={{...styles.pequeno,
            backgroundColor: `${cor}`}} ></View>
    );
}

const Quadrado = () => {  
    
    return (
        <View style={styles.container}>
            <QuadradoPequeno cor={'#8fbc8f'}/>
            <QuadradoPequeno cor={'#6495ed'}/>
            <QuadradoPequeno cor={'#f08080'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    pequeno: {
        width: 80,
        height: 80
    }
});

export default Quadrado;
