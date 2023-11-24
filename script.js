function shortcutsClick() {
    var newHtml = '<p style="margin:0; font-size: larger; font-weight:300; color: #b2b2b2;">You have no shortcuts.</p>';
    var container = document.getElementById('shortcutClickDiv');
    var shortcutArrow = document.getElementById('shortcutArrow')

    if (container.innerHTML === newHtml) 
    {
        container.innerHTML = '';
        shortcutArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        shortcutArrow.style.transform = 'rotate(180deg)';
        shortcutArrow.style.color = '#FFFFFF';
    } 

    else 
    {
        container.innerHTML = newHtml;
        shortcutArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        shortcutArrow.style.transform = 'rotate(90deg)';
        shortcutArrow.style.color = '#0866FF';
    }
}

function exploreClick()
{
    var container = document.getElementById('exploreClickDiv');
    var exploreArrow = document.getElementById('exploreArrow')

    if (container.style.visibility == 'hidden') 
    {
        container.style.visibility = 'visible'
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
    } 

    else 
    {
        container.style.visibility = 'hidden'
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
    }
}

// Function to show the floating panel
function showFloatingPanel() {
    const floatingPanel = document.getElementById('floatingPanel');
    floatingPanel.classList.add('show');
    
    var audiencePage = document.querySelector('.audience-page');
    var mainPage = document.querySelector('.main-page');

    audiencePage.style.display = 'none';
    mainPage.style.display = 'block';
}

// Function to hide the floating panel
function hideFloatingPanel() {
    const floatingPanel = document.getElementById('floatingPanel');
    floatingPanel.classList.remove('show');
}
    
// Function to handle audience selection
document.querySelectorAll('.audience-panel a').forEach(audienceOption => {
    audienceOption.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedAudience = this.getAttribute('data-audience');
        document.querySelector('.dropdown-btn').textContent = `${selectedAudience}` + '  ';
        
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-play', 'fa-rotate-90');
        icon.style.color = '#ffffff';
  
        document.querySelector('.dropdown-btn').appendChild(icon);
        document.querySelector('.audience-page').style.display = 'none';
        document.querySelector('.main-page').style.display = 'block';
    });
});

// Function to handle audience button click
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var audiencePage = document.querySelector('.audience-page');
    var mainPage = document.querySelector('.main-page');

    audiencePage.style.display = 'block';
    mainPage.style.display = 'none';
});

// Functionality for back button
document.querySelector('.back-btn').addEventListener('click', function() {
    var audiencePage = document.querySelector('.audience-page');
    var mainPage = document.querySelector('.main-page');

    audiencePage.style.display = 'none';
    mainPage.style.display = 'block';
});
