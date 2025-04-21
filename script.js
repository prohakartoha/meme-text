function make_text() {
  const text = document.getElementById("textbox").value;
  if (document.getElementById("selectid").value == "1") {
  const plus_text = text + "❤️🤩 Слава " + text + " Слава Богу " + text + "❤️🙏 Да здравствует " + text + "❤️🤩🙏 " + text + " ЛУЧШАЯ😍🙏 ВСЕМ СОВЕТУЮ " + text + "🤩❤️ " + text + " имба❤️😍 " + text + " ТОПЧИК❤️🙏, А КТО НЕ СОГЛАСЕН, ТОТ " + text + "🙏❤️🤩😍";
  document.getElementById("result").innerText = plus_text;
  }
  if (document.getElementById("selectid").value == "2") {
    const plus_text = "ПОСМОТРИТЕ НА НЕГО " + text +  "🥵😳 ОН ТАКОЙ СЕКСИ😏🥴 " + text + "😳🥴 " + text + " У НЕГО ТАКАЯ ПОПА🥵😏 " + text + "🥴😳 ЕМУ ТОЛЬКО НА ТРАССЕ СТОЯТЬ🥵🥴 " + text + "😳😏";
    document.getElementById("result").innerText = plus_text;
  }
  if (document.getElementById("selectid").value == "3"){
    const plus_text = "Бууу, испугался?👽👻 это же я " + text + " 🤖👾👻 " + text + " страшный буу👽👻👾 " + text + " Представь ты просыпаешься и перед тобой " + text + "👾👻🤖👽";
    document.getElementById("result").innerText = plus_text;
  }
    if (document.getElementById("selectid").value == "4"){
    const plus_text = text + " ВОБЩЕ АФИГЕЛ?🤡💩 "+ "💩🤡 Вы посмотрите на " + text + "🤡💩 Такая тварь " + text + " 💩🤡 пошел нахуй "+ text + "🤡💩";
    document.getElementById("result").innerText = plus_text;
  }
  if (document.getElementById("selectid").value == "5"){
    const plus_text = text + "😂🤣 СМЕХУЯТИНА ЧИТСО " + text + "🤣😂 ЧИСТО НА ПРИКОЛЬЧИКЕ " + text + "🤣😂 ВОТ ЭТО ЮМОР " + text + "😂🤣 МОЛОДЕЖНО"; 
    document.getElementById("result").innerText = plus_text;
  }
  if (document.getElementById("selectid").value == "6"){
    const plus_text = "доксим " + text + "💻🖥️ "+ text + " Почти задоксил🧑‍💻🖥️ " + text + " еще чуть чуть и задоксим🧑‍💻💻" + text + " почти готово🖥️💻 " + text;
    document.getElementById("result").innerText = plus_text;
  }
}

function copy_in_buffer() {
  const copy_text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(copy_text);
}

function onas() {
  document.getElementById("infotext").innerText = "создавай смешной текс с помощью этого сайта. Тут есть разные стили и скоро будет много фишек. Сайт делал проха картоха. 2025г.";
}

function translatePage(targetLang) {
  const oldScript = document.querySelector('script[src*="translate.google.com"]');
  if (oldScript) oldScript.remove();

  const script = document.createElement('script');
  script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
  document.body.appendChild(script);

  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'ru',
      includedLanguages: 'en,es,fr,de,it,pt,ru,zh-CN,ja,ko',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 'google_translate_element');

    const tryToSetLanguage = (attempts = 0) => {
      const select = document.querySelector('.goog-te-combo');
      
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change'));
      } else if (attempts < 10) {
        setTimeout(() => tryToSetLanguage(attempts + 1), 100);
      } else {
        console.error('Не удалось найти элемент перевода');
      }
    };

    tryToSetLanguage();
  };
}
