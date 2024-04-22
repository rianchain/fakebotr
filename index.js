const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')

let init = 0;

const botSay = (data) => {
    return [
        "Hallo selamat datang di fakebot. siapa nama kamu?",
        `Hallo ${data?.nama}, berapa usia kamu?`,
        `Ooh ${data?.usia}, hobi kamu apa?`,
        `Ooh sama dong aku juga hobi ${data?.hobi}, btw kamu main ff ga?`,
        `ohhh yaudah ${data?.pacar}, yaudah aku mau nyari yang main ff.`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    }
     else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log(usersData)
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [2000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah nyobain rianbot 😍`
    jawaban.value = "sipppp!!!"
}

function botEnd() {
    window.location.reload()
}