import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login'
import Home from '../screens/Home'
import CustomArrangements from '../screens/CustomArrangements'
import CustomArrangementDetails from '../screens/CustomArrangementDetails'
import Checkout from '../screens/Checkout'
import Cart from '../screens/Cart'



const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Home: { screen: Home,
        navigationOptions: {
            header: null,
        } },
    CustomArrangements: { screen: CustomArrangements },
    CustomArrangementDetails: { screen: CustomArrangementDetails },
    Checkout: { screen: Checkout },
    Cart: { screen: Cart },
});

const App = createAppContainer(AppNavigator)

export default App;