// import React, { Component } from "react";
// import {
//   StyleSheet,
//   View,
//   PanResponder,
//   Animated,
//   Text,
//   FlatList,
//   Image,
//   ScrollView
// } from "react-native";
// import { deals } from "./constant";

// class Draggable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showDraggable: true,
//       dropAreaValues: null,
//       pan: new Animated.ValueXY(),
//       opacity: new Animated.Value(1),
//       item:this.props
//     };
//   }

//   componentWillMount() {
//     this._val = { x:0, y:0 }
//     this.state.pan.addListener((value) => this._val = value);
//     this.panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (e, gesture) => true,
//       onPanResponderMove: Animated.event([
//         null, { dx: this.state.pan.x, dy: this.state.pan.y }
//       ]),
//       onPanResponderRelease: (e, gesture) => {
//         if (this.isDropArea(gesture)) {
//           Animated.timing(this.state.opacity, {
//             toValue: 0,
//             duration: 1000
//           }).start(() =>
//             this.setState({
//               showDraggable: false
//             })
//           );
//         } else {
//           Animated.spring(this.state.pan, {
//             toValue: { x: 0, y: 0 },
//             friction: 5
//           }).start();
//         }
//       }
//     });
//   }

//   isDropArea(gesture) {
//     return gesture.moveY < 200;
//   }

//   render() {
//     const panStyle = {
//       transform: this.state.pan.getTranslateTransform()
//     };
//     console.log(this.state.item,"JJJ")
//     const {companyName, offer, timeLeft,icon} = this.state.item.item;
//     console.log(companyName, offer, timeLeft,icon,"kkk")
//     return this.state.showDraggable ? (
//       <Animated.View
//         {...this.panResponder.panHandlers}
//         style={[panStyle, styles.circle, { opacity: this.state.opacity }]}
//       >
//          <Image
//               style={{width: 100, height: 100}}
//               source={{
//                 uri: icon,
//               }}
//             />
//             <Text>{companyName}</Text>
//             <Text>{offer}</Text>
//             <Text>{timeLeft}</Text>
//       </Animated.View>
//     ) : null;
//   }
// }

// export default class Home extends Component {
//   render() {
//     return (
//       <View style={styles.mainContainer}>
//         <View style={styles.dropZone}>
//           <Text style={styles.text}>Drop them here!</Text>
//         </View>
//         <View style={styles.ballContainer} />
//         <View style={styles.row}>
//         <View  style={{display:"flex",flexDirection:"row"}}>
//           {deals.map(e=><Draggable item={e}/>)}
//           </View>
//           {/* <ScrollView>
          
//           </ScrollView> */}
//           {/* <FlatList data={deals} horizontal  renderItem={({ item }) =><Draggable item={item}/>}/> */}
//           {/* <Draggable />
//           <Draggable />
//           <Draggable />
//           <Draggable /> */}
//         </View>
//       </View>
//     );
//   }
// }

// let CIRCLE_RADIUS = 30;
// let styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1
//   },
//   ballContainer: {
//     height: 200
//   },
//   row: {
//     flexDirection: "row"
//   },
//   dropZone: {
//     height: 200,
//     backgroundColor: "#00334d"
//   },
//   text: {
//     marginTop: 25,
//     marginLeft: 5,
//     marginRight: 5,
//   },
//   circle: {
//     backgroundColor: "white",
//   }
// });