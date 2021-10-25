import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Menus from "./Menu/Menus";
import MenuCreator from "./menu/Menucreator";
import MenuEditor from "./menu/Menueditor";
import { MenuProvider } from "./menu/Menucontext";

export default function App() {
  return (
    <MenuProvider>
      <Router>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <button
            type="button"
            className="btn btn-link navbar-brand col-sm-3 col-md-2 mr-0"
          >
            My Admin Panel
          </button>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="/logout">
                Sign out
              </a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/menu/" className="nav-link">
                      Menus
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link to="/page/" className="nav-link">
                      Pages
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/page/" className="nav-link">
                      Contents
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/page/" className="nav-link">
                      Site Settings
                    </Link>
                  </li> */}
                </ul>
              </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Switch>
                <Route path="/menu/new">
                  <MenuCreator />
                </Route>

                <Route path="/menu/:id">
                  <MenuEditor />
                </Route>

                <Route path="/menu/">
                  <Menus />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </MenuProvider>
  );
}


            
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

export default class ProfileCardView extends Component {

  constructor(props) {
    super(props);
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image style={styles.profileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <Text style={styles.name}>John Doe</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight style={[styles.button, styles.buttonMessage]} onPress={() => this.onClickListener('message')}>
              <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/name.png'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonLike]} onPress={() => this.onClickListener('like')}>
              <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/family.png'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonLove]} onPress={() => this.onClickListener('love')}>
              <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/to-do.png'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonCall]} onPress={() => this.onClickListener('phone')}>
              <Image style={styles.icon} source={{uri: 'https://img.icons8.com/office/70/000000/home-page.png'}}/>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container:{
    padding:20,
  },
  box: {
    marginTop:10,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2,
    paddingTop:10
  },
  profileImage:{
    width:300,
    height:300,
    marginBottom:20,
  },
  name:{
    fontSize:35,
    marginBottom:20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:20,
  },

  button: {
    width:60,
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:30,
    margin:10,
    shadowColor: 'black',
    shadowOpacity: .8,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  buttonMessage: {
    backgroundColor: "#00BFFF",
  },
  buttonLike: {
    backgroundColor: "#228B22",
  },
  buttonLove: {
    backgroundColor: "#FF1493",
  },
  buttonCall: {
    backgroundColor: "#40E0D0",
  },
  icon: {
    width:35,
    height:35,
  }
});
