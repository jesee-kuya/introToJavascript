<!DOCTYPE html>
<html lang="en-US" class="theme-arc-green-light">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>public/get-them-all.data.js at master -  public - Gitea</title>
	<link rel="manifest" href="data:application/json;base64,eyJuYW1lIjoiR2l0ZWEiLCJzaG9ydF9uYW1lIjoiR2l0ZWEiLCJzdGFydF91cmwiOiJodHRwczovL2xlYXJuLnpvbmUwMWtpc3VtdS5rZS9naXQvIiwiaWNvbnMiOlt7InNyYyI6Imh0dHBzOi8vbGVhcm4uem9uZTAxa2lzdW11LmtlL2dpdC9hc3NldHMvaW1nL2xvZ28ucG5nIiwidHlwZSI6ImltYWdlL3BuZyIsInNpemVzIjoiNTEyeDUxMiJ9LHsic3JjIjoiaHR0cHM6Ly9sZWFybi56b25lMDFraXN1bXUua2UvZ2l0L2Fzc2V0cy9pbWcvbG9nby5zdmciLCJ0eXBlIjoiaW1hZ2Uvc3ZnK3htbCIsInNpemVzIjoiNTEyeDUxMiJ9XX0="/>
	<meta name="theme-color" content="#6cc644">
	<meta name="default-theme" content="arc-green-light" />
	<meta name="author" content="root" />
	<meta name="description" content="public" />
	<meta name="keywords" content="go,git,self-hosted,gitea">
	<meta name="referrer" content="no-referrer" />

	<script>
		<!--   -->
		window.config = {
			appVer: '1.16.9',
			appSubUrl: '\/git',
			assetUrlPrefix: '\/git\/assets',
			runModeIsProd:  true ,
			customEmojis: {"codeberg":":codeberg:","git":":git:","gitea":":gitea:","github":":github:","gitlab":":gitlab:","gogs":":gogs:"},
			useServiceWorker:  false ,
			csrfToken: 'mG0R1FZhliEmYQ2_m0jjiwvpyig6MTcyNTYyNjYzODI2NzQ5MDUyOQ',
			pageData: {},
			requireTribute:  null ,
			notificationSettings: {"EventSourceUpdateTime":10000,"MaxTimeout":60000,"MinTimeout":10000,"TimeoutStep":10000}, 
			enableTimeTracking:  true ,
			
			mermaidMaxSourceCharacters:  5000 ,
			
			i18n: {
				copy_success: 'Copied!',
				copy_error: 'Copy failed',
				error_occurred: 'An error occurred',
				network_error: 'Network error',
			},
		};
		
		window.config.pageData = window.config.pageData || {};
	</script>
	<link rel="icon" href="/git/assets/img/logo.svg" type="image/svg+xml">
	<link rel="alternate icon" href="/git/assets/img/favicon.png" type="image/png">
	<link rel="stylesheet" href="/git/assets/css/index.css?v=b7cd2ee017fdf4f254d153314f812efd">
	<noscript>
		<style>
			.dropdown:hover > .menu { display: block; }
			.ui.secondary.menu .dropdown.item > .menu { margin-top: 0; }
		</style>
	</noscript>

	
		<meta property="og:title" content="public" />
		<meta property="og:url" content="https://learn.zone01kisumu.ke/git/root/public" />
		
	
	<meta property="og:type" content="object" />
	
		<meta property="og:image" content="https://learn.zone01kisumu.ke/git/avatars/0047f01ac4092fcdd04e64850c639c19" />
	

<meta property="og:site_name" content="Gitea" />

	
		<link rel="stylesheet" href="/git/assets/css/theme-arc-green-light.css?v=b7cd2ee017fdf4f254d153314f812efd">
	


