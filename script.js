	<script>
			function setupTabs () {
				document.querySelectorAll(".tabs__button").forEach(button => {
					button.addEventListener("click" , () => {
						const sideBar = button.parentElement;
						const tabsContainer = sidebar.parentElement;
						const tabsNumber = button.dataset.forTab;
						const tabToActivate = tabsContainer.querySelector('.tabs__content[data-tab="${tabNumber}"]);
																		  
						console.log(sideBar);
						console.log(tabsContainer);
						console.log(tabsNumber);
						console.log(tabToActivate);

						sideBar.querySelectorAll(".tabs__button").forEach(button => {
							button.classList.remove("tabs__button--active");
						});

						tabContainer.querySelectorAll(".tabs__content").forEach(tab => {
							tab.classList.remove("tabs__content--active");
						});
						button.classList.add("tabs__button--active");
						tabToActivate.classList.add("tabs__content--active");
					});
				});
			}
			document.addEventListener("DOMcontentLoaded"), () => {
				setupTabs(); 

				document.querySelectorAll(".tabs").forEach(tabsContainer => {
					tabsContainer.querySelector(".tabs__sidebar .tabs__button").click():
				});
			});
		</script>
