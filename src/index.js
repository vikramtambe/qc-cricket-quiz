import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QcCricketQuiz from './QcCricketQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';
const players = [
	{
		name: "Vikram Tambe",
		imageUrl: "images/players/Vikram_Tambe.jpg",
		imageSource: "Facebook and Cricclubs",
		questions: ['Highest score is 44','Till date scored 814 runs', 'Till date taken 40 wicketes', 'Taken 7 wicketes in a match', 'Got out 2 times on Duck']
	},
	{
		name: "Pranay Bhawsar",
		imageUrl: "images/players/Pranay_Bhawsar.jpg",
		imageSource: "Facebook and Cricclubs",
		questions: ['Highest score is 70','Till date scored 785 runs', 'Till date taken 53 wicketes', 'Played 55 matches', 'Got out 1 times on Duck']
	},
	{
		name: "Prasad Mallapur",
		imageUrl: "images/players/Prasad_Mallapur.jpg",
		imageSource: "Facebook and Cricclubs",
		questions: ['Highest score is 120','Till date scored 3046 runs', 'Till date taken 7 wicketes', 'Played 118 matches', 'Got out 10 times on Duck']
	},
	{
		name: "Gaurav Sharma",
		imageUrl: "images/players/Gaurav_Sharma.jpg",
		imageSource: "Facebook and Cricclubs",
		questions: ['Highest score is 53','Till date scored 1273 runs', 'Till date taken 28 wicketes', 'Played 100 matches', 'Got out 9 times on Duck']
	},
	{
		name: "Ravi Dondapati",
		imageUrl: "images/players/Ravi_Dondapati.jpg",
		imageSource: "Facebook and Cricclubs",
		questions: ['Highest score is 55','Till date scored 1394 runs', 'Till date taken 15 wicketes', 'Played 90 matches', 'Got out 3 times on Duck']
	}
];

function getTurnData(players){
	const allQuestions = players.reduce(function (p,c,i){
		return p.concat(c.questions);
	},[]);
	const fourRandomQuestions = shuffle(allQuestions).slice(0,4);
	const answer = sample(fourRandomQuestions);
	return {
		questions: fourRandomQuestions,
		player: players.find((player) => player.questions.some((title) => title === answer))
	}
}

function resetState(){
	return {
		turnData: getTurnData(players),
		highlight: ''
	};
}

let state = resetState();

function onAnswerSelected(answer){
	const isCorrect = state.turnData.player.questions.some((question) => question === answer);
	state.highlight = isCorrect ? 'correct' :'wrong';
	render();
}

function onContine(){
	resetState();
	render();
}

function handleContinue(){
	resetState();
	render();
}

function render(){
	ReactDOM.render(<QcCricketQuiz{...state} onAnswerSelected={onAnswerSelected} 
		onContine = {onContine} />, document.getElementById('root'));
}
render();
registerServiceWorker();
