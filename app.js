    function odayaKatıl() {
        var kadi = $("#kadi").val();
        if (kadi != "") {
            var userKey = firebase.database().ref("users/").push().key; 
            firebase.database().ref("users/" + userKey).set({
                username: kadi,
                kulid: userKey
            });
            $("#giris").hide();
            $("#header").show();
        }
    }

    function play() {

        var url = document.getElementById('url').value;
        url = url.replace("https://youtu.be/","https://www.youtube.com/embed/");
        console.log(url)
        url = url.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
        console.log(url)
        var iframe = document.getElementById('iframe');
        var src = document.createAttribute("src");
        src.value = url;
        iframe.setAttributeNode(src);
    }