</head>
<body>
	
  
    <link rel="stylesheet" href="https://theme-park.dev/css/base/gitea/arc-green-light.css">
  



	<div class="full height">
		<noscript>This website works better with JavaScript.</noscript>

		

		
			<div class="ui top secondary stackable main menu following bar light">
				<div class="ui container" id="navbar">
	<div class="item brand" style="justify-content: space-between;">
		<a href="/git/" data-content="Dashboard">
			<img class="ui mini image" width="30" height="30" src="/git/assets/img/logo.svg">
		</a>
		<div class="ui basic icon button mobile-only" id="navbar-expand-toggle">
			<i class="sidebar icon"></i>
		</div>
	</div>

	
		
		<a class="item " href="/git/issues">Issues</a>
		
		
		<a class="item " href="/git/pulls">Pull Requests</a>
		
		
		<a class="item " href="/git/milestones">Milestones</a>
		
		<a class="item " href="/git/explore/repos">Explore</a>
	

	<a id="link-intra" class="item brand" href="/">Intra</a>


	


	
		<div class="right stackable menu">
			<a class="active-stopwatch-trigger item ui label hidden" href="">
				<span class="text">
					<span class="fitted item">
						<svg viewBox="0 0 16 16" class="svg octicon-stopwatch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75.75A.75.75 0 0 1 6.5 0h3a.75.75 0 0 1 0 1.5h-.75v1l-.001.041a6.718 6.718 0 0 1 3.464 1.435l.007-.006.75-.75a.75.75 0 1 1 1.06 1.06l-.75.75-.006.007a6.75 6.75 0 1 1-10.548 0L2.72 5.03l-.75-.75a.75.75 0 0 1 1.06-1.06l.75.75.007.006A6.718 6.718 0 0 1 7.25 2.541a.756.756 0 0 1 0-.041v-1H6.5a.75.75 0 0 1-.75-.75zM8 14.5A5.25 5.25 0 1 0 8 4a5.25 5.25 0 0 0 0 10.5zm.389-6.7 1.33-1.33a.75.75 0 1 1 1.061 1.06L9.45 8.861A1.502 1.502 0 0 1 8 10.75a1.5 1.5 0 1 1 .389-2.95z"/></svg>
						<span class="red" style="position:absolute; right:-0.6em; top:-0.6em;"><svg viewBox="0 0 16 16" class="svg octicon-dot-fill" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg></span>
					</span>
					<span class="sr-mobile-only">Active Time Tracker</span>
				</span>
			</a>
			<div class="ui popup very wide">
				<div class="df ac">
					<a class="stopwatch-link df ac" href="">
						<svg viewBox="0 0 16 16" class="svg octicon-issue-opened" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/></svg>
						<span class="stopwatch-issue">#</span>
						<span class="ui label blue stopwatch-time my-0 mx-4" data-seconds="">
							
						</span>
					</a>
					<form class="stopwatch-commit" method="POST" action="/times/stopwatch/toggle">
						<input type="hidden" name="_csrf" value="mG0R1FZhliEmYQ2_m0jjiwvpyig6MTcyNTYyNjYzODI2NzQ5MDUyOQ">
						<button
							class="ui button mini compact basic icon fitted tooltip"
							data-content="Stop Timer"
							data-position="top right"
						><svg viewBox="0 0 16 16" class="svg octicon-square-fill" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 4A1.75 1.75 0 0 0 4 5.75v4.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0 0 12 10.25v-4.5A1.75 1.75 0 0 0 10.25 4h-4.5z"/></svg></button>
					</form>
					<form class="stopwatch-cancel" method="POST" action="/times/stopwatch/cancel">
						<input type="hidden" name="_csrf" value="mG0R1FZhliEmYQ2_m0jjiwvpyig6MTcyNTYyNjYzODI2NzQ5MDUyOQ">
						<button
							class="ui button mini compact basic icon fitted tooltip"
							data-content="Discard"
							data-position="top right"
						><svg viewBox="0 0 16 16" class="svg octicon-trash" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 0 1 .25-.25h2.5a.25.25 0 0 1 .25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 1 0-1.492.15l.66 6.6A1.75 1.75 0 0 0 5.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 0 0-1.492-.149l-.66 6.6a.25.25 0 0 1-.249.225h-5.19a.25.25 0 0 1-.249-.225l-.66-6.6z"/></svg></button>
					</form>
				</div>
			</div>

			<a href="/git/notifications" class="item tooltip" data-content='Notifications'>
				<span class="text">
					<span class="fitted"><svg viewBox="0 0 16 16" class="svg octicon-bell" width="16" height="16" aria-hidden="true"><path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16z"/><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 0 0-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 0 0 .006.004l.007.001h10.964l.007-.001a.016.016 0 0 0 .006-.004.016.016 0 0 0 .004-.006l.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.75 1.75 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5zM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0 1 13.482 13H2.518a1.518 1.518 0 0 1-1.263-2.36l1.703-2.554A.25.25 0 0 0 3 7.947V5z"/></svg></span>
					<span class="sr-mobile-only">Notifications</span>
					
					
					<span class="ui red label  notification_count">
						11
					</span>
				</span>
			</a>

			<div class="ui dropdown jump item tooltip" data-content="Create…">
				<span class="text">
					<span class="fitted"><svg viewBox="0 0 16 16" class="svg octicon-plus" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 1 1 0 1.5H8.5v4.25a.75.75 0 1 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2z"/></svg></span>
					<span class="sr-mobile-only">Create…</span>
					<span class="fitted not-mobile"><svg viewBox="0 0 16 16" class="svg octicon-triangle-down" width="16" height="16" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z"/></svg></span>
				</span>
				<div class="menu">
					<a class="item" href="/git/repo/create">
						<span class="fitted"><svg viewBox="0 0 16 16" class="svg octicon-plus" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 1 1 0 1.5H8.5v4.25a.75.75 0 1 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2z"/></svg></span> New Repository
					</a>
					
						<a class="item" href="/git/repo/migrate">
							<span class="fitted"><svg viewBox="0 0 16 16" class="svg octicon-repo-push" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.492 2.492 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 1 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5v-9zm13.23 7.79a.75.75 0 0 0 1.06-1.06l-2.505-2.505a.75.75 0 0 0-1.06 0L9.22 9.229a.75.75 0 0 0 1.06 1.061l1.225-1.224v6.184a.75.75 0 0 0 1.5 0V9.066l1.224 1.224z"/></svg></span> New Migration
						</a>
					
					
				</div>
			</div>

			<div class="ui dropdown jump item tooltip" tabindex="-1" data-content="Profile and Settings…">
				<span class="text">
					<img class="ui avatar image tiny" src="/git/avatars/b990e7e45f5bae8559b9dc30dd411027?size=72" title="Jesee Kuya" width="24" height="24"/>
					<span class="sr-only">Profile and Settings…</span>
					<span class="mobile-only">jkuya</span>
					<span class="fitted not-mobile" tabindex="-1"><svg viewBox="0 0 16 16" class="svg octicon-triangle-down" width="16" height="16" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z"/></svg></span>
				</span>
				<div class="menu user-menu" tabindex="-1">
					<div class="ui header">
						Signed in as <strong>jkuya</strong>
					</div>

					<div class="divider"></div>
					<a class="item" href="/git/jkuya">
						<svg viewBox="0 0 16 16" class="svg octicon-person" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm.061 3.073a4 4 0 1 0-5.123 0 6.004 6.004 0 0 0-3.431 5.142.75.75 0 0 0 1.498.07 4.5 4.5 0 0 1 8.99 0 .75.75 0 1 0 1.498-.07 6.005 6.005 0 0 0-3.432-5.142z"/></svg>
						Profile
					</a>
					
						<a class="item" href="/git/jkuya?tab=stars">
							<svg viewBox="0 0 16 16" class="svg octicon-star" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>
							Starred
						</a>
					
					<a class=" item" href="/git/user/settings">
						<svg viewBox="0 0 16 16" class="svg octicon-tools" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.433 2.304A4.494 4.494 0 0 0 3.5 6c0 1.598.832 3.002 2.09 3.802.518.328.929.923.902 1.64v.008l-.164 3.337a.75.75 0 1 1-1.498-.073l.163-3.33c.002-.085-.05-.216-.207-.316A5.996 5.996 0 0 1 2 6a5.994 5.994 0 0 1 2.567-4.92 1.482 1.482 0 0 1 1.673-.04c.462.296.76.827.76 1.423v2.82c0 .082.041.16.11.206l.75.51a.25.25 0 0 0 .28 0l.75-.51A.25.25 0 0 0 9 5.282V2.463c0-.596.298-1.127.76-1.423a1.482 1.482 0 0 1 1.673.04A5.994 5.994 0 0 1 14 6a5.996 5.996 0 0 1-2.786 5.068c-.157.1-.209.23-.207.315l.163 3.33a.75.75 0 1 1-1.498.074l-.164-3.345c-.027-.717.384-1.312.902-1.64A4.496 4.496 0 0 0 12.5 6a4.494 4.494 0 0 0-1.933-3.696c-.024.017-.067.067-.067.16v2.818a1.75 1.75 0 0 1-.767 1.448l-.75.51a1.75 1.75 0 0 1-1.966 0l-.75-.51A1.75 1.75 0 0 1 5.5 5.282V2.463c0-.092-.043-.142-.067-.159zm.01-.005z"/></svg>
						Settings
					</a>
					<a class="item" target="_blank" rel="noopener noreferrer" href="https://docs.gitea.io">
						<svg viewBox="0 0 16 16" class="svg octicon-question" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.92 6.085c.081-.16.19-.299.34-.398.145-.097.371-.187.74-.187.28 0 .553.087.738.225A.613.613 0 0 1 9 6.25c0 .177-.04.264-.077.318a.956.956 0 0 1-.277.245c-.076.051-.158.1-.258.161l-.007.004a7.728 7.728 0 0 0-.313.195 2.416 2.416 0 0 0-.692.661.75.75 0 0 0 1.248.832.956.956 0 0 1 .276-.245 6.3 6.3 0 0 1 .26-.16l.006-.004c.093-.057.204-.123.313-.195.222-.149.487-.355.692-.662.214-.32.329-.702.329-1.15 0-.76-.36-1.348-.863-1.725A2.76 2.76 0 0 0 8 4c-.631 0-1.155.16-1.572.438-.413.276-.68.638-.849.977a.75.75 0 1 0 1.342.67z"/></svg>
						Help
					</a>
					

					<div class="divider"></div>
					<a class="item link-action" href data-url="/git/user/logout" data-redirect="/git/">
						<svg viewBox="0 0 16 16" class="svg octicon-sign-out" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25V2.75zm10.44 4.5H6.75a.75.75 0 0 0 0 1.5h5.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 1 0-1.06 1.06l1.97 1.97z"/></svg>
						Sign Out
					</a>
				</div>
			</div>
		</div>
	
