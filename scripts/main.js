let myChart = document.getElementById('myChart').getContext('2d');

//Global Opts
Chart.defaults.global.defaultFontFamily ='Lato';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor ='#777';

let tennPopChart = new Chart(myChart, {
    type: 'horizontalBar',
    data: {
        labels:['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'],
        datasets: [{
            label: 'Population',
            data: [
                660388,
                652717,
                186239,
                177571,
                150287
            ],
            // backgroundColor: 'green'
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth:2,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Largest Cities in Tennessee',
            fontSize: 25,
            fontStyle:'italic'
        },
        legend:{
            position: 'right',
            labels:{
                fontColor: '#000'
            }
        },
        layout:{
            padding:{
                left: 50,
                right:0,
                bottom:0,
                top: 0
            }
        },
        tooltips:{
            enabled: true
        }
    }
});