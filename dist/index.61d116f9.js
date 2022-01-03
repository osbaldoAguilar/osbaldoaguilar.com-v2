const tabs = document.querySelector('.tabs');
const tabBtns = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
function handleTabClick(e) {
    // hide all tabPanels
    tabPanels.forEach((panel)=>{
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabBtns.forEach((tab)=>{
        tab.setAttribute('aria-selected', false);
    });
    // find the assciated tabPanel and show it!;
    const { id  } = e.currentTarget;
    console.log(tabPanels);
    const tabPanel = tabPanels.find((panel)=>panel.getAttribute('aria-labelledby') === id
    );
    tabPanel.hidden = false;
}
tabBtns.forEach((btn)=>btn.addEventListener('click', handleTabClick)
);

//# sourceMappingURL=index.61d116f9.js.map