</div>

			</div>
		



<div class="page-content repository file list ">
	<div class="header-wrapper">

	<div class="ui container">
		<div class="repo-header">
			<div class="repo-title-wrap df fc">
				<div class="repo-title">
					
					
						<div class="repo-icon mr-3">
	
		
			<svg viewBox="0 0 16 16" class="svg octicon-mirror" width="32" height="32" aria-hidden="true"><path fill-rule="evenodd" d="M8.75 1.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5zM8 4a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 4zm.75 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5zM8 10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 10zm0 3a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 13zm7.547-9.939A.75.75 0 0 1 16 3.75v8.5a.75.75 0 0 1-1.265.545l-4.5-4.25a.75.75 0 0 1 0-1.09l4.5-4.25a.75.75 0 0 1 .812-.144zM11.842 8l2.658 2.51V5.49L11.842 8zM0 12.25a.75.75 0 0 0 1.265.545l4.5-4.25a.75.75 0 0 0 0-1.09l-4.5-4.25A.75.75 0 0 0 0 3.75v8.5zm1.5-6.76L4.158 8 1.5 10.51V5.49z"/></svg>
		
	
</div>

					
					<a href="/git/root">root</a>
					<div class="mx-2">/</div>
					<a href="/git/root/public">public</a>
					<div class="labels df ac fw">
						
							
								
							
						
						
					</div>
				</div>
				<div class="fork-flag">mirror of <a target="_blank" rel="noopener noreferrer" href="https://github.com/01-edu/public.git">https://github.com/01-edu/public.git</a></div>
				
				
			</div>
			
				<div class="repo-buttons">
					
					<form method="post" action="/git/root/public/action/watch?redirect_to=%2fgit%2froot%2fpublic%2fsrc%2fbranch%2fmaster%2fsubjects%2fget-them-all%2fget-them-all.data.js">
						<input type="hidden" name="_csrf" value="mG0R1FZhliEmYQ2_m0jjiwvpyig6MTcyNTYyNjYzODI2NzQ5MDUyOQ">
						<div class="ui labeled button" tabindex="0">
							<button type="submit" class="ui compact small basic button">
								<svg viewBox="0 0 16 16" class="svg octicon-eye" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 0 1 0 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 0 1 0-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 0 0 0 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 0 0 0-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>Watch
							</button>
							<a class="ui basic label" href="/git/root/public/watchers">
								8
							</a>
						</div>
					</form>
					
						<form method="post" action="/git/root/public/action/star?redirect_to=%2fgit%2froot%2fpublic%2fsrc%2fbranch%2fmaster%2fsubjects%2fget-them-all%2fget-them-all.data.js">
							<input type="hidden" name="_csrf" value="mG0R1FZhliEmYQ2_m0jjiwvpyig6MTcyNTYyNjYzODI2NzQ5MDUyOQ">
							<div class="ui labeled button" tabindex="0">
								<button type="submit" class="ui compact small basic button">
									<svg viewBox="0 0 16 16" class="svg octicon-star" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>Star
								</button>
								<a class="ui basic label" href="/git/root/public/stars">
									5
								</a>
							</div>
						</form>
					
					
						<div class="ui labeled button
							"
							
						data-position="top center" data-variation="tiny" tabindex="0">
							<a class="ui compact small basic button"
								
									href="/git/repo/fork/2"
								
							>
								<svg viewBox="0 0 16 16" class="svg octicon-repo-forked" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>Fork
							</a>
							<div class="ui small modal" id="fork-repo-modal">
								<svg viewBox="0 0 16 16" class="close inside svg octicon-x" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06z"/></svg>
								<div class="header">
									You&#39;ve already forked public
								</div>
								<div class="content tl">
									<div class="ui list">
										
									</div>
									
									<div class="ui divider"></div>
									<a href="/git/repo/fork/2">
										Fork to a different account
									</a>
									
								</div>
							</div>
							<a class="ui basic label" href="/git/root/public/forks">
								0
							</a>
						</div>
					
				</div>
			
		</div>
	</div>

	<div class="ui tabs container">
		
			<div class="ui tabular stackable menu navbar">
				
				<a class="active item" href="/git/root/public">
					<svg viewBox="0 0 16 16" class="svg octicon-code" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 0 1 1.06 1.06L2.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25zm6.56 0a.75.75 0 1 0-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25z"/></svg> Code
				</a>
				

				
					<a class=" item" href="/git/root/public/issues">
						<svg viewBox="0 0 16 16" class="svg octicon-issue-opened" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/></svg> Issues
						
					</a>
				

				

				

				
					<a href="/git/root/public/projects" class=" item">
						<svg viewBox="0 0 16 16" class="svg octicon-project" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 0 0 0 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0 0 16 14.25V1.75A1.75 1.75 0 0 0 14.25 0H1.75zM1.5 1.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V1.75zM11.75 3a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0v-5.5zM8 3a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5A.75.75 0 0 0 8 3z"/></svg> Projects
						
					</a>
				

				
				<a class=" item" href="/git/root/public/releases">
					<svg viewBox="0 0 16 16" class="svg octicon-tag" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg> Releases
					
				</a>
				

				
					<a class=" item" href="/git/root/public/wiki" >
						<svg viewBox="0 0 16 16" class="svg octicon-book" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75V1.75zm8.755 3a2.25 2.25 0 0 1 2.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574z"/></svg> Wiki
					</a>
				

				
					<a class=" item" href="/git/root/public/activity">
						<svg viewBox="0 0 16 16" class="svg octicon-pulse" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 2a.75.75 0 0 1 .696.471L10 10.731l1.304-3.26A.75.75 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.75.75 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.75.75 0 0 1 6 2z"/></svg> Activity
					</a>
				

				

				
			</div>
		
	</div>
	<div class="ui tabs divider"></div>
