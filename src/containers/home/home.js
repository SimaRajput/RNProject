import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Header, Rows, NoRecordFound } from '../../components';
import Constants from '../../constants';
import * as userActions from '../../actions/user-actions-types';
import styles from './home-styles';
import StaticData from '../../utilities/static-data'




class Home extends React.Component { 

  constructor(props){
    super(props);
  }



  renderItem = ({ item }) => {
    return (
      <Rows
        title={item.title}
        icon={item.icon}
        value={item.value}
        rightIcon={item.status == 0 ? <Constants.Images.ArrowDown /> : <Constants.Images.ArrowUp />}
        isShowBottomView
      />
    )
  }

  render() {

    const { myProperty, viewAll } = Constants.i18n.dashboard;
   

    return (
      <View style={styles.container}>
        <Header iconName={Constants.Images.logoHeader}
          leftIconStyle={styles.leftIconStyle}
          style={styles.headerStyle}
          rightIconName={Constants.Images.drawr}
          rightIconStyle={styles.rightIconStyle} />
        <View style={styles.titleView}>
          <Text style={styles.title} >{myProperty}</Text>
          <TouchableOpacity> 
            <Text style={styles.viewAll} >{viewAll}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.container}
          data={StaticData.propertyDetailData}
          renderItem={this.renderItem}
          keyExtractor={(item => item.id)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoRecordFound message={`No Record Found`} />}
        />
      </View>
    );
  }
}


ReactMixin(Home.prototype, TimerMixin);


export default Home;

