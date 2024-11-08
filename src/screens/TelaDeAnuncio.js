import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';

const TelaDeAnuncio = () => {
    const [empresa, setEmpresa] = useState(null);

    useEffect(() => {
        const getEmpresa = async () => {
            try {
                const empresaData = await AsyncStorage.getItem('empresa');
                if (empresaData !== null) {
                    setEmpresa(JSON.parse(empresaData));
                } else {
                    Alert.alert('Erro', 'Nenhuma empresa cadastrada');
                }
            } catch (error) {
                Alert.alert('Erro', 'Erro ao carregar os dados.');
            }
        };

        getEmpresa();
    }, []);

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            {empresa ? (
                <View style={tw`p-4`}>
                    <Text style={tw`text-xl font-bold text-blue-500`}>Empresa Cadastrada:</Text>
                    <Text style={tw`text-lg mt-2`}>Nome: {empresa.nome}</Text>
                    <Text style={tw`text-lg`}>Área de Atuação: {empresa.areaAtuacao}</Text>
                    <Text style={tw`text-lg`}>CPF/CNPJ: {empresa.cpfCnpj}</Text>
                    <Text style={tw`text-lg`}>Responsável: {empresa.responsavel}</Text>
                    <Text style={tw`text-lg`}>Email: {empresa.email}</Text>
                </View>
            ) : (
                <Text style={tw`text-lg text-gray-700`}>Carregando dados...</Text>
            )}
        </View>
    );
};

export default TelaDeAnuncio;
