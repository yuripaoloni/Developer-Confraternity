# Developer Confraternity

Developer Confraternity è un social network per sviluppatori, dove quest’ultimi potranno scambiarsi informazioni, condividere opinioni e pensieri, mostrare i loro ultimi lavori e visualizzare i progetti di altri developers. 
Inoltre gli utenti della piattaforma, avranno la possibilità di gestire un loro profilo personale, nel quale potranno inserire, oltre ai dati personali, le loro esperienze lavorative e di formazione.
L'idea alla base di questa piattaforma è quella di consentire agli sviluppatori di connettersi tra loro, favorendo l’interazione, la possibilità di scoprire, mostrare e partecipare a nuovi progetti

L’applicazione mette a disposizione le seguenti funzionalità:
* autenticazione tramite email e password 
* gestione di un profilo personale, dove verranno mostrati i dati personali, le carriere lavorative e di formazione, e le ultime repository   di Github.
* visualizzazione dei profili di altri utenti
* visualizzazione della home con i post degli altri utenti iscritti.
* possibilità di scrivere nuovi post
* possibilità di mettere mi piace e commentare i post altrui.

#### È stato effettuato il deploy dell'applicazione su Heroku accessibile al seguente link: 

https://calm-temple-42429.herokuapp.com/

## Esecuzione in locale

Crea il file `default.json` nella cartella `config` ed inserisci i seguenti dati:

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": ""
}
```

### Installa le dipendenze lato server

```bash
npm install
```

### Installa le dipendenze lato client

```bash
cd client
npm install
```

### Esegui Express & React dalla root

```bash
npm run dev
```

### Build in production

```bash
cd client
npm build
```

## Autori

* **Yuri Paoloni** - [yuripaoloni](https://github.com/yuripaoloni)
* **Matteo Leonesi** - [MatteoLeonesi](https://github.com/MatteoLeonesi)

## Versione

1.0.0

## Licenza

Questo progetto è concesso sotto licenza MIT - guarda il file [LICENSE.md](LICENSE.md) per maggiori dettagli.
