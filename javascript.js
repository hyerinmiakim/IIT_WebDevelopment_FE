 <script>
      function initMap() {
        var school = {lat: 37.375140, lng: 126.632782};
        var beerfestival = {lat: 37.405669, lng: 126.635583};
        var songdo = {lat: 37.392605, lng:126.638687};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: songdo
        });
        var marker1 = new google.maps.Marker({
          position: school,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: beerfestival,
          map: map
        });
        var marker3 = new google.maps.Marker({
          position: songdo,
          map: map
        });
      }
    </script>
