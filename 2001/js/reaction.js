/*<![CDATA[*/
  var fbConfig = {
    databaseURL: "https://reaction-b8c02-default-rtdb.firebaseio.com/"
  };

  var ls = (e, a) => {
    let t = document.createElement("script");
    t.readyState ? t.onreadystatechange = (() => {
      "loaded" != t.readyState && "complete" != t.readyState || (t.onreadystatechange = null, a())
    }) : t.onload = (() => {
      a()
    }), t.src = e, document.getElementsByTagName("body")[0].appendChild(t)
  };


  ls("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js", function () {
    ls("https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js", () => {
      function reaction(_button, _action) {
        var count, btn = document['getElementsByClassName'](_button)[0x0],
            id = btn.getAttribute('data-reaction-id');
        if (null !== localStorage.getItem(_action)) {
          var j = JSON.parse(localStorage[_action]);
          for (i = 0x0; i < j.length; i++) j[i] === id && (btn.classList.add(_action), btn.classList.add('active'))
        }
        firebase.database().ref(_action + '/' + id + '/total')['on']('value', function (e) {
          e.val() < 0x0 && firebase['database']()['ref'](_action + '/' + id + '/total')['set'](Math.abs(e.val())), count = Math.abs(e.val()) || 0x0, btn.querySelector('.reaction-count').innerText = count > 0 ? `( ${count} )` : ''
        }), btn['addEventListener']('click', function (t) {
          this.classList.add('loading'), setTimeout(() => {if (t.preventDefault(), this.classList.toggle(_action), this.classList.toggle('active'), this.classList.contains(_action)) {
            if (null === localStorage['getItem'](_action)) localStorage.setItem(_action, JSON.stringify([id]));
            else {
              var all = JSON['parse'](localStorage[_action]);
              all.filter(function (e) {
                return e == id
              }).length || (all.push(id), localStorage.setItem(_action, JSON.stringify(all)))
            }
            count++
          } else {
            for (var json = JSON.parse(localStorage[_action]), i = 0x0; i < json.length; i++) json[i] === id && json.splice(i, 0x1);
            localStorage['setItem'](_action, JSON.stringify(json)), count--
          }
                                                           firebase.database().ref(_action + '/' + id + '/total').set(count), this.classList.remove('loading')}, 1000)
        })

      }

      firebase.initializeApp(fbConfig),
        reaction('like-action', 'Thích'),
        reaction('love-action', 'Yêu Thích'),
        reaction('haha-action', 'Haha'),
        reaction('wow-action', 'Wow'),
        reaction('sad-action', 'Buồn'),
        reaction('angry-action', 'Phẫn nộ');
    });
  });
/*]]>*
