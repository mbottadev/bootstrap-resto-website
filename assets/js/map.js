function getDate(date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        return day + "-" + month + "-" + year + " at " + hour + "H" + minutes;
        };
    
            function checkIfOpen(date) {
                var closedDays= ['Monday']
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var day = date.getDay();
                if (closedDays.includes(days[day])) {
                    return 'closed'
                } else {
                    return 'open'
                }
            }
    
    function setDate() {
        elem = document.getElementById("date");
                const date = new Date();
                elem.innerText = "Today it's the " + getDate(date) + ", our restaurants are " + checkIfOpen(date);
                console.log(date)
    }
    
    window.onload = () => {
        setDate();
    };

function initMap() {
    let stockel = {lat: 50.8410059, lng:4.4635135};
    let merode = {lat: 50.8392854, lng:4.396738};
    let bourse = {lat: 50.8475812, lng:4.3472005};

    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: bourse});

    let marker1 = new google.maps.Marker({position: stockel, map: map});
    let marker2 = new google.maps.Marker({position: merode, map: map});
    let marker3 = new google.maps.Marker({position: bourse, map: map});
}
