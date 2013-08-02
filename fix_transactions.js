var btcElement = document.querySelector(".balance-btc > strong:first-of-type");
if (btcElement) {
  var btc = btcElement.innerText;
  var btcFigure = /[0-9]+\.[0-9]+/.exec(btc);

  var messageElement = document.querySelector(".notes > p:first-of-type");
  if (messageElement) {
    var message = messageElement.innerText;
    var messageFigure = /\$([0-9]+\.[0-9]+)/.exec(message)[1];

    if (btcFigure && messageFigure) {
      var usd_btc = Math.round(100.0 * ((messageFigure - 0.15) / 1.01) / btcFigure);
      var usd_btc_str = messageElement.innerText
        + " Estimated USD/BTC: $"
        + usd_btc / 100.0 + ".";
      messageElement.innerText = usd_btc_str;
    }
  }
}
