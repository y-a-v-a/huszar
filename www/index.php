<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Hommage à Vilmos Huszár | by Yava | technique: html5 and javascript programming code</title>
		<meta name="description" content="Hommage à Vilmos Huszár">
		<meta name="keywords" content="Vilmos Huszár, de Stijl, de Schaatsers, Vincent Bruijn, YAVA, Yet Another Visual Artist, Hommage à Huszar">
		<meta name="author" content="y-a-v-a">
		<!--
		.::   .::         .::          .::     .::         .::    
		 .:: .:: .::::: .::  .:: .::::: .::   .:: .::::: .::  .:: 
		   .:::        .::   .::         .:: .::        .::   .:: 
		    .::        .::   .::          .:.::         .::   .:: 
		   .::           .:: .:::          .::            .:: .:::
		 .::
		 -->
		<link rel="stylesheet" type="text/css" href="huszar.css">
	</head>
	<body>
		<div id="desc">
			Vilmos Huszár's painting was the inspiration for this piece from y-a-v-a. All positions of the skaters are nodes on a graph. The nodes have different connections so there is a Hamiltonian cycle possible. These Hamiltonian cycles are calculated by a recursive script that searches through all connections. In this case there are about 1380 cycles. The painting is built up bij processing each found Hamiltonian cycle.
			* http://nl.wikipedia.org/wiki/Vilmos_Husz%C3%A1r
			* http://en.wikipedia.org/wiki/Hamiltonian_cycle
		</div>
		<div id="controlls" class="info">
			<a id="pause" onclick="doPause()">pause</a><span id="open" class="open">&nbsp;&raquo;</span>
		</div>
		<div id="info" class="info">
			<span>Hommage à Vilmos Huszár | by <a href="http://www.y-a-v-a.org">y-a-v-a.org</a></span><span id="openinfo" class="open">&nbsp;&raquo;</span>
		</div>
		<div id="vh-canvas">
			<div id="month" class="legend">OCT.</div>
			<div id="year" class="legend">2012</div>
			<div id="title" class="legend">HOMMAGE.</div>
			<div id="name" class="legend">YAVA.</div>
			<?php for($i = 0; $i < 16; $i++) : ?>
				<div id="vh-wrap-<?=$i?>" class="vh-wrap">
					<div id="vh-head-<?=$i?>" class="vh-black"></div>
					<div id="vh-body-<?=$i?>" class="vh-green"></div>
					<div id="vh-limb-<?=$i?>" class="vh-orange"></div>
					<div id="vh-leg1-<?=$i?>" class="vh-orange"></div>
					<div id="vh-leg2-<?=$i?>" class="vh-orange"></div>
					<div id="vh-foot1-<?=$i?>" class="vh-black"></div>
					<div id="vh-foot2-<?=$i?>" class="vh-black"></div>
					<div id="vh-pos-<?=$i?>" style="visibility: hidden;"><?=$i?></div>
				</div>
			<?php endfor; ?>
		</div>
		<script src="jquery-2.0.3.min.js"></script>
		<script src="huszar.js"></script>
		<script>
		var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-16179947-14"]);_gaq.push(["_setDomainName","vilmos-huszar.org"]);_gaq.push(["_trackPageview"]);(function(){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})()
		</script>
	</body>
</html>
