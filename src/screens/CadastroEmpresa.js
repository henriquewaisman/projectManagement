import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroEmpresa = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [areaAtuacao, setAreaAtuacao] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [email, setEmail] = useState('');

    const handleCadastro = async () => {
        if (!nome || !areaAtuacao || !cpfCnpj || !responsavel || !email) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        const empresaData = {
            nome,
            areaAtuacao,
            cpfCnpj,
            responsavel,
            email,
        };

        try {
            // Armazenando os dados no AsyncStorage
            await AsyncStorage.setItem('empresa', JSON.stringify(empresaData));
            Alert.alert('Sucesso', 'Empresa cadastrada com sucesso!');
            
            // Navegar para a tela de anúncio após o cadastro
            navigation.navigate('TelaDeAnuncio');
        } catch (error) {
            Alert.alert('Erro', 'Erro ao salvar os dados. Tente novamente.');
        }
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <View style={tw`w-11/12 max-w-lg`}>
                <View style={tw`bg-blue-500 p-4 rounded-t items-center`}>
                    <Text style={tw`text-xl font-bold text-white`}>Cadastro Empresa</Text>
                </View>
                <View style={tw`bg-white p-8 shadow-md rounded w-full`}>
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-gray-700 text-sm font-bold mb-2`}>
                            Nome do empreendimento:
                        </Text>
                        <TextInput
                            style={tw`border rounded w-full py-2 px-3 bg-blue-100`}
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-gray-700 text-sm font-bold mb-2`}>
                            Área de atuação:
                        </Text>
                        <TextInput
                            style={tw`border rounded w-full py-2 px-3 bg-blue-100`}
                            value={areaAtuacao}
                            onChangeText={setAreaAtuacao}
                        />
                    </View>
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-gray-700 text-sm font-bold mb-2`}>
                            CPF/CNPJ:
                        </Text>
                        <TextInput
                            style={tw`border rounded w-full py-2 px-3 bg-blue-100`}
                            value={cpfCnpj}
                            onChangeText={setCpfCnpj}
                        />
                    </View>
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-gray-700 text-sm font-bold mb-2`}>
                            Responsável:
                        </Text>
                        <TextInput
                            style={tw`border rounded w-full py-2 px-3 bg-blue-100`}
                            value={responsavel}
                            onChangeText={setResponsavel}
                        />
                    </View>
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-gray-700 text-sm font-bold mb-2`}>
                            Email:
                        </Text>
                        <TextInput
                            style={tw`border rounded w-full py-2 px-3 bg-blue-100`}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={tw`flex items-center justify-center mt-4`}>
                        <Button title="Cadastre-se" color="#3B82F6" onPress={handleCadastro} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CadastroEmpresa;
