const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


export const clubsList = [
    {
        name: 'Arsenal',
        logo: 't3@x2.png',
        played: 6,
        goal_difference: 7,
        points: 15,
        movement: 'none'
        // short_name: 'Arsenal'
    },
    {
        name: 'Manchester City',
        logo: 't43@x2.png',
        played: 6,
        goal_difference: 14,
        points: 14,
        short_name: 'Man City',
        movement: 'none'
    },
    {
        name: 'Tottenham Hotspur',
        logo: 't6@x2.png',
        played: 6,
        goal_difference: 7,
        points: 14,
        short_name: 'Spurs',
        movement: 'none'


    },
    {
        name: 'Brighton & Hove',
        logo: 't36@x2.png',
        played: 6,
        goal_difference: 6,
        points: 13,
        short_name: 'Brighton',
        movement: 'none'


    },
    {
        name: 'Manchester United',
        logo: 't1@x2.png',
        played: 6,
        goal_difference: 0,
        points: 12,
        short_name: 'Man Utd',
        movement: 'none'


    },
    {
        name: 'Chelsea',
        logo: 't8@x2.png',
        played: 6,
        goal_difference: -1,
        points: 10,
        movement: 'up'

    },
    {
        name: 'Liverpool',
        logo: 't14@x2.png',
        played: 6,
        goal_difference: 9,
        points: 9,
        movement: 'down'

    },
    {
        name: 'Brentford',
        logo: 't94@x2.png',
        played: 6,
        goal_difference: 6,
        points: 9,
        movement: 'up'

    },
    {
        name: 'Leeds United',
        logo: 't2@x2.png',
        played: 6,
        goal_difference: 0,
        points: 8,
        short_name: 'Leeds',
        movement: 'down'

    },
    {
        name: 'Fulham',
        logo: 't54@x2.png',
        played: 6,
        goal_difference: 0,
        points: 8,
        movement: 'down'

    },
    {
        name: 'Newcastle',
        logo: 't4@x2.png',
        played: 6,
        goal_difference: 1,
        points: 7,
        movement: 'up'

    },
    {
        name: 'Southampton',
        logo: 't20@x2.png',
        played: 6,
        goal_difference: -3,
        points: 7,
        movement: 'down'

    },
    {
        name: 'AFC Bournemouth',
        logo: 't91@x2.png',
        played: 6,
        goal_difference: -13,
        points: 7,
        short_name: "Bournemouth",
        movement: 'up'

    },
    {
        name: 'Wolves',
        logo: 't39@x2.png',
        played: 6,
        goal_difference: -1,
        points: 6,
        movement: 'up'

    },
    {
        name: 'Crystal Palace',
        logo: 't31@x2.png',
        played: 6,
        goal_difference: -2,
        points: 6,
        movement: 'down'

    },
    {
        name: 'Everton',
        logo: 't11@x2.png',
        played: 6,
        goal_difference: -2,
        points: 4,
        movement: 'up'
    },
    {
        name: 'Aston Villa',
        logo: 't7@x2.png',
        played: 6,
        goal_difference: -5,
        points: 4,
        movement: 'up'
    },
    {
        name: 'West Ham',
        logo: 't21@x2.png',
        played: 6,
        goal_difference: -5,
        points: 4,
        movement: 'down'
    },
    {
        name: 'Nottingham Forest',
        logo: 't17@x2.png',
        played: 6,
        goal_difference: -10,
        points: 4,
        short_name: "Nott'm Forest",
        movement: 'down'
    },
    {
        name: 'Leicester City',
        logo: 't13@x2.png',
        played: 6,
        goal_difference: -8,
        points: 1,
        movement: 'none'
    },


]
function renderClubSite() {
    const ClubSiteElement = document.querySelector(".club-site-content");
    const html = clubsList.map((club, index) => {
        return `
        <li>
            <a href="#">
                <img src="./assets/images/logo_team/${club.logo}" alt="" class="club-logo"/>
            </a>
        </li>
        `
    })
    const htmls = html.join('');
    ClubSiteElement.innerHTML = htmls;

}
renderClubSite();

function handleClickSubNavItem() {
    const subNavItems = $$('.subNav-item');
    let lastIndex;
    let currentIndex;

    let len = subNavItems.length;
    for (let i = 0; i < len; i++) {
        if (subNavItems[i].classList.contains('active')) {
            lastIndex = i;
            break;
        }
    }
    subNavItems.forEach((item, index) => {
        item.onclick = (e) => {
            currentIndex = index;
            subNavItems[lastIndex].classList.remove("active");
            subNavItems[currentIndex].classList.add("active");
            lastIndex = currentIndex;
        }
    });


}
handleClickSubNavItem();

