const paraResultT = document.querySelector('.resultTPara')
const paraResultB = document.querySelector('.resultBPara')
const t4Input = document.querySelector('#t4')
const ft4Input = document.querySelector('#ft4')
const tshInput = document.querySelector('#tsh')
const folInput = document.querySelector('#fol')
const b12Input = document.querySelector('#b12')

// CORE MECHANIC V
const getValueObj = () => {
    return {
        species: document.querySelector('input[name="species"]:checked').value,
        t4: t4Input.value,
        ft4: ft4Input.value,
        tsh: tshInput.value,
        fol: folInput.value,
        b12: b12Input.value
    }
}

const validValueObj = (obj) => {
    for (let value in obj) {
        if (obj[value] === '') obj[value] = false
        if ((/\d/).test(obj[value])) obj[value] = parseFloat(obj[value])
    }
}

const checkWhichRules = (obj) => {
    if (obj.t4 || obj.ft4 || obj.tsh) {
        if (obj.species === 'dog') {
            findDogRule(obj)
        } else {
            findCatRule(obj)
        }
    }
    if (obj.b12 || obj.fol) findB12Rule(obj)
}

const findDogRule = (obj) => {
    if (obj.t4 < dogNorms.t4.min && obj.t4 >= 1.4 && obj.tsh < 0.25 && obj.tsh >= dogNorms.tsh.min && !obj.ft4) {
        obj.t4rule = t4DogRules[9]
    } else if (obj.t4 < 0.8 && obj.tsh <= dogNorms.tsh.max && obj.tsh >= dogNorms.tsh.min && !obj.ft4) {
        obj.t4rule = t4DogRules[12]
    } else if (obj.tsh < 0.25 && obj.tsh >= dogNorms.tsh.min && obj.t4 < 1.4 && !obj.ft4) {
        obj.t4rule = t4DogRules[1]
    } else if (obj.tsh < 0.25 && obj.tsh >= dogNorms.tsh.min && obj.t4 < dogNorms.t4.min && obj.ft4 <= dogNorms.ft4.max && obj.ft4 && obj.t4) {
        obj.t4rule = t4DogRules[2]
    } else if (obj.t4 < 0.8 && !obj.tsh && (obj.ft4 < dogNorms.ft4.min || !obj.ft4)) {
        obj.t4rule = t4DogRules[3]
    } else if (obj.t4 && obj.t4 < 0.8 && obj.tsh > dogNorms.tsh.max && (obj.ft4 < dogNorms.ft4.min || !obj.ft4)) {
        obj.t4rule = t4DogRules[4]
    } else if (obj.t4 > 0.8 && obj.t4 < 1.4 && obj.tsh === false && (obj.ft4 <= dogNorms.ft4.max || !obj.ft4)) {
        obj.t4rule = t4DogRules[5]
    } else if (obj.t4 > 0.8 && obj.t4 < 1.4 && obj.tsh > dogNorms.tsh.max && (obj.ft4 <= dogNorms.ft4.max || !obj.ft4)) {
        obj.t4rule = t4DogRules[6]
    } else if  (obj.t4 >= dogNorms.t4.min && obj.t4 <=  dogNorms.t4.max && !obj.tsh && !obj.ft4) {
        obj.t4rule = t4DogRules[7]
    } else if (obj.t4 >= dogNorms.t4.min && obj.t4 <=  dogNorms.t4.max && obj.tsh >= dogNorms.tsh.min && obj.tsh <= dogNorms.tsh.max && !obj.ft4) {
        obj.t4rule = t4DogRules[7]
    } else if (obj.t4 >= dogNorms.t4.min && obj.t4 <=  dogNorms.t4.max && obj.ft4 >= dogNorms.ft4.min && obj.ft4 <= dogNorms.ft4.max && obj.tsh >= dogNorms.tsh.min && obj.tsh <= dogNorms.tsh.max) {
        obj.t4rule = t4DogRules[7]
    }  else if (obj.t4 >= dogNorms.t4.min && obj.t4 <=  dogNorms.t4.max && obj.ft4 >= dogNorms.ft4.min && obj.ft4 <= dogNorms.ft4.max && !obj.tsh) {
        obj.t4rule = t4DogRules[7]
    } else if (obj.t4 < dogNorms.t4.min && obj.t4 >= 1.4 && !obj.tsh) {
        obj.t4rule = t4DogRules[8]
    } else if (obj.t4 >= dogNorms.t4.min && obj.t4 <=  dogNorms.t4.max && obj.tsh > dogNorms.tsh.max && !obj.ft4) {
        obj.t4rule = t4DogRules[10]
    } else if (obj.t4 < 1.4 && obj.tsh <= dogNorms.tsh.max && obj.tsh >= 0.25 && !obj.ft4) {
        obj.t4rule = t4DogRules[11]
    }  else if (obj.t4 > dogNorms.t4.max && !obj.tsh) {
        obj.t4rule = t4DogRules[13]
    } else if (obj.t4 > dogNorms.t4.max && obj.ft4 > dogNorms.ft4.max && obj.tsh < dogNorms.tsh.min) {
        obj.t4rule = t4DogRules[14]
    } else if (!obj.t4 && !obj.tsh && obj.ft4) {
        obj.t4rule = t4DogRules[15]
    } else if (!obj.t4 && obj.tsh && !obj.ft4) {
        obj.t4rule = t4DogRules[16]
    } else if (obj.ft4 >= dogNorms.ft4.min && obj.ft4 < dogNorms.ft4.max - 0.1 && obj.tsh >= dogNorms.tsh.min && obj.tsh <= dogNorms.tsh.max && !obj.t4) {
        obj.t4rule = t4DogRules[17]
    } else if (obj.ft4 < dogNorms.ft4.min && obj.tsh >= dogNorms.tsh.min && obj.tsh <= dogNorms.tsh.max && !obj.t4) {
        obj.t4rule = t4DogRules[18]
    } else if (obj.ft4 <= dogNorms.ft4.max && obj.ft4 >= dogNorms.ft4.max - 0.1 && obj.tsh >= dogNorms.tsh.min && obj.tsh <= dogNorms.tsh.max && !obj.t4) {
        obj.t4rule = t4DogRules[19]
    } else {
        obj.t4rule = 'Konsultacja z hemato!'
    }
}

