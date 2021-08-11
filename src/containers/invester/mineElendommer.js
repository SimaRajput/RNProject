import React from 'react';
import { View, Text, Image, TouchableOpacity,TouchableHighlight, ScrollView,Alert, FlatList } from 'react-native';
import Constants from '../../constants';
import { Header,CardCarousel } from '../../components';
import styles from './myElendommer-styles';
import * as userActions from '../../actions/user-actions-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import ImageSlider from 'react-native-image-slider';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import StaticData from '../../utilities/static-data';
import { LineChart, XAxis, Grid, BarChart } from 'react-native-svg-charts'
import investerBuyStyle from '../home/home-styles'


class MineElendommer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
              {
                url: 'https://i.imgur.com/UYiroysl.jpg',
                id:0,
                index:0
              }, {
                url: 'https://i.imgur.com/UPrs1EWl.jpg',
                id:1,
                index:1
              }, {
                url: 'https://i.imgur.com/MABUbpDl.jpg',
                id:2,
                index:2
              },
            ],
            activeSlide: 0,
            locations: {
                latitude: 0,
                longitude: 0,
              },

              secondActiveSlides: 0
          };
        }
      
      
     componentDidMount(){
         this.getCurrentLocation();
     }

        getCurrentLocation = () => {
             Geolocation.getCurrentPosition(
              (position) => {
                  console.log('position',position)
                const locations = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                };
                this.setState({ locations });
              },
            );

       
          }


    renderCardView = () => {
        const { data } = this.props.navigation.state.params;
        return (
            <View>
                <View style={styles.cardView}>
                    <View style={styles.rowContainer}>

                        <Image source={require('../../assets/images/property.jpeg')} style={styles.icon} />
                        <View style={styles.itemContainer}>
                            <View style={styles.keyValueContainer}>
                                <Text style={styles.key}>{'Verdi'}</Text>
                                <Text style={styles.value}>{data.value}</Text>
                            </View>
                            <View style={styles.keyValueContainer}>
                                <Text style={styles.key}>{'Utbytte/m'}</Text>
                                <Text style={styles.value}>{'11720'}</Text>
                            </View>
                            <View style={styles.keyValueContainer}>
                                <Text style={styles.key}>{'Endring'}</Text>
                                <Text style={styles.value}>{'+6.30%'}</Text>
                            </View>
                            <View style={styles.keyValueContainer}>
                                <Text style={styles.key}>{'Aksjekurs'}</Text>
                                <Text style={styles.value}>{'62'}</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
    renderBulderComponent = () => {
        return(
        <View style={styles.carouselMainContainer}>
            <Image source={require('../../assets/images/property.jpeg')}/>
        </View>
        );

    }

    renderSmallCardView = () => {
        return (
            <View style={styles.smallCardView}>
                <View style={styles.cardContainer}>
                    <Text style={styles.textStyles}>{'Mitte Utbytte/m'}</Text>
                    <Constants.Images.Home style={styles.iconStyle} height={30} width={30} />
                    <Text style={styles.textStyles1}>{'%'}</Text>
                    <View style={styles.bottomViewStyle}>
                        <Text style={styles.valueText}>{'36'}</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <Text style={styles.textStyles}>{'Mitte Utbytte/m'}</Text>
                    <Constants.Images.CardActive style={styles.iconStyle} height={30} width={30} />
                    <Text style={styles.textStyles1}>{'NDK'}</Text>
                    <View style={styles.bottomViewStyle}>
                        <Text style={styles.valueText}>{'8474'}</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <Text style={styles.textStyles}>{'Mitte Utbytte/m'}</Text>
                    <Constants.Images.Stock style={styles.iconStyle} height={30} width={30} />
                    <Text style={styles.textStyles1}>{'NDK'}</Text>
                    <View style={styles.bottomViewStyle}>
                        <Text style={styles.valueText}>{'746465'}</Text>
                    </View>
                </View>

            </View>
        )
    }

  SnapItemData = (index) => {
    const Id = this.state.dataSource[index].id;
    this.setState({ activeSlide: index })
      ;
  }

  SnapItemData2 = (index) => {
    const Id = StaticData.propertyDetailData    [index].id;
    this.setState({ secondActiveSlides: index })
      ;
  }
  onPrevious = (index) => {
        this.setState({ activeSlide: index-1 })
  }
  
onNext = (index) => {
    alert(index)
    this.setState({ activeSlide: index+1 })
    ;
  }

  ListEmptyComponent = () => (
    <TouchableOpacity activeOpacity={0.7}>
      <Text>No Data Found</Text>
    </TouchableOpacity>
  )

  renderLocation = () => {
    const { loaction } = Constants.i18n.dashboard;
    const { locations } = this.state;
    return(
        <View style={styles.locationContainer}>
             <Text style={styles.labelText}>{loaction}</Text>
             <View style={styles.locationStyle}>
             <MapView
              loadingIndicatorColor={Constants.Colors.PRIMARY_COLOR}
              ref={(c) => this.mapView = c} //eslint-disable-line
            //   provider={PROVIDER_GOOGLE}
              style={styles.maps}
              initialRegion={{
                ...locations,
                latitudeDelta: 0.0115,
                longitudeDelta: 0.02121,
              }}
            >
               <Marker.Animated
              coordinate={locations}
              title={'Gauravvaddo, Opp Lane Of Pizza Hut ,Calangute, India'}
    >
                   <Constants.Images.Home height={20} width={20} />
                  </Marker.Animated>
                  </MapView>
             </View>
        </View>
    )
  }

    renderBuilder = () => {
        const { builder } = Constants.i18n.dashboard;
        return(
        <View style={styles.mainContainer}>
            <Text style={styles.labelText}>{builder+ ' -12'}</Text>
         {/* <Slideshow 
         overlay={true}
        //  containerStyle={{marginLeft:30,marginRight:40,borderRadius:40}}
        arrowRight={<Image source={Constants.Images.next} style={styles.imageIcon}/>}
        arrowLeft={<Image source={Constants.Images.prevoius} style={styles.imageIcon2}/>}
        dataSource={this.state.dataSource}
        position={this.state.position}
        // indicatorColor={'transparent'}
        // indicatorSelectedColor={'transparent'}
        onPositionChanged={position => this.setState({ position })} /> */}
        <View style={styles.rowStyle}>
            <TouchableOpacity onPress={()=> this.onPrevious(this.state.dataSource)}>
        <Image source={Constants.Images.prevoius} style={styles.imageIcon2}/>
        </TouchableOpacity>
        <CardCarousel
          mainContainerStyle={styles.carouselStyle}
          itemData={this.state.dataSource}
          activeSlide={this.state.activeSlide}
          SnapItemData={this.SnapItemData}
          renderItem={this.renderBulderComponent}
          ListEmptyComponent={this.ListEmptyComponent}
        />
         <TouchableOpacity onPress={()=> this.SnapItemData}>
        <Image source={Constants.Images.next} style={styles.imageIcon}/>
        </TouchableOpacity>
        </View>
        </View>
        
        );
    }


    renderComponents = ({ item }) => {
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
        switch (this.state.secondActiveSlides) {
          case 0:
            return (
              <TouchableOpacity activeOpacity={0.7}>
                <View style={investerBuyStyle.subConatiner} >
                  <Text style={investerBuyStyle.titleText}>{hi + ' ' + item.title}</Text>
                  <View style={investerBuyStyle.topContainer}>
                    <Text style={investerBuyStyle.itemKey}>{padinDevident}</Text>
                    <View style={investerBuyStyle.rowContainer}>
                      <Text style={investerBuyStyle.itemValue}>{item.value}</Text>
                    </View>
                    <View style={investerBuyStyle.rowContainer1}>
                      <Text style={investerBuyStyle.itemValue}>{item.value}</Text>
                    </View>
                  </View>
                  <View style={investerBuyStyle.secondTopContainer}>
                    <Text style={investerBuyStyle.itemKey}>{'Awkast Aksjer / ar'}</Text>
                    <View style={investerBuyStyle.rowContainer}>
                      <Text style={investerBuyStyle.itemValue}>{item.value}</Text>
                    </View>
                    <View style={investerBuyStyle.rowContainer1}>
                      <Text style={investerBuyStyle.itemValue}>{item.value}</Text>
                    </View>
                  </View>
                  <View style={investerBuyStyle.secondTopContainer}>
                    <View>
                      <Text style={investerBuyStyle.titleText1}>{totalValue}</Text>
    
                      <Text style={investerBuyStyle.itemValue1}>{item.value}</Text>
                    </View>
                    <Constants.Images.LogoHeader style={investerBuyStyle.iconStyle} />
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

      renderAksje = () => {
          return(
            <View style={styles.overSickContainer}>
            <View style={styles.rowItems}>
                <Text style={styles.textTitle}>{'Okonomi'}</Text>
                <View style={styles.rows}>
                    <Text style={styles.key1}>{'Leleintekt/m'}</Text>
                    <Text style={styles.value1}>{'18 400'}</Text>
                 </View>
                 <View style={styles.rows}>
                    <Text style={styles.key1}>{'Leleintekt/m'}</Text>
                    <Text style={styles.value1}>{'18 400'}</Text>
                 </View>
                 <View style={styles.rows}>
                    <Text style={styles.key1}>{'Leleintekt/m'}</Text>
                    <Text style={styles.value1}>{'18 400'}</Text>
                 </View>
                 <View style={styles.rows}>
                    <Text style={styles.key1}>{'Leleintekt/m'}</Text>
                    <Text style={styles.value1}>{'18 400'}</Text>
                 </View>
                </View>
                <View style={styles.rowItems}>
                <Text style={styles.textTitle}>{'Utleie'}</Text>
                <View style={styles.rows}>
                    <Text style={styles.key1}>{'Leleintekt/m'}</Text>
                    <Text style={styles.value1}>{'18 400'}</Text>
                 </View>
                 <View style={styles.rows}>
                    <Text style={styles.key1}>{'Leleintekt/m'}</Text>
                    <Text style={styles.value1}>{'18 400'}</Text>
                 </View>
                 <View style={styles.rows}>
                    <Text style={styles.key1}>{'Leleintekt/m'}</Text>
                    <Text style={styles.value1}>{'18 400'}</Text>
                 </View>
                 <View style={styles.rows}>
                    <Text style={styles.key1}>{'Leleintekt/m'}</Text>
                    <Text style={styles.value1}>{'18 400'}</Text>
                 </View>
                </View>
            </View>
          )
      }

      renderDocuments = ({item}) => {
          return(
                 <View>
                     <View style={styles.documentItems}>
                        <View style={styles.docSubContainer}>
                            <Constants.Images.Pdf/>
                            <Text style={styles.docTitle}>{item.title}</Text>
                        </View>
                    </View>
                  </View>

          )
      }

      renderInfo = () => {
          return(
              <View style={styles.infoContainer}>
               <View style={styles.infoSubContainer}>
                   <Text style={styles.infoTitle}>{'Aksje Info'}</Text>
                </View>
                <View style={styles.infoRowContainer}>
                    <Text style={styles.infoKey}>{'Aksjekiasse eiendom'}</Text>
                    <Text style={styles.infoValue}>{'B'}</Text>
                </View>
                <View style={styles.infoRowContainer}>
                    <Text style={styles.infoKey}>{'Antall Aksjer aksjeklass'}</Text>
                    <Text style={styles.infoValue}>{'10 000'}</Text>
                </View>
                <View style={styles.infoRowContainer}>
                    <Text style={styles.infoKey}>{'Antall Aksjer aksjeklass'}</Text>
                    <Constants.Images.Pdf height={25} width={25}/>
                </View>
              </View>
          )
      }
    
    render() {
        const { mineelendommer } = Constants.i18n.dashboard;
        const { data } = this.props.navigation.state.params;
        const { navigation: { goBack } } = this.props;

        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Header showTitle={true}
                    style={styles.headerStyle}
                    onPressBack={() => goBack()}
                    text={`${mineelendommer + ' ' + data.title}`}
                    textStyle={styles.textStyle} />
                <View style={styles.subContainer}>
                    <View style={styles.topContainer}>
                        <Text style={styles.text}>{data.title}</Text>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Text style={styles.text1}>{'Invest'}</Text>
                        </TouchableOpacity>
                    </View>
                    {this.renderCardView()}
                    <Text style={styles.textLabel}>{'En flott 3 roms lelighet sentrait i Oslo.'}</Text>
                    <Text style={styles.textLabel}>{'Hey takhoyde samt nyrennovert kjokken og bad'}</Text>
                    {this.renderSmallCardView()}
                    {this.renderBuilder()}
                    {this.renderLocation()}
                      {/* <View style={styles.aksjeStyle}>
                      <Text style={[styles.labelText,{top:30}]}>{'Aksje & Utbytte'}</Text>
                      <CardCarousel
                      itemData={StaticData.propertyDetailData}
                      activeSlide={this.state.secondActiveSlides}
                      SnapItemData={this.SnapItemData2}
                      allowPagination={true}
                      renderItem={this.renderComponents}
                      ListEmptyComponent={this.ListEmptyComponent}
                    />
                    </View> */}
                  <Text style={[styles.labelText,{marginTop:15}]}>{'Aksje & Utbytte'}</Text>
                    {this.renderAksje()}
                    <Text style={[styles.labelText,{marginTop:15}]}>{'Documents'}</Text>
                    <View style={styles.documentsContainer}>
                        <View style={styles.docViewStyle}>
                        <Text style={styles.docTitleText}>{'Boligfondet'}</Text>
                        <Constants.Images.Detail2/>
                        </View>
                    <FlatList  
                      scrollEnabled
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      data={StaticData.documentsData} 
                      renderItem={this.renderDocuments}/>
                    </View>
                    <View style={styles.documentsContainer}>
                        <View style={styles.docViewStyle}>
                        <Text style={styles.docTitleText}>{'Utbytte'}</Text>
                        <Constants.Images.Money1/>
                        </View>
                    <FlatList  
                      scrollEnabled
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      data={StaticData.documentsData} 
                      renderItem={this.renderDocuments}/>
                    </View>
                    <View style={styles.documentsContainer}>
                        <View style={styles.docViewStyle}>
                        <Text style={styles.docTitleText}>{'Regnskap'}</Text>
                        <Constants.Images.Calculator/>
                        </View>
                    <FlatList  
                      scrollEnabled
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      data={StaticData.documentsData} 
                      renderItem={this.renderDocuments}/>
                    </View>
                    {this.renderInfo()}
                </View>
            </ScrollView>
        )
    }
}

export default connect(
    null,
    {
        login: userActions.login,
    }
)(MineElendommer);



