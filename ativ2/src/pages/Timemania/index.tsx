import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { timemaniastyles } from "../../themes";
import { useLoteria } from "../../hooks";
import Ball from "../../components/Ball";

const TimemaniaScreen: React.FC = () => {
    const { resultados, loading, error } = useLoteria();

    if (loading) {
        return <ActivityIndicator size="large" color="#209869" />;
    }

    if (error) {
        return <Text style={timemaniastyles.errorText}>{error}</Text>;
    }

    const timemaniaNumbers = resultados.timemania?.dezenas || [];

    console.log("API data for Timemania: ", timemaniaNumbers);

    return (
        <View style={timemaniastyles.container}>
            <Text style={timemaniastyles.title}>TIMEMANIA</Text>
            <View style={timemaniastyles.numbersContainer}>
                {timemaniaNumbers.map((num, index) => (
                    <Ball
                        key={index}
                        number={num}
                        backgroundColor={timemaniastyles.colors.backgroundColor}
                        textColor={timemaniastyles.colors.color}
                    />
                ))}
            </View>
            <Text style={timemaniastyles.date}>
                {resultados.timemania?.dataPorExtenso || "Date not available"}{" "}
            </Text>
        </View>
    );
};

export default TimemaniaScreen;