const findCatRule = (obj) => {
    if (obj.t4 && obj.ft4 && !obj.tsh) {
        if (obj.t4 > 4.0) {
            if (obj.ft4 >= catNorms.ft4.min && obj.ft4 <= catNorms.ft4.max) {
                obj.t4rule = t4CatRules[151]
            } else if (obj.ft4 > catNorms.ft4.max) {
                obj.t4rule = t4CatRules[152]
            }
        } else if (obj.t4 < 3.0 && obj.t4 <= 4.0) {
            if (obj.ft4 > catNorms.ft4.max) {
                obj.t4rule = t4CatRules[153]
            }
        } else if (obj.t4 < 1.0 && obj.t4 <= 3.0) {
            if (obj.ft4 > catNorms.ft4.max) {
                obj.t4rule = t4CatRules[154]
            }
        } else obj.t4rule = 'Bez komentarza / Konsulatacja z hemato'
    } else if (obj.t4 && obj.ft4 && obj.tsh) {
        if (obj.ft4 < catNorms.ft4.min) {
            if (obj.t4 < catNorms.t4.min && obj.tsh <= catNorms.tsh.max) {
                obj.t4rule = t4CatRules[181]
            }
        } else if (obj.t4 > 4.0) {
            if (obj.tsh < 0.03) {
                obj.t4rule = t4CatRules[160]
            }
        } else if (obj.t4 >= 1.0 && obj.t4 <= 2.5) {
            if (obj.tsh > catNorms.tsh.max) {
                obj.t4rule = t4CatRules[164]
            }
        } else if (obj.t4 >= 1 && obj.t4 <= 4) {
            if (obj.tsh < catNorms.tsh.min) {
                obj.t4rule = t4CatRules[161]
            } else if (obj.tsh >= catNorms.tsh.min && obj.tsh <= catNorms.tsh.max) {
                obj.t4rule = t4CatRules[162]
            } else if (obj.tsh > catNorms.tsh.max) {
                obj.t4rule = t4CatRules[163]
            }
        } else if (obj.t4 < 1) {
            if (obj.tsh > catNorms.tsh.max) {
                obj.t4rule = t4CatRules[165]
            } else if (obj.tsh >= catNorms.tsh.min && obj.tsh <= catNorms.tsh.max) {
                obj.t4rule = t4CatRules[166]
            }
        } else obj.t4rule = 'Konsulatacja z hemato!'
    } else if (!obj.t4 && !obj.ft4 && obj.tsh) {
        if (obj.tsh < catNorms.tsh.min) {
            obj.t4rule = t4CatRules[172]
        } else if (obj.tsh >= catNorms.tsh.min && obj.tsh <= catNorms.tsh.max) {
            obj.t4rule = t4CatRules[171]
        } else if (obj.tsh > catNorms.tsh.max) {
            obj.t4rule = t4CatRules[173]
        } else obj.t4rule = 'Konsulatacja z hemato!'
    } else popAlert('Something went wrong!') 
}

