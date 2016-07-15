'use strict';

app.controller('DocumentsController', function ($scope, requester) {
    $scope.uploadBtnClick = function () {
        $('#upload-input').click();
        $('.progress-bar').text('0%');
        $('.progress-bar').width('0%');
    };

    $scope.uploadInputChange = function (element) {
        var file = element.files[0];
        // var reader = new FileReader();
        // var dataToSend;
        // reader.onload = function() {
        //     var fileResult = reader.result;
        //     dataToSend = {
        //         file: fileResult
        //     }
        // };
        //
        // reader.readAsBinaryString(file);
        var fd = new FormData();
        fd.append('file', file);

        requester.post('http://localhost:3000/documents', null, fd).then(function () {
            console.log('dsfdsfdsf');
        });

        // $.ajax({
        //     url: '/upload',
        //     type: 'POST',
        //     data: dataToSend,
        //     processData: false,
        //     contentType: false,
        //     success: function (data) {
        //         console.log('upload successful!\n' + data);
        //     },
        //     xhr: function () {
        //         // create an XMLHttpRequest
        //         var xhr = new XMLHttpRequest();
        //
        //         // listen to the 'progress' event
        //         xhr.upload.addEventListener('progress', function (evt) {
        //
        //             if (evt.lengthComputable) {
        //                 // calculate the percentage of upload completed
        //                 var percentComplete = evt.loaded / evt.total;
        //                 percentComplete = parseInt(percentComplete * 100);
        //
        //                 // update the Bootstrap progress bar with the new percentage
        //                 $('.progress-bar').text(percentComplete + '%');
        //                 $('.progress-bar').width(percentComplete + '%');
        //
        //                 // once the upload reaches 100%, set the progress bar text to done
        //                 if (percentComplete === 100) {
        //                     $('.progress-bar').html('Done');
        //                 }
        //
        //             }
        //
        //         }, false);
        //
        //         return xhr;
        //     }
        // });
    };
});