function openCatalog(evt, catalogName) {
    console.log('event', evt)
    console.log('catalogName', catalogName)
    var i, tabcontent, tablinks;

    const tabLinks = document.querySelectorAll('.tablinks');
    const tabContentItems = document.querySelectorAll('.tabcontent');
    const tabContent = document.getElementById(catalogName);
    console.log('tabContent',tabContent);



    // tabLinksArray.forEach(element => {
    //     element.classList.remove('active');
    // })

    for (let x = 0; x < tabLinks.length; x++) {
        tabLinks[x].classList.remove('active')
        tabContentItems[x].classList.remove('visible')
    }

    const clickedTabLink = evt.target;

    clickedTabLink.classList.add('active');
    tabContent.classList.add('visible')

    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }

    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active","");
    // }

    // document.getElementById(catalogName).style.display = "flex";
    // evt.currentTarget.className += "active";
}
