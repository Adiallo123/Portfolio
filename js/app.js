//function thème
function menuMobile() {
    const btn= document.querySelector('.burger');
    const header=document.querySelector('.header');
    const links= document.querySelectorAll('.navbar a');

    // cette fonctionnalité permet de créer une classe shower-nav dans header et de nous a afficher les élément du navbar lorsqu'on clique sur le bouton
    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });

// cette fonctionnalité permet de nous redirisé vers le l'élement clické sur le menu et de fermer par la suite
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    })
}
// appelle de la fonction 
menuMobile();

//portfolio

function tabsFilters(){
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    // la fonction qui permet de desactiver les autres projets
    const resetActiveLinks= () =>{
        tabs.forEach(elem =>{
            elem.classList.remove('active')
        })
    }

    const showProjets = (elem) => {
        console.log(elem);
        projets.forEach(projet => {

            let filter = projet.getAttribute('data-category');

            if(elem == 'all')
            {
                projet.parentNode.classList.remove('hide');
                return
            }
            // cette condidtion ne sera pas pris en compte
            if(filter !== elem)
            {
                projet.parentNode.classList.add('hide');
            }else{
                projet.parentNode.classList.remove('hide');
            }

            //systaxe plus moderne
           // filter !== elem ? projet.parentNode.classList.add('hide'):projet.parentNode.classList.remove('hide') ;


            //console.log(projet);
        });
    }
     tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            //console.log(filter);
            showProjets(filter);
            resetActiveLinks();
            elem.classList.add('active');
        });
     })

}
function showProjetDetails() {
    const links = document.querySelectorAll('.card__link');
    const models = document.querySelectorAll('.modial');

    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=$(elem.dataset.id)]`).classList.add('show');
        });
    })
}

tabsFilters();

//les effets

const observerIntersectionAnimation = () =>{
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((sections, index) =>{
        if (index === 0) return;
        sections.style.opacity="0";
        sections.style.transition = "all 1.6s";
    });   

    skills.forEach((elem, index) =>{
        elem.style.width="0";
        elem.style.transition = "all 1.6s";
    });  

    let sectionObserver = new IntersectionObserver(function (entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let elem = entry.target;
                elem.style.opacity = 1;
            }
        });
    });
    sections.forEach(section => {
        sectionObserver.observe(section)
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });
    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}
observerIntersectionAnimation();