const findB12Rule = (obj) => {
    let norm
    obj.species === 'dog' ? norm = dogNorms : norm = catNorms

    if (obj.b12 && !obj.fol) {
        if (obj.b12 < norm.b12.min) {
            obj.b12rule = b12Rules[2]
        } else if (obj.b12 > norm.b12.max) {
            obj.b12rule = b12Rules[3]
        } else {
            obj.b12rule = 'Bez komentarza'
        }
    } else if (!obj.b12 && obj.fol) {
        if (obj.fol < norm.fol.min) {
            obj.b12rule = b12Rules[5]
        } else if (obj.fol > norm.fol.max) {
            obj.b12rule = b12Rules[6]
        } else obj.b12rule = 'Bez komentarza'
    } else if (obj.b12 && obj.fol) {
        if (obj.b12 < norm.b12.min) {
            if (obj.fol < norm.fol.min) {
                obj.b12rule = b12Rules[9]
            } else if (obj.fol >= norm.fol.min && obj.fol <= norm.fol.max) {
                obj.b12rule = b12Rules[2]
            } else if (obj.fol > norm.fol.max) {
                obj.b12rule = b12Rules[7]
            }
        } else if (obj.b12 >= norm.b12.min && obj.b12 <= norm.b12.max) {
            if (obj.fol < norm.fol.min) {
                obj.b12rule = b12Rules[5]
            } else if (obj.fol >= norm.fol.min && obj.fol <= norm.fol.max) {
                obj.b12rule = b12Rules[1]
            } else if (obj.fol > norm.fol.max) {
                obj.b12rule = b12Rules[6]
            }
         } else if (obj.b12 > norm.b12.max) {
            if (obj.fol < norm.fol.min) {
                obj.b12rule = b12Rules[8]
            } else if (obj.fol >= norm.fol.min && obj.fol <= norm.fol.max) {
                obj.b12rule = b12Rules[3]
            } else if (obj.fol > norm.fol.max) {
                obj.b12rule = b12Rules[4]
            }
        }
    } else popAlert('Something went wrong!')
}

const popAlert = (textToAlert) => {
    const div = document.querySelector('#copybox')
    div.textContent = textToAlert
    div.className = 'copyAlert'
    setTimeout(() => div.className = 'copyAlertHide' , 1500);
}

const copyButtonListener = (button, elementToCopy) => {
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(elementToCopy)
        .then(() => popAlert('Copied!'))
        .catch(()=> popAlert('Something went wrong!'))
    })
}
const renderRules = (obj) => {
    const copyButtonT = document.querySelector('.copyBtnT')
    const copyButtonB = document.querySelector('.copyBtnB')
    
    if (obj.t4rule) {
        paraResultT.innerHTML = obj.t4rule.replaceAll('\n', '<br>')
        copyButtonListener(copyButtonT, obj.t4rule)

    }
    if (obj.b12rule) {
        paraResultB.innerHTML = obj.b12rule.replaceAll('\n', '<br>')
        copyButtonListener(copyButtonB, obj.b12rule)
    }
}

document.querySelector('#submit').addEventListener('click', (e) => {
    let x = getValueObj()
    validValueObj(x)
    checkWhichRules(x)
    console.log(x);
    renderRules(x)
    popAlert('Success!')
    e.preventDefault()  
})
// CORE MECHANIC ^

// RESET VALUES
const resetValues = () => {
    t4Input.value = ''
    ft4Input.value = ''
    tshInput.value = ''
    folInput.value = ''
    b12Input.value = ''
    paraResultT.textContent = ''
    paraResultB.textContent = ''
    popAlert('Reset values!')
}
document.querySelector('#reset').addEventListener('click', resetValues)

// NORM RENDER
const normsParagraphs = document.querySelectorAll('.norm')
const radioSpeciesButton = document.querySelectorAll('input[name="species"]')

const renderNorms = (e) => {
    if (e.currentTarget.value === 'dog') {
        normsParagraphs[0].textContent = `${dogNorms.t4.min} - ${dogNorms.t4.max}`
        normsParagraphs[1].textContent = `${dogNorms.ft4.min} - ${dogNorms.ft4.max}`
        normsParagraphs[2].textContent = `${dogNorms.tsh.min} - ${dogNorms.tsh.max}`
        normsParagraphs[3].textContent = `${dogNorms.b12.min} - ${dogNorms.b12.max}`
        normsParagraphs[4].textContent = `${dogNorms.fol.min} - ${dogNorms.fol.max}`
    } else if (e.currentTarget.value === 'cat') {
        normsParagraphs[0].textContent = `${catNorms.t4.min} - ${catNorms.t4.max}`
        normsParagraphs[1].textContent = `${catNorms.ft4.min} - ${catNorms.ft4.max}`
        normsParagraphs[2].textContent = `${catNorms.tsh.min} - ${catNorms.tsh.max}`
        normsParagraphs[3].textContent = `${catNorms.b12.min} - ${catNorms.b12.max}`
        normsParagraphs[4].textContent = `${catNorms.fol.min} - ${catNorms.fol.max}`
    } else {
        popAlert('Something went wrong!')
    }
    
}
radioSpeciesButton.forEach(radioButton => {
    radioButton.addEventListener('click', renderNorms)
})
