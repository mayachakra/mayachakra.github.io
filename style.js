/*
function opentab(tabcontent){
var tabcontainer = document.querySelectorAll('.tab-contents');
   tabcontainer.forEach(function (element){
    element.style.display = 'none';
   });

   var selected = document.getElementById(tabcontent);
   if(selected){
       selected.style.display = 'block';
   }
}
*/
function toggleCard(content){
    content.classList.toggle('flipped');
}

function submitForm(){

}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
            
        }  
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");                    
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

document.querySelectorAll('nav a').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});


/*
FIX THE LOCATIONS OF ALL THE CODE
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }  
    for(tablink of tabcontents){
        tablink.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-link");
}
*/