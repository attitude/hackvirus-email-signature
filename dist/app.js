'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var webpageUrl = 'https://hackvirus.sk/';
var webpageTitle = 'hackvirus.sk';
var LOGO_WIDTH = 320;
var LOGO_HEIGHT = 45;
var LOGO_SCALE = 0.5;

function App() {
  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      position = _React$useState4[0],
      setPosition = _React$useState4[1];

  var _React$useState5 = React.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      phoneNumber = _React$useState6[0],
      setPhoneNumber = _React$useState6[1];

  var _React$useState7 = React.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      email = _React$useState8[0],
      setEmail = _React$useState8[1];

  React.useEffect(function () {
    var signature = document.getElementById('signature');
    var html = document.getElementById('html');

    if (!signature || !html) {
      return;
    }

    console.log(signature.innerHTML);
    html.innerText = signature.innerHTML;
  }, [name, position, phoneNumber, email]);

  var onNameChange = React.useCallback(function (event) {
    return setName(event.target.value);
  });
  var onPositionChange = React.useCallback(function (event) {
    return setPosition(event.target.value);
  });
  var onPhoneNumberChange = React.useCallback(function (event) {
    return setPhoneNumber(event.target.value);
  });
  var onEmailChange = React.useCallback(function (event) {
    return setEmail(event.target.value);
  });

  var mailto = name ? '%22' + name.replace(' ', "%20") + '%22%3c' + email + '%3e' : email;

  var phoneClean = phoneNumber ? phoneNumber.replace(/\s+/g, '') : undefined;

  return React.createElement(
    'div',
    { className: 'panels' },
    React.createElement(
      'div',
      { className: 'panel panel-secondary' },
      React.createElement(
        'form',
        { className: 'panel_content' },
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'Meno: '
          ),
          React.createElement('input', {
            name: 'name',
            placeholder: 'Zadaj svoje cel\xE9 meno',
            value: name,
            onChange: onNameChange
          })
        ),
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'Poz\xEDcia: '
          ),
          React.createElement('input', {
            name: 'position',
            placeholder: 'Zadaj svoju poz\xEDciu, napr. koordin\xE1tor',
            value: position,
            onChange: onPositionChange
          })
        ),
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'Tel. \u010D\xEDslo: '
          ),
          React.createElement('input', {
            name: 'phone-number',
            placeholder: 'Zadaj telef\xF3nne \u010D\xEDslo',
            value: phoneNumber,
            onChange: onPhoneNumberChange
          })
        ),
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'email: '
          ),
          React.createElement('input', {
            name: 'email',
            placeholder: 'Zadaj svoj@email',
            value: email,
            onChange: onEmailChange
          })
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'panel' },
      React.createElement(
        'p',
        { 'class': 'hint' },
        '1. Zadaj svoje \xFAdaje do formul\xE1ra, niektor\xE9 m\xF4\u017Ee\u0161 vynecha\u0165',
        React.createElement('br', null),
        '2. Klikni dovn\xFAtra \u010Diarkovanej plochy',
        React.createElement('br', null),
        '3. Vyber v\u0161etko (Cmd + A / Ctr + A)',
        React.createElement('br', null),
        '4. Skop\xEDruj ozna\u010Den\xFD obsah (Cmd + C / Ctrl + C)',
        React.createElement('br', null),
        '5. Vlo\u017E skop\xEDrovan\xFD obsah do podpisu (',
        React.createElement(
          'a',
          {
            target: '_blank',
            href: 'https://support.office.com/en-us/article/Create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2'
          },
          'Outlook'
        ),
        ', ',
        React.createElement(
          'a',
          {
            target: '_blank',
            href: 'https://www.lifewire.com/use-signatures-in-windows-10-mail-4123784'
          },
          'Win 10'
        ),
        ', ',
        React.createElement(
          'a',
          {
            target: '_blank',
            href: 'https://support.apple.com/en-gb/guide/mail/mail11943/mac'
          },
          'Mac'
        ),
        ')'
      ),
      React.createElement(
        'div',
        { className: 'select-here' },
        React.createElement(
          'div',
          { id: 'signature', contentEditable: true, className: 'panel_content' },
          React.createElement(
            'p',
            null,
            'S pozdravom'
          ),
          React.createElement(
            'p',
            { style: { lineHeight: '1.5em' } },
            name,
            position && React.createElement(
              React.Fragment,
              null,
              React.createElement('br', null),
              React.createElement(
                'i',
                { style: { color: '#777777' } },
                position
              ),
              React.createElement('br', null)
            ),
            React.createElement(
              'span',
              { style: { fontSize: '0.9em' } },
              email && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'a',
                  { style: { color: '#777777', textDecoration: 'none' }, href: 'mailto:' + mailto },
                  email
                ),
                React.createElement('br', null)
              ),
              phoneClean && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'a',
                  { style: { color: '#777777', textDecoration: 'none' }, href: 'tel:' + phoneClean },
                  phoneNumber
                ),
                React.createElement('br', null)
              )
            )
          ),
          React.createElement(
            'table',
            { border: '0', cellPadding: '0', cellSpacing: '0' },
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'a',
                    {
                      style: { verticalAlign: 'bottom' },
                      href: webpageUrl
                    },
                    React.createElement('img', {
                      style: { verticalAlign: 'middle' },
                      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAtBAMAAAAto6+pAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURVW0aEdwTFS0aFS0aFW0aFS0aFS0Z1W0Zw6VdLEAAAAIdFJOU/8ANOdnUMaOyV411gAABLxJREFUWMPtmUtz0zAQgDW165zlJvY1oQWuTgz0mkKg1wQIvSYUptcY2v5+pF09di3LdYceGKY6tLFsrT6tVvuwxXVdb+TQ9ruum/jdvK7rmfz79qWu9+5CVEJcDB66E6IPUAjxFIBLIebPgM+A/yfgarX6pwGfqj0DPgP+c4C/Xqjmjt8LbGSA73GAOVznbhjexr/Ya4c4Uf7hPJzCTTJjgKpDAybKf4n6B/aVAlpyY4nH1xX2zAhgIcRIyrWVNIHbxg8ehNjLexi0Ib5xKsQx4OEtNYLgja+xTxxRwLFmM0+r9tNOjW2EQyc727HpBRQM8BUOaToAPwgi0LRJRWeNAaItTt3ld2sQws7mAU+FSPsAzar2IWApqEBvdaZlFFA9m1HA4/BZmNq0OQFc9wPeuA0LAA9eoEv6xr5PG5IDLFqA+iYVoFlOGL8DPIC1RAGtRaUBIFkw2JvdD7qNDlANGVFAPXlOrhecd0QAd7D+KKDfhDZgIZhAaZdL1eoA1Y9jDXi3Ve0TbqL8uoV2VcEmapLsI3a994ATXE0P4DkOCgDVEHGL8rafbZJR+Um2GwKoppt7R30wRujVnmEGtQ8ddYFnMA6YzYIUDAEPuG7WJoL7fwuoTbPxgFM+tATAMU/xLOAaj1AccC/jgPs24Jj7RAcIavCABQccW8CkI9SZ/Y8CZjIG2BUsSzqAAIKgPsAkBlgaHa3tSWxHklQ+gQZz8Bwe8GS4Bg8mDNjgoIkTSQDnfYBDbfAU1NClwZdwjCMa/LndfrMu4sS6isKdqFlLSV2nGLwGsWx3ij87wLfoR9S2hBrM70koCQFpFCis8ZwC6RBA5wczojPnBzFDWdLYEGrQB/MkDghBB2zRijweBuijWuLTUB//z4PwH2iwpHEgCrhwszfWow4DJFEjlR2xuKGAI9mhQRJ2kocADZgFHQRYtLKnVqwbxQFRg7kYpEHcYnsmSzzVgwAJzMKrsKJJYmSLUYNkh/s06NONBP9lciigy6h9siDl62ueLHgraGtQO587XRy8jmhQFTBXNlmE5Vw4RQ4DxPLjbMfDB9QpV6hW7WbUE203U9gcdPSgo17afH3isub5IwAl8wCtGJJGHfUJvdkPWAqSEKVw2TwWMGdFiWno+W2oq3ioQw066X2xGLlMWpOAJc4eCyhFR0FeUED9P+vS4IJocNKbbqHTaHbGLGKAF3YtR60A3K/B7nSL2mDyUMKK05xbj9EFqDMzKA/zHc0hUERgg5g0W0Cw8LYGdZH0Y6XaJSpJH7YVto9Byu8dTxMFVFfJrRr9G5d6ZoRd4ilWlxfwXhHaJ3eKnYUvHvCDxCe1i6Y5CaOJjAKuicANr49Ss++00tPyg6KJRZKKRRJadqZB2elCdxoHLLi8KS/g0DCrSF1sy04Wi9dcgzkrYx2gL2AqX4J3ApIVLzivfhYBD0wLYeHOspkxX7H80vlmwaffS+GsvRPQV+XgiogJvXVHe8kTiODVB88HvzENwulzO9J6eWS3cCR7AJ2A7/xVClSmCDjlL7D4yyP3ra6o6zfw41J1QXuHDuveXDbkW11Z1+f+A92efav7QD+1QXYAwu7wygq/gVlP63oB0nDCW/6tbqK6/gDWeRkTTBpTnQAAAABJRU5ErkJggg==',
                      height: LOGO_HEIGHT * LOGO_SCALE,
                      width: LOGO_WIDTH * LOGO_SCALE,
                      alt: webpageTitle
                    })
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement('hr', null),
      React.createElement(
        'p',
        { 'class': 'hint' },
        'PS: Podpisy pre Gmail cez web maj\xFA bug a nefunguj\xFA, sk\xFAste pros\xEDm pou\u017E\xEDva\u0165 Gmail s inou appkou, kde je mo\u017En\xE9 podpis zada\u0165 priamo ni\u017E\u0161ie uveden\xE9 HTML ako napr.:'
      ),
      React.createElement(
        'ul',
        { 'class': 'hint' },
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            {
              target: '_blank',
              href: 'https://sparkmailapp.com/'
            },
            'Spark pre iOS, Android, Mac'
          ),
          '; n\xE1vod na ',
          React.createElement(
            'a',
            {
              target: '_blank',
              href: 'https://sparkmailapp.com/how-to-add-signature-ios'
            },
            'nastavenie podpisu'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            {
              target: '_blank',
              href: 'https://www.thunderbird.net/'
            },
            'Thunderbird pre Mac, Win a Linux'
          ),
          '; n\xE1vod na ',
          React.createElement(
            'a',
            {
              target: '_blank',
              href: 'https://support.mozilla.org/en-US/kb/signatures#w_html-signatures'
            },
            'nastavenie podpisu'
          )
        )
      ),
      React.createElement('textarea', { id: 'html', 'class': 'select-here' })
    )
  );
}

var domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);