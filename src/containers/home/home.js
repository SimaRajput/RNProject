import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions,Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Header, Rows, NoRecordFound,BarChart} from '../../components';
import Constants from '../../constants';
import * as userActions from '../../actions/user-actions-types';
import styles from './home-styles';
import StaticData from '../../utilities/static-data';
// import { LineChart, XAxis, Grid, BarChart } from 'react-native-svg-charts'
import Carousel, { Pagination } from 'react-native-snap-carousel' // 3.6.0
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'
import {
  LineChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const dotIcons = [
  {
    index:0,
    icon:require('../../assets/images/coin.png'),
    iconActive:require('../../assets/images/coin_active.png'),
  },
  {
    index:1,
    icon:require('../../assets/images/money.png'),
    iconActive:require('../../assets/images/money-active.png'),
  },
  {
    index:2,
    icon:require('../../assets/images/stock.png'),
    iconActive:require('../../assets/images/stock_active.png'),
  }
]

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    }
  }



  renderComponent = ({ item }) => {
    const data = [
      { label: 'Jan', value: 500, bottomLabel:'1ar',status:0 },
      { label: 'Feb', value: 312,  bottomLabel:'6m' ,status:1 },
      { label: 'Mar', value: 424,  bottomLabel:'12m' ,status:1 },
      { label: 'Apr', value: 745,  bottomLabel:'3ar',status:0  },
      { label: 'May', value: 89 ,  bottomLabel:'1ar',status:1 },
      { label: 'Jun', value: 434 ,  bottomLabel:'5ar',status:1 },
      { label: 'July', value: 634 ,  status:0 },
     
    ]
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
          <View style={{ height: 200, justifyContent: 'center',}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,alignItems:'center'}}>
              <Text style={styles.textInfo}>{'2.6 %'}</Text>
              <Text style={styles.textInfo1}>{'84,375'}</Text>
            </View>
           <BarChart data={data} round={100} unit="€"/>

          </View>

        )
        break;
      case 2:
        return (
          <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              { data: [0, 0, 0, 80, 99, 43]}
            ]
          }}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
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
           <View style={styles.crouselContainer}>
          <Carousel
            ref={ ref => this.carouselRef = ref }
            data={ StaticData.propertyDetailData }
            renderItem={this.renderComponent}
            onSnapToItem={this.SnapItemData}
            sliderWidth={Constants.BaseStyle.DEVICE_WIDTH}
            itemWidth={Constants.BaseStyle.DEVICE_WIDTH - 35}
            slideStyle={{ width : Constants.BaseStyle.DEVICE_WIDTH - 35 }}
          />
          </View>
        <View style={styles.paginationMainView}>
        <Pagination
         dotsLength={3}
          renderDots={ activeIndex => (
            dotIcons.map((screen, i) => ( console.log('scsc',activeIndex),
              <TouchableOpacity
                style={styles.iconMainView}
                key={ i }
               onPress={() => {
                  this.carouselRef._snapToItem(this.carouselRef._getPositionIndex(i));
                }}
              >
                <Image source={screen.iconActive} style={styles.iconView}/>
               
              </TouchableOpacity>
            ))
          )}
          activeDotIndex={ this.state.activeSlide }
        />
        </View>
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

