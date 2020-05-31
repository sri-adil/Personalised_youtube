import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import { Paper, Typography, Button} from '@material-ui/core';
import { VideoDetail, VideoList, SearchBar } from './components';
configure({ adapter: new Adapter() });

describe('App component testing', function() {
it('Checks VideoDetail component', function() {
const wrapper = shallow(<App />); 
expect(wrapper.find(VideoDetail)).to.have.length(1);
});

it('Checks VideoList component', function() {
const wrapper = shallow(<App />); 
expect(wrapper.find(VideoList)).to.have.length(1);
});

it('Checks SearchBar component', function() {
const wrapper = shallow(<App />); 
expect(wrapper.find(SearchBar)).to.have.length(1);
});

it('Checks SearchBar component', function() {
const wrapper = shallow(<App />); 
expect(wrapper.find(Button)).to.have.length(0);
});

}); 
