var firstList = document.querySelector('#city_list_first');
var secondList = document.querySelector('#city_list_second');

var arrCitiesFirst = [
    'Dnepr',
    'Kharkov',
    'Kiev',
    'Zholtye Vody',
    "L'vov",
    'Zhitomer',
    'Uzhgorod',
    'Simbir'
];

var arrCitiesSecond = [];

var ulFirstList = document.createElement('ul');
var ulSecondList = document.createElement('ul');


function first(cities){

    for(var i = 0; i< cities.length; i++){
        var btn = document.createElement('input');
        btn.type = 'submit';
        btn.value = 'X';    
        var li = document.createElement('li');     
        li.innerHTML = cities[i];
        li.appendChild(btn);
        ulFirstList.appendChild(li);
        btn.onclick = function(){            
            if(event.target.parentElement.parentElement === ulSecondList){
                    var change = event.target.parentElement;
                    ulFirstList.appendChild(change);
            }else if(event.target.parentElement.parentElement === ulFirstList){
                    var change = event.target.parentElement;
                    ulSecondList.appendChild(change);
            }
        }
    }
    firstList.appendChild(ulFirstList);        
}

function second(){
    secondList.appendChild(ulSecondList);
}
first(arrCitiesFirst);
second();
