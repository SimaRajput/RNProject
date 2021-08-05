import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  StyleSheet,
  ViewPropTypes,
} from "react-native";
import Constants from '../../constants';
import { string, node, bool, func } from 'prop-types';

const width = Constants.BaseStyle.DEVICE_WIDTH;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    marginVertical: 20,
  },
  overlay: {
    position: "absolute",
    height: "100%",
    backgroundColor: Constants.Colors.PRIMARY_COLOR,
    borderRadius: 4,
  },
  tabStyle: {
    marginHorizontal: 15,
    paddingHorizontal: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Constants.Colors.PRIMARY_COLOR,
    borderRadius: 4,
  },
  tabStyle1: {
    marginHorizontal: 15,
    paddingHorizontal: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Constants.Colors.DASHBOARD,
    borderRadius: 4,

  },
  textStyle: {
    // ...Constants.Fonts.Roboto.regularSmallBold,
    textTransform: "uppercase",
    textAlign: 'center',
    alignSelf: 'center',
    paddingVertical: 10
  },
});

export default class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      first: true,
      active: this.props.active,
      xTabOne: 0,
      xTabTwo: 0,
      widthTabOne: 0,
      widthTabTwo: 0,
      translateX: new Animated.Value(0),
      translateXTabOne: new Animated.Value(0),
      translateXTabTwo: new Animated.Value(width),
      translateY: -1000
    };

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.active !== this.state.active) {
      this.props.activeIndex(this.state.active)
    }
  }
  static propTypes = {
    tab1Heading: string,
    tab2Heading: string,
    tab1Content: node,
    tab2Content: node,
    overlayStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
    mainTabView: ViewPropTypes.style,
    tabViewStyle: ViewPropTypes.style,
    activeColor: string,
    activeIndex: func,
    inActiveColor: string,
    active: bool,
  };

  static defaultProps = {
    tab1Heading: "Tab1",
    tab2Heading: "Tab2",
    tab1Content: <View />,
    tab2Content: <View />,
    overlayStyle: {},
    style: {},
    mainTabView: {},
    tabViewStyle: {},
    activeIndex: () => { },
    activeColor: Constants.Colors.WHITE,
    inActiveColor: Constants.Colors.BLACK,
    active: 0,
  };

  scrollViewRef = React.createRef();



  handleSlide = type => {
    let {
      active,
      translateX,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: 2 * width,
          duration: 100,
          useNativeDriver: true
        }).start()
      ]);
    } else if (active === 1) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: 2 * width,
          duration: 100,
          useNativeDriver: true
        }).start()
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        }).start()
      ]);
    }
  };

  render() {
    let {
      first,
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
      widthTabTwo,
      widthTabOne,
    } = this.state;
    const { overlayStyle,
      style,
      activeColor,
      tab1Heading,
      tab2Heading,
      tab1Content,
      tab2Content,
      inActiveColor,
      mainTabView,
      tabViewStyle
    } = this.props;
    let widthTemp = widthTabOne;
    switch (active) {
      case 0:
        widthTemp = widthTabOne
        break;
      case 1:
        widthTemp = widthTabTwo
        break;
    }
    return (
      <View style={styles.container}>
        <View style={[styles.tabContainer, style]}>
          {/* <Animated.View style={[styles.overlay, overlayStyle, {
            left: first ? xTabOne : 0,
            width: widthTemp,
            transform: [
              {
                translateX
              }
            ]
          }]} /> */}
          <ScrollView
            ref={this.scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false} >
            <TouchableOpacity
              style={[!active ? styles.tabStyle : styles.tabStyle1, tabViewStyle]}
              onLayout={event =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x,
                  widthTabOne: event.nativeEvent.layout.width,
                  first: false,
                }, () => { active === 0 && this.handleSlide(this.state.xTabOne) })
              }
              onPress={() =>
                this.setState({ active: 0, first: false }, () =>
                  this.handleSlide(xTabOne)
                )
              }
            >
              <Text
                style={[styles.textStyle, {
                  color: active ? inActiveColor : activeColor
                }]}
              >
                {tab1Heading}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[active == 1 ? styles.tabStyle : styles.tabStyle1, tabViewStyle]}
              onLayout={event =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x,
                  widthTabTwo: event.nativeEvent.layout.width,
                  first: false,
                }, () => { active === 1 && this.handleSlide(this.state.xTabTwo) })
              }
              onPress={() =>
                this.setState({ active: 1, first: false, }, () =>
                  this.handleSlide(xTabTwo)
                )
              }
            >
              <Text
                style={[styles.textStyle, {
                  color: active == 1 ? activeColor : inActiveColor
                }]}
              >
                {tab2Heading}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: '100%',
              transform: [
                {
                  translateX: translateXTabOne
                }
              ]
            }}
            onLayout={event =>
              this.setState({
                translateY: event.nativeEvent.layout.height
              })
            }
          >
            {tab1Content}
          </Animated.View>
          <Animated.View
            style={{
              height: '100%',
              transform: [
                {
                  translateX: translateXTabTwo
                },
                {
                  translateY: -translateY
                }
              ]
            }}
          >
            {tab2Content}
          </Animated.View>
        </View>
      </View >
    );
  }
}