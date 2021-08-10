import React from 'react';
import { View, Text, Image, TouchableOpacity,TouchableHighlight, ScrollView,Alert } from 'react-native';
import Constants from '../../constants';
import { Header,CardCarousel } from '../../components';
import styles from './myElendommer-styles';
import * as userActions from '../../actions/user-actions-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import ImageSlider from 'react-native-image-slider';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome';


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
            activeSlide: 0
          };
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
    renderComponent = () => {
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
    return(
        <View>
             <Text style={styles.labelText}>{loaction}</Text>
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
          renderItem={this.renderComponent}
          ListEmptyComponent={this.ListEmptyComponent}
        />
         <TouchableOpacity onPress={()=> this.SnapItemData}>
        <Image source={Constants.Images.next} style={styles.imageIcon}/>
        </TouchableOpacity>
        </View>
        </View>
        
        );
    }

    render() {
        const { mineelendommer } = Constants.i18n.dashboard;
        const { data } = this.props.navigation.state.params;
        const { navigation: { goBack } } = this.props;

        return (
            <ScrollView style={styles.container}>
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



