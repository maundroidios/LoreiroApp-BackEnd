recortes..

geolocalizacion




    <script type="text/javascript">
        app.initialize();

    var onSuccess = function(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    var pos = navigator.geolocation.getCurrentPosition(onSuccess, onError);
    function msg(mensaje){
        alert(mensaje);
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
       //var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 3<00 });
    };

    function onDeviceReady() {
        if (parseFloat(device.version) >= 7.0) {
            document.body.style.marginTop = "20px";
        }
    }
    </script>


    -------------------------------------------

    EJEMPLO DE Login

    --------------------------------------------

 <!DOCTYPE HTML> <html>

<head> <meta name=“viewport” content=“width=320; user-scalable=no” /> <meta http-equiv=“Content-type” content=“text/html; charset=utf-8”> <title>Auth Demo</title> <link rel=“stylesheet” href=“jquery.mobile/jquery.mobile-1.0rc2.css” type=“text/css” charset=“utf-8” /> <script type=“text/javascript” src=“js/jquery-1.7.min.js”></script> <script type=“text/javascript” charset=“utf-8” src=“js/phonegap-1.2.0.js”></script> <script src=“jquery.mobile/jquery.mobile-1.0rc2.js”></script> <script type=“text/javascript” charset=“utf-8” src=“js/main.js”></script> </head>

<body onload=“init()”>

<div id=“loginPage” data-role=“page”>


<div data-role="header">
    <h1>Auth Demo</h1>
</div>

<div data-role="content"> 

    <form id="loginForm">
    <div data-role="fieldcontain" class="ui-hide-label">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" value="" placeholder="Username" />
    </div>

    <div data-role="fieldcontain" class="ui-hide-label">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" value="" placeholder="Password" />
    </div>

    <input type="submit" value="Login" id="submitButton">
    </form>

</div>

<div data-role="footer">
    <h4>&copy; Camden Enterprises</h4>
</div>

</div>

</body> </html> 


    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------


    -----------------------------------------------



    -----------------------------------------------


        -----------------------------------------------




    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------


    -----------------------------------------------


    -----------------------------------------------




    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------


    -----------------------------------------------



    -----------------------------------------------




    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------


    -----------------------------------------------



    -----------------------------------------------




    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------



    -----------------------------------------------


    -----------------------------------------------
