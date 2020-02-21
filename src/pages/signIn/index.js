import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

import{
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
    render(){
        return(
            <Container>
                <StatusBar hidden />
                
            </Container>
        );
    }
}