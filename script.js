var exploreVisible = false;

$( function() {
    $( "#sortable" ).sortable({
        handle: 'i',
        items: '> div:not(#nonSortable)',
        axis: 'y',
        containment: 'parent',
        helper: function(e, ui) {
            ui.children().each(function() {
                $(this).width($(this).width());
            });
            return ui.clone().addClass('drag-panels-helper');
        },
        update: function(event, ui) {
            var sortedIDs = $( "#sortable" ).sortable( "toArray" );
            sortedIDs.forEach(function(id, index) {
                var element = $('#side2').find('#' + id);
                $('#side2').append(element);
            });
        }
    });
    $( "#sortable" ).disableSelection();

    // Add change event listener to checkboxes
    $( "#sortable input[type='checkbox']" ).change(function() {
        var id = $(this).closest('div').attr('id');
        var isChecked = $(this).is(':checked');
        if (isChecked) {
            $('#side2').find('#' + id).show();
        } else {
            $('#side2').find('#' + id).hide();
        }
    });
} );



function xPanelClick(){
    document.getElementById('overlay').style.visibility = 'hidden';
}

function editPanelsClick(){
    document.getElementById('overlay').style.visibility = 'visible';
}

//add functionality for making background gray when clicked

function friendsArrowClick(){
    var container = document.getElementById('friendsContent');
    var exploreArrow = document.getElementById('friendsArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('friendstitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('friendstitle').style.color = "#ffffff"
    }
}

function groupArrowClick(){
    var container = document.getElementById('group-container');
    var exploreArrow = document.getElementById('groupArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('groupTitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('groupTitle').style.color = "#ffffff"
    }
}


function pageArrowClick(){
    var container = document.getElementById('page-container');
    var exploreArrow = document.getElementById('pageArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        container.style.flexDirection = "column"
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('pagestitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('pagestitle').style.color = "#fff"
    }
}

function birthdayArrowClick(){
    var container = document.getElementById('bday-container');
    var exploreArrow = document.getElementById('birthdayArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        container.style.flexDirection = "column"
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('bdaytitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('bdaytitle').style.color = "#fff"
    }
}

function eventsArrowClick(){
    var container = document.getElementById('event-container');
    var exploreArrow = document.getElementById('eventsArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        container.style.flexDirection = "column"
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('eventtitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('eventtitle').style.color = "#fff"
    }
}

function shortcutsClick() {
    var newHtml = '<p style="margin:0; font-size: larger; font-weight:300; color: #b2b2b2;">You have no shortcuts.</p>';
    var container = document.getElementById('shortcutClickDiv');
    var shortcutArrow = document.getElementById('shortcutArrow');

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

function exploreClick() {
    var container = document.getElementById('exploreClickDiv');
    var exploreArrow = document.getElementById('exploreArrow');

    if (container.style.visibility === 'hidden') {
        container.style.visibility = 'visible';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';

        exploreVisible = true;
    } else {
        container.style.visibility = 'hidden';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';

        exploreVisible = false;
    }
}

function discoveryHubClick()
{
    var container1 = document.getElementById('side1');
    var container2 = document.getElementById('side2');

    container1.style.visibility = 'hidden';
    document.getElementById('exploreClickDiv').style.visibility = 'hidden'

    container2.style.visibility = 'visible';
}

function linksClick()
{
    var container1 = document.getElementById('side1');
    var container2 = document.getElementById('side2');

    container1.style.visibility = 'visible';
    if (exploreVisible)
    {
        document.getElementById('exploreClickDiv').style.visibility = 'visible'
    }
    

    container2.style.visibility = 'hidden';
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
    document.getElementById('user-text').value = ""

    floatingPanel.classList.remove('show');
}
