import React, { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import { Button } from '@components/Controllers/Button';
import { Input } from '@components/Controllers/Input';
import { Form, Title } from './styles';

export function AccountForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleNewAccount() {
    try {
      setIsLoading(true);

      await auth().createUserWithEmailAndPassword(email, password);
      
      Alert.alert('Conta', 'Conta criada com sucesso!');
    } catch (error) {
      console.log(error);
      Alert.alert('Conta', 'Erro ao criar conta!');	
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form>
      <Title>Cadastrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" isLoading={isLoading} onPress={handleNewAccount} />
    </Form>
  );
}