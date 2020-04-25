'use strict';

const webpageUrl = 'https://hackvirus.sk/'
const webpageTitle = 'hackvirus.sk'
const LOGO_WIDTH = 320
const LOGO_HEIGHT = 45
const LOGO_SCALE = 0.5

function App () {
  const [name, setName] = React.useState('')
  const [position, setPosition] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    const signature = document.getElementById('signature')
    const html = document.getElementById('html')

    if (!signature || !html) {
      return
    }

    console.log(signature.innerHTML)
    html.innerText = signature.innerHTML
  }, [
    name,
    position,
    phoneNumber,
    email,
  ])

  const onNameChange = React.useCallback((event) => setName(event.target.value))
  const onPositionChange = React.useCallback((event) => setPosition(event.target.value))
  const onPhoneNumberChange = React.useCallback((event) => setPhoneNumber(event.target.value))
  const onEmailChange = React.useCallback((event) => setEmail(event.target.value))

  const mailto = name
    ? `%22${ name.replace(' ', "%20") }%22%3c${ email }%3e`
    : email

  const phoneClean = phoneNumber
    ? phoneNumber.replace(/\s+/g, '')
    : undefined

  return (
    <div className="panels">
      <div className="panel panel-secondary">
        <form className="panel_content">
          <div className="field">
            <label>Meno: </label>
            <input
              name="name"
              placeholder="Zadaj svoje celé meno"
              value={name}
              onChange={onNameChange}
            />
          </div>

          <div className="field">
            <label>Pozícia: </label>
            <input
              name="position"
              placeholder="Zadaj svoju pozíciu, napr. koordinátor"
              value={position}
              onChange={onPositionChange}
            />
          </div>

          <div className="field">
            <label>Tel. číslo: </label>
            <input
              name="phone-number"
              placeholder="Zadaj telefónne číslo"
              value={phoneNumber}
              onChange={onPhoneNumberChange}
            />
          </div>

          <div className="field">
            <label>email: </label>
            <input
              name="email"
              placeholder="Zadaj svoj@email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
        </form>
      </div>
      <div className="panel">
        <p class="hint">
          1. Zadaj svoje údaje do formulára, niektoré môžeš vynechať<br />
          2. Klikni dovnútra čiarkovanej plochy<br />
          3. Vyber všetko (Cmd + A / Ctr + A)<br />
          4. Skopíruj označený obsah (Cmd + C / Ctrl + C)<br />
          5. Vlož skopírovaný obsah do podpisu (<a
            target="_blank"
            href="https://support.office.com/en-us/article/Create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"
          >Outlook</a>, <a
            target="_blank"
            href="https://www.lifewire.com/use-signatures-in-windows-10-mail-4123784"
          >Win 10</a>, <a
            target="_blank"
            href="https://support.apple.com/en-gb/guide/mail/mail11943/mac"
          >Mac</a>)</p>
        <div className="select-here">
          <div id="signature" contentEditable={true} className="panel_content">
            <p>S pozdravom</p>
            <p style={{lineHeight: '1.5em' }}>
              {name}
              {position && <React.Fragment><br /><i style={{ color: '#777777' }}>{position}</i><br /></React.Fragment>}
              <span style={{ fontSize: '0.9em' }}>
                {email && <React.Fragment>
                  <a style={{color: '#777777', textDecoration: 'none' }} href={`mailto:${mailto}`}>{email}</a><br />
                </React.Fragment>}
                {phoneClean && <React.Fragment>
                  <a style={{color: '#777777', textDecoration: 'none' }} href={`tel:${phoneClean}`}>{phoneNumber}</a><br />
                </React.Fragment>}
              </span>
            </p>

            <table border="0" cellPadding="0" cellSpacing="0"><tbody><tr>
              <td><a
                style={{ verticalAlign: 'bottom' }}
                href={webpageUrl}
                ><img
                  style={{ verticalAlign: 'middle' }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAtBAMAAAAto6+pAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURVW0aEdwTFS0aFS0aFW0aFS0aFS0Z1W0Zw6VdLEAAAAIdFJOU/8ANOdnUMaOyV411gAABLxJREFUWMPtmUtz0zAQgDW165zlJvY1oQWuTgz0mkKg1wQIvSYUptcY2v5+pF09di3LdYceGKY6tLFsrT6tVvuwxXVdb+TQ9ruum/jdvK7rmfz79qWu9+5CVEJcDB66E6IPUAjxFIBLIebPgM+A/yfgarX6pwGfqj0DPgP+c4C/Xqjmjt8LbGSA73GAOVznbhjexr/Ya4c4Uf7hPJzCTTJjgKpDAybKf4n6B/aVAlpyY4nH1xX2zAhgIcRIyrWVNIHbxg8ehNjLexi0Ib5xKsQx4OEtNYLgja+xTxxRwLFmM0+r9tNOjW2EQyc727HpBRQM8BUOaToAPwgi0LRJRWeNAaItTt3ld2sQws7mAU+FSPsAzar2IWApqEBvdaZlFFA9m1HA4/BZmNq0OQFc9wPeuA0LAA9eoEv6xr5PG5IDLFqA+iYVoFlOGL8DPIC1RAGtRaUBIFkw2JvdD7qNDlANGVFAPXlOrhecd0QAd7D+KKDfhDZgIZhAaZdL1eoA1Y9jDXi3Ve0TbqL8uoV2VcEmapLsI3a994ATXE0P4DkOCgDVEHGL8rafbZJR+Um2GwKoppt7R30wRujVnmEGtQ8ddYFnMA6YzYIUDAEPuG7WJoL7fwuoTbPxgFM+tATAMU/xLOAaj1AccC/jgPs24Jj7RAcIavCABQccW8CkI9SZ/Y8CZjIG2BUsSzqAAIKgPsAkBlgaHa3tSWxHklQ+gQZz8Bwe8GS4Bg8mDNjgoIkTSQDnfYBDbfAU1NClwZdwjCMa/LndfrMu4sS6isKdqFlLSV2nGLwGsWx3ij87wLfoR9S2hBrM70koCQFpFCis8ZwC6RBA5wczojPnBzFDWdLYEGrQB/MkDghBB2zRijweBuijWuLTUB//z4PwH2iwpHEgCrhwszfWow4DJFEjlR2xuKGAI9mhQRJ2kocADZgFHQRYtLKnVqwbxQFRg7kYpEHcYnsmSzzVgwAJzMKrsKJJYmSLUYNkh/s06NONBP9lciigy6h9siDl62ueLHgraGtQO587XRy8jmhQFTBXNlmE5Vw4RQ4DxPLjbMfDB9QpV6hW7WbUE203U9gcdPSgo17afH3isub5IwAl8wCtGJJGHfUJvdkPWAqSEKVw2TwWMGdFiWno+W2oq3ioQw066X2xGLlMWpOAJc4eCyhFR0FeUED9P+vS4IJocNKbbqHTaHbGLGKAF3YtR60A3K/B7nSL2mDyUMKK05xbj9EFqDMzKA/zHc0hUERgg5g0W0Cw8LYGdZH0Y6XaJSpJH7YVto9Byu8dTxMFVFfJrRr9G5d6ZoRd4ilWlxfwXhHaJ3eKnYUvHvCDxCe1i6Y5CaOJjAKuicANr49Ss++00tPyg6KJRZKKRRJadqZB2elCdxoHLLi8KS/g0DCrSF1sy04Wi9dcgzkrYx2gL2AqX4J3ApIVLzivfhYBD0wLYeHOspkxX7H80vlmwaffS+GsvRPQV+XgiogJvXVHe8kTiODVB88HvzENwulzO9J6eWS3cCR7AJ2A7/xVClSmCDjlL7D4yyP3ra6o6zfw41J1QXuHDuveXDbkW11Z1+f+A92efav7QD+1QXYAwu7wygq/gVlP63oB0nDCW/6tbqK6/gDWeRkTTBpTnQAAAABJRU5ErkJggg=="
                  height={LOGO_HEIGHT * LOGO_SCALE}
                  width={LOGO_WIDTH * LOGO_SCALE}
                  alt={webpageTitle}
                  /></a></td>
            </tr></tbody></table>
          </div>
        </div>
        <hr />
        <p class="hint">PS: Podpisy pre Gmail cez web majú bug a nefungujú, skúste prosím používať Gmail s inou appkou, kde je možné podpis zadať priamo nižšie uvedené HTML ako napr.:</p>
        <ul class="hint">
          <li>
            <a
              target="_blank"
              href="https://sparkmailapp.com/"
            >Spark pre iOS, Android, Mac</a>; návod na <a
              target="_blank"
              href="https://sparkmailapp.com/how-to-add-signature-ios"
            >nastavenie podpisu</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.thunderbird.net/"
            >Thunderbird pre Mac, Win a Linux</a>; návod na <a
              target="_blank"
              href="https://support.mozilla.org/en-US/kb/signatures#w_html-signatures"
            >nastavenie podpisu</a>
          </li>
        </ul>
        <textarea id="html" class="select-here"></textarea>
      </div>
    </div>
  )
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);