'use strict';

app.factory('usersData', function () {
    var getUserData = function () {
        var userData = {
            userId: localStorage.getItem('userId')
        };

        return userData;
    };

    return{
        getUserData: getUserData
    }
});