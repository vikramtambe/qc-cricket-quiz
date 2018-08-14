import React from 'react';
//import PropTypes from 'propTypes';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero(){
	return(
		<div className="row">
			<div className="jumbotron col-10 offset-1">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Welcome to Quad City Cricket Quiz</h1>
				<p>
					Please select the correct answer for shown player.
				</p>
			</div>
		</div>
	);
}

function PlayerQuestion({title, onClick}){
	return(
	 <div className="answer" onClick={() => {onClick(title);}}>
		<h4>{title}</h4>
	 </div>
	);
	
}
function Turn({player, questions, highlight, onAnswerSelected}){
	
	function highlightToBgColor(highlight){
		const mapping = {
			'none': '',
			'correct': 'green',
			'wrong': 'red'
		};
		return mapping[highlight];
	}
	
	return(
	<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
		<div className="col-4 offset-1">
			<img src={player.imageUrl} className="playerimage" alt="Player" />
		</div>
		<div className="col-6">
			{questions.map((question)=> <PlayerQuestion key={question} title={question} onClick={onAnswerSelected} />)}
		</div>
	</div>
	
	);	
}

/*Turn.propTypes = {
	players: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		imageSource: PropTypes.string.isRequired,
		questions: PropTypes.arrayOf(PropTypes.string).isRequired
	}),
	questions: PropTypes.arrayOf(PropTypes.string).isRequired,
	onAnswerSelected: PropTypes.func.isRequired,
	highlight:PropTypes.string.isRequired
};*/

function Continue({show, onContinue}){
	return(
	<div className="row continue">
	{
		show 
		? <div className="col-11">
 			<button onClick = { onContinue } type="submit" className="btn btn-primary btn-lg float-right" > Continue </button>
		  </div>
		: null
	}	
	</div>
	
	);	
}

function Footer(){
	return(
	<div id="footer" className="row">
		<div className="col-12">
			<p className="text-muted credit"> All images are taken from <a href ="www.facebook.com">Facebook</a> and <a href ="www.cricclubs.com">Cricclubs</a> which are available to public. </p>
		</div>
	</div>
	);	
}

function QcCricketQuiz({turnData, highlight, onAnswerSelected, onContinue}){
	return (
      <div className="container-fluid">
		<Hero/>
		<Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
		<Continue show={highlight === 'correct'} onContinue={onContinue}/>
		<Footer/>
	  </div>
    );
  
}

export default QcCricketQuiz;
