import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Header, Rows, NoRecordFound, CardCarousel, } from '../../components';
import Constants from '../../constants';
import * as userActions from '../../actions/user-actions-types';
import styles from './home-styles';
import StaticData from '../../utilities/static-data';
import { LineChart, XAxis, Grid, BarChart } from 'react-native-svg-charts'



const data = [50, 10, 40, 95, 85, 91, 75, 45, 37]

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    }
  }



  renderComponent = ({ item }) => {
    const fill = Constants.Colors.PRIMARY_COLOR
    const data1 = [5, 8, 6, 7]
      .map((value) => ({ value }))
    const data2 = [9, 7, 12, 9]
      .map((value) => ({ value }))

    const barData = [
      {
        data: data1,
        svg: {
          fill: Constants.Colors.PRIMARY_COLOR,
          x: -10,

        },
      },
      {
        data: data2,
        svg: {
          fill: Constants.Colors.LIGHT_GREEN,

        },
      },
    ]
    const { hi, padinDevident, totalValue } = Constants.i18n.dashboard;
    switch (this.state.activeSlide) {
      case 0:
        return (
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.subConatiner} >
              <Text style={styles.titleText}>{hi + ' ' + item.title}</Text>
              <View style={styles.topContainer}>
                <Text style={styles.itemKey}>{padinDevident}</Text>
                <View style={styles.rowContainer}>
                  <Text style={styles.itemValue}>{item.value}</Text>
                </View>
                <View style={styles.rowContainer1}>
                  <Text style={styles.itemValue}>{item.value}</Text>
                </View>
              </View>
              <View style={styles.secondTopContainer}>
                <Text style={styles.itemKey}>{'Awkast Aksjer / ar'}</Text>
                <View style={styles.rowContainer}>
                  <Text style={styles.itemValue}>{item.value}</Text>
                </View>
                <View style={styles.rowContainer1}>
                  <Text style={styles.itemValue}>{item.value}</Text>
                </View>
              </View>
              <View style={styles.secondTopContainer}>
                <View>
                  <Text style={styles.titleText1}>{totalValue}</Text>

                  <Text style={styles.itemValue1}>{item.value}</Text>
                </View>
                <Constants.Images.LogoHeader style={styles.iconStyle} />
              </View>
            </View>
          </TouchableOpacity>
        );
        break;

      case 1:
        return (
          <View style={{ height: 200, justifyContent: 'center', paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 20 }}>
              <Text style={styles.textInfo}>{'2.6 %'}</Text>
              <Text style={styles.textInfo}>{'84,375'}</Text>
            </View>
            <BarChart
              style={{ height: 200, bottom: 30 }}
              // numberOfTicks={0}
              spacingInner={0.3}
              // spacingOuter={0.2}
              data={barData}
              yAccessor={({ item }) => item.value}
              contentInset={{ top: 20, bottom: 50 }}
              {...this.props}
            />

          </View>

        )
        break;
      case 2:
        return (
          <Text>Third</Text>
        )
        break;
    }

  }

  ListEmptyComponent = () => (
    <TouchableOpacity activeOpacity={0.7}>
      <Text>No Data Found</Text>
    </TouchableOpacity>
  )

  SnapItemData = (index) => {
    const Id = StaticData.propertyDetailData[index].id;
    this.setState({ activeSlide: index })
      ;
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
        <CardCarousel
          itemData={StaticData.propertyDetailData}
          activeSlide={this.state.activeSlide}
          SnapItemData={this.SnapItemData}
          allowPagination={true}
          renderItem={this.renderComponent}
          ListEmptyComponent={this.ListEmptyComponent}
        />
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

