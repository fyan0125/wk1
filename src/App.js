import React from 'react';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
	<header>
		<nav className="navbar navbar-expand-lg navbar-light bg-color fixed-top">
			<a className="navbar-brand" href="../index.html"><img src="../media/logo2.png" alt="1" width="150"/></a>
			<button className="navbar-toggler btn btn-primary navbar-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
			</button>
		
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item"><a className="nav-link" href="https://terraria.org">Official Website</a></li>
				  <li className="nav-item"><a className="nav-link" href="https://terraria-zh.gamepedia.com/Terraria_Wiki?variant=zh-tw">Official Guide</a></li>
				  <li className="nav-item"><a className="nav-link" href="https://store.steampowered.com/app/105600/Terraria/?l=tchinese">Steam Store</a></li>
				  <li className="nav-item"><a className="nav-link" href="https://forum.gamer.com.tw/A.php?bsn=20172">Gamer Forum</a></li>
				</ul>
			  </div>
		</nav>
	</header>
	<div className="main-area">
		<div className="bt-area">
			<a href="../index.html" className="bt">HOME</a>
			<img src="../media/線段.jpg" width="1px" height="50px" alt="1" className="btline"/>
			<a href="../news-list.html" className="bt">NEWS</a>
			<img src="../media/線段.jpg" width="1px" height="50px"alt="1" className="btline"/>
			<a href=" " className="bt">UPDATES</a>
		</div>
		<div className="news-area">
			<h1 className="news-title">Rounding Out the Journey: Terraria 1.4.1 is Here! </h1>
			<div className="first-news">
				<br/>
				<img className="news-img" alt="1"src="../media/新聞大圖.png"/>
				<p>Greetings, Terrarians!</p>
				<p>Welcome to launch day for Terraria 1.4.1 on PC!   As we have alluded to in previous news items and spoilers around this update, Terraria 1.4.1 is primarily focused on adding in pieces that were not quite ready in time for the Journey's End launch date - along with more fixes, balance tweaks, and a few new tidbits that we decided to add along the way.  Located below, you will find the full changelog for Terraria 1.4.1<br/><br/>So, what all does Terraria 1.4.1 contain?   Here are some of the bigger topline tidbits of note - but again, refer to the full changelog for a more complete accounting of things.</p>
				<img className="line" alt="1"src="../media/線段.jpg"/>
				<h2 className="center-word">QUALITY OF LIFE CHANGES</h2>
				<p>Beyond Bug Fixes, we always want to try and enhance the user experience as much as possible.   Here are just a few of the ways we have explored doing so in Terraria 1.4.1:<br/>
					<ul>
						<li>The Journey Mode duplication menu has been overhauled, with the addition of several new filters to break up some of the larger categories</li>
						<li>Torch God now plays an Otherworldly track when that setting is toggled</li>
						<li>Bestiary now indicates if a drop is Wave-based/if it only drops after a certain wave in Frost Moon and Pumpkin Moon</li>
						<li>Plantero's Sombrero has made its triumphant return</li>
						<li>Reorganized menu settings for resolution/fullscreen/windowed borderless to all use the same sub-menu, to reduce confusion</li>
						<li>Updated FNA (Mac/Linux related)</li>
						<li>RGB support is now available for SteelSeries game peripherals</li>
						<li>Updated localization for all languages up to 1.4 (some 1.4.1 content may still be untranslated, and these translations will come in an upcoming hotfix)</li>
					</ul>
				</p>
				<img className="line" alt="1"src="../media/線段.jpg"/>
				<h2 className="center-word">BALANCE CHANGES</h2>
				<p className="center-word">
					As you likely are aware, Terraria: Journey's End contained a ton of changes to balance across the entire progression of the game.  As with any changes of this nature, everyone had thoughts and feedback.   We invited everyone to weigh in on this robust discussion in our Official Balance/Feedback Thread - and you did not disappoint! With that feedback in hand - along with our own post-launch thoughts - we have made even more balance changes that we hope will bring things ever-closer to feeling "just right" for most folks. A little bit of everything has been impacted here, so we really encourage you to read up before you are surprised! :)<br/><br/>There are simply too many things to list here, so for the full list, please click the link below to check it out!
				</p>
				<img className="line" alt="1"src="../media/線段.jpg"/>
				<h2 className="center-word">TERRARIA OFFICIAL SOUNDTRACK - JOURNEY'S END TRACKS ADDED!</h2>
				<p className="center-word">Alongside Terraria 1.4.1, we have updated the Terraria Official Soundtrack with all of the Journey's End tracks - and some older favorites! There has never been a better time to pick up this collection of amazing tunes! The full OST is now updated on Steam, and all of the new tracks will be available on Spotify/iTunes/etc. in the very near future!</p>
				<br/><br/>
				<p className="small"><i>Last updated on: 2020/10/14 上午1:05:48</i></p>
			</div>
			
			
		</div>
	</div>
	<footer>
		<a href="../index.html"><img className="big-logo" alt="1"src="../media/logo2.png"/></a>
		<div className="footer-top">
			<div className="footer-icon">
				<a href="https://www.facebook.com/TerrariaOfficial/"><img alt="1"src="../media/fb.png"height="20"/></a>
				<a href="https://twitter.com/terraria_logic"><img alt="1"src="../media/twitter.png"height="20"/></a>
				<a href="https://www.instagram.com/terraria_logic/?hl=zh-tw"><img alt="1"src="../media/ig.png"height="20"/></a>
				<a href="https://www.youtube.com/user/demilogic"><img alt="1"src="../media/yt.png"height="20"/></a>
			</div>
		</div>
		<div className="gift" >
				
			<img className="gif" alt="1"src="../gif/120.gif"/>
			<img className="gif" alt="1"src="../gif/Empress_of_Light.gif"/>
			<img className="gif" alt="1"src="../gif/Skeletron_Prime_.gif"/>
			<img className="gif" alt="1"src="../gif/queen_slime.gif"/>
			<img className="gif" alt="2"src="../gif/Webp.net-gifmaker.gif"/>
		
			
			
		   </div>
	</footer>
	<nav>
	  <div className="nav-right hidden-xs">
		<div className="button" id="btn">
		  <div className="bar top"></div>
		  <div className="bar middle"></div>
		  <div className="bar bottom"></div>
		</div>
	  </div>
	</nav>

  	<script src="../js/jQuery.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
  	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
  	<script  src="../js/script2.js"></script>
  	<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue.js'></script>
	<script  src="js/script.js"></script>
	<a href="https://www.blogger.com/blogger.g?blogID=2031514508322140995#" id="gotop">
		<i className="fas fa-angle-up"></i>
	</a>
  </div>
  );
}

export default App;
