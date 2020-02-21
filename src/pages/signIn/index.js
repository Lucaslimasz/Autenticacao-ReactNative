import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

import {
    Container,
    Logo,
    Input,
    ErrorMessage,
    Button,
    ButtonText,
    SignUpLink,
    SignUpLinkText,
} from './styles';


export default class SignIn extends Component {


    static navigationOptions = {
        header: null,
    };

    state = {email: '', password: '', error: ''};
    
    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (password) =>{
        this.setState({ password });
    };

    handleCreateAccountPress = () => {
        this.props.navigation.navigate('SignUp')
    };


    render() {
        return (
            <Container>
                <StatusBar hidden />
                <Logo source={require('../../images/consolidacao.png')} resizeMode="contain" />
                <Input
                    placeholder="Endereço de e-mail"
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    autoCapitalize="none"
                    autoCorrect="{false"
                />
                <Input
                    placeholder="senha"
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                    segureTextEntry
                />
                {this.state.error.length !== 0 && <ErrorMessage> {this.state.error} </ErrorMessage>}
                <Button onPress={this.handleSignInPress}>
                    <ButtonText>Entrar</ButtonText>
                </Button>

                <SignUpLink onPress={this.handleCreateAccountPress}>
                    <SignUpLinkText>Criar conta grátis</SignUpLinkText>
                </SignUpLink>
            </Container>
        );
    }
}