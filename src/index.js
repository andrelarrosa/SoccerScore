const puppeteer = require('puppeteer')
const readline = require('readline-sync')

async function resultadoJogo(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const yourTeam = readline.question("Informe o time que você quer obter informações: ")
    const URL = `https://www.google.com/search?sxsrf=ALeKk00vj8B6I_dJfY5UKTzx_lds3cGsHQ%3A1604538696663&ei=SFGjX8mKKJeu5OUPoZ-UYA&q=${yourTeam}`
    await page.goto(URL)
    
    const socreYourTeam = await page.evaluate(()=>{
        var a = document.querySelector(".imso_mh__l-tm-sc.imso_mh__scr-it.imso-light-font").innerHTML;
        return a;
    })

    const scoreOpposingTeam = await page.evaluate(()=>{
        var a = document.querySelector(".imso_mh__r-tm-sc.imso_mh__scr-it.imso-light-font").innerHTML;
        return a;
    })
    const opposingTeam = await page.evaluate(()=>{
        var a = document.querySelector(".imso_mh__second-tn-ed.imso_mh__tnal-cont.imso-tnol div.imso_mh__tm-nm.imso-medium-font.imso_mh__tm-nm-ew div.ellipsisize.liveresults-sports-immersive__team-name-width.kno-fb-ctx span").innerHTML
        return a;
    })
    console.log(`${yourTeam} ${socreYourTeam} x ${scoreOpposingTeam} ${opposingTeam}`)

    await browser.close();
} 

resultadoJogo();