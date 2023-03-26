let ClubRoom = { lat: 35.075742, lng: 129.091075 };

window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: ClubRoom,
      zoom: 20,
    });
  };
  var marker = new google.maps.Marker({position: ClubRoom});