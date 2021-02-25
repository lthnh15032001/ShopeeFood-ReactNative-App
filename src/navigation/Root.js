import { Navigation } from "react-native-navigation";
import { Login, Register } from '../screens/authen'

Navigation.registerComponent('LOGIN_SCREEN', () => Login);
Navigation.registerComponent('REGISTER_SCREEN', () => Register);

export const rootStack = (root) => {
    return Navigation.setRoot({
        root: {
            stack: {
                id: 'AUTHEN_STACK',
                children: [

                    {
                        component: {
                            id: 'LOGIN_SCREEN',
                            name: 'LOGIN_SCREEN'
                        }
                    },
                    {
                        component: {
                            id: 'REGISTER_SCREEN',
                            name: 'REGISTER_SCREEN'
                        }
                    },
                    {
                        component: {
                            id: 'ROOT',
                            name: root
                        },
                    },
                ]
            }
        }
    });
}
// const pushStack = () => {
//     Navigation.push('AUTHEN_STACK', {
//         component: {
//             id: 'LOGIN_SCREEN',
//             name: 'LOGIN_SCREEN'
//         },
//         component: {
//             id: 'REGISTER_SCREEN',
//             name: 'REGISTER_SCREEN'
//         }
//     })
// }