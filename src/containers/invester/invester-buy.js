import React from 'react';
import { View, Text } from 'react-native';
import Constants from '../../constants';
import { Header ,Tabs} from '../../components';
import styles from './invester-buy-styles';
import { goBack } from '../../actions/nav-action-types';

class InvesterBuy extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        const { invest} = Constants.i18n.dashboard;
        const { data } = this.props.navigation.state.params;
        const { navigation: { goBack }} = this.props;
        return(
        <View style={styles.container}>
            <Header showTitle={true} 
            onPressBack={()=> goBack()}
            text={`${invest + data.title}`} 
            textStyle={styles.textStyle}/>
            

        </View>
        )
    }
}

export default InvesterBuy;


