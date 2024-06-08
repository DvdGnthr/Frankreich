const searchHighlighter = (elem, that) => {
    let el = document.querySelector(elem);
    const searchText = that.value.trim(); // Trimmen Sie die Sucheingabe, um Leerzeichen am Anfang und Ende zu entfernen

    // Alle <mark> Tags im Element entfernen, um die Suche neu zu starten
    el.querySelectorAll('mark').forEach(mark => {
        mark.outerHTML = mark.innerHTML;
    });

    if (searchText !== '') {
        const regex = new RegExp(searchText, 'gi');
        el.innerHTML = el.innerHTML.replace(regex, '<mark class="highlight">$&</mark>');
    }

    return el;
};