</div>

	<div class="ui container ">
		



		<div class="ui repo-description">
			<div id="repo-desc">
				
				<a class="link" href=""></a>
			</div>
			
		</div>
		<div class="mt-3" id="repo-topics">
		
		
		</div>
		
		<div class="hide" id="validate_prompt">
			<span id="count_prompt">You can not select more than 25 topics</span>
			<span id="format_prompt">Topics must start with a letter or number, can include dashes (&#39;-&#39;) and can be up to 35 characters long.</span>
		</div>
		
		<div class="ui segments repository-summary repository-summary-language-stats mt-3">
	<div class="ui segment sub-menu repository-menu">
		<div class="ui two horizontal center link list">
			
				<div class="item">
					<a class="ui" href="/git/root/public/commits/branch/master"><svg viewBox="0 0 16 16" class="svg octicon-history" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.643 3.143.427 1.927A.25.25 0 0 0 0 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 0 0 .177-.427L2.715 4.215a6.5 6.5 0 1 1-1.18 4.458.75.75 0 1 0-1.493.154 8.001 8.001 0 1 0 1.6-5.684zM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.75.75 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4z"/></svg> <b>6043</b> Commits</a>
				</div>
				<div class="item">
					<a class="ui" href="/git/root/public/branches"><svg viewBox="0 0 16 16" class="svg octicon-git-branch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg> <b>86</b> Branches</a>
				</div>
				
					<div class="item">
						<a class="ui" href="/git/root/public/tags"><svg viewBox="0 0 16 16" class="svg octicon-tag" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg> <b>7</b> Tags</a>
					</div>
				
				<div class="item">
					<span class="ui"><svg viewBox="0 0 16 16" class="svg octicon-database" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 3.5c0-.133.058-.318.282-.55.227-.237.592-.484 1.1-.708C4.899 1.795 6.354 1.5 8 1.5c1.647 0 3.102.295 4.117.742.51.224.874.47 1.101.707.224.233.282.418.282.551 0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 5.205 9.646 5.5 8 5.5c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707-.224-.233-.282-.418-.282-.551zM1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591v-9zM2.5 8V5.724c.241.15.503.286.779.407C4.525 6.68 6.195 7 8 7c1.805 0 3.475-.32 4.722-.869.275-.121.537-.257.778-.407V8c0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 9.705 9.646 10 8 10c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707C2.558 8.318 2.5 8.133 2.5 8zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.236 6.236 0 0 1-.779-.406z"/></svg> <b>313 MiB</b></span>
				</div>
			
		</div>
	</div>
	
	<div class="ui segment sub-menu language-stats-details" style="display: none">
		<div class="ui horizontal center link list">
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #f1e05a"></i>
				<span class="bold mr-3">
					
						JavaScript
					
				</span>
				62%
			</div>
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #e34c26"></i>
				<span class="bold mr-3">
					
						HTML
					
				</span>
				13.4%
			</div>
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #89e051"></i>
				<span class="bold mr-3">
					
						Shell
					
				</span>
				9.6%
			</div>
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #b07219"></i>
				<span class="bold mr-3">
					
						Java
					
				</span>
				4.7%
			</div>
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #00ADD8"></i>
				<span class="bold mr-3">
					
						Go
					
				</span>
				4.6%
			</div>
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #cccccc"></i>
				<span class="bold mr-3">
					
						Other
					
				</span>
				5.6%
			</div>
			
		</div>
	</div>
	<a class="ui segment language-stats">
		
		<div class="bar" style="width: 62%; background-color: #f1e05a">&nbsp;</div>
		
		<div class="bar" style="width: 13.4%; background-color: #e34c26">&nbsp;</div>
		
		<div class="bar" style="width: 9.6%; background-color: #89e051">&nbsp;</div>
		
		<div class="bar" style="width: 4.7%; background-color: #b07219">&nbsp;</div>
		
		<div class="bar" style="width: 4.6%; background-color: #00ADD8">&nbsp;</div>
		
		<div class="bar" style="width: 5.6%; background-color: #cccccc">&nbsp;</div>
		
	</a>
	
</div>

		<div class="ui stackable secondary menu mobile--margin-between-items mobile--no-negative-margins">
			

<div class="fitted item choose reference mr-1">
	<div class="ui floating filter dropdown custom" data-can-create-branch="false" data-no-results="No results found.">
		<div class="ui basic small compact button" @click="menuVisible = !menuVisible" @keyup.enter="menuVisible = !menuVisible">
			<span class="text">
				
					<svg viewBox="0 0 16 16" class="svg octicon-git-branch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg>
					Branch:
					<strong>master</strong>
				
			</span>
			<svg viewBox="0 0 16 16" class="dropdown icon svg octicon-triangle-down" width="14" height="14" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z"/></svg>
		</div>
		<div class="data" style="display: none" data-mode="branches">
			
				
					<div class="item branch " data-url="/git/root/public/src/branch/1124-swap-args-test/subjects/get-them-all/get-them-all.data.js">1124-swap-args-test</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/1148-concat-2-arguments/subjects/get-them-all/get-them-all.data.js">1148-concat-2-arguments</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/1153-word-abbreviate/subjects/get-them-all/get-them-all.data.js">1153-word-abbreviate</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/1155-to-camelcase/subjects/get-them-all/get-them-all.data.js">1155-to-camelcase</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/1164-findmissingnumber/subjects/get-them-all/get-them-all.data.js">1164-findmissingnumber</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/1258-canyoucount/subjects/get-them-all/get-them-all.data.js">1258-canyoucount</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-1801-MARKDOWN-Remove-VirtualBox-restriction-from-projects-with-generic-.iso-VM-images/subjects/get-them-all/get-them-all.data.js">CON-1801-MARKDOWN-Remove-VirtualBox-restriction-from-projects-with-generic-.iso-VM-images</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-1805-drawing-raid-for-Java-piscine/subjects/get-them-all/get-them-all.data.js">CON-1805-drawing-raid-for-Java-piscine</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-1836-MARKDOWN-Fix-virtualisation-linux-project/subjects/get-them-all/get-them-all.data.js">CON-1836-MARKDOWN-Fix-virtualisation-linux-project</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-1843-Fix-virtualization-Connect-project/subjects/get-them-all/get-them-all.data.js">CON-1843-Fix-virtualization-Connect-project</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-1857-Fix-virtualisation-for-the-remote-project/subjects/get-them-all/get-them-all.data.js">CON-1857-Fix-virtualisation-for-the-remote-project</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-1929-Wrong-id-in-audit-atm-management-system/subjects/get-them-all/get-them-all.data.js">CON-1929-Wrong-id-in-audit-atm-management-system</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-1940-update-tests-of-quest-6-RegexReplace-exercise-and-fix-minor-issue-in-the-subject/subjects/get-them-all/get-them-all.data.js">CON-1940-update-tests-of-quest-6-RegexReplace-exercise-and-fix-minor-issue-in-the-subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-1994-Update-subjects-with-rand-crate-dependency/subjects/get-them-all/get-them-all.data.js">CON-1994-Update-subjects-with-rand-crate-dependency</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2175-Markdown-create-subject-for-Freeze-exercise/subjects/get-them-all/get-them-all.data.js">CON-2175-Markdown-create-subject-for-Freeze-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2176-Tests-create-test-for-freeze-exercise/subjects/get-them-all/get-them-all.data.js">CON-2176-Tests-create-test-for-freeze-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2195-Markdown-create-subject-for-jabs-subject/subjects/get-them-all/get-them-all.data.js">CON-2195-Markdown-create-subject-for-jabs-subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2196-Tests-create-test-for-jabs-subject/subjects/get-them-all/get-them-all.data.js">CON-2196-Tests-create-test-for-jabs-subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2198-MARKDOWN-create-subject-of-more-exercise/subjects/get-them-all/get-them-all.data.js">CON-2198-MARKDOWN-create-subject-of-more-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2199-TESTS-create-test-of-more-exercise/subjects/get-them-all/get-them-all.data.js">CON-2199-TESTS-create-test-of-more-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2209-MARKDOWN-create-subject-for-less-exercise/subjects/get-them-all/get-them-all.data.js">CON-2209-MARKDOWN-create-subject-for-less-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2210-TESTS-add-test-of-less-exercise/subjects/get-them-all/get-them-all.data.js">CON-2210-TESTS-add-test-of-less-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2212-MARKDOWN-add-subject-for-add-exercise/subjects/get-them-all/get-them-all.data.js">CON-2212-MARKDOWN-add-subject-for-add-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2213-TESTS-add-test-for-add-exercise/subjects/get-them-all/get-them-all.data.js">CON-2213-TESTS-add-test-for-add-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2229-MARKDOWN-create-suffix-subject/subjects/get-them-all/get-them-all.data.js">CON-2229-MARKDOWN-create-suffix-subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2232-MARKDOWN-create-wave-subject/subjects/get-them-all/get-them-all.data.js">CON-2232-MARKDOWN-create-wave-subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2233-TESTS-create-wave-test/subjects/get-them-all/get-them-all.data.js">CON-2233-TESTS-create-wave-test</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2238-MARKDOWN-add-subject-of-sub-exercise/subjects/get-them-all/get-them-all.data.js">CON-2238-MARKDOWN-add-subject-of-sub-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2239-TESTS-add-test-of-sub-exercise/subjects/get-them-all/get-them-all.data.js">CON-2239-TESTS-add-test-of-sub-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2241-MARKDOWN-create-vowelSign-subject/subjects/get-them-all/get-them-all.data.js">CON-2241-MARKDOWN-create-vowelSign-subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2242-TESTS-create-vowelSign-tests/subjects/get-them-all/get-them-all.data.js">CON-2242-TESTS-create-vowelSign-tests</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2244-MARKDOWN-create-splitStringIntoPairs-Subject/subjects/get-them-all/get-them-all.data.js">CON-2244-MARKDOWN-create-splitStringIntoPairs-Subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2245-TEST-create-splitStringIntoPairs-tests/subjects/get-them-all/get-them-all.data.js">CON-2245-TEST-create-splitStringIntoPairs-tests</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2247-MARKDOWN-create-subject-of-sortBydir/subjects/get-them-all/get-them-all.data.js">CON-2247-MARKDOWN-create-subject-of-sortBydir</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2248-TESTS-create-Tests-of-sortBydir/subjects/get-them-all/get-them-all.data.js">CON-2248-TESTS-create-Tests-of-sortBydir</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2250-MARKDOWN-create-oneMatch-Subject/subjects/get-them-all/get-them-all.data.js">CON-2250-MARKDOWN-create-oneMatch-Subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2253-MARKDOWN-create-asterisksfirst-subject/subjects/get-them-all/get-them-all.data.js">CON-2253-MARKDOWN-create-asterisksfirst-subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2254-MARKDOWN-create-numberOfLetters-subject/subjects/get-them-all/get-them-all.data.js">CON-2254-MARKDOWN-create-numberOfLetters-subject</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2277-add-subject-and-audit-for-play-with-containers-py/subjects/get-them-all/get-them-all.data.js">CON-2277-add-subject-and-audit-for-play-with-containers-py</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2280-add-subject-and-audit-for-orchestrator-py/subjects/get-them-all/get-them-all.data.js">CON-2280-add-subject-and-audit-for-orchestrator-py</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2565-Markdown-Palindrom-exercise/subjects/get-them-all/get-them-all.data.js">CON-2565-Markdown-Palindrom-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2932-MARKDOWN-DPxAI-Quest00-Ex01/subjects/get-them-all/get-them-all.data.js">CON-2932-MARKDOWN-DPxAI-Quest00-Ex01</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2945-MARKDOWN-DPxAI-Quest00-Ex01/subjects/get-them-all/get-them-all.data.js">CON-2945-MARKDOWN-DPxAI-Quest00-Ex01</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2946-Markdown-DPxAI-Quest00-Ex01/subjects/get-them-all/get-them-all.data.js">CON-2946-Markdown-DPxAI-Quest00-Ex01</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2946-Markdown-DPxAI-Quest00-call-it/subjects/get-them-all/get-them-all.data.js">CON-2946-Markdown-DPxAI-Quest00-call-it</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2983-Markdown-Tests-DPxAI-Quest00-Ex04/subjects/get-them-all/get-them-all.data.js">CON-2983-Markdown-Tests-DPxAI-Quest00-Ex04</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-2985-Ex04-Glance-on-power/subjects/get-them-all/get-them-all.data.js">CON-2985-Ex04-Glance-on-power</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3002-Markdown-Quest01-Ex00/subjects/get-them-all/get-them-all.data.js">CON-3002-Markdown-Quest01-Ex00</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3003-Test-Quest00-Ex00/subjects/get-them-all/get-them-all.data.js">CON-3003-Test-Quest00-Ex00</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3006-Markdown-Quest01-Ex01/subjects/get-them-all/get-them-all.data.js">CON-3006-Markdown-Quest01-Ex01</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3008-Solution-Quest01-Ex01/subjects/get-them-all/get-them-all.data.js">CON-3008-Solution-Quest01-Ex01</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3010-Markdown-Quest01-the-smooth-operator/subjects/get-them-all/get-them-all.data.js">CON-3010-Markdown-Quest01-the-smooth-operator</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3026-Markdown-DPxAI-Quest01-declare-everything/subjects/get-them-all/get-them-all.data.js">CON-3026-Markdown-DPxAI-Quest01-declare-everything</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3030-Markdown-DPxAI-Quest01-Star-Forge/subjects/get-them-all/get-them-all.data.js">CON-3030-Markdown-DPxAI-Quest01-Star-Forge</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3094-Fix-NascarOnlineAlpha-Project/subjects/get-them-all/get-them-all.data.js">CON-3094-Fix-NascarOnlineAlpha-Project</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3095-Markdown-GameDev-NascarOnlineAlpha/subjects/get-them-all/get-them-all.data.js">CON-3095-Markdown-GameDev-NascarOnlineAlpha</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3116-Fix-nascar-online-alpha-subject-and-audit/subjects/get-them-all/get-them-all.data.js">CON-3116-Fix-nascar-online-alpha-subject-and-audit</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3132-remake-the-inspector-image-project/subjects/get-them-all/get-them-all.data.js">CON-3132-remake-the-inspector-image-project</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-3136-Markdown-subject-ai-sp500/subjects/get-them-all/get-them-all.data.js">CON-3136-Markdown-subject-ai-sp500</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-697-Singleton/subjects/get-them-all/get-them-all.data.js">CON-697-Singleton</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/CON-878-setup-exercise/subjects/get-them-all/get-them-all.data.js">CON-878-setup-exercise</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3198-new-go-exercise-get-digit-len/subjects/get-them-all/get-them-all.data.js">DEV-3198-new-go-exercise-get-digit-len</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3202-new-go-exercicse-be-zero/subjects/get-them-all/get-them-all.data.js">DEV-3202-new-go-exercicse-be-zero</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3241-DEV-3242-corewar/subjects/get-them-all/get-them-all.data.js">DEV-3241-DEV-3242-corewar</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3376-pointers-drop-the-thread-multiple-issues/subjects/get-them-all/get-them-all.data.js">DEV-3376-pointers-drop-the-thread-multiple-issues</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3377-new-go-exercise-swap-first/subjects/get-them-all/get-them-all.data.js">DEV-3377-new-go-exercise-swap-first</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3378-new-go-exercise-year-quarter/subjects/get-them-all/get-them-all.data.js">DEV-3378-new-go-exercise-year-quarter</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3409-new-go-exercise-print-if/subjects/get-them-all/get-them-all.data.js">DEV-3409-new-go-exercise-print-if</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3932-lamp-in-the-dark/subjects/get-them-all/get-them-all.data.js">DEV-3932-lamp-in-the-dark</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-3972-prepare-blockchain-branch-subjects/subjects/get-them-all/get-them-all.data.js">DEV-3972-prepare-blockchain-branch-subjects</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-4049-remove-alcohol-terminology/subjects/get-them-all/get-them-all.data.js">DEV-4049-remove-alcohol-terminology</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-4191-DeepInSystem/subjects/get-them-all/get-them-all.data.js">DEV-4191-DeepInSystem</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-4199-make-test-environment-compatible-with-python-exercises/subjects/get-them-all/get-them-all.data.js">DEV-4199-make-test-environment-compatible-with-python-exercises</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-4397-piscine-ai-missing-file-for-ex-7-of-nlp/subjects/get-them-all/get-them-all.data.js">DEV-4397-piscine-ai-missing-file-for-ex-7-of-nlp</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-4415-crud-master-api-definition/subjects/get-them-all/get-them-all.data.js">DEV-4415-crud-master-api-definition</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-4541-Go-go-reloaded-synchronous-project-reveiw/subjects/get-them-all/get-them-all.data.js">DEV-4541-Go-go-reloaded-synchronous-project-reveiw</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-4741-bug-scripting-piscine-quest-4-division/subjects/get-them-all/get-them-all.data.js">DEV-4741-bug-scripting-piscine-quest-4-division</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/DEV-4914-Release-User-Experience-Content/subjects/get-them-all/get-them-all.data.js">DEV-4914-Release-User-Experience-Content</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/content-update/subjects/get-them-all/get-them-all.data.js">content-update</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/fixDevirged/subjects/get-them-all/get-them-all.data.js">fixDevirged</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/is-negative/subjects/get-them-all/get-them-all.data.js">is-negative</div>
				
					<div class="item branch selected" data-url="/git/root/public/src/branch/master/subjects/get-them-all/get-them-all.data.js">master</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/revert-2104-CON-1813-MARKDOWN-chaikin-raid-for-java-piscine/subjects/get-them-all/get-them-all.data.js">revert-2104-CON-1813-MARKDOWN-chaikin-raid-for-java-piscine</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/subject-issamestring/subjects/get-them-all/get-them-all.data.js">subject-issamestring</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/update-quest-08-exercises-description-c-150/subjects/get-them-all/get-them-all.data.js">update-quest-08-exercises-description-c-150</div>
				
					<div class="item branch " data-url="/git/root/public/src/branch/vo/subjects/get-them-all/get-them-all.data.js">vo</div>
				
			
			
				
					<div class="item tag " data-url="/git/root/public/src/tag/v24.13.0-2024.06.21/subjects/get-them-all/get-them-all.data.js">v24.13.0-2024.06.21</div>
				
			
				
					<div class="item tag " data-url="/git/root/public/src/tag/v24.13.2-2024.06.27/subjects/get-them-all/get-them-all.data.js">v24.13.2-2024.06.27</div>
				
			
				
					<div class="item tag " data-url="/git/root/public/src/tag/v24.14.0-2024.07.04/subjects/get-them-all/get-them-all.data.js">v24.14.0-2024.07.04</div>
				
			
				
					<div class="item tag " data-url="/git/root/public/src/tag/v24.15.0-2024.07.16/subjects/get-them-all/get-them-all.data.js">v24.15.0-2024.07.16</div>
				
			
				
					<div class="item tag " data-url="/git/root/public/src/tag/v24.16.0-2024.07.31/subjects/get-them-all/get-them-all.data.js">v24.16.0-2024.07.31</div>
				
			
				
					<div class="item tag " data-url="/git/root/public/src/tag/v24.17.0-2024.08.13/subjects/get-them-all/get-them-all.data.js">v24.17.0-2024.08.13</div>
				
			
				
					<div class="item tag " data-url="/git/root/public/src/tag/v24.18.0-2024.08.27/subjects/get-them-all/get-them-all.data.js">v24.18.0-2024.08.27</div>
				
			
		</div>
		<div class="menu transition" :class="{visible: menuVisible}" v-if="menuVisible" v-cloak>
			<div class="ui icon search input">
				<i class="icon df ac jc m-0"><svg viewBox="0 0 16 16" class="svg octicon-filter" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M.75 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75zM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75z"/></svg></i>
				<input name="search" ref="searchField" autocomplete="off" v-model="searchTerm" @keydown="keydown($event)" placeholder="Filter branch or tag...">
			</div>
			
				<div class="header branch-tag-choice">
					<div class="ui grid">
						<div class="two column row">
							<a class="reference column" href="#" @click="createTag = false; mode = 'branches'; focusSearchField()">
								<span class="text" :class="{black: mode == 'branches'}">
									<svg viewBox="0 0 16 16" class="mr-2 svg octicon-git-branch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg>Branches
								</span>
							</a>
							<a class="reference column" href="#" @click="createTag = true; mode = 'tags'; focusSearchField()">
								<span class="text" :class="{black: mode == 'tags'}">
									<svg viewBox="0 0 16 16" class="mr-2 svg octicon-tag" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>Tags
								</span>
							</a>
						</div>
					</div>
				</div>
			
			<div class="scrolling menu" ref="scrollContainer">
				<div v-for="(item, index) in filteredItems" :key="item.name" class="item" :class="{selected: item.selected, active: active == index}" @click="selectItem(item)" :ref="'listItem' + index">${ item.name }</div>
				<div class="item" v-if="showCreateNewBranch" :class="{active: active == filteredItems.length}" :ref="'listItem' + filteredItems.length">
					<a href="#" @click="createNewBranch()">
						<div v-show="createTag">
							<i class="reference tags icon"></i>
							Create tag <strong>${ searchTerm }</strong>
						</div>
						<div v-show="!createTag">
							<svg viewBox="0 0 16 16" class="svg octicon-git-branch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg>
							Create branch <strong>${ searchTerm }</strong>
						</div>
						<div class="text small">
							
								from &#39;master&#39;
							
						</div>
					</a>
					<form ref="newBranchForm" action="/git/root/public/branches/_new/branch/master" method="post">
						<input type="hidden" name="_csrf" value="mG0R1FZhliEmYQ2_m0jjiwvpyig6MTcyNTYyNjYzODI2NzQ5MDUyOQ">
						<input type="hidden" name="new_branch_name" v-model="searchTerm">
						<input type="hidden" name="create_tag" v-model="createTag">
					</form>
				</div>
			</div>
			<div class="message" v-if="showNoResults">${ noResults }</div>
		</div>
	</div>
</div>

			
			
			
			
				<div class="fitted item"><span class="ui breadcrumb repo-path"><a class="section" href="/git/root/public/src/branch/master" title="public">public</a><span class="divider">/</span><span class="section"><a href="/git/root/public/src/branch/master/subjects" title="subjects">subjects</a></span><span class="divider">/</span><span class="section"><a href="/git/root/public/src/branch/master/subjects/get-them-all" title="get-them-all">get-them-all</a></span><span class="divider">/</span><span class="active section" title="get-them-all.data.js">get-them-all.data.js</span></span></div>
			
			<div class="right fitted item mr-0" id="file-buttons">
				<div class="ui tiny primary buttons">
					
					
				</div>

			</div>
			<div class="fitted item">
				
			</div>
			<div class="fitted item">
				
				
			</div>
		</div>
		
			<div class="tab-size-8 non-diff-file-content">
	<h4 class="file-header ui top attached header df ac sb">
		<div class="file-header-left df ac">
			
				<div class="file-info text grey normal mono">
					
					
						<div class="file-info-entry">
							47 lines
						</div>
					
					
						<div class="file-info-entry">
							3.1 KiB
						</div>
					
					
				</div>
			
		</div>
		<div class="file-header-right file-actions df ac">
			
			
				<div class="ui buttons mr-2">
					<a class="ui mini basic button" href="/git/root/public/raw/branch/master/subjects/get-them-all/get-them-all.data.js">Raw</a>
					
						<a class="ui mini basic button" href="/git/root/public/src/commit/1d34ea0a71d5663a593340c08e47fb5bcb1c55dc/subjects/get-them-all/get-them-all.data.js">Permalink</a>
					
					
						<a class="ui mini basic button" href="/git/root/public/blame/branch/master/subjects/get-them-all/get-them-all.data.js">Blame</a>
					
					<a class="ui mini basic button" href="/git/root/public/commits/branch/master/subjects/get-them-all/get-them-all.data.js">History</a>
					
				</div>
				<a download href="/git/root/public/raw/branch/master/subjects/get-them-all/get-them-all.data.js"><span class="btn-octicon tooltip" data-content="Download file" data-position="bottom center"><svg viewBox="0 0 16 16" class="svg octicon-download" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 0 0 1.06 0l3.75-3.75a.75.75 0 0 0-1.06-1.06L8.75 8.44V1.75a.75.75 0 0 0-1.5 0v6.69L4.78 5.97a.75.75 0 0 0-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5z"/></svg></span></a>
				
			
		</div>
	</h4>
	<div class="ui attached table unstackable segment">
		
	


		<div class="file-view code-view">
			
				
				<table>
					<tbody>
						
						
						<tr>
							<td id="L1" class="lines-num"><span id="L1" data-line-number="1"></span></td>
							
							<td rel="L1" class="lines-code chroma"><code class="code-inner"><span class="line"><span class="cl"><span class="kr">export</span> <span class="kr">const</span> <span class="nx">people</span> <span class="o">=</span> <span class="p">[</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L2" class="lines-num"><span id="L2" data-line-number="2"></span></td>
							
							<td rel="L2" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;LolaDunam&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L3" class="lines-num"><span id="L3" data-line-number="3"></span></td>
							
							<td rel="L3" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;LeeMarley&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L4" class="lines-num"><span id="L4" data-line-number="4"></span></td>
							
							<td rel="L4" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;JeanDujardin&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L5" class="lines-num"><span id="L5" data-line-number="5"></span></td>
							
							<td rel="L5" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;MarloStanfield&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L6" class="lines-num"><span id="L6" data-line-number="6"></span></td>
							
							<td rel="L6" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;GeorgesDrumond&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L7" class="lines-num"><span id="L7" data-line-number="7"></span></td>
							
							<td rel="L7" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;JuliaWhite&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L8" class="lines-num"><span id="L8" data-line-number="8"></span></td>
							
							<td rel="L8" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;BarneyLeberre&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L9" class="lines-num"><span id="L9" data-line-number="9"></span></td>
							
							<td rel="L9" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;DavidCarretta&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L10" class="lines-num"><span id="L10" data-line-number="10"></span></td>
							
							<td rel="L10" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;AugustoCesar&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L11" class="lines-num"><span id="L11" data-line-number="11"></span></td>
							
							<td rel="L11" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;DavidGuetta&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L12" class="lines-num"><span id="L12" data-line-number="12"></span></td>
							
							<td rel="L12" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;MarlonBrando&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L13" class="lines-num"><span id="L13" data-line-number="13"></span></td>
							
							<td rel="L13" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;BonannoPisano&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L14" class="lines-num"><span id="L14" data-line-number="14"></span></td>
							
							<td rel="L14" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;AvonBarksdale&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L15" class="lines-num"><span id="L15" data-line-number="15"></span></td>
							
							<td rel="L15" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;BarackObama&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L16" class="lines-num"><span id="L16" data-line-number="16"></span></td>
							
							<td rel="L16" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;MarcDupont&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L17" class="lines-num"><span id="L17" data-line-number="17"></span></td>
							
							<td rel="L17" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;BillieElliott&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L18" class="lines-num"><span id="L18" data-line-number="18"></span></td>
							
							<td rel="L18" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;MariaCallas&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L19" class="lines-num"><span id="L19" data-line-number="19"></span></td>
							
							<td rel="L19" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;SteveJobbs&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L20" class="lines-num"><span id="L20" data-line-number="20"></span></td>
							
							<td rel="L20" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;JoeLee&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L21" class="lines-num"><span id="L21" data-line-number="21"></span></td>
							
							<td rel="L21" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;AnthonyGrant&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L22" class="lines-num"><span id="L22" data-line-number="22"></span></td>
							
							<td rel="L22" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;ShakimaGreggs&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L23" class="lines-num"><span id="L23" data-line-number="23"></span></td>
							
							<td rel="L23" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;RoyDeere&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L24" class="lines-num"><span id="L24" data-line-number="24"></span></td>
							
							<td rel="L24" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;BobTurner&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L25" class="lines-num"><span id="L25" data-line-number="25"></span></td>
							
							<td rel="L25" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;AngeloCapri&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L26" class="lines-num"><span id="L26" data-line-number="26"></span></td>
							
							<td rel="L26" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;SamMcDonald&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L27" class="lines-num"><span id="L27" data-line-number="27"></span></td>
							
							<td rel="L27" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;FannyLelouche&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L28" class="lines-num"><span id="L28" data-line-number="28"></span></td>
							
							<td rel="L28" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;ClarkLoister&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L29" class="lines-num"><span id="L29" data-line-number="29"></span></td>
							
							<td rel="L29" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;FinanObrien&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L30" class="lines-num"><span id="L30" data-line-number="30"></span></td>
							
							<td rel="L30" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;ClariceSterling&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L31" class="lines-num"><span id="L31" data-line-number="31"></span></td>
							
							<td rel="L31" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;JayHernan&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L32" class="lines-num"><span id="L32" data-line-number="32"></span></td>
							
							<td rel="L32" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;HelenMirren&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L33" class="lines-num"><span id="L33" data-line-number="33"></span></td>
							
							<td rel="L33" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;SarahForestier&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L34" class="lines-num"><span id="L34" data-line-number="34"></span></td>
							
							<td rel="L34" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;JacquesChirac&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L35" class="lines-num"><span id="L35" data-line-number="35"></span></td>
							
							<td rel="L35" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;MartinWealer&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L36" class="lines-num"><span id="L36" data-line-number="36"></span></td>
							
							<td rel="L36" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;JodieFoster&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L37" class="lines-num"><span id="L37" data-line-number="37"></span></td>
							
							<td rel="L37" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;JeanJacques&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;modern&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L38" class="lines-num"><span id="L38" data-line-number="38"></span></td>
							
							<td rel="L38" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;MollyHeart&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L39" class="lines-num"><span id="L39" data-line-number="39"></span></td>
							
							<td rel="L39" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;FabioSalso&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L40" class="lines-num"><span id="L40" data-line-number="40"></span></td>
							
							<td rel="L40" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;CarlosSanchez&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L41" class="lines-num"><span id="L41" data-line-number="41"></span></td>
							
							<td rel="L41" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;RussellBell&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L42" class="lines-num"><span id="L42" data-line-number="42"></span></td>
							
							<td rel="L42" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;JackDoe&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L43" class="lines-num"><span id="L43" data-line-number="43"></span></td>
							
							<td rel="L43" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;EricCarver&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;classical&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">false</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L44" class="lines-num"><span id="L44" data-line-number="44"></span></td>
							
							<td rel="L44" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;LouisDeschamps&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L45" class="lines-num"><span id="L45" data-line-number="45"></span></td>
							
							<td rel="L45" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;HoracioCane&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L46" class="lines-num"><span id="L46" data-line-number="46"></span></td>
							
							<td rel="L46" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl">  <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;HenryBright&#39;</span><span class="p">,</span> <span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">classe</span><span class="o">:</span> <span class="s1">&#39;baroque&#39;</span><span class="p">,</span> <span class="nx">active</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span><span class="p">,</span></code></td>
						</tr>
						
						
						<tr>
							<td id="L47" class="lines-num"><span id="L47" data-line-number="47"></span></td>
							
							<td rel="L47" class="lines-code chroma"><code class="code-inner"></span><span class="line"><span class="cl"><span class="p">]</span>
</span></span></code></td>
						</tr>
						
						
						<tr>
							<td id="L48" class="lines-num"><span id="L48" data-line-number="48"></span></td>
							
							<td rel="L48" class="lines-code chroma"><code class="code-inner"><span class="w">
</span></code></td>
						</tr>
						
					</tbody>
				</table>
				<div class="code-line-menu ui fluid popup transition hidden">
					<div class="ui column relaxed equal height">
						<div class="column">
							
								<div class="ui link list">
									<a class="item ref-in-new-issue" href="/git/root/public/issues/new?body=https%3a%2f%2flearn.zone01kisumu.ke%2fgit%2froot%2fpublic%2fsrc%2fcommit%2f1d34ea0a71d5663a593340c08e47fb5bcb1c55dc/subjects%2fget-them-all%2fget-them-all.data.js" rel="nofollow noindex">Reference in new issue</a>
								</div>
							
							<div class="ui link list">
								<a data-clipboard-text="https://learn.zone01kisumu.ke/git/root/public/src/commit/1d34ea0a71d5663a593340c08e47fb5bcb1c55dc/subjects/get-them-all/get-them-all.data.js" class="item copy-line-permalink">Copy Permalink</a>
							</div>
						</div>
					</div>
				</div>
				
			
		</div>
	</div>
</div>

		
	</div>
</div>


	

	</div>

	

	<footer>
	<div class="ui container">
		<div class="ui left">
			Powered by Gitea Version: 1.16.9 Page: <strong>146ms</strong> Template: <strong>14ms</strong>
		</div>
		<div class="ui right links">
			
			<div class="ui language bottom floating slide up dropdown link item">
				<svg viewBox="0 0 16 16" class="svg octicon-globe" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.543 7.25h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.506 6.506 0 0 0-4.666 5.5zm2.733 1.5H1.543a6.506 6.506 0 0 0 4.666 5.5 11.13 11.13 0 0 1-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948zm1.504 0h4.44a9.637 9.637 0 0 1-1.363 4.177c-.306.51-.612.919-.857 1.215a9.978 9.978 0 0 1-.857-1.215A9.637 9.637 0 0 1 5.78 8.75zm4.44-1.5H5.78a9.637 9.637 0 0 1 1.363-4.177c.306-.51.612-.919.857-1.215.245.296.55.705.857 1.215A9.638 9.638 0 0 1 10.22 7.25zm1.504 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.506 6.506 0 0 0 4.666-5.5h-2.733zm2.733-1.5h-2.733c-.144-2.074-.866-3.756-1.58-4.948a11.738 11.738 0 0 0-.353-.552 6.506 6.506 0 0 1 4.666 5.5zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z"/></svg>
				<div class="text">English</div>
				<div class="menu language-menu">
					
						<a lang="en-US" data-url="/git/?lang=en-US" class="item active selected">English</a>
					
				</div>
			</div>
			<a href="/git/assets/js/licenses.txt">Licenses</a>
			<a href="/git/api/swagger">API</a>
			<a target="_blank" rel="noopener noreferrer" href="https://gitea.io">Website</a>
			
			<span class="version">Go1.18.3</span>
		</div>
	</div>
</footer>




	<script src="/git/assets/js/index.js?v=b7cd2ee017fdf4f254d153314f812efd"></script>

</body>
</html>