function handleFixedNavBar() {
    const navbarElement = $('#NavigationBar');
    const ClubSiteWrapperElement = $(".club-site-wrapper");
    window.onscroll = () => {
        let rect = ClubSiteWrapperElement.getBoundingClientRect();
        if (rect.top < -50) {
            navbarElement.classList.add('fixed-top')
        }
        else if (rect.y >= -50) {
            navbarElement.classList.remove('fixed-top')
        }
    }
}
handleFixedNavBar();


// Header Dropdown Nav item when click
function handleDisplayDropdownMenu() {
    const navItemsList = $$('.navigation-bar .navbar-nav .nav-item[role="menu"]');
    const DropdownElements = $$('.navigation-bar .navbar-nav .nav-dropdown');
    // let lastIndex;
    // let checkToggle = false;
    navItemsList.forEach((item, index) => {

        // -------------CLICK TO SHOW -------- 
        // item.onclick = () => {
        //     if(lastIndex == index) {
        //         checkToggle = true;
        //         DropdownElements[lastIndex].classList.toggle('active');
        //     }
        //     if(checkToggle == false) {
        //         DropdownElements[index].classList.add('active');
        //     }
        //     if(lastIndex >= 0 && checkToggle == false) {
        //         DropdownElements[lastIndex].classList.remove('active');

        //     }
        //     lastIndex = index;
        //     checkToggle = false;
        // }

        // --------------- HOVER TO SHOW -------------
        item.onmouseover = () => {
            DropdownElements[index].classList.add('active');
        }
        item.onmouseleave = () => {
            DropdownElements[index].classList.remove('active');
        }
    })
}
handleDisplayDropdownMenu();


// header collapsable
function handleHeaderCollapse() {
    const menuTitleList = $$(".navbar-collapse .menu-title .nav-item");
    const menuOptionListItem = $$('.nav-item-option');
    const navbarCollapse = $(".navbar-collapse");
    menuTitleList[0].classList.add('active');
    menuOptionListItem[0].classList.add('active');

    const menuBtn = $('.nav-options .menu-btn');
    const closeBtn = $('.nav-options .close-btn');

    let isShowNavCollapse = false;
    let currentIndex = 0;

    menuTitleList.forEach((element, index) => {
        element.onclick = () => {
            if (currentIndex !== index) {
                menuTitleList[currentIndex].classList.remove("active");
                element.classList.add("active");

                menuOptionListItem[currentIndex].classList.remove("active");
                menuOptionListItem[index].classList.add("active");
                currentIndex = index;
            }
        }
    })

    // click menu item ->> hide menu
    menuOptionListItem.forEach((element, index) => {
        element.onclick = () => {
            isShowNavCollapse = false;
            navbarCollapse.classList.remove('active');
            closeBtn.classList.remove('active');
            menuBtn.classList.add('active');
        }
    })

    // handle menu btn
    menuBtn.onclick = () => {
        if (isShowNavCollapse === false) {
            navbarCollapse.classList.add('active');
            closeBtn.classList.add('active');
            menuBtn.classList.remove('active');
            isShowNavCollapse = true;
        }
    }
    closeBtn.onclick = () => {
        if (isShowNavCollapse === true) {
            navbarCollapse.classList.remove('active');
            closeBtn.classList.remove('active');
            menuBtn.classList.add('active');
            isShowNavCollapse = false;
        }
    }

    // add title for item in menu
    const menuCollapseItems = $$('.nav-item-option li a');
    function addTitleForItems() {
        menuCollapseItems.forEach((item, index) => {
            item.setAttribute('title', 'menu-item');
            item.onclick = (e) => {
            }
        })

    }
    addTitleForItems();

    // handle click menu collapse option section
    // click vào item trong menu ở collapse menu thì sẽ active item ở sub nav
    const menuOptions = $$('.nav-item-option li');
    function handleClickOption() {

        let currentActiveIndex = 0;
        let lenSubNavItem;
        // add title for item in subNavBar
        const subNavLinkItems = $$('.subNav-item a');
        const subNavItems = $$('.subNav-item'); // thẻ li ở trong subNav

        function addTitleForItems() {
            lenSubNavItem = subNavLinkItems.length;
            subNavLinkItems.forEach((item, index) => {
                item.setAttribute('title', `${item.innerText.toLowerCase()}`);
            })
        }
        addTitleForItems();

        menuOptions.forEach((item, index) => {
            item.onclick = () => {
                let titleOption = menuCollapseItems[index].innerText.toLowerCase();
                for (let i = 0; i < lenSubNavItem; i++) {
                    if (subNavLinkItems[i].getAttribute("title") === titleOption) {
                        subNavItems[currentActiveIndex].classList.remove('active');
                        subNavItems[i].classList.add('active');
                        currentActiveIndex = i;
                        break;
                    }
                }
            }
        })
    }
    handleClickOption();
}
handleHeaderCollapse();