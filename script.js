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
        }
    });
    $( "#sortable" ).disableSelection();
} );

function xPanelClick(){
    document.getElementById('overlay').style.visibility = 'hidden';
}

function editPanelsClick(){
    document.getElementById('overlay').style.visibility = 'visible';
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